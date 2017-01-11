namespace NLParkViewer.NoLimits.Chunks.Coaster.Support {
    export enum FooterBaseStyle {
        SteelSquare = 0,
        SteelRound = 1,
        WoodSquare = 2,
        WoodRound = 3
    }

    export enum FooterConnectionStyle {
        Simple = 0,
        ExtendedA = 1,
        ExtendedB = 2
    }

    export enum FooterColorMode {
        Custom = 0,
        Support = 16,
        Handrail = 32,
        Catwalk = 48,
        Spine = 64
    }

    export class Footer {
        private position : vec3 = vec3.fromValues(0, 0, 0);
        private rotationAngle : number = 0;
        private aboveGround : number = 0;
        private baseStyle : FooterBaseStyle = FooterBaseStyle.SteelSquare;
        private connectionStyle : FooterConnectionStyle = FooterConnectionStyle.Simple;
        private colorMode : FooterColorMode = FooterColorMode.Support;
        private customColor : vec3 = vec3.fromValues(0, 0, 0);

        public getPosition(): vec3 {
            return this.position;
        }

        public setPosition(value: vec3) {
            this.position = value;
        }

        public getRotationAngle(): number {
            return this.rotationAngle;
        }

        public setRotationAngle(value: number) {
            this.rotationAngle = value;
        }

        public getAboveGround(): number {
            return this.aboveGround;
        }

        public setAboveGround(value: number) {
            this.aboveGround = value;
        }

        public getBaseStyle(): FooterBaseStyle {
            return this.baseStyle;
        }

        public setBaseStyle(value: FooterBaseStyle) {
            this.baseStyle = value;
        }

        public getConnectionStyle(): FooterConnectionStyle {
            return this.connectionStyle;
        }

        public setConnectionStyle(value: FooterConnectionStyle) {
            this.connectionStyle = value;
        }

        public getColorMode(): FooterColorMode {
            return this.colorMode;
        }

        public setColorMode(value: FooterColorMode) {
            this.colorMode = value;
        }

        public getCustomColor(): vec3 {
            return this.customColor;
        }

        public setCustomColor(value: vec3) {
            this.customColor = value;
        }
    }
}