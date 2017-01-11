namespace NLParkViewer.NoLimits.Chunks.Coaster.Support {
    export enum RailNodeConnectionStyle {
        TrackDefault = 0,
        Simple = 1,
        CorkscrewStraightDown = 2,
        TwistedStraightDown = 3,
        TwistedHorizontal = 4,
        TwistedVertical = 5,
        Horizontal4D = 6,
        Vertical4D = 7,
        Aligned4D = 8,
        Special4D = 9,
        SuspendedHorizontal = 10,
        SuspendedVertical = 10,
    }

    export class RailNode extends ISupportNode {
        private position : number = 0;
        private connectionStyle : number = 0;
        private sizeParameter : number = 0;
        private trackIndex : number = 0;

        public getPosition(): number {
            return this.position;
        }

        public setPosition(value: number) {
            this.position = value;
        }

        public getSizeParameter(): number {
            return this.sizeParameter;
        }

        public setSizeParameter(value: number) {
            this.sizeParameter = value;
        }

        public getConnectionStyle(): number {
            return this.connectionStyle;
        }

        public setConnectionStyle(isModel : boolean, style: number) {
            if(!isModel) {
                if(style == 0)
                    this.connectionStyle = RailNodeConnectionStyle.Simple;
                if(style == 2)
                    this.connectionStyle = RailNodeConnectionStyle.TrackDefault;
            } else {
                if(style == 0)
                    this.connectionStyle = RailNodeConnectionStyle.TwistedStraightDown;
                if(style == 1)
                    this.connectionStyle = RailNodeConnectionStyle.TwistedHorizontal;
                if(style == 2)
                    this.connectionStyle = RailNodeConnectionStyle.TwistedVertical;
                if(style == 3)
                    this.connectionStyle = RailNodeConnectionStyle.CorkscrewStraightDown;
                if(style == 4)
                    this.connectionStyle = RailNodeConnectionStyle.Horizontal4D;
                if(style == 5)
                    this.connectionStyle = RailNodeConnectionStyle.Vertical4D;
                if(style == 6)
                    this.connectionStyle = RailNodeConnectionStyle.Aligned4D;
                if(style == 7)
                    this.connectionStyle = RailNodeConnectionStyle.Special4D;
                if(style == 8)
                    this.connectionStyle = RailNodeConnectionStyle.SuspendedHorizontal;
                if(style == 9)
                    this.connectionStyle = RailNodeConnectionStyle.SuspendedVertical;
            }
        }

        public getTrackIndex(): number {
            return this.trackIndex;
        }

        public setTrackIndex(value: number) {
            this.trackIndex = value;
        }
    }
}