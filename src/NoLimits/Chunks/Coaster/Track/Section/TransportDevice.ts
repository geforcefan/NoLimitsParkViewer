/// <reference path="Transport.ts"/>

namespace NLParkViewer.NoLimits.Chunks.Coaster.Track.Section {
    export class TransportDevice {
        private type : TransportType = TransportType.FrictionWheels;

        private speed : number = 0;

        private acceleration : number = 0;
        private deceleration : number= 0;

        private launch : boolean = false;
        private launchAcceleration : number = 0;
        private launchMaxSpeed : number = 0;

        public getType(): TransportType {
            return this.type;
        }

        public setType(value: TransportType) {
            this.type = value;
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

        public getLaunch(): boolean {
            return this.launch;
        }

        public setLaunch(value: boolean) {
            this.launch = value;
        }

        public getLaunchAcceleration(): number {
            return this.launchAcceleration;
        }

        public setLaunchAcceleration(value: number) {
            this.launchAcceleration = value;
        }

        public getLaunchMaxSpeed(): number {
            return this.launchMaxSpeed;
        }

        public setLaunchMaxSpeed(value: number) {
            this.launchMaxSpeed = value;
        }
    }
}