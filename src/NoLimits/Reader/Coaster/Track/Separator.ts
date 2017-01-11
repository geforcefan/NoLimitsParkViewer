/// <reference path="../../ChunkStream.ts"/>
/// <reference path="../../Stream.ts"/>
/// <reference path="../../Reader.ts"/>
/// <reference path="../../../Chunks/Coaster/Track/Separator.ts"/>

namespace NLParkViewer.NoLimits.Stream.Coaster.Track
{
    export class Separator extends ChunkStream<Chunks.Coaster.Track.Separator> {
        public read(reader: Reader) : void {
            this.data.setPosition(reader.readDouble());

            for (let i = 0; i <= reader.getFilesize(); i++) {
                reader.setStreamPosition(i);
                let chunk : string = reader.readChunkName();

                if(chunk == "SEGM") {
                    let segment : Chunks.Coaster.Track.Segment.Segment = new Chunks.Coaster.Track.Segment.Segment();
                    this.data.setSegment(segment);

                    (new Segment(reader.getChunkStreamReader(), segment)).readChunk();
                    i = reader.getStreamPosition() - 1;
                }

                if(chunk == "SECT") {
                    (new Section.Section(reader.getChunkStreamReader(), this.data)).readChunk();
                    i = reader.getStreamPosition() - 1;
                }
            }
        }

        public getChunkSize() : number {
            return this.chunkSize;
        }
    }
}