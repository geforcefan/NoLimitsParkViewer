/// <reference path="../../../NoLimits/Chunks/Coaster/Style.ts" />

namespace NLParkViewer.Renderer.TrackStyles {
    import StyleType = NLParkViewer.NoLimits.Chunks.Coaster.StyleType;

    export class TrackStyle {
        public heartline : number = 1.1;
        public spineTypes : Array<SpineType> = [];

        public getSpineType(spineType : number) : SpineType {
            if(!this.spineTypes.length)
                return null;
            if(spineType < 0 || spineType > this.spineTypes.length - 1)
                spineType = 0;
            return this.spineTypes[spineType];
        }

        public static getTrackStyleInstance(style : StyleType) : TrackStyle {
            switch(style) {
                case StyleType.HyperCoaster:
                    return new HyperCoaster();
                default:
                    return new HyperCoaster();
            }
        }
    }
}