namespace NLParkViewer.NoLimits.Chunks.Coaster.Track {
    export class Vertex {
        public position : vec4 = vec4.fromValues(0, 0, 0, 1);
        public locked : boolean = false;
        public strict : boolean = false;

        constructor(object : any = null) {
            if(object !== null)
                this.setFromObject(object);
        }

        public getPosition(): vec4 {
            return this.position;
        }

        public setPosition(value: vec4) {
            this.position = value;
        }

        public getLocked(): boolean {
            return this.locked;
        }

        public setLocked(value: boolean) {
            this.locked = value;
        }

        public isStrict(): boolean {
            return this.strict;
        }

        public setStrict(value: boolean) {
            this.strict = value;
        }

        public setFromObject(value : any) {
            this.setLocked(value.locked);
            this.setStrict(value.strict);
            this.setPosition(vec4.fromValues(
                value.position[0],
                value.position[1],
                value.position[2],
                value.position[3]
            ));
        }
    }
}