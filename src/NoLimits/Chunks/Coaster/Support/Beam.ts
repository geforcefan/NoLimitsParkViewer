/// <reference path="BeamConnection.ts"/>
/// <reference path="BeamNode.ts"/>
/// <reference path="ISupportNode.ts"/>

namespace NLParkViewer.NoLimits.Chunks.Coaster.Support {
    export enum BeamType {
        Pipe = 1,
        LoopingBeam = 2,
        LBeam = 3,
        HBeam = 4,
        BoxBeam = 5,
        WoodenChordBeam = 6,
        WoodenCatwalk = 7,
        CBeam = 8,
        Cable = 9
    }

    export enum BeamLODPriority {
        Highest = 0,
        High = 1,
        Medium = 2,
        Low = 3,
        Lowest = 4
    }

    export enum BeamRotationMode {
        HorizontalBeam = 0,
        VerticalBeam = 1
    }

    export class Beam extends ISupportNode {
        private connection1 : BeamConnection = new BeamConnection();
        private connection2 : BeamConnection = new BeamConnection();

        private beamType : BeamType = BeamType.Pipe;

        private startWidth : number = 0;
        private endWidth : number = 0;

        private rotationAngle : number = 0;

        private extraLengthAtStart : number = 0;
        private extraLengthAtEnd : number = 0;

        private nodeOffsetRelativeX : number = 0;
        private nodeOffsetAbsoluteYStart : number = 0;
        private nodeOffsetAbsoluteYEnd : number = 0;

        private beamNodes : Array<BeamNode> = [];

        private rotationMode : BeamRotationMode = BeamRotationMode.HorizontalBeam;
        private lodPriority : BeamLODPriority = BeamLODPriority.Lowest;

        public getRotationMode() : BeamRotationMode {
            if(this.hasFlag2(SupportNodeFlags.RotationModeAzimuth))
                return BeamRotationMode.VerticalBeam;
            else
                return BeamRotationMode.HorizontalBeam;
        }

        public setRotationMode(value : BeamRotationMode) {
            this.setWithCheckFlag2(SupportNodeFlags.RotationModeAzimuth, false);

            switch(value) {
                case BeamRotationMode.VerticalBeam:
                    this.setWithCheckFlag2(SupportNodeFlags.RotationModeAzimuth, true);
                    break;
            }

            this.rotationMode = this.getRotationMode();
        }

        public getLODPriority() : BeamLODPriority {
            if(this.hasFlag3(3))
                return BeamLODPriority.Lowest;
            else if(this.hasFlag3(1) && this.hasFlag3(2))
                return BeamLODPriority.Low;
            else if(!this.hasFlag3(1) && this.hasFlag3(2))
                return BeamLODPriority.Medium;
            else if(this.hasFlag3(1) && !this.hasFlag3(2))
                return BeamLODPriority.High;
            else
                return BeamLODPriority.Highest
        }

        public setLODPriority(value : BeamLODPriority) {
            this.setWithCheckFlag3(1, false);
            this.setWithCheckFlag3(2, false);
            this.setWithCheckFlag3(3, false);

            switch(value) {
                case BeamLODPriority.Lowest:
                    this.setWithCheckFlag3(3, true);
                    break;
                case BeamLODPriority.Low:
                    this.setWithCheckFlag3(1, true);
                    this.setWithCheckFlag3(2, true);
                    break;
                case BeamLODPriority.Medium:
                    this.setWithCheckFlag3(2, true);
                    break;
                case BeamLODPriority.High:
                    this.setWithCheckFlag3(1, true);
                    break;
            }

            this.lodPriority = this.getLODPriority();
        }

        public getConnection1(): BeamConnection {
            return this.connection1;
        }

        public setConnection1(value: BeamConnection) {
            this.connection1 = value;
        }

        public getConnection2(): BeamConnection {
            return this.connection2;
        }

        public setConnection2(value: BeamConnection) {
            this.connection2 = value;
        }

        public getBeamType(): BeamType {
            return this.beamType;
        }

        public setBeamType(value: BeamType) {
            this.beamType = value;
        }

        public getStartWidth(): number {
            return this.startWidth;
        }

        public setStartWidth(value: number) {
            this.startWidth = value;
        }

        public getEndWidth(): number {
            return this.endWidth;
        }

        public setEndWidth(value: number) {
            this.endWidth = value;
        }

        public getRotationAngle(): number {
            return this.rotationAngle;
        }

        public setRotationAngle(value: number) {
            this.rotationAngle = value;
        }

        public getExtraLengthAtStart(): number {
            return this.extraLengthAtStart;
        }

        public setExtraLengthAtStart(value: number) {
            this.extraLengthAtStart = value;
        }

        public getExtraLengthAtEnd(): number {
            return this.extraLengthAtEnd;
        }

        public setExtraLengthAtEnd(value: number) {
            this.extraLengthAtEnd = value;
        }

        public getNodeOffsetRelativeX(): number {
            return this.nodeOffsetRelativeX;
        }

        public setNodeOffsetRelativeX(value: number) {
            this.nodeOffsetRelativeX = value;
        }

        public getNodeOffsetAbsoluteYStart(): number {
            return this.nodeOffsetAbsoluteYStart;
        }

        public setNodeOffsetAbsoluteYStart(value: number) {
            this.nodeOffsetAbsoluteYStart = value;
        }

        public getNodeOffsetAbsoluteYEnd(): number {
            return this.nodeOffsetAbsoluteYEnd;
        }

        public setNodeOffsetAbsoluteYEnd(value: number) {
            this.nodeOffsetAbsoluteYEnd = value;
        }

        public getBeamNodes(): Array<BeamNode> {
            return this.beamNodes;
        }

        public setBeamNodes(value: Array<BeamNode>) {
            this.beamNodes = value;
        }

        public insertBeamNodes(value: BeamNode) {
            this.beamNodes.push(value);
        }

        public hasNoStartCapHint() : boolean {
            return this.hasFlag2(SupportNodeFlags.NoStartCapHint);
        }

        public hasNoEndCapHint() : boolean {
            return this.hasFlag2(SupportNodeFlags.NoEndCapHint);
        }

        public hasNoCapsForLODsHint() : boolean {
            return this.hasFlag1(SupportNodeFlags.NoCapsForLODsHint);
        }

        public setFlag1(value : number) {
            super.setFlag1(value);
            this.rotationMode = this.getRotationMode();
            this.lodPriority = this.getLODPriority();
        }

        public setFlag2(value : number) {
            super.setFlag2(value);
            this.rotationMode = this.getRotationMode();
            this.lodPriority = this.getLODPriority();
        }

        public setFlag3(value : number) {
            super.setFlag3(value);
            this.rotationMode = this.getRotationMode();
            this.lodPriority = this.getLODPriority();
        }
    }
}