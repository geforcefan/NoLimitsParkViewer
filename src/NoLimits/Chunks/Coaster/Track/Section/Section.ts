namespace NLParkViewer.NoLimits.Chunks.Coaster.Track.Section {
    export enum SectionType {
        Track = 0,
        Transport = 1,
        Lift = 2,
        Brake = 3,
        Station = 4,
        Storage = 5
    }

    export class Section {
        private sectionType : SectionType = SectionType.Track;
        private name : string = "";

        public getSectionType(): SectionType {
            return this.sectionType;
        }

        public setSectionType(value: SectionType) {
            this.sectionType = value;
        }

        public getName(): string {
            return this.name;
        }

        public setName(value: string) {
            this.name = value;
        }
    }
}