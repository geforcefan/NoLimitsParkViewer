/// <reference path="../../ChunkStream.ts"/>
/// <reference path="../../Stream.ts"/>
/// <reference path="../../Reader.ts"/>
/// <reference path="../../../Chunks/Coaster/Track/Segment/Segment.ts"/>

namespace NLParkViewer.NoLimits.Stream.Coaster.Track
{
    export class Segment extends ChunkStream<Chunks.Coaster.Track.Segment.Segment> {
        public read(reader: Reader) : void {
            this.data.setUseMainSpineColor(reader.readBoolean());
            this.data.setRailColor(reader.readColor());
            this.data.setCrossTiesColor(reader.readColor());
            this.data.setMainSpineColor(reader.readColor());

            this.data.setTunnel(reader.readByte());

            this.data.setLeftRailingAndCatwalk(reader.readBoolean());
            this.data.setRightRailingAndCatwalk(reader.readBoolean());

            this.data.setSpineType(reader.readByte());

            this.data.setSpineColorScheme(reader.readByte());
            this.data.setInvisibleSegment(reader.readBoolean());
            reader.readNull(2);

            this.data.getWoodenSupportGenerator().setFlag1(reader.readByte());
            this.data.getWoodenSupportGenerator().setFlag2(reader.readByte());

            this.data.setHandrailsColor(reader.readColor());
            this.data.setCatwalksColor(reader.readColor());

            this.data.setTransparentCatwalks(reader.readBoolean());
            this.data.setUseRailsColor(reader.readBoolean());
            this.data.setUseCrossTiesColor(reader.readBoolean());
            this.data.setUseHandrailsColor(reader.readBoolean());
            this.data.setUseCatwalksColor(reader.readBoolean());
            this.data.setUseSpineColorScheme(reader.readBoolean());

            this.data.setLeftRailingLights(reader.readBoolean());
            this.data.setLeftRailingLightsColor(reader.readColor());

            this.data.setRightRailingLights(reader.readBoolean());
            this.data.setRightRailingLightsColor(reader.readColor());
        }
    }
}