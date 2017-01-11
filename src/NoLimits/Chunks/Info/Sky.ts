namespace NLParkViewer.NoLimits.Chunks.Info {
    export class Sky {
        private overrideDefaultDateTime : boolean = false;
        private currentDate : vec2 = null;
        private currentTime : vec2 = null;

        public getOverrideDefaultDateTime(): boolean {
            return this.overrideDefaultDateTime;
        }

        public setOverrideDefaultDateTime(value: boolean) {
            this.overrideDefaultDateTime = value;
        }

        public getCurrentDate(): vec2 {
            return this.currentDate;
        }

        public setCurrentDate(value: vec2) {
            this.currentDate = value;
        }

        public getCurrentTime(): vec2 {
            return this.currentTime;
        }

        public setCurrentTime(value: vec2) {
            this.currentTime = value;
        }
    }
}