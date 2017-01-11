namespace NLParkViewer.NoLimits.Chunks.Coaster.Train {
    export class IndividualColor {
        private hasIndividualColor : boolean = false;

        private carColor : vec3 = vec3.fromValues(0, 0, 0);
        private seatColor : vec3 = vec3.fromValues(0, 0, 0);
        private harnessColor : vec3 = vec3.fromValues(0, 0, 0);
        private bogieColor : vec3 = vec3.fromValues(0, 0, 0);
        private chassisColor : vec3 = vec3.fromValues(0, 0, 0);

        private carTexture1 : string = "";
        private carTexture2 : string = "";

        getCarColor(): vec3 {
            return this.carColor;
        }

        setCarColor(value: vec3) {
            this.carColor = value;
        }

        getSeatColor(): vec3 {
            return this.seatColor;
        }

        setSeatColor(value: vec3) {
            this.seatColor = value;
        }

        getHarnessColor(): vec3 {
            return this.harnessColor;
        }

        setHarnessColor(value: vec3) {
            this.harnessColor = value;
        }

        getBogieColor(): vec3 {
            return this.bogieColor;
        }

        setBogieColor(value: vec3) {
            this.bogieColor = value;
        }

        getChassisColor(): vec3 {
            return this.chassisColor;
        }

        setChassisColor(value: vec3) {
            this.chassisColor = value;
        }

        getCarTexture1(): string {
            return this.carTexture1;
        }

        setCarTexture1(value: string) {
            this.carTexture1 = value;
        }

        getCarTexture2(): string {
            return this.carTexture2;
        }

        setCarTexture2(value: string) {
            this.carTexture2 = value;
        }

        getHasIndividualColor(): boolean {
            return this.hasIndividualColor;
        }

        setHasIndividualColor(value: boolean) {
            this.hasIndividualColor = value;
        }
    }
}