/// <reference path="Section.ts"/>

namespace NLParkViewer.NoLimits.Chunks.Coaster.Track.Section {
    export enum LiftType {
        Chain = 0,
        FrictionWheels = 1
    }

    export enum LiftMotorLocation {
        AtStart = 0,
        AtEnd = 1,
        Silent = 2
    }

    export class Lift extends Section {
        private speed : number = 0;

        private acceleration : number = 0;
        private deceleration : number = 0;

        private liftType : LiftType = LiftType.Chain;

        private motorLocation : number = LiftMotorLocation.AtStart;
        private hasAntiRollbackDevice : boolean = false;
        private shuttleModeGentle2ndPassRelease : boolean = false;
        private diveCoasterDropReleaseMode : boolean = false;
        private extraBlockLength : number = 0;

        constructor() {
            super();
            this.setSectionType(SectionType.Lift);
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

        public getLiftType(): LiftType {
            return this.liftType;
        }

        public setLiftType(value: LiftType) {
            this.liftType = value;
        }

        public getMotorLocation(): LiftMotorLocation {
            return this.motorLocation;
        }

        public setMotorLocation(value: LiftMotorLocation) {
            this.motorLocation = value;
        }

        public getHasAntiRollbackDevice(): boolean {
            return this.hasAntiRollbackDevice;
        }

        public setHasAntiRollbackDevice(value: boolean) {
            this.hasAntiRollbackDevice = value;
        }

        public getShuttleModeGentle2ndPassRelease(): boolean {
            return this.shuttleModeGentle2ndPassRelease;
        }

        public setShuttleModeGentle2ndPassRelease(value: boolean) {
            this.shuttleModeGentle2ndPassRelease = value;
        }

        public getDiveCoasterDropReleaseMode(): boolean {
            return this.diveCoasterDropReleaseMode;
        }

        public setDiveCoasterDropReleaseMode(value: boolean) {
            this.diveCoasterDropReleaseMode = value;
        }

        public getExtraBlockLength(): number {
            return this.extraBlockLength;
        }

        public setExtraBlockLength(value: number) {
            this.extraBlockLength = value;
        }
    }
}