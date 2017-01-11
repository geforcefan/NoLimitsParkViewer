/// <reference path="../Document/CoasterDocument.ts" />
/// <reference path="../Document/CustomTrackDocument.ts" />
/// <reference path="../Chunks/Coaster/Support/Support.ts" />
/// <reference path="../Chunks/Coaster/Support/FreeNode.ts" />
/// <reference path="../Chunks/Coaster/Support/Footer.ts" />
/// <reference path="../Chunks/Coaster/Support/Beam.ts" />
/// <reference path="../Chunks/Coaster/Support/BeamNode.ts" />
/// <reference path="../Chunks/Coaster/Support/RailNode.ts" />

namespace NLParkViewer.NoLimits.Helper {
    import CoasterDocument = NLParkViewer.NoLimits.Document.CoasterDocument;
    import Support = NLParkViewer.NoLimits.Chunks.Coaster.Support.Support;
    import FreeNode = NLParkViewer.NoLimits.Chunks.Coaster.Support.FreeNode;
    import Footer = NLParkViewer.NoLimits.Chunks.Coaster.Support.Footer;
    import Beam = NLParkViewer.NoLimits.Chunks.Coaster.Support.Beam;
    import BeamConnection = NLParkViewer.NoLimits.Chunks.Coaster.Support.BeamConnection;
    import BeamConnectionType = NLParkViewer.NoLimits.Chunks.Coaster.Support.BeamConnectionType;
    import BeamNode = NLParkViewer.NoLimits.Chunks.Coaster.Support.BeamNode;
    import RailNode = NLParkViewer.NoLimits.Chunks.Coaster.Support.RailNode;
    import CustomTrack = NLParkViewer.NoLimits.Chunks.Coaster.Track.CustomTrack;
    import Segment = NLParkViewer.NoLimits.Chunks.Coaster.Track.Segment.Segment;
    import Separator = NLParkViewer.NoLimits.Chunks.Coaster.Track.Separator;
    import BinarySearch = NLParkViewer.Core.BinarySearch;
    import TrackStyle = NLParkViewer.Renderer.TrackStyles.TrackStyle;
    import CustomTrackDocument = NLParkViewer.NoLimits.Document.CustomTrackDocument;

    export class SupportHelper {
        private coasterDocument : CoasterDocument;
        private supports : Support;

        private freeNodes : Array<FreeNode>;
        private footerNodes : Array<Footer>;
        private railNodes : Array<RailNode>;
        private beams : Array<Beam>;

        // This might be strange for you, but the structure is:
        // [trackIndex][railConnectorIndex][nodeIndex]
        private calculatedRailConnectors : Array<any> = [];
        private originRailConnectors : Array<any> = [];

        constructor(coasterDocument : CoasterDocument) {
            this.coasterDocument = coasterDocument;
            this.supports = this.coasterDocument.getRawCoasterData().getSupports();
            this.freeNodes = this.supports.getFreeNodes();
            this.footerNodes = this.supports.getFooters();
            this.railNodes = this.supports.getRailNodes();
            this.beams = this.supports.getBeams();

            this.calculateRailConnectors();
        }

        public calculateRailConnectors() {
            let trackStyle : TrackStyle = TrackStyle.getTrackStyleInstance(this.coasterDocument.getRawCoasterData().getStyle().getStyleType());

            this.calculatedRailConnectors = new Array(this.coasterDocument.getTrackDocuments().length);
            this.originRailConnectors = new Array(this.coasterDocument.getTrackDocuments().length);

            for(let k = 0; k < this.coasterDocument.getTrackDocuments().length; k++) {
                let trackDocument: CustomTrackDocument = this.coasterDocument.getTrackDocuments()[k];
                let rawTrack: CustomTrack = trackDocument.getRawTrack();

                let segments: Array<Segment> = [];
                let separators: Array<Separator> = rawTrack.getSeparators();
                let railNodes: Array<RailNode> = rawTrack.getRailNodes();

                let positions: Array<number> = [];

                segments.push(rawTrack.getSegment());
                positions.push(0);

                separators.sort((a: Separator, b: Separator) => {
                    return a.getPosition() > b.getPosition() ? 1 : -1;
                });

                for (let i = 0; i < separators.length; i++) {
                    segments.push(separators[i].getSegment());
                    positions.push(separators[i].getPosition());
                }

                positions.push(rawTrack.getVertices().length - 1);

                this.calculatedRailConnectors[k] = new Array(railNodes.length);
                this.originRailConnectors[k] = new Array(railNodes.length);

                for(let i = 0; i < railNodes.length; i++) {
                    let railNode : RailNode = railNodes[i];
                    let positionIndex = Math.min(Math.max(0, BinarySearch.lowerBound(positions, railNode.getPosition()) - 1), segments.length - 1);
                    let spineType = trackStyle.getSpineType(segments[positionIndex].getSpineType());
                    let mat : mat4 = trackDocument.getMatrixAtDistance(trackDocument.getDistanceOnParameter(railNode.getPosition()));

                    let nodes : Array<vec3> = spineType.getRailConnectorNodes(railNode.getConnectionStyle(), mat);

                    this.originRailConnectors[k][i] = vec3.fromValues(mat[12], mat[13], mat[14]);

                    if(nodes == null) {
                        this.calculatedRailConnectors[k][i] = [this.originRailConnectors[k][i]];
                    } else {
                        this.calculatedRailConnectors[k][i] = nodes;
                    }
                }
            }
        }

        public getFreeNodePos(at : number) : vec3 {
            return this.freeNodes[at].getPosition();
        }

        public getFooterNodePos(at : number) : vec3 {
            let position : vec3 = vec3.clone(this.footerNodes[at].getPosition());
            //position[1] += this.footerNodes[at].getAboveGround(); // NL2 saves PARK with correct y value ?!

            return position;
        }

        public getAllFreeNodes() : Array<vec3> {
            let freeNodes : Array<vec3> = [];

            for(let i = 0; i < this.freeNodes.length; i++) {
                freeNodes.push(this.getFreeNodePos(i));
            }

            return freeNodes;
        }

        public getAllFooterNodes() : Array<vec3> {
            let footerNodes : Array<vec3> = [];

            for(let i = 0; i < this.footerNodes.length; i++) {
                footerNodes.push(this.getFooterNodePos(i));
            }

            return footerNodes;
        }

        public getBeamNodePos(atBeam : number, at : number) : vec3 {
            let beamNode : BeamNode = this.beams[atBeam].getBeamNodes()[at];
            let beam : Array<vec3> = this.getBeam(atBeam);

            return vec3.lerp(vec3.create(), beam[0], beam[1], beamNode.getPosition());
        }

        public getRailConnectorPos(atCoaster : number, atRailConnector : number, at : number) : vec3 {
            if(this.calculatedRailConnectors[atCoaster] !== null &&
                this.calculatedRailConnectors[atCoaster][atRailConnector] !== null &&
                this.calculatedRailConnectors[atCoaster][atRailConnector][at] !== null &&
                at != -1
            ) {
                return this.calculatedRailConnectors[atCoaster][atRailConnector][at];
            } else {
                // falback
                let railConnectorNode: RailNode = this.railNodes[atRailConnector];
                let trackDocument: CustomTrackDocument = this.coasterDocument.getTrackDocuments()[atCoaster];

                let mat: mat4 = trackDocument.getMatrixAtDistance(trackDocument.getDistanceOnParameter(railConnectorNode.getPosition()));
                return vec3.fromValues(mat[12], mat[13], mat[14]);
            }
        }

        public getAllBeamNodes(flangesOnly : boolean = false) : Array<vec3> {
            let beamNodes : Array<vec3> = [];

            for(let i = 0; i < this.beams.length; i++) {
                for(let j = 0; j < this.beams[i].getBeamNodes().length; j++) {
                    if((flangesOnly && this.beams[i].getBeamNodes()[j].isFlange()) || !flangesOnly)
                        beamNodes.push(this.getBeamNodePos(i, j));
                }
            }

            return beamNodes;
        }

        public getPositionOfConnection(connection : BeamConnection) : vec3 {
            switch(connection.getType()) {
                case BeamConnectionType.FreeNode:
                    return this.getFreeNodePos(connection.getIndex());
                case BeamConnectionType.Footer:
                    return this.getFooterNodePos(connection.getIndex());
                case BeamConnectionType.BeamNode:
                    return this.getBeamNodePos(connection.getIndex(), connection.getIndexOnBeam());
                case BeamConnectionType.RailConnector:
                    return this.getRailConnectorPos(connection.getIndex(), connection.getIndexOnBeam(), connection.getIndexOnRailConnector());
            }

            return null;
        }

        public getBeam(at : number) : Array<vec3> {
            let beam : Beam = this.beams[at];
            let pos1 : vec3 = this.getPositionOfConnection(beam.getConnection1());
            let pos2 : vec3 = this.getPositionOfConnection(beam.getConnection2());

            return [pos1, pos2];
        }

        public getAllBeams() : Array<Array<vec3>> {
            let result : Array<Array<vec3>> = [];

            for(let i = 0; i < this.beams.length; i++) {
                let beamPos : Array<vec3> = this.getBeam(i);

                if(beamPos[0] === null || beamPos[1] === null)
                    continue;

                result.push(beamPos);
            }

            return result;
        }

        public getAllRailConnectorNodes() : Array<Array<vec3>> {
            let railConnectorNodes : Array<Array<vec3>> = [];

            for(let i = 0; i < this.calculatedRailConnectors.length; i++) {
                for(let j = 0; j < this.calculatedRailConnectors[i].length; j++) {
                    railConnectorNodes.push([this.originRailConnectors[i][j]]);
                    for(let k=0; k < this.calculatedRailConnectors[i][j].length; k++) {
                        railConnectorNodes[railConnectorNodes.length - 1].push(this.calculatedRailConnectors[i][j][k]);
                    }
                }
            }

            return railConnectorNodes;
        }
    }
}