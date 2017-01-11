namespace NLParkViewer.NoLimits.Chunks.Coaster.Track.Segment {
    export enum SegmentSpineColorScheme {
        Plain = 0,
        TopAccented = 1,
        BottomAccented = 2,
        Stripe = 3
    }

    export enum SegmentTunnel {
        None = 0,
        Steel = 1,
        Wooden = 2,
        RoundConcrete = 3,
        RectangularConcrete = 4,
        Virtual = 5
    }

    export enum SegmentTieSpacing {
        LowestStress = 0,
        LowerStress = 1,
        LowStress = 2,
        Normal = 3,
        HighStress = 4,
        HighestStress = 5
    }

    export class Segment {
        private invisibleSegment : boolean = false;

        private leftRailingAndCatwalk : boolean = false;
        private leftRailingLights : boolean = false;
        private leftRailingLightsColor : vec3 = vec3.fromValues(0, 0, 0);

        private rightRailingAndCatwalk : boolean = false;
        private rightRailingLights : boolean = false;
        private rightRailingLightsColor : vec3 = vec3.fromValues(0, 0, 0);

        private transparentCatwalks : boolean = false;

        private useRailsColor : boolean = false;
        private useCrossTiesColor : boolean = false;
        private useMainSpineColor : boolean = false;
        private useHandrailsColor : boolean = false;
        private useCatwalksColor = false;

        private railColor : vec3 = vec3.fromValues(0, 0, 0);
        private crossTiesColor : vec3 = vec3.fromValues(0, 0, 0);
        private mainSpineColor : vec3 = vec3.fromValues(0, 0, 0);
        private handrailsColor : vec3 = vec3.fromValues(0, 0, 0);
        private catwalksColor : vec3 = vec3.fromValues(0, 0, 0);

        private useSpineColorScheme : boolean = false;
        private spineColorScheme : SegmentSpineColorScheme = SegmentSpineColorScheme.Plain;

        private tunnel : SegmentTunnel = SegmentTunnel.None;
        private spineType : number = 0;
        private tieSpacing : SegmentTieSpacing = SegmentTieSpacing.Normal;

        private woodenSupportGenerator : WoodenGenerator = new WoodenGenerator();

        public getInvisibleSegment(): boolean {
            return this.invisibleSegment;
        }

        public setInvisibleSegment(value: boolean) {
            this.invisibleSegment = value;
        }

        public getLeftRailingAndCatwalk(): boolean {
            return this.leftRailingAndCatwalk;
        }

        public setLeftRailingAndCatwalk(value: boolean) {
            this.leftRailingAndCatwalk = value;
        }

        public getLeftRailingLights(): boolean {
            return this.leftRailingLights;
        }

        public setLeftRailingLights(value: boolean) {
            this.leftRailingLights = value;
        }

        public getLeftRailingLightsColor(): vec3 {
            return this.leftRailingLightsColor;
        }

        public setLeftRailingLightsColor(value: vec3) {
            this.leftRailingLightsColor = value;
        }

        public getRightRailingAndCatwalk(): boolean {
            return this.rightRailingAndCatwalk;
        }

        public setRightRailingAndCatwalk(value: boolean) {
            this.rightRailingAndCatwalk = value;
        }

        public getRightRailingLights(): boolean {
            return this.rightRailingLights;
        }

        public setRightRailingLights(value: boolean) {
            this.rightRailingLights = value;
        }

        public getRightRailingLightsColor(): vec3 {
            return this.rightRailingLightsColor;
        }

        public setRightRailingLightsColor(value: vec3) {
            this.rightRailingLightsColor = value;
        }

        public getTransparentCatwalks(): boolean {
            return this.transparentCatwalks;
        }

        public setTransparentCatwalks(value: boolean) {
            this.transparentCatwalks = value;
        }

        public getUseRailsColor(): boolean {
            return this.useRailsColor;
        }

        public setUseRailsColor(value: boolean) {
            this.useRailsColor = value;
        }

        public getUseCrossTiesColor(): boolean {
            return this.useCrossTiesColor;
        }

        public setUseCrossTiesColor(value: boolean) {
            this.useCrossTiesColor = value;
        }

        public getUseMainSpineColor(): boolean {
            return this.useMainSpineColor;
        }

        public setUseMainSpineColor(value: boolean) {
            this.useMainSpineColor = value;
        }

        public getUseHandrailsColor(): boolean {
            return this.useHandrailsColor;
        }

        public setUseHandrailsColor(value: boolean) {
            this.useHandrailsColor = value;
        }

        public getUseCatwalksColor(): boolean {
            return this.useCatwalksColor;
        }

        public setUseCatwalksColor(value: boolean) {
            this.useCatwalksColor = value;
        }

        public getRailColor(): vec3 {
            return this.railColor;
        }

        public setRailColor(value: vec3) {
            this.railColor = value;
        }

        public getCrossTiesColor(): vec3 {
            return this.crossTiesColor;
        }

        public setCrossTiesColor(value: vec3) {
            this.crossTiesColor = value;
        }

        public getMainSpineColor(): vec3 {
            return this.mainSpineColor;
        }

        public setMainSpineColor(value: vec3) {
            this.mainSpineColor = value;
        }

        public getHandrailsColor(): vec3 {
            return this.handrailsColor;
        }

        public setHandrailsColor(value: vec3) {
            this.handrailsColor = value;
        }

        public getCatwalksColor(): vec3 {
            return this.catwalksColor;
        }

        public setCatwalksColor(value: vec3) {
            this.catwalksColor = value;
        }

        public getUseSpineColorScheme(): boolean {
            return this.useSpineColorScheme;
        }

        public setUseSpineColorScheme(value: boolean) {
            this.useSpineColorScheme = value;
        }

        public getSpineColorScheme(): SegmentSpineColorScheme {
            return this.spineColorScheme;
        }

        public setSpineColorScheme(value: SegmentSpineColorScheme) {
            this.spineColorScheme = value;
        }

        public getTunnel(): SegmentTunnel {
            return this.tunnel;
        }

        public setTunnel(value: SegmentTunnel) {
            this.tunnel = value;
        }

        public getSpineType(): number {
            return this.spineType;
        }

        public setSpineType(value: number) {
            this.spineType = value;
        }

        public getTieSpacing(): SegmentTieSpacing {
            return this.tieSpacing;
        }

        public setTieSpacing(value: SegmentTieSpacing) {
            this.tieSpacing = value;
        }

        public getWoodenSupportGenerator(): WoodenGenerator {
            return this.woodenSupportGenerator;
        }

        public setWoodenSupportGenerator(value: WoodenGenerator) {
            this.woodenSupportGenerator = value;
        }
    }
}