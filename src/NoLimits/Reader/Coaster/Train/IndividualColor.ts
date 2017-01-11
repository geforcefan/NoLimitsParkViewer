/// <reference path="../../ChunkStream.ts"/>
/// <reference path="../../Stream.ts"/>
/// <reference path="../../Reader.ts"/>
/// <reference path="../../../Chunks/Coaster/Train/IndividualColor.ts"/>

namespace NLParkViewer.NoLimits.Stream.Coaster.Train
{
    export class IndividualColor extends ChunkStream<Chunks.Coaster.Train.IndividualColor> {
        public read(reader: Reader) : void {
            /*this.data.setHasIndividualColor(reader.readBoolean());

            this.data.setCarColor(reader.readColor());
            this.data.setSeatColor(reader.readColor());
            this.data.setHarnessColor(reader.readColor());
            this.data.setBogieColor(reader.readColor());
            this.data.setChassisColor(reader.readColor());

            reader.readNull(24);
            this.data.setCarTexture1(reader.readString());
            reader.readNull(12);
            this.data.setCarTexture2(reader.readString());*/
        }
    }
}