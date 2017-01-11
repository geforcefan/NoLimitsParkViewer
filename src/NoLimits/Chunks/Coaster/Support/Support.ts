/// <reference path="FreeNode.ts"/>
/// <reference path="Footer.ts"/>
/// <reference path="Beam.ts"/>
/// <reference path="RailNode.ts"/>

namespace NLParkViewer.NoLimits.Chunks.Coaster.Support {
    export class Support {
        private freeNodes : Array<FreeNode> = [];
        private footers : Array<Footer> = [];
        private beams : Array<Beam> = [];
        private railNodes : Array<RailNode> = [];

        public getFreeNodes(): Array<FreeNode> {
            return this.freeNodes;
        }

        public setFreeNodes(value: Array<FreeNode>) {
            this.freeNodes = value;
        }

        public insertFreeNode(value: FreeNode) {
            this.freeNodes.push(value);
        }

        public getFooters(): Array<Footer> {
            return this.footers;
        }

        public setFooters(value: Array<Footer>) {
            this.footers = value;
        }

        public insertFooter(value: Footer) {
            this.footers.push(value);
        }

        public getBeams(): Array<Beam> {
            return this.beams;
        }

        public setBeams(value: Array<Beam>) {
            this.beams = value;
        }

        public insertBeam(value: Beam) {
            this.beams.push(value);
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