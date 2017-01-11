/// <reference path="../../Camera/Camera.ts" />
/// <reference path="../../VertexTypes/FloorVertices.ts" />
/// <reference path="../../Shader/FloorShader.ts" />
/// <reference path="../../NoLimits/Document/CustomTrackDocument.ts" />
/// <reference path="./TrackStyles/TrackStyle.ts" />

namespace NLParkViewer.Renderer {
    import CustomTrackDocument = NLParkViewer.NoLimits.Document.CustomTrackDocument;
    import TrackNode = NLParkViewer.NoLimits.Document.TrackNode;
    import VertexObject = NLParkViewer.Core.VertexObject;
    import FloorVertices = NLParkViewer.VertexTypes.FloorVertices;
    import FloorShader = NLParkViewer.Shader.FloorShader;
    import ShaderProgram = NLParkViewer.Core.ShaderProgram;
    import MathUtils = NLParkViewer.Maths.MathUtils;

    import CustomTrack = NLParkViewer.NoLimits.Chunks.Coaster.Track.CustomTrack;

    import Segment = NLParkViewer.NoLimits.Chunks.Coaster.Track.Segment.Segment;
    import Separator = NLParkViewer.NoLimits.Chunks.Coaster.Track.Separator;

    import TrackStyle = NLParkViewer.Renderer.TrackStyles.TrackStyle;
    import SpineType = NLParkViewer.Renderer.TrackStyles.SpineType;

    export class CustomTrackRenderer extends VertexObject<FloorVertices> {
        private trackDocument : CustomTrackDocument;
        private shader : ShaderProgram = null;
        private trackStyle : TrackStyle = null;

        constructor(gl: WebGLRenderingContext, trackDocument : CustomTrackDocument, trackStyle : TrackStyle) {
            super(gl, new FloorVertices());

            this.trackDocument = trackDocument;
            this.shader = new ShaderProgram(gl, new FloorShader());
            this.trackStyle = trackStyle;

            if(!trackDocument.getNumberOfNodes())
                return;

            this.buildWireFrameTrack();
            this.finalizeData();
        }

        private buildWireFrameTrack() {
            let rawTrack : CustomTrack = this.trackDocument.getRawTrack();
            let segments : Array<Segment> = [];
            let separators : Array<Separator> = rawTrack.getSeparators();

            let positions : Array<number> = [];

            let currentIndex : number = 0;
            let segIndex : number = 0;

            segments.push(rawTrack.getSegment());
            positions.push(0);

            separators.sort((a: Separator, b: Separator) => {
                return a.getPosition() > b.getPosition() ? 1 : -1;
            });

            for(let i = 0; i < separators.length; i++) {
                segments.push(separators[i].getSegment());
                positions.push(separators[i].getPosition());
            }

            positions.push(rawTrack.getVertices().length - 1);

            for(let i = 0; i < segments.length; i++) {
                segIndex = 0;

                let currentPosition = this.trackDocument.getDistanceOnParameter(positions[i]);
                let nextPosition = this.trackDocument.getDistanceOnParameter(positions[i + 1]);
                let segmentLength = nextPosition - currentPosition;

                let spineType : SpineType = this.trackStyle.getSpineType(segments[i].getSpineType());

                if(spineType === null)
                    continue;

                // rails
                let numRailNodes = Math.floor(segmentLength / spineType.wireframeRailSpacing);
                for(let j = 0; j < numRailNodes; j++) {
                    let dist: number = currentPosition + ((j / (numRailNodes - 1)) * segmentLength);
                    let nodeMatrix : mat4 = this.trackDocument.getMatrixAtDistance(dist);

                    for(let k = 0; k < spineType.wireframeRails.length; k++) {
                        let pos : vec4 = MathUtils.multiplyMat4Vec4(nodeMatrix, spineType.wireframeRails[k]);
                        pos[3] = 1;

                        this.vertices.setVertex(
                            pos,
                            vec4.fromValues(0.0, 0.5, 0.55, 1.0)
                        );

                        if (segIndex > 0) {
                            this.indices.push((currentIndex - spineType.wireframeRails.length) + k);
                            this.indices.push((currentIndex + k));
                        }
                    }
                    currentIndex += spineType.wireframeRails.length;
                    segIndex += spineType.wireframeRails.length;
                }

                // ties
                let numCrosstieNodes = Math.floor(segmentLength / spineType.wireframeCrosstiesSpacing);
                for(let j = 0; j < numCrosstieNodes; j++) {
                    let dist: number = currentPosition + ((j / (numCrosstieNodes - 1)) * segmentLength);
                    let nodeMatrix : mat4 = this.trackDocument.getMatrixAtDistance(dist);

                    for(let k = 0; k < spineType.wireframeCrossties.length; k++) {
                        let pos : vec4 = MathUtils.multiplyMat4Vec4(nodeMatrix, spineType.wireframeCrossties[k]);
                        pos[3] = 1;

                        this.vertices.setVertex(
                            pos,
                            vec4.fromValues(0.0, 0.5, 0.55, 1.0)
                        );

                        if(k < spineType.wireframeCrossties.length - 1) {
                            this.indices.push(currentIndex + k);
                            this.indices.push(currentIndex + k + 1);
                        }
                    }

                    currentIndex += spineType.wireframeCrossties.length;
                    segIndex += spineType.wireframeCrossties.length;
                }
            }
        }

        public render(cam : Camera.Camera) : void {
            if(!this.isFinalized)
                return;

            this.shader.use();
            this.shader.uniformMat4("projectionMatrix", cam.projectionMatrix);
            this.shader.uniformMat4("modelMatrix", cam.modelMatrix);

            this.glExt.bindVertexArrayOES(this.vertexArrayID);
            this.gl.enableVertexAttribArray(0);
            this.gl.enableVertexAttribArray(1);

            this.gl.lineWidth(2.0);
            this.gl.drawElements(this.gl.LINES, this.indices.length, this.gl.UNSIGNED_INT, 0);

            this.gl.disableVertexAttribArray(1);
            this.gl.disableVertexAttribArray(0);
        }
    }
}