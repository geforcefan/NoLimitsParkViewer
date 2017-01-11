/// <reference path="ISectionSegment.ts"/>
/// <reference path="Section/Section.ts"/>
/// <reference path="Segment/Segment.ts"/>

namespace NLParkViewer.NoLimits.Chunks.Coaster.Track {
    export class Separator implements ISectionSegment {
        private position : number = 0;

        private section : Section.Section = new Section.Section();
        private segment : Segment.Segment = new Segment.Segment();

        public getPosition(): number {
            return this.position;
        }

        public setPosition(value: number) {
            this.position = value;
        }

        public getSection(): Section.Section {
            return this.section;
        }

        public setSection(value: Section.Section) {
            this.section = value;
        }

        public getSegment(): Segment.Segment {
            return this.segment;
        }

        public setSegment(value: Segment.Segment) {
            this.segment = value;
        }
    }
}