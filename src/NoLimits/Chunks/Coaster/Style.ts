namespace NLParkViewer.NoLimits.Chunks.Coaster {
    export enum StyleType {
        Coaster4D = 22,
        ClassicSteelLoopingCoaster = 0,
        ClassicSteelLoopingCoasterModern = 49,
        CorkscrewCoaster = 1,
        GerstlauerBobsledCoaster = 39,
        GerstlauerEuroFighter = 36,
        GerstlauerEuroFighter2 = 42,
        GerstlauerSpinningCoaster = 41,
        GravityGroupTimberliner = 71,
        HyperCoaster = 5,
        HyperCoaster4SeatsAcross = 8,
        HyperCoaster4SeatsStaggeredWithScoops = 64,
        HyperCoaster4SeatsStaggered = 63,
        InvertedCoaster2Seats = 2,
        InvertedCoaster4Seats = 4,
        InvertedFaceToFaceCoaster = 14,
        InvertedImpulseCoaster = 15,
        LimLaunchedCoaster = 13,
        MackLaunchedCoaster = 62,
        MaurerSoehneSpinningCoaster = 20,
        MaurerSoehneXCarCoaster = 50,
        RocketCoaster = 33,
        SuspendedCoaster = 16,
        TwistedDiveCoaster = 21,
        TwistedFloorlessCoaster = 6,
        TwistedFlyingCoaster = 23,
        TwistedSitdownCoaster = 3,
        TwistedStandUpCoaster = 7,
        TwistedWingCoaster = 76,
        VekomaFlyingDutchman = 18,
        VekomaMinetrainCoaster = 34,
        VekomaMinetrainCoasterWithLocomotive = 35,
        VekomaMotorbikeCoaster = 38,
        WoodenCoasterClassic4 = 10,
        WoodenCoasterClassic6 = 11,
        WoodenCoasterTrailered2 = 9,
        WoodenCoasterTrailered4 = 12,
        ZamperlaTwisterCoaster = 55
    }

    export enum StyleWorn {
        New = 1,
        Worn = 0,
        Rusted = 2
    }

    export enum StyleRail {
        Standard = 0,
        Striped = 1
    }
    
    export class Style {
        private styleType : StyleType = StyleType.ClassicSteelLoopingCoaster;
        private wornType : StyleWorn = StyleWorn.New;
        private railType : StyleRail = StyleRail.Standard;

        public getStyleType(): StyleType {
            return this.styleType;
        }

        public setStyleType(value: StyleType) {
            this.styleType = value;
        }

        public getWornType(): StyleWorn {
            return this.wornType;
        }

        public setWornType(value: StyleWorn) {
            this.wornType = value;
        }

        public getRailType(): StyleRail {
            return this.railType;
        }

        public setRailType(value: StyleRail) {
            this.railType = value;
        }
    }
}