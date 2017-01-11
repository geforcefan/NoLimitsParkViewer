/// <reference path="../../ChunkStream.ts"/>
/// <reference path="../../Stream.ts"/>
/// <reference path="../../Reader.ts"/>
/// <reference path="../../../Chunks/Coaster/Track/Trigger.ts"/>

namespace NLParkViewer.NoLimits.Stream.Coaster.Track
{
    export class Trigger extends ChunkStream<Chunks.Coaster.Track.Trigger> {
        public read(reader: Reader) : void {
            this.data.setPosition(reader.readDouble());
            this.data.setName(reader.readString());
            reader.readNull(3);
            this.data.setTrainEvent(reader.readByte());
            reader.readNull(23);
        }
    }
}