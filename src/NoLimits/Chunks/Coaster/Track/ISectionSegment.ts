/// <reference path="Section/Section.ts"/>
/// <reference path="Segment/Segment.ts"/>

namespace NLParkViewer.NoLimits.Chunks.Coaster.Track {
    export interface ISectionSegment {
        getSection(): Section.Section;
        setSection(value: Section.Section) : void;

        getSegment(): Segment.Segment;
        setSegment(value: Segment.Segment) : void;
    }
}