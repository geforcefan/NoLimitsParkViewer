/// <reference path="../../ChunkStream.ts"/>
/// <reference path="../../Stream.ts"/>
/// <reference path="../../Reader.ts"/>
/// <reference path="../../../Chunks/Coaster/Support/RailNode.ts"/>

namespace NLParkViewer.NoLimits.Stream.Coaster.Support
{
    export class RailNode extends ChunkStream<Chunks.Coaster.Support.RailNode> {
        protected read(reader: Reader) : void {
            this.data.setPosition(reader.readDouble());

            reader.readNull(1);

            this.data.setColor(reader.readByteVec3());

            reader.readNull(2);

            this.data.setConnectionStyle(reader.readBoolean(), reader.readByte());
            this.data.setSizeParameter(reader.readDouble());

            reader.readNull(5);

            this.data.setFlag1(reader.readByte());
            this.data.setFlag2(reader.readByte());
            this.data.setFlag3(reader.readByte());
        }
    }
}