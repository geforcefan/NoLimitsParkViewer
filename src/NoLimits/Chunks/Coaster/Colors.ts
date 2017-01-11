namespace NLParkViewer.NoLimits.Chunks.Coaster {
    export class Colors {
        private wireframeTrack : vec3 = vec3.fromValues(0, 0, 0);
        private rails : vec3 = vec3.fromValues(0, 0, 0);
        private crossTies : vec3 = vec3.fromValues(0, 0, 0);
        private mainSpine : vec3 = vec3.fromValues(0, 0, 0);
        private car : vec3 = vec3.fromValues(0, 0, 0);
        private seat : vec3 = vec3.fromValues(0, 0, 0);
        private harness : vec3 = vec3.fromValues(0, 0, 0);
        private bogie : vec3 = vec3.fromValues(0, 0, 0);
        private chasiss : vec3 = vec3.fromValues(0, 0, 0);
        private supports : vec3 = vec3.fromValues(0, 0, 0);
        private tunnel : vec3 = vec3.fromValues(0, 0, 0);
        private handrails : vec3 = vec3.fromValues(0, 0, 0);
        private catwalks : vec3 = vec3.fromValues(0, 0, 0);
        private spineColorScheme : Track.Segment.SegmentSpineColorScheme = 0;

        public getWireframeTrack(): vec3 {
            return this.wireframeTrack;
        }

        public setWireframeTrack(value: vec3) {
            this.wireframeTrack = value;
        }

        public getRails(): vec3 {
            return this.rails;
        }

        public setRails(value: vec3) {
            this.rails = value;
        }

        public getCrossTies(): vec3 {
            return this.crossTies;
        }

        public setCrossTies(value: vec3) {
            this.crossTies = value;
        }

        public getMainSpine(): vec3 {
            return this.mainSpine;
        }

        public setMainSpine(value: vec3) {
            this.mainSpine = value;
        }

        public getCar(): vec3 {
            return this.car;
        }

        public setCar(value: vec3) {
            this.car = value;
        }

        public getSeat(): vec3 {
            return this.seat;
        }

        public setSeat(value: vec3) {
            this.seat = value;
        }

        public getHarness(): vec3 {
            return this.harness;
        }

        public setHarness(value: vec3) {
            this.harness = value;
        }

        public getBogie(): vec3 {
            return this.bogie;
        }

        public setBogie(value: vec3) {
            this.bogie = value;
        }

        public getChasiss(): vec3 {
            return this.chasiss;
        }

        public setChasiss(value: vec3) {
            this.chasiss = value;
        }

        public getSupports(): vec3 {
            return this.supports;
        }

        public setSupports(value: vec3) {
            this.supports = value;
        }

        public getTunnel(): vec3 {
            return this.tunnel;
        }

        public setTunnel(value: vec3) {
            this.tunnel = value;
        }

        public getHandrails(): vec3 {
            return this.handrails;
        }

        public setHandrails(value: vec3) {
            this.handrails = value;
        }

        public getCatwalks(): vec3 {
            return this.catwalks;
        }

        public setCatwalks(value: vec3) {
            this.catwalks = value;
        }

        public getSpineColorScheme(): Track.Segment.SegmentSpineColorScheme {
            return this.spineColorScheme;
        }

        public setSpineColorScheme(value: Track.Segment.SegmentSpineColorScheme) {
            this.spineColorScheme = value;
        }
    }
}