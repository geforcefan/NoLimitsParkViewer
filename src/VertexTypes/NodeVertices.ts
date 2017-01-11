/// <reference path="Vertices.ts" />
/// <reference path="AttributePointers.ts" />

namespace NLParkViewer.VertexTypes {
    export class NodeVertices extends Vertices {
        public setVertex(position: vec4, normal: vec4, texCoordinate : vec2) {
            this.data.push(
                position[0], position[1], position[2], position[3],
                normal[0], normal[1], normal[2], normal[3],
                texCoordinate[0], texCoordinate[1]
            );
            this.numVertices++;
        }

        public getAttributePointers(gl : WebGLRenderingContext): Array<AttributePointers> {
            return [
                new AttributePointers(0, 4, 4, gl.FLOAT), // position
                new AttributePointers(1, 4, 4, gl.FLOAT), // normal
                new AttributePointers(2, 2, 4, gl.FLOAT) // tex coord
            ]
        }
    }
}