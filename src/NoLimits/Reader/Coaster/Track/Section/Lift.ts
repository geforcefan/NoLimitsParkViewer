/// <reference path="../../../ChunkStream.ts"/>
/// <reference path="../../../Stream.ts"/>
/// <reference path="../../../Reader.ts"/>
/// <reference path="../../../../Chunks/Coaster/Track/Section/Lift.ts"/>

namespace NLParkViewer.NoLimits.Stream.Coaster.Track.Section
{
    export class Lift extends ChunkStream<Chunks.Coaster.Track.Section.Lift> {
        public read(reader: Reader): void {
            reader.readNull(3);
            this.data.setLiftType(reader.readByte());

            reader.readNull(3);
            this.data.setMotorLocation(reader.readByte());
            this.data.setSpeed(reader.readDouble());
            this.data.setAcceleration(reader.readDouble());
            this.data.setDeceleration(reader.readDouble());

            this.data.setHasAntiRollbackDevice(reader.readBoolean() ? false : true);
            this.data.setShuttleModeGentle2ndPassRelease(reader.readBoolean());
            this.data.setExtraBlockLength(reader.readDouble());

            this.data.setDiveCoasterDropReleaseMode(reader.readBoolean());
        }
    }
}