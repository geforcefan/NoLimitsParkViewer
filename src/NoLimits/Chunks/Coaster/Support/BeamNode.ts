namespace NLParkViewer.NoLimits.Chunks.Coaster.Support {
    export class BeamNode {
        private position : number = 0;
        private flange : boolean = false;

        public getPosition(): number {
            return this.position;
        }

        public setPosition(value: number) {
            this.position = value;
        }

        public isFlange(): boolean {
            return this.flange;
        }

        public setIsFlange(value: boolean) {
            this.flange = value;
        }
    }
}