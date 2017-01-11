namespace NLParkViewer.NoLimits.Chunks.Info {
    export class Weather {
        private rainIntensity : number = 1;
        private snowIntensity : number = 1;
        private fogIntensity : number = 1;
        private windIntensity : number = 1;
        private overcastIntensity : number = 1;
        private cloudsIntensity : number = 1;
        private thunderIntensity : number = 1;
        private overwriteDefaultWeather : boolean = false;

        public static convertWindIntensity(value : number, fromWindIntensity : boolean = true) : number {
            if (fromWindIntensity) {
                return (1 * value) / 34.75186920166;
            } else {
                return (34.75186920166 * value) / 1;
            }
        }

        public static convertFogIntensity(value : number, fromFogIntensity : boolean = true) : number {
            if (fromFogIntensity) {
                return (1.0 * value) / 0.05;
            } else {
                return (0.050000000745058 * value) / 1;
            }
        }

        public getRainIntensity(): number {
            return this.rainIntensity;
        }

        public setRainIntensity(value: number) {
            this.rainIntensity = value;
        }

        public getSnowIntensity(): number {
            return this.snowIntensity;
        }

        public setSnowIntensity(value: number) {
            this.snowIntensity = value;
        }

        public getFogIntensity(): number {
            return this.fogIntensity;
        }

        public setFogIntensity(value: number) {
            this.fogIntensity = value;
        }

        public getWindIntensity(): number {
            return this.windIntensity;
        }

        public setWindIntensity(value: number) {
            this.windIntensity = value;
        }

        public getOvercastIntensity(): number {
            return this.overcastIntensity;
        }

        public setOvercastIntensity(value: number) {
            this.overcastIntensity = value;
        }

        public getCloudsIntensity(): number {
            return this.cloudsIntensity;
        }

        public setCloudsIntensity(value: number) {
            this.cloudsIntensity = value;
        }

        public getThunderIntensity(): number {
            return this.thunderIntensity;
        }

        public setThunderIntensity(value: number) {
            this.thunderIntensity = value;
        }

        public getOverwriteDefaultWeather(): boolean {
            return this.overwriteDefaultWeather;
        }

        public setOverwriteDefaultWeather(value: boolean) {
            this.overwriteDefaultWeather = value;
        }
    }
}