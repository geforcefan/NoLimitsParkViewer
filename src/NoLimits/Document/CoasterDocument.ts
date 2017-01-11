/// <reference path="../Chunks/Coaster/Coaster.ts"/>
/// <reference path="../Chunks/Coaster/Track/Track.ts"/>
/// <reference path="../Chunks/Coaster/Track/CustomTrack.ts"/>
/// <reference path="CustomTrackDocument.ts"/>

namespace NLParkViewer.NoLimits.Document {
    import TrackType = NoLimits.Chunks.Coaster.Track.TrackType;
    import MathUtils = Maths.MathUtils;
    import CustomTrack = NLParkViewer.NoLimits.Chunks.Coaster.Track.CustomTrack;

    import Vertex = NLParkViewer.NoLimits.Chunks.Coaster.Track.Vertex;
    import RollPoint = NLParkViewer.NoLimits.Chunks.Coaster.Track.RollPoint;

    export class CoasterDocument extends EventDispatcher {
        private coaster: Chunks.Coaster.Coaster = null;
        private trackDocuments: Array<CustomTrackDocument> = [];

        private numberOfTracks : number = 0;

        constructor(coaster: Chunks.Coaster.Coaster) {
            super();
            this.coaster = coaster;
        }

        public open() {
            let customTrackWorker : Worker = new Worker("js/NoLimitsParkViewer.customTrack.worker.js");
            let finishedTracks: number = 0;

            let startTime : any = new Date();
            let firstTime : any = new Date();

            let processCoasterFromWorker : EventListener = (e: any) => {
                console.log("Received interpolated track from worker ( took " + ( <any>(new Date()) - startTime)  + "ms after sending the track to worker )");
                finishedTracks++;

                let data : Float64Array = new Float64Array(e.data);

                var dataPos = 0;

                let totalLength : number = data[0];
                let numNodes : number = data[1];

                dataPos += 2;

                let nodes : Array<TrackNode> = new Array(numNodes);
                let nodesLen : Array<number> = new Array(numNodes);

                startTime = new Date();
                console.log("Parsing received interpolated track from worker");

                for(let i = 0; i < numNodes; i++) {
                    let trackNode : TrackNode = new TrackNode();

                    trackNode.pos[0] = data[dataPos + ((i * 25) + 0)];
                    trackNode.pos[1] = data[dataPos + ((i * 25) + 1)];
                    trackNode.pos[2] = data[dataPos + ((i * 25) + 2)];

                    trackNode.angle[0] = data[dataPos + ((i * 25) + 3)];
                    trackNode.angle[1] = data[dataPos + ((i * 25) + 4)];
                    trackNode.angle[2] = data[dataPos + ((i * 25) + 5)];

                    trackNode.mat[0] = data[dataPos + ((i * 25) + 6)];
                    trackNode.mat[1] = data[dataPos + ((i * 25) + 7)];
                    trackNode.mat[2] = data[dataPos + ((i * 25) + 8)];
                    trackNode.mat[3] = data[dataPos + ((i * 25) + 9)];

                    trackNode.mat[4] = data[dataPos + ((i * 25) + 10)];
                    trackNode.mat[5] = data[dataPos + ((i * 25) + 11)];
                    trackNode.mat[6] = data[dataPos + ((i * 25) + 12)];
                    trackNode.mat[7] = data[dataPos + ((i * 25) + 13)];

                    trackNode.mat[8] = data[dataPos + ((i * 25) + 14)];
                    trackNode.mat[9] = data[dataPos + ((i * 25) + 15)];
                    trackNode.mat[10] = data[dataPos + ((i * 25) + 16)];
                    trackNode.mat[11] = data[dataPos + ((i * 25) + 17)];

                    trackNode.mat[12] = data[dataPos + ((i * 25) + 18)];
                    trackNode.mat[13] = data[dataPos + ((i * 25) + 19)];
                    trackNode.mat[14] = data[dataPos + ((i * 25) + 20)];
                    trackNode.mat[15] = data[dataPos + ((i * 25) + 21)];

                    trackNode.dist = data[dataPos + ((i * 25) + 22)];
                    trackNode.roll = data[dataPos + ((i * 25) + 23)];

                    nodes[i] = trackNode;
                    nodesLen[i] = data[dataPos + ((i * 25) + 24)];
                }

                dataPos += numNodes * 25;

                let numberSegmentLengths : number = data[dataPos];
                let segmentLengths : Array<number> = new Array(numberSegmentLengths);

                dataPos++;

                for(let i = 0; i < numberSegmentLengths; i++) {
                    segmentLengths[i] = data[dataPos + i];
                }

                dataPos += numberSegmentLengths;

                let i = data[dataPos + 0];

                console.log("Successfully parsed received interpolated track (#" + i +") from worker ( " + (<any>(new Date()) - startTime)  + "ms )");

                let track: CustomTrackDocument = new CustomTrackDocument();

                track.initFromWorker({
                    nodes: nodes,
                    nodesLen: nodesLen,
                    totalLength: totalLength,
                    segmentLengths: segmentLengths
                });
                track.setTrack(<CustomTrack>this.coaster.getTracks()[i], false);

                this.trackDocuments[i] = track;

                if (finishedTracks >= this.numberOfTracks) {
                    console.log("Finished coaster interpolation of all tracks ( " + (<any>(new Date()) - firstTime)  + "ms )");

                    this.dispatchEvent(new Event("finished", null));
                    customTrackWorker.removeEventListener("message", processCoasterFromWorker);
                    customTrackWorker.terminate();
                }
            };

            customTrackWorker.addEventListener("message", processCoasterFromWorker);

            for (let i = 0; i < this.coaster.getTracks().length; i++) {
                if (this.coaster.getTracks()[i].getTrackType() == TrackType.Custom) {
                    this.numberOfTracks++;

                    let cTrack: CustomTrack = <CustomTrack>this.coaster.getTracks()[i];

                    let vertices : Array<Vertex> = cTrack.getVertices();
                    let rollPoints : Array<RollPoint> = cTrack.getRollPoints();
                    let firstRollPoint : RollPoint = cTrack.getFirstRollPoint();
                    let lastRollPoint : RollPoint = cTrack.getLastRollPoint();

                    let dataPos : number = 0;
                    let dataArray : Float64Array = new Float64Array(2 + (vertices.length * 6) + (rollPoints.length * 4) + 9);

                    dataArray[dataPos + 0] = vertices.length;
                    dataArray[dataPos + 1] = rollPoints.length;

                    dataPos += 2;

                    for(let i=0; i < vertices.length; i++) {
                        dataArray[dataPos + 0] = vertices[i].position[0];
                        dataArray[dataPos + 1] = vertices[i].position[1];
                        dataArray[dataPos + 2] = vertices[i].position[2];
                        dataArray[dataPos + 3] = vertices[i].position[3];
                        dataArray[dataPos + 4] = vertices[i].locked ? 1 : 0;
                        dataArray[dataPos + 5] = vertices[i].strict ? 1 : 0;

                        dataPos += 6;
                    }

                    for(let i=0; i < rollPoints.length; i++) {
                        dataArray[dataPos + 0] = rollPoints[i].getPosition();
                        dataArray[dataPos + 1] = rollPoints[i].getRoll();
                        dataArray[dataPos + 2] = rollPoints[i].getVertical() ? 1 : 0;
                        dataArray[dataPos + 3] = rollPoints[i].isStrict() ? 1 : 0;

                        dataPos += 4;
                    }

                    dataArray[dataPos + 0] = firstRollPoint.getPosition();
                    dataArray[dataPos + 1] = firstRollPoint.getRoll();
                    dataArray[dataPos + 2] = firstRollPoint.getVertical() ? 1 : 0;
                    dataArray[dataPos + 3] = firstRollPoint.isStrict() ? 1 : 0;

                    dataPos += 4;

                    dataArray[dataPos + 0] = lastRollPoint.getPosition();
                    dataArray[dataPos + 1] = lastRollPoint.getRoll();
                    dataArray[dataPos + 2] = lastRollPoint.getVertical() ? 1 : 0;
                    dataArray[dataPos + 3] = lastRollPoint.isStrict() ? 1 : 0;

                    dataPos += 4;

                    dataArray[dataPos + 0] = i;

                    customTrackWorker.postMessage(dataArray.buffer, [dataArray.buffer]);
                }
            }

            if(!this.numberOfTracks) {
                this.dispatchEvent(new Event("finished", null));
            }
        }

        public getTrackDocuments(): Array<CustomTrackDocument> {
            return this.trackDocuments;
        }

        public getRawCoasterData(): Chunks.Coaster.Coaster {
            return this.coaster;
        }
    }
}