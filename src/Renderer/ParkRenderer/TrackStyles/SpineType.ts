namespace NLParkViewer.Renderer.TrackStyles {
    import RailNodeConnectionStyle = NLParkViewer.NoLimits.Chunks.Coaster.Support.RailNodeConnectionStyle;
    export abstract class SpineType {
        public wireframeRails : Array<vec4> = [];
        public wireframeCrossties : Array<vec4> = [];
        public wireframeCrosstiesSpacing : number = 1.0;
        public wireframeRailSpacing : number = 0.1;

        public abstract getRailConnectorNodes(style : RailNodeConnectionStyle, mat : mat4) : Array<vec3>;
    }
}