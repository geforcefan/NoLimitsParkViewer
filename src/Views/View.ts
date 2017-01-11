/// <reference path="../Event/EventDispatcher.ts" />

namespace NLParkViewer.View {
    export class View<T extends HTMLElement> extends EventDispatcher {
        protected view : T;

        constructor(view : T) {
            super();
            this.view = view;
            this.view.className = (<any>this.constructor).name;
            this.view.classList.add("animate");
        }

        public show() {
            this.view.classList.add("show");
        }

        public hide() {
            this.view.classList.remove("show");
        }

        public getView() : T {
            return this.view;
        }
    }
}