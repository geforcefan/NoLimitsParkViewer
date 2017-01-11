/// <reference path="../Event/EventDispatcher.ts"/>
/// <reference path="Chunks/Park.ts"/>
/// <reference path="Reader/Reader.ts"/>
/// <reference path="Reader/Park.ts"/>

namespace NLParkViewer.NoLimits {
    export class ParkStream extends EventDispatcher {
        private startTime : any = null;

        private open(data : Int8Array, name : string) {
            let reader: Stream.Reader = new Stream.Reader(data);

            let park : Chunks.Park = new Chunks.Park();
            let parkReader : Stream.Park = new Stream.Park(reader, park);

            parkReader.readChunk();

            console.log("Parsed", name, "Successfully (", (<any>(new Date()) - this.startTime) ,"ms )");

            this.dispatchEvent(new Event("load", park));
        }

        public openFormURL(url : string) : void {
            this.startTime = new Date();

            let request : XMLHttpRequest = new XMLHttpRequest();
            request.responseType = "arraybuffer";
            request.addEventListener("load", () => {
                if(request.status >= 200 && request.status < 400) {
                    let data : Uint8Array = new Int8Array(request.response);
                    this.open(data, url);
                }
            });
            request.open('GET', url, true);
            request.send();
        }

        public openFromFile(files: any): void {
            this.startTime = new Date();

            if (files.length) {
                let fileReader: FileReader = new FileReader();
                fileReader.addEventListener("load", (event : any) => {
                    let data : Uint8Array = new Int8Array(fileReader.result);
                    this.open(data, files[0].name);
                });
                fileReader.readAsArrayBuffer(files[0]);
            }
        }
    }
}