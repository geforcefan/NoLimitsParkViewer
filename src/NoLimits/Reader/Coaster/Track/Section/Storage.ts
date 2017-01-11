/// <reference path="../../../ChunkStream.ts"/>
/// <reference path="../../../Stream.ts"/>
/// <reference path="../../../Reader.ts"/>
/// <reference path="../../../../Chunks/Coaster/Track/Section/Storage.ts"/>

namespace NLParkViewer.NoLimits.Stream.Coaster.Track.Section
{
    export class Storage extends ChunkStream<Chunks.Coaster.Track.Section.Storage> {
        public read(reader: Reader) : void {
            this.data.setEnableTransportDevice(reader.readBoolean());
            this.data.setTransportType(reader.readByte());
            this.data.setBuilding(reader.readByte());
            this.data.setRoofColor(reader.readColor());
            this.data.setSideColor(reader.readColor());
            this.data.setFrameColor(reader.readColor());

            reader.readNull(15);
        }
    }
}