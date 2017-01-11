/// <reference path="SpecialTrack.ts"/>

namespace NLParkViewer.NoLimits.Chunks.Coaster.Track.SpecialTrack {
    export enum SwitchTrackDisplay {
        StructureSimple = 0,
        StructureOff = 1
    }

    export enum SwitchTrackDirection {
        LeftRight = 0,
        StraightLeft = 1,
        StraightRight = 2
    }

    export enum SwitchTrackStyle {
        ShiftHorizontally = 0,
        RotateVertically = 1,
        RotateHorizontally = 2
    }

    export class SwitchTrack extends SpecialTrack {
        private defaultTrack : number = 0;
        private displayStructure : SwitchTrackDisplay = SwitchTrackDisplay.StructureSimple;
        private direction : SwitchTrackDirection = SwitchTrackDirection.LeftRight
        private style : SwitchTrackStyle = SwitchTrackStyle.ShiftHorizontally;

        constructor() {
            super();
            this.setSpecialTrackType(SpecialTrackType.SwitchTrack);
        }

        public getDefaultTrack(): number {
            return this.defaultTrack;
        }

        public setDefaultTrack(value: number) {
            this.defaultTrack = value;
        }

        public getDisplayStructure(): SwitchTrackDisplay {
            return this.displayStructure;
        }

        public setDisplayStructure(value: SwitchTrackDisplay) {
            this.displayStructure = value;
        }

        public getDirection(): SwitchTrackDirection {
            return this.direction;
        }

        public setDirection(value: SwitchTrackDirection) {
            this.direction = value;
        }

        public getStyle(): SwitchTrackStyle {
            return this.style;
        }

        public setStyle(value: SwitchTrackStyle) {
            this.style = value;
        }
    }
}