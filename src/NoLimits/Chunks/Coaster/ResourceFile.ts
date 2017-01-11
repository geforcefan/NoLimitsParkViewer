namespace NLParkViewer.NoLimits.Chunks.Coaster {
    export class ResourceFile {
        private id : number = null;
        private path : string = "";

        public getId(): number {
            return this.id;
        }

        public setId(value: number) {
            this.id = value;
        }

        public getPath(): string {
            return this.path;
        }

        public setPath(value: string) {
            this.path = value;
        }
    }
}