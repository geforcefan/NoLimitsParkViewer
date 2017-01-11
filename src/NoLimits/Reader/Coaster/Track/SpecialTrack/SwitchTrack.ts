/// <reference path="../../../ChunkStream.ts"/>
/// <reference path="../../../Stream.ts"/>
/// <reference path="../../../Reader.ts"/>
/// <reference path="../../../../Chunks/Coaster/Track/SpecialTrack/SwitchTrack.ts"/>

namespace NLParkViewer.NoLimits.Stream.Coaster.Track.SpecialTrack
{
    export class SwitchTrack extends ChunkStream<Chunks.Coaster.Track.SpecialTrack.SwitchTrack> {
        public read(reader: Reader) : void {
            reader.readNull(3);

            this.data.setDirection(reader.readByte());
            reader.readNull(3);

            this.data.setStyle(reader.readByte());
            reader.readNull(3);

            this.data.setDefaultTrack(reader.readByte());
            this.data.setDisplayStructure(reader.readByte());

            reader.setStreamPosition(4);
        }
    }
}