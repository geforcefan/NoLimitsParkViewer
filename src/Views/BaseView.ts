/// <reference path="../Event/EventDispatcher.ts"/>
/// <reference path="../NoLimits/ParkStream.ts"/>
/// <reference path="../NoLimits/Document/ParkDocument.ts"/>
/// <reference path="../NoLimits/Chunks/Park.ts"/>

/// <reference path="ActiveCoasterTrackView.ts"/>
/// <reference path="CameraSwitchView.ts"/>
/// <reference path="GLView.ts"/>

/// <reference path="View.ts"/>

namespace NLParkViewer.View {
    export class BaseView extends View<HTMLElement> {
        private park: NoLimits.Chunks.Park;
        private parkDocument: NoLimits.Document.ParkDocument;

        private glView : GLView;
        private activeCoasterTrackView : ActiveCoasterTrackView;
        private cameraSwitchView : CameraSwitchView;

        constructor(baseView: HTMLElement, application : Application) {
            super(baseView);
            this.view.classList.add("NoLimitsParkViewer");

            this.glView = new GLView();
            this.activeCoasterTrackView = new ActiveCoasterTrackView();
            this.cameraSwitchView = new CameraSwitchView();

            this.activeCoasterTrackView.hide();
            this.cameraSwitchView.hide();
            this.glView.hide();

            this.addEventListener("parkdocumentload", this.glView.onParkDocumentLoad.bind(this.glView));
            this.addEventListener("parkdocumentload", this.activeCoasterTrackView.onParkDocumentLoad.bind(this.activeCoasterTrackView));
            this.addEventListener("parkdocumentload", this.cameraSwitchView.onParkDocumentLoad.bind(this.cameraSwitchView));

            this.activeCoasterTrackView.addEventListener("activated", this.glView.onTrackOrCoasterActivated.bind(this.glView));
            this.activeCoasterTrackView.addEventListener("activated", this.cameraSwitchView.onTrackOrCoasterActivated.bind(this.cameraSwitchView));

            this.cameraSwitchView.addEventListener("change", this.glView.onCameraChanged.bind(this.glView));

            this.glView.addEventListener(application.options.trackURL?"parkload":"load", () => {
                this.activeCoasterTrackView.show();
                this.cameraSwitchView.show();
                this.glView.show();
            });

            this.view.appendChild(this.glView.getView());
            this.view.appendChild(this.activeCoasterTrackView.getView());
            this.view.appendChild(this.cameraSwitchView.getView());

            if(!application.options.trackURL)
                this.initDragAndDropFile();

            this.resize();
        }

        public resize() : void {
            let rect : ClientRect = this.view.getBoundingClientRect();

            this.glView.resize(rect.width, rect.height);
        }

        private initDragAndDropFile(): void {
            this.view.addEventListener("drop", this.parseDroppedFile.bind(this));
            this.view.addEventListener("dragover", (event: any) => {
                event.preventDefault();
            });
            this.view.addEventListener("dragenter", (event: any) => {
                event.target.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
            });
            this.view.addEventListener("dragleave", (event: any) => {
                event.target.style.backgroundColor = null;
            });
        }

        private parseDroppedFile(event: any): void {
            event.preventDefault();
            event.stopPropagation();

            let files : Array<File> = <Array<File>> event.dataTransfer.files;
            this.openPark(files);

            event.target.style.backgroundColor = null;
        }

        private openPark(files : Array<File>) {
            let parkStream : NoLimits.ParkStream = new NoLimits.ParkStream();
            parkStream.addEventListener("load", this.parkStreamOnLoadListener.bind(this));
            parkStream.openFromFile(files);
        }

        public openParkFromURL(url : string) : void {
            let parkStream : NoLimits.ParkStream = new NoLimits.ParkStream();
            parkStream.addEventListener("load", this.parkStreamOnLoadListener.bind(this));
            parkStream.openFormURL(url);
        }

        private parkStreamOnLoadListener(event : Event) {
            this.park = <NoLimits.Chunks.Park> event.getTarget();
            this.parkDocument = new NoLimits.Document.ParkDocument(this.park);

            this.parkDocument.addEventListener("finished", () => {
                this.dispatchEvent(new Event("parkdocumentload", this.parkDocument));
            });

            this.parkDocument.open();
        };
    }
}