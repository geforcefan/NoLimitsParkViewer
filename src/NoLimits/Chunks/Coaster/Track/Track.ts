namespace NLParkViewer.NoLimits.Chunks.Coaster.Track {
    export enum TrackType {
        Custom = 0,
        SpecialTrack = 1
    }

    export class Track {
        public trackType : TrackType = TrackType.Custom;

        public getTrackType(): TrackType {
            return this.trackType;
        }

        public setTrackType(value: TrackType) {
            this.trackType = value;
        }
    }
}