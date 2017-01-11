/// <reference path="BeamConnection.ts"/>
/// <reference path="BeamNode.ts"/>

namespace NLParkViewer.NoLimits.Chunks.Coaster.Support {
    export enum SupportNodeFlags {
        NoCapsForLODsHint = 0,
        DimAsIfItWasInATunnel = 1,
        NoStartCapHint = 4,
        NoEndCapHint = 5,
        RotationModeAzimuth = 6
    }

    export enum SupportNodeColorMode {
        CustomColor = 0,
        SupportColor = 1,
        HandrailsColor = 2,
        CatwalkColor = 3,
        SpineColor = 4
    }

    export class ISupportNode {
        private flag1: number = 0;
        private flag2: number = 0;
        private flag3: number = 0;

        private color : vec3 = vec3.fromValues(0, 0, 0);

        private colorMode : SupportNodeColorMode = SupportNodeColorMode.CustomColor;

        public hasDimAsIfItWasInATunnel() : boolean {
            return this.hasFlag1(SupportNodeFlags.DimAsIfItWasInATunnel);
        }

        public getColor(): vec3 {
            return this.color;
        }

        public setColor(value: vec3) {
            this.color = value;
        }

        public getColorMode() : SupportNodeColorMode {
            if(this.hasFlag3(4) && !this.hasFlag3(5))
                return SupportNodeColorMode.SupportColor;
            else if(this.hasFlag3(5) && !this.hasFlag3(4))
                return SupportNodeColorMode.HandrailsColor;
            else if(this.hasFlag3(4) && this.hasFlag3(5))
                return SupportNodeColorMode.CatwalkColor;
            else if(this.hasFlag3(6))
                return SupportNodeColorMode.SpineColor;
            else
                return SupportNodeColorMode.CustomColor;
        }

        public setColorMode(value : SupportNodeColorMode) {
            this.setWithCheckFlag3(4, false);
            this.setWithCheckFlag3(5, false);
            this.setWithCheckFlag3(6, false);

            switch(value) {
                case SupportNodeColorMode.SpineColor:
                    this.setWithCheckFlag3(6, true);
                    break;
                case SupportNodeColorMode.CatwalkColor:
                    this.setWithCheckFlag3(4, true);
                    this.setWithCheckFlag3(5, true);
                    break;
                case SupportNodeColorMode.HandrailsColor:
                    this.setWithCheckFlag3(5, true);
                    break;
                case SupportNodeColorMode.SupportColor:
                    this.setWithCheckFlag3(4, true);
                    break;
            }

            this.colorMode = this.getColorMode();
        }

        public setFlag1(value : number) {
            this.flag1 = value;
            this.colorMode = this.getColorMode();
        }

        public setFlag2(value : number) {
            this.flag2 = value;
            this.colorMode = this.getColorMode();
        }

        public setFlag3(value : number) {
            this.flag3 = value;
            this.colorMode = this.getColorMode();
        }

        protected hasFlag1(flag: number): boolean {
            return this.flag1 & (1 << flag) ? true : false;
        }

        protected hasFlag2(flag: number): boolean {
            return this.flag2 & (1 << flag) ? true : false;
        }

        protected hasFlag3(flag: number): boolean {
            return this.flag3 & (1 << flag) ? true : false;
        }

        protected setWithCheckFlag1(flag: number, state: boolean): void {
            if (state && !this.hasFlag1(flag)) {
                this.flag1 |= 1 << flag;
            } else if (!state && this.hasFlag1(flag)) {
                this.flag1 &= ~(1 << flag);
            }
        }

        protected setWithCheckFlag2(flag: number, state: boolean) : void {
            if (state && !this.hasFlag2(flag)) {
                this.flag2 |= 1 << flag;
            } else if (!state && this.hasFlag2(flag)) {
                this.flag2 &= ~(1 << flag);
            }
        }

        protected setWithCheckFlag3(flag: number, state: boolean) : void {
            if (state && !this.hasFlag3(flag)) {
                this.flag3 |= 1 << flag;
            } else if (!state && this.hasFlag3(flag)) {
                this.flag3 &= ~(1 << flag);
            }
        }
    }
}