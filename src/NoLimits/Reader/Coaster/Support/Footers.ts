/// <reference path="../../ChunkStream.ts"/>
/// <reference path="../../Stream.ts"/>
/// <reference path="../../Reader.ts"/>
/// <reference path="../../../Chunks/Coaster/Support/Support.ts"/>
/// <reference path="../../../Chunks/Coaster/Support/Footer.ts"/>

namespace NLParkViewer.NoLimits.Stream.Coaster.Support
{
    export class Footers extends ChunkStream<Chunks.Coaster.Support.Support> {
        protected read(reader: Reader) : void {
            reader.readNull(8);
            let numberOfFooters : number = reader.readInt();

            for (let i = 0; i < numberOfFooters; i++) {
                let footer : Chunks.Coaster.Support.Footer = new Chunks.Coaster.Support.Footer();
                footer.setPosition(reader.readDoubleVec3());
                footer.setRotationAngle(reader.readFloat());
                footer.setAboveGround(reader.readFloat());
                reader.readNull(3);
                footer.setConnectionStyle(reader.readByte());
                reader.readNull(3);
                footer.setColorMode(reader.readByte());
                footer.setCustomColor(reader.readColor());
                reader.readNull(3);
                footer.setBaseStyle(reader.readByte());

                reader.readNull(9);
                
                this.data.insertFooter(footer);
            }
        }
    }
}