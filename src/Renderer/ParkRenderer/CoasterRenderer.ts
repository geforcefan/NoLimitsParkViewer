/// <reference path="../../Camera/Camera.ts" />
/// <reference path="../../NoLimits/Document/CoasterDocument.ts" />
/// <reference path="CustomTrackRenderer.ts" />
/// <reference path="./TrackStyles/TrackStyle.ts" />
/// <reference path="SupportsRenderer.ts" />

namespace NLParkViewer.Renderer {
    import CoasterDocument = NLParkViewer.NoLimits.Document.CoasterDocument;
    import TrackStyle = NLParkViewer.Renderer.TrackStyles.TrackStyle;

    export class CoasterRenderer {
        private coasterDocument : CoasterDocument;
        private rendererTrackDocuments : Array<CustomTrackRenderer> = [];
        private supportsRenderer : SupportsRenderer = null;

        constructor(gl: WebGLRenderingContext, coasterDocument : CoasterDocument) {
            this.coasterDocument = coasterDocument;
            this.supportsRenderer = new SupportsRenderer(gl, coasterDocument);

            for(let i = 0; i < this.coasterDocument.getTrackDocuments().length; i++) {
                this.rendererTrackDocuments.push(new CustomTrackRenderer(
                    gl,
                    this.coasterDocument.getTrackDocuments()[i],
                    TrackStyle.getTrackStyleInstance(coasterDocument.getRawCoasterData().getStyle().getStyleType())
                ));
            }
        }

        public render(cam : Camera.Camera) : void {
            for(let i = 0; i < this.rendererTrackDocuments.length; i++) {
                this.rendererTrackDocuments[i].render(cam);
            }

            this.supportsRenderer.render(cam);
        }
    }
}