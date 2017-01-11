namespace NLParkViewer.NoLimits.Chunks.Coaster.Support {
    export enum BeamConnectionType {
        FreeNode = 1,
        Footer = 2,
        RailConnector = 3,
        BeamNode = 4
    }
    export class BeamConnection {
        private type : BeamConnectionType = BeamConnectionType.FreeNode;
        private index : number = 0;
        private indexOnBeam : number = 0;
        private indexOnRailConnector : number = 0;

        public getType(): BeamConnectionType {
            return this.type;
        }

        public setType(value: BeamConnectionType) {
            this.type = value;
        }

        public getIndex(): number {
            return this.index;
        }

        public setIndex(value: number) {
            this.index = value;
        }

        public getIndexOnBeam(): number {
            return this.indexOnBeam;
        }

        public setIndexOnBeam(value: number) {
            this.indexOnBeam = value;
        }

        public getIndexOnRailConnector(): number {
            return this.indexOnRailConnector;
        }

        public setIndexOnRailConnector(value: number) {
            this.indexOnRailConnector = value;
        }
    }
}