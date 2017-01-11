/// <reference path="../../ChunkStream.ts"/>
/// <reference path="../../Stream.ts"/>
/// <reference path="../../Reader.ts"/>
/// <reference path="../../../Chunks/Coaster/Train/Car.ts"/>
/// <reference path="../../../Chunks/Coaster/Train/IndividualColor.ts"/>

namespace NLParkViewer.NoLimits.Stream.Coaster.Train
{
    export class Car extends ChunkStream<Chunks.Coaster.Train.Car> {
        public read(reader: Reader) : void {
            for (let i = 0; i <= reader.getFilesize(); i++) {
                reader.setStreamPosition(i);
                let chunk : string = reader.readChunkName();

                if(chunk == "INDC") {
                    let individualColor : Chunks.Coaster.Train.IndividualColor = new Chunks.Coaster.Train.IndividualColor();
                    this.data.setIndividualColor(individualColor);

                    let individualColorStream : IndividualColor = new IndividualColor(reader.getChunkStreamReader(), individualColor);
                    individualColorStream.readChunk();
                    i = reader.getStreamPosition();
                }
            }
        }
    }
}