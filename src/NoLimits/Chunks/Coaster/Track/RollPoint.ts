namespace NLParkViewer.NoLimits.Chunks.Coaster.Track {
    export class RollPoint {
        private position : number = 0;
        private roll : number = 0;
        private vertical : boolean = false;
        private strict : boolean = false;
        private rollOffset : number = 0;
        private nodeIndex : number = 0;

        constructor(object : any = null) {
            if(object !== null)
                this.setFromObject(object);
        }

        public getPosition(): number {
            return this.position;
        }

        public setPosition(value: number) {
            this.position = value;
        }

        public getRoll(): number {
            return this.roll;
        }

        public setRoll(value: number) {
            this.roll = value;
        }

        public getRollOffset(): number {
            return this.rollOffset;
        }

        public setRollOffset(value: number) {
            this.rollOffset = value;
        }

        public getNodeIndex(): number {
            return this.nodeIndex;
        }

        public setNodeIndex(value: number) {
            this.nodeIndex = value;
        }

        public getVertical(): boolean {
            return this.vertical;
        }

        public setVertical(value: boolean) {
            this.vertical = value;
        }

        public isStrict(): boolean {
            return this.strict;
        }

        public setStrict(value: boolean) {
            this.strict = value;
        }
        
        public setFromObject(value : any) {
            this.setPosition(value.position);
            this.setRoll(value.roll);
            this.setVertical(value.vertical);
            this.setStrict(value.strict);
            this.setRollOffset(value.rollOffset);
            this.setNodeIndex(value.nodeIndex);
        }
    }
}