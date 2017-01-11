/// <reference path="Section.ts"/>
/// <reference path="TransportDevice.ts"/>

namespace NLParkViewer.NoLimits.Chunks.Coaster.Track.Section {
    export enum BrakeMode {
        TrimBrake = 0,
        BlockBrake = 1
    }

    export enum BrakeType {
        FrictionBrake = 0,
        MagneticBrake = 1,
        HideBrakeDevice = 2
    }

    export enum BrakePosition {
        FirstCar = 0,
        MiddleCar = 1
    }

    export class Brake extends Section {
        private extraBlockLength : number = 0;

        private mode : BrakeMode = BrakeMode.BlockBrake;

        private completeStop : boolean = false;
        private waitTime : number = 0;

        private brakeType : BrakeType = BrakeType.FrictionBrake;

        private speedLimit : number = 0;
        private hysteresis : number = 0;
        private deceleration : number = 0;

        private positionOnTrain : BrakePosition = BrakePosition.FirstCar;
        private positionOnSection : number = 0;

        private enableTransport : boolean = false;
        private transportDevice : TransportDevice = new TransportDevice();

        constructor() {
            super();
            this.setSectionType(SectionType.Brake);
        }

        public getExtraBlockLength(): number {
            return this.extraBlockLength;
        }

        public setExtraBlockLength(value: number) {
            this.extraBlockLength = value;
        }

        public getMode(): BrakeMode {
            return this.mode;
        }

        public setMode(value: BrakeMode) {
            this.mode = value;
        }

        public getCompleteStop(): boolean {
            return this.completeStop;
        }

        public setCompleteStop(value: boolean) {
            this.completeStop = value;
        }

        public getWaitTime(): number {
            return this.waitTime;
        }

        public setWaitTime(value: number) {
            this.waitTime = value;
        }

        public getBrakeType(): BrakeType {
            return this.brakeType;
        }

        public setBrakeType(value: BrakeType) {
            this.brakeType = value;
        }

        public getSpeedLimit(): number {
            return this.speedLimit;
        }

        public setSpeedLimit(value: number) {
            this.speedLimit = value;
        }

        public getDeceleration(): number {
            return this.deceleration;
        }

        public setDeceleration(value: number) {
            this.deceleration = value;
        }

        public getPositionOnTrain(): number {
            return this.positionOnTrain;
        }

        public setPositionOnTrain(value: BrakePosition) {
            this.positionOnTrain = value;
        }

        public getPositionOnSection(): BrakePosition {
            return this.positionOnSection;
        }

        public setPositionOnSection(value: number) {
            this.positionOnSection = value;
        }

        public getEnableTransport(): boolean {
            return this.enableTransport;
        }

        public setEnableTransport(value: boolean) {
            this.enableTransport = value;
        }

        public getTransportDevice(): TransportDevice {
            return this.transportDevice;
        }

        public setTransportDevice(value: TransportDevice) {
            this.transportDevice = value;
        }

        public getHysteresis(): number {
            return this.hysteresis;
        }

        public setHysteresis(value: number) {
            this.hysteresis = value;
        }
    }
}