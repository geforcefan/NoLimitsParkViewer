/// <reference path="ChunkStream.ts"/>
/// <reference path="Stream.ts"/>
/// <reference path="Reader.ts"/>
/// <reference path="../Chunks/Info/Info.ts"/>
/// <reference path="../Chunks/Info/Weather.ts"/>
/// <reference path="../Chunks/Info/Sky.ts"/>

namespace NLParkViewer.NoLimits.Stream
{
    export class Info extends ChunkStream<Chunks.Info.Info> {
        public read(reader: Reader) : void {
            reader.readNull(31);

            this.data.getWeather().setOverwriteDefaultWeather(reader.readBoolean());

            this.data.getWeather().setRainIntensity(reader.readFloat());
            this.data.getWeather().setSnowIntensity(reader.readFloat());
            this.data.getWeather().setWindIntensity(Chunks.Info.Weather.convertWindIntensity(reader.readFloat()));

            this.data.getWeather().setFogIntensity(Chunks.Info.Weather.convertFogIntensity(reader.readFloat()));
            this.data.getWeather().setCloudsIntensity(reader.readFloat());
            this.data.getWeather().setOvercastIntensity(reader.readFloat());
            this.data.getWeather().setThunderIntensity(reader.readFloat());

            reader.readNull(6);

            this.data.setAuthor(reader.readString());
            this.data.setDescription(reader.readString());
            this.data.setPreview(reader.readString());
            this.data.setEnvironment(reader.readString());

            reader.readNull(9);

            this.data.getSky().setOverrideDefaultDateTime(reader.readByte() ? true : false);
            this.data.getSky().setCurrentDate(reader.readIntVec2());
            this.data.getSky().setCurrentTime(reader.readIntVec2());

            reader.readNull(1);

            this.data.setInitialPosition(reader.readFloatVec3());
            this.data.setInitialRotation(reader.readFloatVec2());

            this.data.setInitialView(reader.readByte());
        }
    }
}