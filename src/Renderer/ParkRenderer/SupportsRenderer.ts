/// <reference path="../../Camera/Camera.ts" />
/// <reference path="../../VertexTypes/NodeVertices.ts" />
/// <reference path="../../VertexTypes/FloorVertices.ts" />
/// <reference path="../../Shader/NodeShader.ts" />
/// <reference path="../../Shader/FloorShader.ts" />
/// <reference path="../../NoLimits/Document/CoasterDocument.ts" />
/// <reference path="../../NoLimits/Helper/SupportHelper.ts" />

namespace NLParkViewer.Renderer {
    import VertexObject = NLParkViewer.Core.VertexObject;
    import ShaderProgram = NLParkViewer.Core.ShaderProgram;
    import FloorVertices = NLParkViewer.VertexTypes.FloorVertices;
    import CoasterDocument = NLParkViewer.NoLimits.Document.CoasterDocument;
    import NodeShader = NLParkViewer.Shader.NodeShader;
    import NodeVertices = NLParkViewer.VertexTypes.NodeVertices;
    import BeamConnectionType = NLParkViewer.NoLimits.Chunks.Coaster.Support.BeamConnectionType;
    import SupportHelper = NLParkViewer.NoLimits.Helper.SupportHelper;
    import FloorShader = NLParkViewer.Shader.FloorShader;

    export class SupportsRenderer extends VertexObject<FloorVertices> {
        private nodeShader : ShaderProgram;
        private beamShader : ShaderProgram;

        private freeNodesRenderer : NodeRenderer;
        private footerNodesRenderer : NodeRenderer;
        private beamNodesRenderer : NodeRenderer;
        private railConnectorNodesRenderer : NodeRenderer;

        private supportHelper : SupportHelper;

        constructor(gl: WebGLRenderingContext, coasterDocument : CoasterDocument) {
            super(gl, new FloorVertices());

            this.gl = gl;
            this.supportHelper = new SupportHelper(coasterDocument);
            this.nodeShader = new ShaderProgram(gl, new NodeShader());
            this.beamShader = new ShaderProgram(gl, new FloorShader());

            this.freeNodesRenderer = new NodeRenderer(this.gl, BeamConnectionType.FreeNode);
            this.footerNodesRenderer = new NodeRenderer(this.gl, BeamConnectionType.Footer);
            this.beamNodesRenderer = new NodeRenderer(this.gl, BeamConnectionType.BeamNode);
            this.railConnectorNodesRenderer = new NodeRenderer(this.gl, BeamConnectionType.RailConnector);

            this.fillFreeNodes();
            this.fillFooterNodes();
            this.fillBeamNodes();
            this.fillRailConnectorNodes();
            this.fillBeams();
        }

        private fillBeams() {
            let beams : Array<Array<vec3>> = this.supportHelper.getAllBeams();

            for(let i = 0; i < beams.length; i++) {
                this.vertices.setVertex(vec4.fromValues(beams[i][0][0], beams[i][0][1], beams[i][0][2], 1), vec4.fromValues(0.5, 0.0, 0.0, 1));
                this.vertices.setVertex(vec4.fromValues(beams[i][1][0], beams[i][1][1], beams[i][1][2], 1), vec4.fromValues(0.5, 0.0, 0.0, 1));
                this.indices.push(this.vertices.numVertices - 2);
                this.indices.push(this.vertices.numVertices - 1);
            }

            this.finalizeData();
        }

        private fillRailConnectorNodes() {
            let railConnectorNodes : Array<Array<vec3>> = this.supportHelper.getAllRailConnectorNodes();
            for(let i = 0; i < railConnectorNodes.length; i++) {
                for(let j = 0; j < railConnectorNodes[i].length; j++) {
                    this.railConnectorNodesRenderer.addNode(railConnectorNodes[i][j]);

                    this.vertices.setVertex(vec4.fromValues(railConnectorNodes[i][0][0], railConnectorNodes[i][0][1], railConnectorNodes[i][0][2], 1), vec4.fromValues(0.5, 0.0, 0.0, 1));
                    this.vertices.setVertex(vec4.fromValues(railConnectorNodes[i][j][0], railConnectorNodes[i][j][1], railConnectorNodes[i][j][2], 1), vec4.fromValues(0.5, 0.0, 0.0, 1));
                    this.indices.push(this.vertices.numVertices - 2);
                    this.indices.push(this.vertices.numVertices - 1);
                }
            }
            this.railConnectorNodesRenderer.finalizeData();
        }

        private fillFreeNodes() {
            let freeNodes : Array<vec3> = this.supportHelper.getAllFreeNodes();
            for(let i = 0; i < freeNodes.length; i++) {
                this.freeNodesRenderer.addNode(freeNodes[i]);
            }
            this.freeNodesRenderer.finalizeData();
        }

        private fillBeamNodes() {
            let beamNodes : Array<vec3> = this.supportHelper.getAllBeamNodes();
            for(let i = 0; i < beamNodes.length; i++) {
                this.beamNodesRenderer.addNode(beamNodes[i]);
            }
            this.beamNodesRenderer.finalizeData();
        }

        private fillFooterNodes() {
            let footerNodes : Array<vec3> = this.supportHelper.getAllFooterNodes();
            for(let i = 0; i < footerNodes.length; i++) {
                this.footerNodesRenderer.addNode(footerNodes[i]);
            }
            this.footerNodesRenderer.finalizeData();
        }

        public render(cam : Camera.Camera) : void {
            this.beamShader.use();
            this.beamShader.uniformMat4("projectionMatrix", cam.projectionMatrix);
            this.beamShader.uniformMat4("modelMatrix", cam.modelMatrix);

            this.glExt.bindVertexArrayOES(this.vertexArrayID);
            this.gl.enableVertexAttribArray(0);
            this.gl.enableVertexAttribArray(1);

            this.gl.lineWidth(2.0);
            this.gl.drawElements(this.gl.LINES, this.indices.length, this.gl.UNSIGNED_INT, 0);

            this.gl.disableVertexAttribArray(1);
            this.gl.disableVertexAttribArray(0);

            this.nodeShader.use();
            this.nodeShader.uniformMat4("projectionMatrix", cam.projectionMatrix);
            this.nodeShader.uniformMat4("modelMatrix", cam.modelMatrix);

            this.freeNodesRenderer.render(cam, this.nodeShader);
            this.footerNodesRenderer.render(cam, this.nodeShader);
            this.beamNodesRenderer.render(cam, this.nodeShader);
            this.railConnectorNodesRenderer.render(cam, this.nodeShader);
        }
    }

    class NodeRenderer extends VertexObject<NodeVertices> {
        private latBands : number = 12;
        private longBands : number = 12;
        private radius : number = 0.04;

        private spherePositions : Array<vec4> = [];
        private sphereNormals : Array<vec4> = [];
        private sphereTexCoordinates : Array<vec2> = [];
        private sphereIndices: Array<number> = [];

        private connectionType : BeamConnectionType;

        constructor(gl: WebGLRenderingContext, connectionType : BeamConnectionType) {
            super(gl, new NodeVertices());

            this.initSphere();
            this.connectionType = connectionType;
        }

        private initSphere() {
            for (let latNumber = 0; latNumber <= this.latBands; latNumber++) {
                let theta = latNumber * Math.PI / this.latBands;

                let sinTheta = Math.sin(theta);
                let cosTheta = Math.cos(theta);

                for (let longNumber = 0; longNumber <= this.longBands; longNumber++) {
                    let phi = longNumber * 2 * Math.PI / this.longBands;
                    let sinPhi = Math.sin(phi);
                    let cosPhi = Math.cos(phi);

                    let x = cosPhi * sinTheta;
                    let y = cosTheta;
                    let z = sinPhi * sinTheta;
                    let u = 1 - (longNumber / this.longBands);
                    let v = 1 - (latNumber / this.latBands);

                    this.spherePositions.push(vec4.fromValues(this.radius * x, this.radius * y, this.radius * z, 1));
                    this.sphereNormals.push(vec4.fromValues(x, y, z, 1));
                    this.sphereTexCoordinates.push(vec2.fromValues(u, v));

                    if(latNumber < this.latBands && longNumber < this.longBands) {
                        var first = (latNumber * (this.longBands + 1)) + longNumber;
                        var second = first + this.latBands + 1;

                        this.sphereIndices.push(first);
                        this.sphereIndices.push(second);
                        this.sphereIndices.push(first + 1);

                        this.sphereIndices.push(second);
                        this.sphereIndices.push(second + 1);
                        this.sphereIndices.push(first + 1);
                    }
                }
            }
        }

        public addNode(pos : vec3) {
            let numVertices = this.vertices.numVertices;

            for(let i = 0; i < this.spherePositions.length; i++) {
                this.vertices.setVertex(
                    vec4.fromValues(
                        this.spherePositions[i][0] + pos[0],
                        this.spherePositions[i][1] + pos[1],
                        this.spherePositions[i][2] + pos[2],
                        1
                    ),
                    this.sphereNormals[i],
                    this.sphereTexCoordinates[i]
                );
            }
            for(let i = 0; i < this.sphereIndices.length; i++) {
                this.indices.push(this.sphereIndices[i] + numVertices);
            }
        }

        public render(cam : Camera.Camera, shader : ShaderProgram): void {
            shader.uniformNumber("connectionType", this.connectionType);

            this.glExt.bindVertexArrayOES(this.vertexArrayID);
            this.gl.enableVertexAttribArray(0);
            this.gl.enableVertexAttribArray(1);
            this.gl.enableVertexAttribArray(2);

            this.gl.drawElements(this.gl.TRIANGLES, this.indices.length, this.gl.UNSIGNED_INT, 0);

            this.gl.disableVertexAttribArray(2);
            this.gl.disableVertexAttribArray(1);
            this.gl.disableVertexAttribArray(0);
        }
    }
}