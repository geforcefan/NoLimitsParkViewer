/// <reference path="Car.ts"/>
/// <reference path="IndividualColor.ts"/>

namespace NLParkViewer.NoLimits.Chunks.Coaster.Train {
    export class Train {
        private cars : Array<Car> = [];
        private individualColor : IndividualColor = new IndividualColor();
        private runBackward : boolean = false;
        private removedFromTrack : boolean = false;
        private startBlock : string = "";

        public getCars(): Array<Car> {
            return this.cars;
        }

        public setCars(value: Array<Car>) {
            this.cars = value;
        }

        public insertCar(value: Car) {
            this.cars.push(value);
        }

        public getIndividualColor(): IndividualColor {
            return this.individualColor;
        }

        public setIndividualColor(value: IndividualColor) {
            this.individualColor = value;
        }

        public getRunBackward(): boolean {
            return this.runBackward;
        }

        public setRunBackward(value: boolean) {
            this.runBackward = value;
        }

        public getRemovedFromTrack(): boolean {
            return this.removedFromTrack;
        }

        public setRemovedFromTrack(value: boolean) {
            this.removedFromTrack = value;
        }

        public getStartBlock(): string {
            return this.startBlock;
        }

        public setStartBlock(value: string) {
            this.startBlock = value;
        }
    }
}