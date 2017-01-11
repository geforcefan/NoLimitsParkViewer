namespace NLParkViewer.VertexTypes {
    export class AttributePointers {
        public location: number;
        public size: number;
        public typeSize: number;
        public type: number;

        constructor(location: number, size: number, typeSize: number, type: number) {
            this.location = location;
            this.size = size;
            this.typeSize = typeSize;
            this.type = type;
        }
    }
}