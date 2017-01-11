/// <reference path="../../../ChunkStream.ts"/>
/// <reference path="../../../Stream.ts"/>
/// <reference path="../../../Reader.ts"/>
/// <reference path="../../../../Chunks/Coaster/Track/Section/Transport.ts"/>

namespace NLParkViewer.NoLimits.Stream.Coaster.Track.Section
{
    export class Transport extends ChunkStream<Chunks.Coaster.Track.Section.Transport> {
        public read(reader: Reader) : void {
            this.data.setTransportType(reader.readByte());
            this.data.setSpeed(reader.readDouble());
            this.data.setAcceleration(reader.readDouble());
            this.data.setDeceleration(reader.readDouble());
            this.data.setSpeedingUpPasses(reader.readInt());
            this.data.setSpeedingDown(reader.readBoolean());
            this.data.setMinSpeed(reader.readDouble());
        }
    }
}