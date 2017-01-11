/// <reference path="../Track.ts"/>
/// <reference path="../Segment/Segment.ts"/>
/// <reference path="../Section/Section.ts"/>
/// <reference path="../ISectionSegment.ts"/>

namespace NLParkViewer.NoLimits.Chunks.Coaster.Track.SpecialTrack {
    export enum SpecialTrackType {
        SwitchTrack = 0,
        TransferTable = 1
    }

    export class SpecialTrack extends Track implements ISectionSegment {
        private specialTrackType : SpecialTrackType = SpecialTrackType.SwitchTrack;

        private name : string = null;

        private position : vec3 = vec3.fromValues(0, 0, 0);
        private rotation : vec3 = vec3.fromValues(0, 0, 0);

        private switchTime : number = 15;

        private section : Section.Section = new Section.Section();
        private segment : Segment.Segment = new Segment.Segment();

        private inputs : Array<number> = [];
        private outputs : Array<number> = [];

        constructor() {
            super();
            this.setTrackType(TrackType.SpecialTrack);
        }

        public getSpecialTrackType(): SpecialTrackType {
            return this.specialTrackType;
        }

        public setSpecialTrackType(value: SpecialTrackType) {
            this.specialTrackType = value;
        }

        public getName(): string {
            return this.name;
        }

        public setName(value: string) {
            this.name = value;
        }

        public getPosition(): vec3 {
            return this.position;
        }

        public setPosition(value: vec3) {
            this.position = value;
        }

        public getRotation(): vec3 {
            return this.rotation;
        }

        public setRotation(value: vec3) {
            this.rotation = value;
        }

        public getSwitchTime(): number {
            return this.switchTime;
        }

        public setSwitchTime(value: number) {
            this.switchTime = value;
        }

        public getInputs(): Array<number> {
            return this.inputs;
        }

        public setInputs(value: Array<number>) {
            this.inputs = value;
        }

        public insertInput(value: number) {
            this.inputs.push(value);
        }

        public getOutputs(): Array<number> {
            return this.outputs;
        }

        public setOutputs(value: Array<number>) {
            this.outputs = value;
        }

        public insertOutput(value: number) {
            this.outputs.push(value);
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