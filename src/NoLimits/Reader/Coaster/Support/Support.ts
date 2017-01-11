/// <reference path="../../ChunkStream.ts"/>
/// <reference path="../../Stream.ts"/>
/// <reference path="../../Reader.ts"/>
/// <reference path="../../../Chunks/Coaster/Support/Support.ts"/>

/// <reference path="FreeNodes.ts"/>
/// <reference path="Footers.ts"/>
/// <reference path="Beams.ts"/>

namespace NLParkViewer.NoLimits.Stream.Coaster.Support
{
    export class Support extends ChunkStream<Chunks.Coaster.Support.Support> {
        public read(reader: Reader) : void {
            for (let i = 0; i <= reader.getFilesize(); i++) {
                reader.setStreamPosition(i);
                let chunk : string = reader.readChunkName();

                if(chunk == "FREE") {
                    (new FreeNodes(reader.getChunkStreamReader(), this.data)).readChunk();
                    i = reader.getStreamPosition() - 1;
                }

                if(chunk == "FOOT") {
                    (new Footers(reader.getChunkStreamReader(), this.data)).readChunk();
                    i = reader.getStreamPosition() - 1;
                }

                if(chunk == "BEAM") {
                    (new Beams(reader.getChunkStreamReader(), this.data)).readChunk();
                    i = reader.getStreamPosition() - 1;
                }

                if(chunk == "PRFT") {
                    reader.getChunkStreamReader();
                    i = reader.getStreamPosition() - 1;
                }

            }
        }
    }
}