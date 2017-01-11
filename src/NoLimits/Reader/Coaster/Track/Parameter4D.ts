/// <reference path="../../ChunkStream.ts"/>
/// <reference path="../../Stream.ts"/>
/// <reference path="../../Reader.ts"/>
/// <reference path="../../../Chunks/Coaster/Track/Parameter4D.ts"/>

namespace NLParkViewer.NoLimits.Stream.Coaster.Track
{
    export class Parameter4D extends ChunkStream<Chunks.Coaster.Track.Parameter4D> {
        public read(reader: Reader) : void {
            this.data.setPosition(reader.readDouble());
            this.data.setAngle(reader.readDouble());

            reader.readNull(16);
        }
    }
}