namespace NLParkViewer.NoLimits.Chunks.Coaster {
    export class CustomFriction {
        private constFrictionParameter : number = 0;
        private airResistanceParameter : number = 0;

        public getConstFrictionParameter(): number {
            return this.constFrictionParameter;
        }

        public setConstFrictionParameter(value: number) {
            this.constFrictionParameter = value;
        }

        public getAirResistanceParameter(): number {
            return this.airResistanceParameter;
        }

        public setAirResistanceParameter(value: number) {
            this.airResistanceParameter = value;
        }
    }
}