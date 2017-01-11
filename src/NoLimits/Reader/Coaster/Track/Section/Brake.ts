/// <reference path="../../../ChunkStream.ts"/>
/// <reference path="../../../Stream.ts"/>
/// <reference path="../../../Reader.ts"/>
/// <reference path="../../../../Chunks/Coaster/Track/Section/Brake.ts"/>

namespace NLParkViewer.NoLimits.Stream.Coaster.Track.Section
{
    export class Brake extends ChunkStream<Chunks.Coaster.Track.Section.Brake> {
        public read(reader: Reader) : void {
            this.data.setMode(reader.readByte());
            this.data.setBrakeType(reader.readByte());
            this.data.setDeceleration(reader.readDouble());
            this.data.setSpeedLimit(reader.readDouble());
            this.data.setHysteresis(reader.readDouble());

            reader.readNull(9);

            this.data.setCompleteStop(reader.readBoolean());
            this.data.setWaitTime(reader.readDouble());

            reader.readNull(66);
            this.data.setExtraBlockLength(reader.readDouble());

            reader.setStreamPosition(71);
            this.data.setEnableTransport(reader.readBoolean());
            this.data.getTransportDevice().setType(reader.readByte());
            this.data.getTransportDevice().setSpeed(reader.readDouble());
            this.data.getTransportDevice().setAcceleration(reader.readDouble());
            this.data.getTransportDevice().setDeceleration(reader.readDouble());
            this.data.getTransportDevice().setLaunch(reader.readBoolean());
            this.data.getTransportDevice().setLaunchAcceleration(reader.readDouble());
            this.data.getTransportDevice().setLaunchMaxSpeed(reader.readDouble());

            reader.setStreamPosition(30);
            this.data.setPositionOnTrain(reader.readByte());
            this.data.setPositionOnSection(reader.readDouble());
        }
    }
}