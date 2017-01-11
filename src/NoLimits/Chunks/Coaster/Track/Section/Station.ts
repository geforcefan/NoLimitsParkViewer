/// <reference path="Section.ts"/>
/// <reference path="BrakeDevice.ts"/>
/// <reference path="TransportDevice.ts"/>
/// <reference path="WaitTime.ts"/>

namespace NLParkViewer.NoLimits.Chunks.Coaster.Track.Section {
    export enum StationDisplay {
        FullBuilding = 0,
        NoRoof = 1,
        GatesOnly = 2,
        HideAll = 3
    }

    export enum StationGate {
        Left = 0,
        Right = 1
    }

    export enum StationStairs {
        None = 0,
        BeginFront = 1,
        BeginSide = 2,
        EndFront = 3,
        EndSide = 4
    }

    export class Station extends Section {
        private extraBlockLength : number = 0;
        private gateDirection : StationGate = StationGate.Left;
        private unloadingOnly : boolean = false;
        private display : StationDisplay = StationDisplay.FullBuilding;
        private entranceStairs : StationStairs = StationStairs.EndSide;
        private exitStairs : StationStairs = StationStairs.EndSide;
        private passes : number = 0;
        private shuttleBackwardsStart : boolean = false;
        private structureColor : vec3 = vec3.fromValues(0, 0, 0);
        private railingsColor : vec3 = vec3.fromValues(0, 0, 0);
        private gatesColor  : vec3 = vec3.fromValues(0, 0, 0);
        private waitTime : WaitTime = new WaitTime();
        private brakeDevice : BrakeDevice = new BrakeDevice();
        private useTransportDevice : boolean = false;
        private transportDevice : TransportDevice = new TransportDevice();
        private stationNumber : number = 0;
        public static biggestStationNumber : number = 0;
        
        constructor() {
            super();
            this.setSectionType(SectionType.Station);
            this.setStationNumber(Station.getFreeStationNumber());
        }

        public static getFreeStationNumber() {
            return ++Station.biggestStationNumber;
        }

        public getExtraBlockLength(): number {
            return this.extraBlockLength;
        }

        public setExtraBlockLength(value: number) {
            this.extraBlockLength = value;
        }

        public getGateDirection(): StationGate {
            return this.gateDirection;
        }

        public setGateDirection(value: StationGate) {
            this.gateDirection = value;
        }

        public getUnloadingOnly(): boolean {
            return this.unloadingOnly;
        }

        public setUnloadingOnly(value: boolean) {
            this.unloadingOnly = value;
        }

        public getDisplay(): StationDisplay {
            return this.display;
        }

        public setDisplay(value: StationDisplay) {
            this.display = value;
        }

        public getEntranceStairs(): StationStairs {
            return this.entranceStairs;
        }

        public setEntranceStairs(value: StationStairs) {
            this.entranceStairs = value;
        }

        public getExitStairs(): StationStairs {
            return this.exitStairs;
        }

        public setExitStairs(value: StationStairs) {
            this.exitStairs = value;
        }

        public getPasses(): number {
            return this.passes;
        }

        public setPasses(value: number) {
            this.passes = value;
        }

        public getShuttleBackwardsStart(): boolean {
            return this.shuttleBackwardsStart;
        }

        public setShuttleBackwardsStart(value: boolean) {
            this.shuttleBackwardsStart = value;
        }

        public getStructureColor(): vec3 {
            return this.structureColor;
        }

        public setStructureColor(value: vec3) {
            this.structureColor = value;
        }

        public getRailingsColor(): vec3 {
            return this.railingsColor;
        }

        public setRailingsColor(value: vec3) {
            this.railingsColor = value;
        }

        public getGatesColor(): vec3 {
            return this.gatesColor;
        }

        public setGatesColor(value: vec3) {
            this.gatesColor = value;
        }

        public getWaitTime(): WaitTime {
            return this.waitTime;
        }

        public setWaitTime(value: WaitTime) {
            this.waitTime = value;
        }

        public getBrakeDevice(): BrakeDevice {
            return this.brakeDevice;
        }

        public setBrakeDevice(value: BrakeDevice) {
            this.brakeDevice = value;
        }

        public getUseTransportDevice(): boolean {
            return this.useTransportDevice;
        }

        public setUseTransportDevice(value: boolean) {
            this.useTransportDevice = value;
        }

        public getTransportDevice(): TransportDevice {
            return this.transportDevice;
        }

        public setTransportDevice(value: TransportDevice) {
            this.transportDevice = value;
        }

        public getStationNumber(): number {
            return this.stationNumber;
        }

        public setStationNumber(value: number) {
            this.stationNumber = value;
        }
    }
}