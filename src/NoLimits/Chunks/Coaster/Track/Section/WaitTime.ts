namespace NLParkViewer.NoLimits.Chunks.Coaster.Track.Section {
    export class WaitTime {
        private avarage : number = 50;
        private minimum : number = 40;
        private maximum : number = 60;
        private deviation : number = 5;
        private synchronizeDispatchWith : Array<number> = [];

        public getAvarage(): number {
            return this.avarage;
        }

        public setAvarage(value: number) {
            this.avarage = value;
        }

        public getMinimum(): number {
            return this.minimum;
        }

        public setMinimum(value: number) {
            this.minimum = value;
        }

        public getMaximum(): number {
            return this.maximum;
        }

        public setMaximum(value: number) {
            this.maximum = value;
        }

        public getDeviation(): number {
            return this.deviation;
        }

        public setDeviation(value: number) {
            this.deviation = value;
        }

        public getSynchronizeDispatchWith(): Array<number> {
            return this.synchronizeDispatchWith;
        }

        public setSynchronizeDispatchWith(value: Array<number>) {
            this.synchronizeDispatchWith = value;
        }

        public synchonizeDispatchWithStation(value : Station) {
            this.synchronizeDispatchWith.push(value.getStationNumber());
        }

        public synchonizeDispatchWith(value : number) {
            this.synchronizeDispatchWith.push(value);
        }
    }
}