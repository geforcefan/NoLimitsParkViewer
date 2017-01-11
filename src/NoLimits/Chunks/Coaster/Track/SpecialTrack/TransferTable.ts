/// <reference path="SpecialTrack.ts"/>

namespace NLParkViewer.NoLimits.Chunks.Coaster.Track.SpecialTrack {
    export enum TransferTableDisplay {
        StructureSimple = 0,
        StructureOff = 1
    }

    export class TransferTable extends SpecialTrack {
        private defaultTrack : number = 0;
        private length : number = 20;
        private distance : number = 3;
        private displayStructure : TransferTableDisplay = TransferTableDisplay.StructureSimple;

        constructor() {
            super();
            this.setSpecialTrackType(SpecialTrackType.TransferTable);
        }

        public getDefaultTrack(): number {
            return this.defaultTrack;
        }

        public setDefaultTrack(value: number) {
            this.defaultTrack = value;
        }

        public getLength(): number {
            return this.length;
        }

        public setLength(value: number) {
            this.length = value;
        }

        public getDistance(): number {
            return this.distance;
        }

        public setDistance(value: number) {
            this.distance = value;
        }

        public getDisplayStructure(): TransferTableDisplay {
            return this.displayStructure;
        }

        public setDisplayStructure(value: TransferTableDisplay) {
            this.displayStructure = value;
        }
    }
}