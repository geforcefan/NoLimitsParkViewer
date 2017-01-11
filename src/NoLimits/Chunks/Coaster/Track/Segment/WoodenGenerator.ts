namespace NLParkViewer.NoLimits.Chunks.Coaster.Track.Segment {
    export enum WoodenGeneratorFlag {
        IndividualSettings = 0,
        WideSupportsLeft = 1,
        WideSupportsRight = 2,
        CatwalksLeft = 3,
        CatwalksRight = 4,
        HandrailsLeft = 5,
        HandrailsRight = 6,
        CollisionDetection = 7,
        EnableSupports = 0,
        BentSpacing625Ft = 1,
        BentSpacing45Ft = 2
    }

    export enum WoodenGeneratorBentSpacing {
        Spacing9Ft = 0,
        Spacing625Ft = 1,
        Spacing45Ft = 2
    }

    export class WoodenGenerator {
        private flag1: number = 0;
        private flag2: number = 0;

        public getUseIndividualSettings(): boolean {
            return this.hasFlag2(WoodenGeneratorFlag.IndividualSettings);
        }

        public getUseLeftWideSupports(): boolean {
            return this.hasFlag2(WoodenGeneratorFlag.WideSupportsLeft);
        }

        public getUseRightWideSupports(): boolean {
            return this.hasFlag2(WoodenGeneratorFlag.WideSupportsRight);
        }

        public getUseLeftCatwalks(): boolean {
            return this.hasFlag2(WoodenGeneratorFlag.CatwalksLeft);
        }

        public getUseRightCatwalks(): boolean {
            return this.hasFlag2(WoodenGeneratorFlag.CatwalksRight);
        }

        public getUseLeftHandrails(): boolean {
            return this.hasFlag2(WoodenGeneratorFlag.HandrailsLeft);
        }

        public getUseRightHandrails(): boolean {
            return this.hasFlag2(WoodenGeneratorFlag.HandrailsRight);
        }

        public getCollisionDetection(): boolean {
            return this.hasFlag2(WoodenGeneratorFlag.CollisionDetection);
        }

        public getEnableSupports(): boolean {
            return this.hasFlag1(WoodenGeneratorFlag.EnableSupports);
        }

        public getBentSpacing(): number {
            let val: number;

            if (!this.hasFlag1(WoodenGeneratorFlag.BentSpacing625Ft) && !this.hasFlag1(WoodenGeneratorFlag.BentSpacing45Ft)) {
                val = WoodenGeneratorBentSpacing.Spacing9Ft;
            }

            if (this.hasFlag1(WoodenGeneratorFlag.BentSpacing625Ft) && !this.hasFlag1(WoodenGeneratorFlag.BentSpacing45Ft)) {
                val = WoodenGeneratorBentSpacing.Spacing625Ft;
            }

            if (!this.hasFlag1(WoodenGeneratorFlag.BentSpacing625Ft) && this.hasFlag1(WoodenGeneratorFlag.BentSpacing45Ft)) {
                val = WoodenGeneratorBentSpacing.Spacing45Ft;
            }
            return val;
        }

        public setUseIndividualSettings(state: boolean) {
            this.setWithCheckFlag2(WoodenGeneratorFlag.IndividualSettings, state);
        }

        public setUseLeftWideSupports(state: boolean) {
            this.setWithCheckFlag2(WoodenGeneratorFlag.WideSupportsLeft, state);
        }

        public setUseRightWideSupports(state: boolean) {
            this.setWithCheckFlag2(WoodenGeneratorFlag.WideSupportsRight, state);
        }

        public setUseLeftCatwalks(state: boolean) {
            this.setWithCheckFlag2(WoodenGeneratorFlag.CatwalksLeft, state);
        }

        public setUseRightCatwalks(state: boolean) {
            this.setWithCheckFlag2(WoodenGeneratorFlag.CatwalksRight, state);
        }

        public setUseLeftHandrails(state: boolean) {
            this.setWithCheckFlag2(WoodenGeneratorFlag.HandrailsLeft, state);
        }

        public setUseRightHandrails(state: boolean): void {
            this.setWithCheckFlag2(WoodenGeneratorFlag.HandrailsRight, state);
        }

        public setCollisionDetection(state: boolean): void {
            this.setWithCheckFlag2(WoodenGeneratorFlag.CollisionDetection, state);
        }

        public setEnableSupports(state: boolean): void {
            this.setWithCheckFlag1(WoodenGeneratorFlag.EnableSupports, state);
        }

        public setBentSpacing(spacing: number): void {
            this.setWithCheckFlag1(WoodenGeneratorFlag.BentSpacing625Ft, false);
            this.setWithCheckFlag1(WoodenGeneratorFlag.BentSpacing45Ft, false);

            switch (spacing) {
                case WoodenGeneratorBentSpacing.Spacing625Ft:
                    this.setWithCheckFlag1(WoodenGeneratorFlag.BentSpacing625Ft, true);
                    break;
                case WoodenGeneratorBentSpacing.Spacing45Ft:
                    this.setWithCheckFlag1(WoodenGeneratorFlag.BentSpacing45Ft, true);
                    break;
            }
        }

        private setWithCheckFlag2(flag: number, state: boolean) : void {
            if (state && !this.hasFlag2(flag)) {
                this.flag2 |= 1 << flag;
            } else if (!state && this.hasFlag2(flag)) {
                this.flag2 &= ~(1 << flag);
            }
        }

        private setWithCheckFlag1(flag: number, state: boolean): void {
            if (state && !this.hasFlag1(flag)) {
                this.flag1 |= 1 << flag;
            } else if (!state && this.hasFlag1(flag)) {
                this.flag1 &= ~(1 << flag);
            }
        }

        public setFlag1(flag1: number): void {
            this.flag1 = flag1;
        }

        public setFlag2(flag2: number): void {
            this.flag2 = flag2;
        }

        public getFlag1(): number {
            return this.flag1;
        }

        public getFlag2(): number {
            return this.flag2;
        }

        private hasFlag2(flag: number): boolean {
            return this.flag2 & (1 << flag) ? true : false;
        }

        private  hasFlag1(flag: number): boolean {
            return this.flag1 & (1 << flag) ? true : false;
        }
    }
}