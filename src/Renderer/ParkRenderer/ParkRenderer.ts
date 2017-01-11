/// <reference path="../../Camera/Camera.ts" />
/// <reference path="../../NoLimits/Document/ParkDocument.ts" />
/// <reference path="CoasterRenderer.ts" />

namespace NLParkViewer.Renderer {
    import ParkDocument = NLParkViewer.NoLimits.Document.ParkDocument;

    export class ParkRenderer {
        private parkDocument : ParkDocument;
        private rendererCoasterDocuments : Array<CoasterRenderer> = [];

        constructor(gl: WebGLRenderingContext, parkDocument : ParkDocument) {
            this.parkDocument = parkDocument;

            for(let i = 0; i < this.parkDocument.getCoasterDocuments().length; i++) {
                this.rendererCoasterDocuments.push(new CoasterRenderer(gl, this.parkDocument.getCoasterDocuments()[i]));
            }
        }

        public render(cam : Camera.Camera) : void {
            for(let i = 0; i < this.rendererCoasterDocuments.length; i++) {
                this.rendererCoasterDocuments[i].render(cam);
            }
        }
    }
}