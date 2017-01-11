/// <reference path="Brake.ts"/>

namespace NLParkViewer.NoLimits.Chunks.Coaster.Track.Section {
    export class BrakeDevice {
        private deceleration : number = 0;
        private brakeType : number = BrakeType.FrictionBrake;

        public getDeceleration(): number {
            return this.deceleration;
        }

        public setDeceleration(value: number) {
            this.deceleration = value;
        }

        public getBrakeType(): number {
            return this.brakeType;
        }

        public setBrakeType(value: number) {
            this.brakeType = value;
        }
    }
}