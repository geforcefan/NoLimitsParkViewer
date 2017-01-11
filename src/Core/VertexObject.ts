namespace NLParkViewer.Core {
    import AttributePointers = NLParkViewer.VertexTypes.AttributePointers;
    import Vertices = NLParkViewer.VertexTypes.Vertices;

    export abstract class VertexObject<T extends Vertices> {
        protected glExt: any;
        protected gl: WebGLRenderingContext;

        protected vertexArrayID: any;
        protected vertexBuffer: WebGLBuffer;
        protected indexBuffer: WebGLBuffer;

        protected isFinalized : boolean = false;

        public vertices: T;
        public indices: Array<number> = [];

        constructor(gl: WebGLRenderingContext, vertices: T) {
            this.glExt = gl.getExtension("OES_vertex_array_object");

            this.gl = gl;
            this.vertices = vertices;
        }

        public finalizeData() {
            let gl: WebGLRenderingContext = this.gl;
            let glExt: any = this.glExt;

            this.vertexArrayID = glExt.createVertexArrayOES();
            glExt.bindVertexArrayOES(this.vertexArrayID);

            this.vertexBuffer = gl.createBuffer();
            this.indexBuffer = gl.createBuffer();

            gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertices.data), gl.STATIC_DRAW);

            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
            gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint32Array(this.indices), gl.STATIC_DRAW);

            gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);

            let attrPtrs: Array<AttributePointers> = this.vertices.getAttributePointers(gl);
            let vertexSize: number = this.vertices.getVertexSize(gl);

            let currentOffset: number = 0;
            for (let i = 0; i < attrPtrs.length; i++) {
                let attrPtr: AttributePointers = attrPtrs[i];

                gl.enableVertexAttribArray(attrPtr.location);
                gl.vertexAttribPointer(
                    attrPtr.location,
                    attrPtr.size,
                    attrPtr.type,
                    false,
                    vertexSize,
                    currentOffset
                );
                gl.disableVertexAttribArray(attrPtr.location);

                currentOffset += attrPtr.typeSize * attrPtr.size;
            }

            this.isFinalized = true;
        }

        public abstract render(...number : any[]): void;
    }
}