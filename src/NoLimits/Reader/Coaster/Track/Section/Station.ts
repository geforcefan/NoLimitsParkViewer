/// <reference path="../../../ChunkStream.ts"/>
/// <reference path="../../../Stream.ts"/>
/// <reference path="../../../Reader.ts"/>
/// <reference path="../../../../Chunks/Coaster/Track/Section/Station.ts"/>

namespace NLParkViewer.NoLimits.Stream.Coaster.Track.Section
{
    export class Station extends ChunkStream<Chunks.Coaster.Track.Section.Station> {
        public read(reader: Reader) : void {
            this.data.setUseTransportDevice(reader.readBoolean());
            this.data.getTransportDevice().setType(reader.readByte());
            this.data.getTransportDevice().setSpeed(reader.readDouble());
            this.data.getTransportDevice().setAcceleration(reader.readDouble());
            this.data.getTransportDevice().setDeceleration(reader.readDouble());

            this.data.getBrakeDevice().setDeceleration(reader.readDouble());
            this.data.getWaitTime().setAvarage(reader.readDouble());
            this.data.getWaitTime().setMinimum(reader.readDouble());
            this.data.getWaitTime().setMaximum(reader.readDouble());
            this.data.getWaitTime().setDeviation(reader.readDouble());

            this.data.getTransportDevice().setLaunch(reader.readBoolean());
            this.data.getTransportDevice().setLaunchAcceleration(reader.readDouble());
            this.data.getTransportDevice().setLaunchMaxSpeed(reader.readDouble());

            this.data.setUnloadingOnly(reader.readBoolean());

            reader.readNull(3);

            this.data.setPasses(reader.readByte());
            this.data.setShuttleBackwardsStart(reader.readBoolean());
            this.data.setStationNumber(reader.readInt());

            reader.readNull(3);

            let numSynchronizeDispatchWith : number = reader.readByte();

            for(let i = 0; i < numSynchronizeDispatchWith; i++) {
                this.data.getWaitTime().synchonizeDispatchWith(reader.readInt());
            }

            this.data.setExtraBlockLength(reader.readDouble());

            this.data.getBrakeDevice().setBrakeType(reader.readByte());
            this.data.setGateDirection(reader.readByte());
            this.data.setDisplay(reader.readByte());
            this.data.setEntranceStairs(reader.readByte());
            this.data.setExitStairs(reader.readByte());

            reader.readNull(1);

            this.data.setGatesColor(reader.readColor());
            this.data.setRailingsColor(reader.readColor());
            this.data.setStructureColor(reader.readColor());


            reader.readNull(137);
        }
    }
}