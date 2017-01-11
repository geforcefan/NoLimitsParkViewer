/// <reference path="../Definitions/gl-matrix-64.d.ts" />

/// <reference path="../VertexTypes/FloorVertices.ts" />
/// <reference path="../Core/VertexObject.ts" />
/// <reference path="../Core/ShaderProgram.ts" />
/// <reference path="../Camera/Camera.ts" />

namespace NLParkViewer.Renderer {
    import FloorVertices = NLParkViewer.VertexTypes.FloorVertices;
    import VertexObject = NLParkViewer.Core.VertexObject;
    import ShaderProgram = NLParkViewer.Core.ShaderProgram;
    import Camera = NLParkViewer.Camera.Camera;

    export class FloorRenderer {
        public numPlanes : number = 500;
        public planeSize : number = 10;
        public planeSubDivision : number = 1;

        private mainSegments : FloorSegments = null;
        private subSegments : FloorSegments = null;
        private ground : FloorGround = null;

        constructor(gl : WebGLRenderingContext) {
            this.mainSegments = new FloorSegments(gl);
            this.subSegments = new FloorSegments(gl);
            this.ground = new FloorGround(gl);

            let totalSize : number = Math.floor(this.numPlanes * this.planeSubDivision);
            let halfSize : number = totalSize / 2.0;

            let verticesIndex : number = 0;

            let mainColor : vec4 = vec4.fromValues(0.7, 0.7, 0.7, 1.0);
            let subColor : vec4 = vec4.fromValues(0.95, 0.95, 0.95, 1.0);
            let groundColor : vec4 = vec4.fromValues(1.0, 1.0, 1.0, 1.0);

            for (let z = 0; z <= this.numPlanes; z++)
            {
                for (let x = 0; x <= this.numPlanes; x++)
                {
                    let position : vec4 = vec4.fromValues(
                        halfSize - (x * this.planeSubDivision),
                        0.0,
                        halfSize - (z * this.planeSubDivision),
                        1.0
                    );

                    this.mainSegments.vertices.setVertex(position, mainColor);
                    this.subSegments.vertices.setVertex(position, subColor);
                    this.ground.vertices.setVertex(vec4.subtract(vec4.create(), position, vec4.fromValues(0, 0.01, 0, 0)), groundColor);

                    if (x > 0 && z > 0)
                    {
                        let a : number = Math.floor(verticesIndex - 1 - (this.numPlanes + 1));
                        let b : number = Math.floor(verticesIndex - 1);
                        let c : number = Math.floor(verticesIndex);
                        let d : number = Math.floor(verticesIndex - (this.numPlanes + 1));

                        this.ground.indices.push(a);
                        this.ground.indices.push(b);
                        this.ground.indices.push(c);

                        this.ground.indices.push(a);
                        this.ground.indices.push(c);
                        this.ground.indices.push(d);
                    }

                    if (x > 0)
                    {
                        if (z % this.planeSize != 0)
                        {
                            this.subSegments.indices.push(Math.floor(verticesIndex - 0));
                            this.subSegments.indices.push(Math.floor(verticesIndex - 1));
                        }
                        else {
                            this.mainSegments.indices.push(Math.floor(verticesIndex - 0));
                            this.mainSegments.indices.push(Math.floor(verticesIndex - 1));
                        }
                    }

                    if (z > 0)
                    {
                        if (x % this.planeSize != 0)
                        {
                            this.subSegments.indices.push(Math.floor(verticesIndex - 0));
                            this.subSegments.indices.push(Math.floor(verticesIndex - 0 - (this.numPlanes + 1)));
                        }
                        else {
                            this.mainSegments.indices.push(Math.floor(verticesIndex - 0));
                            this.mainSegments.indices.push(Math.floor(verticesIndex - 0 - (this.numPlanes + 1)));
                        }
                    }

                    verticesIndex++;
                }
            }

            this.mainSegments.lineWidth = 2;
            this.mainSegments.finalizeData();

            this.subSegments.finalizeData();
            this.ground.finalizeData();
        }

        public render(shader : ShaderProgram, cam : Camera) : void {
            shader.use();
            shader.uniformMat4("projectionMatrix", cam.projectionMatrix);
            shader.uniformMat4("modelMatrix", cam.modelMatrix);

            this.mainSegments.render();
            this.subSegments.render();
            //this.ground.render();
        }
    }

    class FloorSegments extends VertexObject<FloorVertices> {
        public lineWidth : number = 1;

        constructor(gl : WebGLRenderingContext) {
            super(gl, new FloorVertices());
        }

        public render() : void {
            this.glExt.bindVertexArrayOES(this.vertexArrayID);
            this.gl.lineWidth(this.lineWidth);
            this.gl.enableVertexAttribArray(0);
            this.gl.enableVertexAttribArray(1);

            this.gl.drawElements(this.gl.LINES, this.indices.length, this.gl.UNSIGNED_INT, 0);

            this.gl.disableVertexAttribArray(1);
            this.gl.disableVertexAttribArray(0);
        }
    }

    class FloorGround extends VertexObject<FloorVertices> {
        constructor(gl : WebGLRenderingContext) {
            super(gl, new FloorVertices());
        }

        public render() : void {
            this.glExt.bindVertexArrayOES(this.vertexArrayID);
            this.gl.enableVertexAttribArray(0);
            this.gl.enableVertexAttribArray(1);

            this.gl.drawElements(this.gl.TRIANGLES, this.indices.length, this.gl.UNSIGNED_INT, 0);

            this.gl.disableVertexAttribArray(1);
            this.gl.disableVertexAttribArray(0);
        }
    }
}