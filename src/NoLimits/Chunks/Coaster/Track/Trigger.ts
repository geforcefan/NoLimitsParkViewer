namespace NLParkViewer.NoLimits.Chunks.Coaster.Track {
    export enum TriggerTrainEvent {
        None = 0,
        UnlockSpinning = 1,
        LockSpinning = 2,
        UnlockSwinging = 3,
        LockSwinging = 4
    }

    export class Trigger {
        private position : number = 0;
        private name : string = "";
        private trainEvent : TriggerTrainEvent = TriggerTrainEvent.None;
        
        public getPosition(): number {
            return this.position;
        }

        public setPosition(value: number) {
            this.position = value;
        }

        public getName(): string {
            return this.name;
        }

        public setName(value: string) {
            this.name = value;
        }

        public getTrainEvent(): TriggerTrainEvent {
            return this.trainEvent;
        }

        public setTrainEvent(value: TriggerTrainEvent) {
            this.trainEvent = value;
        }
    }
}