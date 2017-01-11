/// <reference path="../../../ChunkStream.ts"/>
/// <reference path="../../../Stream.ts"/>
/// <reference path="../../../Reader.ts"/>
/// <reference path="../../../../Chunks/Coaster/Track/SpecialTrack/TransferTable.ts"/>

namespace NLParkViewer.NoLimits.Stream.Coaster.Track.SpecialTrack
{
    export class TransferTable extends ChunkStream<Chunks.Coaster.Track.SpecialTrack.TransferTable> {
        public read(reader: Reader) : void {
            this.data.setDefaultTrack(reader.readInt());
            this.data.setLength(reader.readDouble());
            this.data.setDistance(reader.readDouble());
            this.data.setDisplayStructure(reader.readByte());
        }
    }
}