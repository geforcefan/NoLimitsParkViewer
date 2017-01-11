/// <reference path="AttributePointers.ts" />

namespace NLParkViewer.VertexTypes {
    export abstract class Vertices {
        public numVertices : number = 0;

        public data: Array<number> = [];

        public abstract getAttributePointers(gl : WebGLRenderingContext): Array<AttributePointers>;

        public abstract setVertex(...args: any[]): void;

        public getVertexSize(gl : WebGLRenderingContext): number {
            let size: number = 0;
            let attrPtrs: Array<AttributePointers> = this.getAttributePointers(gl);

            for (let i = 0; i < attrPtrs.length; i++) {
                let attrPtr: AttributePointers = attrPtrs[i];
                size += attrPtr.size * attrPtr.typeSize;
            }

            return size;
        }
    }
}