namespace NLParkViewer.NoLimits.Chunks.Coaster.Track {
    export class Parameter4D {
        private position: number = 0;
        private roll: number = 0;

        public getPosition(): number {
            return this.position;
        }

        public setPosition(value: number) {
            this.position = value;
        }

        public getRoll(): number {
            return this.roll;
        }

        public setAngle(value: number) {
            this.roll = value;
        }
    }
}