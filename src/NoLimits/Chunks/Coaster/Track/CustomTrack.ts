/// <reference path="Track.ts"/>
/// <reference path="Vertex.ts"/>
/// <reference path="Separator.ts"/>
/// <reference path="Segment/Segment.ts"/>
/// <reference path="Section/Section.ts"/>
/// <reference path="Parameter4D.ts"/>
/// <reference path="Trigger.ts"/>
/// <reference path="RollPoint.ts"/>
/// <reference path="../Support/RailNode.ts"/>
/// <reference path="ISectionSegment.ts"/>

namespace NLParkViewer.NoLimits.Chunks.Coaster.Track {
    import RailNode = NLParkViewer.NoLimits.Chunks.Coaster.Support.RailNode;
    export class CustomTrack extends Track implements ISectionSegment {
        private vertices : Array<Vertex> = [];
        private separators : Array<Separator> = [];
        private parameters4D : Array<Parameter4D> = [];
        private triggers : Array<Trigger> = [];
        private rollPoints : Array<RollPoint> = [];
        private railNodes : Array<RailNode> = [];

        private firstRollPoint : RollPoint = new RollPoint();
        private lastRollPoint : RollPoint = new RollPoint();

        private section : Section.Section = new Section.Section();
        private segment : Segment.Segment = new Segment.Segment();

        constructor() {
            super();
            this.setTrackType(TrackType.Custom);
        }

        public getVertices(): Array<Vertex> {
            return this.vertices;
        }

        public setVertices(value: Array<Vertex>) {
            this.vertices = value;
        }

        public insertVertex(value: Vertex) {
            this.vertices.push(value);
        }

        public getSeparators(): Array<Separator> {
            return this.separators;
        }

        public setSeparators(value: Array<Separator>) {
            this.separators = value;
        }

        public insertSeparator(value: Separator) {
            this.separators.push(value);
        }

        public getParameters4D(): Array<Parameter4D> {
            return this.parameters4D;
        }

        public setParameters4D(value: Array<Parameter4D>) {
            this.parameters4D = value;
        }

        public insertParameter4D(value: Parameter4D) {
            this.parameters4D.push(value);
        }

        public getTriggers(): Array<Trigger> {
            return this.triggers;
        }

        public setTriggers(value: Array<Trigger>) {
            this.triggers = value;
        }

        public insertTrigger(value: Trigger) {
            this.triggers.push(value);
        }

        public getRollPoints(): Array<RollPoint> {
            return this.rollPoints;
        }

        public setRollPoints(value: Array<RollPoint>) {
            this.rollPoints = value;
        }

        public insertRollPoint(value: RollPoint) {
            this.rollPoints.push(value);
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

        public getFirstRollPoint(): RollPoint {
            return this.firstRollPoint;
        }

        public setFirstRollPoint(value: RollPoint) {
            this.firstRollPoint = value;
        }

        public getLastRollPoint(): RollPoint {
            return this.lastRollPoint;
        }

        public setLastRollPoint(value: RollPoint) {
            this.lastRollPoint = value;
        }

        public getRailNodes(): Array<RailNode> {
            return this.railNodes;
        }

        public setRailNodes(value: Array<RailNode>) {
            this.railNodes = value;
        }

        public insertRailNode(value: RailNode) {
            this.railNodes.push(value);
        }
    }
}