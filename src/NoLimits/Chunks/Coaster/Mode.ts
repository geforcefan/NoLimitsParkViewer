/// <reference path="CustomFriction.ts"/>

namespace NLParkViewer.NoLimits.Chunks.Coaster {
    export enum ModeOperation {
        ClosedCircuit = 0,
        Shuttle = 1,
        Scripted = 2
    }

    export enum ModeSplinePosition {
        CenterOfRail = 0,
        HeartLineCurrentStyle = 1,
        Custom = 2
    }

    export enum ModePhysicsModel {
        NL2 = 0,
        NL2CustomFriction = 3,
        NL22 = 4,
        NL16 = 1,
        NL1 = 2
    }

    export class Mode {
        private operationMode : ModeOperation = ModeOperation.ClosedCircuit;
        private physicsModel : ModePhysicsModel = ModePhysicsModel.NL22;
        private splinePosition : ModeSplinePosition = ModeSplinePosition.CenterOfRail;
        private splinePositionOffset : vec2 = vec2.fromValues(0, 0);
        private customFriction : CustomFriction = new CustomFriction();

        public getOperationMode(): ModeOperation {
            return this.operationMode;
        }

        public setOperationMode(value: ModeOperation) {
            this.operationMode = value;
        }

        public getPhysicsModel(): ModePhysicsModel {
            return this.physicsModel;
        }

        public setPhysicsModel(value: ModePhysicsModel) {
            this.physicsModel = value;
        }

        public getSplinePosition(): ModeSplinePosition {
            return this.splinePosition;
        }

        public setSplinePosition(value: ModeSplinePosition) {
            this.splinePosition = value;
        }

        public getSplinePositionOffset(): vec2 {
            return this.splinePositionOffset;
        }

        public setSplinePositionOffset(value: vec2) {
            this.splinePositionOffset = value;
        }

        public getCustomFriction(): CustomFriction {
            return this.customFriction;
        }

        public setCustomFriction(value: CustomFriction) {
            this.customFriction = value;
        }
    }
}