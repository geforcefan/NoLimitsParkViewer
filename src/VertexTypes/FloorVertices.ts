/// <reference path="Vertices.ts" />
/// <reference path="AttributePointers.ts" />

namespace NLParkViewer.VertexTypes {
    export class FloorVertices extends Vertices {
        public setVertex(position: vec4, color: vec4) {
            this.data.push(
                position[0], position[1], position[2], position[3],
                color[0], color[1], color[2], color[3]
            );
            this.numVertices++;
        }

        public getAttributePointers(gl : WebGLRenderingContext): Array<AttributePointers> {
            return [
                new AttributePointers(0, 4, 4, gl.FLOAT), // position
                new AttributePointers(1, 4, 4, gl.FLOAT) // color
            ]
        }
    }
}