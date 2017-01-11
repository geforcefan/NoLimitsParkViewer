/// <reference path="../Chunks/Park.ts"/>
/// <reference path="CoasterDocument.ts"/>

namespace NLParkViewer.NoLimits.Document {
    export class ParkDocument extends EventDispatcher {
        private coasterDocuments : Array<CoasterDocument> = [];
        private park : Chunks.Park = null;

        constructor(park : Chunks.Park) {
            super();
            this.park = park;
        }

        public open() {
            let finishedCoasters : number = 0;

            for(let i = 0; i < this.park.getCoasters().length; i++) {
                let coaster : Chunks.Coaster.Coaster = this.park.getCoasters()[i];
                let coasterDocument = new CoasterDocument(coaster);

                coasterDocument.addEventListener("finished", () => {
                    finishedCoasters++;

                    this.coasterDocuments.push(coasterDocument);

                    if(finishedCoasters >= this.park.getCoasters().length) {
                        this.dispatchEvent(new Event("finished", null));
                    }
                });
                coasterDocument.open();
            }
            if(!this.park.getCoasters().length) {
                this.dispatchEvent(new Event("finished", null));
            }
        }

        public getCoasterDocuments(): Array<CoasterDocument> {
            return this.coasterDocuments;
        }

        public getPark(): NoLimits.Chunks.Park {
            return this.park;
        }
    }
}