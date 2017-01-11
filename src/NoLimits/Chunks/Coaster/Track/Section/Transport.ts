/// <reference path="Section.ts"/>

namespace NLParkViewer.NoLimits.Chunks.Coaster.Track.Section {
    export enum TransportType {
        FrictionWheels = 0,
        LinearMotor = 1,
        HideDevice = 2
    }

    export class Transport extends Section {
        private speed : number = 0;

        private acceleration : number = 0;
        private deceleration : number = 0;

        private speedingUpPasses : number = 0;
        private speedingDown : boolean = false;

        private minSpeed : number = 0;
        private transportType : TransportType = TransportType.FrictionWheels;

        constructor() {
            super();
            this.setSectionType(SectionType.Transport);
        }

        public getSpeed(): number {
            return this.speed;
        }

        public setSpeed(value: number) {
            this.speed = value;
        }

        public getAcceleration(): number {
            return this.acceleration;
        }

        public setAcceleration(value: number) {
            this.acceleration = value;
        }

        public getDeceleration(): number {
            return this.deceleration;
        }

        public setDeceleration(value: number) {
            this.deceleration = value;
        }

        public getSpeedingUpPasses(): number {
            return this.speedingUpPasses;
        }

        public setSpeedingUpPasses(value: number) {
            this.speedingUpPasses = value;
        }

        public getSpeedingDown(): boolean {
            return this.speedingDown;
        }

        public setSpeedingDown(value: boolean) {
            this.speedingDown = value;
        }

        public getMinSpeed(): number {
            return this.minSpeed;
        }

        public setMinSpeed(value: number) {
            this.minSpeed = value;
        }

        public getTransportType(): TransportType {
            return this.transportType;
        }

        public setTransportType(value: TransportType) {
            this.transportType = value;
        }
    }
}