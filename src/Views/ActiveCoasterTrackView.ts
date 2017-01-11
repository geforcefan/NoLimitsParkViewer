/// <reference path="View.ts"/>
/// <reference path="../NoLimits/Document/ParkDocument.ts"/>
/// <reference path="../NoLimits/Document/CustomTrackDocument.ts"/>

namespace NLParkViewer.View {
    import ParkDocument = NLParkViewer.NoLimits.Document.ParkDocument;
    import CustomTrackDocument = NLParkViewer.NoLimits.Document.CustomTrackDocument;

    export class ActiveCoasterTrackView extends View<HTMLDivElement> {
        private coasterSelection : HTMLSelectElement;
        private trackSelection : HTMLSelectElement;

        private parkDocument : ParkDocument = null;

        constructor() {
            super(document.createElement("div"));

            this.coasterSelection = document.createElement("select");
            this.trackSelection = document.createElement("select");

            this.view.appendChild(this.coasterSelection);
            this.view.appendChild(this.trackSelection);

            this.initEvents();
            this.initSelections();
            this.setViewVisibility();
        }
        
        public setViewVisibility() {

        }

        public getActiveCoaster() : number {
            return parseInt(this.coasterSelection.value);
        }

        public getActiveTrack() : number {
            return parseInt(this.trackSelection.value);
        }

        public initEvents() {
            this.coasterSelection.addEventListener("change", () => {
                this.initTrackSelection();
                this.dispatchEvent(new Event("activated", this));
            });

            this.trackSelection.addEventListener("change", () => {
                this.dispatchEvent(new Event("activated", this));
            });
        }
        private initCoasterSelection() {
            this.coasterSelection.innerHTML = "";

            let minTrackLength = 0;

            if(this.parkDocument === null || !this.parkDocument.getCoasterDocuments().length) {
                this.coasterSelection.style.display = "none";
                return;
            } else {
                this.coasterSelection.style.display = null;
            }

            for(let i = 0; i < this.parkDocument.getCoasterDocuments().length; i++) {
                let coasterOption : HTMLOptionElement = document.createElement("option");
                coasterOption.text = this.parkDocument.getCoasterDocuments()[i].getRawCoasterData().getName();
                coasterOption.value = i.toString();

                let tracks : Array<CustomTrackDocument> = this.parkDocument.getCoasterDocuments()[i].getTrackDocuments();

                for(let k = 0; k < tracks.length; k++) {
                    if(tracks[k].getLength() > minTrackLength) {
                        coasterOption.selected = true;
                        minTrackLength = tracks[k].getLength();
                    }
                }

                this.coasterSelection.appendChild(coasterOption);
            }
        }

        private initTrackSelection() {
            this.trackSelection.innerHTML = "";

            let minTrackLength = 0;
            let selectedCoaster : number = parseInt(this.coasterSelection.value);

            if(isNaN(selectedCoaster)) {
                this.trackSelection.style.display = "none";
                return;
            } else {
                this.trackSelection.style.display = null;
            }

            let tracks : Array<CustomTrackDocument> = this.parkDocument.getCoasterDocuments()[selectedCoaster].getTrackDocuments();

            if(!tracks.length)
                this.trackSelection.style.display = "none";

            for(let i = 0; i < tracks.length; i++) {
                let trackOption : HTMLOptionElement = document.createElement("option");
                trackOption.text = "Track #" + i;
                trackOption.value = i.toString();

                if(tracks[i].getLength() > minTrackLength) {
                    trackOption.selected = true;
                    minTrackLength = tracks[i].getLength();
                }

                this.trackSelection.appendChild(trackOption);
            }
        }

        public initSelections() {
            this.initCoasterSelection();
            this.initTrackSelection();
        }

        public onParkDocumentLoad(e : Event) {
            this.parkDocument = <ParkDocument> e.getTarget();
            this.initSelections();

            this.dispatchEvent(new Event("activated", this));
        }
    }
}