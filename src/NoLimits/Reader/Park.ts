/// <reference path="ChunkStream.ts"/>
/// <reference path="Stream.ts"/>
/// <reference path="Reader.ts"/>
/// <reference path="Info.ts"/>
/// <reference path="Terrain.ts"/>
/// <reference path="../Chunks/Park.ts"/>
/// <reference path="../Chunks/Coaster/Coaster.ts"/>
/// <reference path="Coaster/Coaster.ts"/>

namespace NLParkViewer.NoLimits.Stream
{
    export class Park extends ChunkStream<Chunks.Park> {
        public read(reader: Reader) : void {
            for (var i = 0; i <= reader.getFilesize(); i++) {
                reader.setStreamPosition(i);

                let chunk: string = reader.readChunkName();

                if(chunk == "INFO") {
                    (new Info(reader.getChunkStreamReader(), this.data.getInfo())).readChunk();
                    i = reader.getStreamPosition() - 1;
                }

                if(chunk == "COAS") {
                    let coaster : Chunks.Coaster.Coaster = new Chunks.Coaster.Coaster();
                    this.data.setCoaster(coaster);

                    let coasterStream : Coaster.Coaster = new Coaster.Coaster(reader.getChunkStreamReader(), coaster);
                    coasterStream.readChunk();

                    i = reader.getStreamPosition() - 1;
                }

                if(chunk == "TERC") {
                    reader.getChunkStreamReader();
                    i = reader.getStreamPosition() - 1;
                    /*(new Terrain(reader.getChunkStreamReader(), this.data.getInfo())).readChunk();
                    i = reader.getStreamPosition() - 1;*/
                }

                if(chunk == "SCEN") {
                    reader.getChunkStreamReader();
                    i = reader.getStreamPosition() - 1;
                }

                if(chunk == "USPK") {
                    reader.getChunkStreamReader();
                    i = reader.getStreamPosition() - 1;
                }
            }
        }
    }
}