/// <reference path="IndividualColor.ts"/>

namespace NLParkViewer.NoLimits.Chunks.Coaster.Train {
    export class Car {
        private individualColor : IndividualColor = new IndividualColor();
        private isZeroCar : boolean = false;

        getIndividualColor(): IndividualColor {
            return this.individualColor;
        }

        setIndividualColor(value: IndividualColor) {
            this.individualColor = value;
        }

        getIsZeroCar(): boolean {
            return this.isZeroCar;
        }

        setIsZeroCar(value: boolean) {
            this.isZeroCar = value;
        }
    }
}