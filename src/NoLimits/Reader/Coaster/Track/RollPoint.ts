/// <reference path="../../ChunkStream.ts"/>
/// <reference path="../../Stream.ts"/>
/// <reference path="../../Reader.ts"/>
/// <reference path="../../../Chunks/Coaster/Track/RollPoint.ts"/>

namespace NLParkViewer.NoLimits.Stream.Coaster.Track
{
    export class RollPoint extends ChunkStream<Chunks.Coaster.Track.RollPoint> {
        public read(reader: Reader) : void {
            this.data.setPosition(reader.readDouble());
            this.data.setRoll(reader.readDouble());
            this.data.setVertical(reader.readBoolean());
            this.data.setStrict(reader.readBoolean());

            reader.readNull(14);
        }
    }
}