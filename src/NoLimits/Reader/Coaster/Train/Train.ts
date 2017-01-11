/// <reference path="../../ChunkStream.ts"/>
/// <reference path="../../Stream.ts"/>
/// <reference path="../../Reader.ts"/>
/// <reference path="../../../Chunks/Coaster/Train/Train.ts"/>
/// <reference path="../../../Chunks/Coaster/Train/IndividualColor.ts"/>

namespace NLParkViewer.NoLimits.Stream.Coaster.Train
{
    export class Train extends ChunkStream<Chunks.Coaster.Train.Train> {
        public read(reader: Reader) : void {
            reader.readNull(1);

            this.data.setStartBlock(reader.readString());
            reader.readNull(1);

            reader.readNull(7);
            this.data.setRunBackward(reader.readBoolean());
            this.data.setRemovedFromTrack(reader.readBoolean());

            for (let i = 0; i <= reader.getFilesize(); i++) {
                reader.setStreamPosition(i);
                let chunk : string = reader.readChunkName();

                if (chunk == "CAR ") {
                    let car : Chunks.Coaster.Train.Car = new Chunks.Coaster.Train.Car();
                    this.data.insertCar(car);

                    let carStream : Car = new Car(reader.getChunkStreamReader(), car);
                    carStream.readChunk();
                }

                if (chunk == "INDC") {
                    let individualColor : Chunks.Coaster.Train.IndividualColor = new Chunks.Coaster.Train.IndividualColor();
                    this.data.setIndividualColor(individualColor);

                    let individualColorStream : IndividualColor = new IndividualColor(reader.getChunkStreamReader(), individualColor);
                    individualColorStream.readChunk();
                }
            }
        }
    }
}