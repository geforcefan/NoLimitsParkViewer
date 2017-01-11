/// <reference path="View.ts"/>

namespace NLParkViewer.View {
    export class CameraSwitchView extends View<HTMLDivElement> {
        private inputPerspective : HTMLInputElement;
        private inputPOV : HTMLInputElement;

        constructor() {
            super(document.createElement("div"));

            this.view.innerHTML = `
            <div><input type="radio" name="CameraSwitchView" checked/> Perspective Camera</div>
            <div><input type="radio" name="CameraSwitchView"/> POV Camera</div>
            `;

            this.inputPerspective = <HTMLInputElement> this.view.querySelectorAll("input")[0];
            this.inputPOV = <HTMLInputElement> this.view.querySelectorAll("input")[1];

            this.inputPOV.parentElement.style.display = "none";

            this.inputPerspective.addEventListener("change", this.stateChanged.bind(this));
            this.inputPOV.addEventListener("change", this.stateChanged.bind(this));
        }

        public onParkDocumentLoad(e : Event) {
            this.inputPerspective.checked = true;

            this.stateChanged();
        }

        public stateChanged() {
            this.dispatchEvent(new Event("change", this));
        }

        public getActiveCamera() : string {
            if(this.inputPerspective.checked)
                return "Perspective";

            if(this.inputPOV.checked)
               return "POV";
        }

        public onTrackOrCoasterActivated(e : Event) {
            let activeCoasterTrack : ActiveCoasterTrackView = <ActiveCoasterTrackView> e.getTarget();

            if(isNaN(activeCoasterTrack.getActiveTrack())) {
                this.inputPOV.parentElement.style.display = "none";
                this.inputPerspective.checked = true;

            } else {
                this.inputPOV.parentElement.style.display = null;
            }

            this.stateChanged();
        }
    }
}