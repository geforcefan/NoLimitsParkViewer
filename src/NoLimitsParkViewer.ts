/// <reference path="Views/BaseView.ts"/>
/// <reference path="Maths/MathUtils.ts"/>

namespace NLParkViewer {
    import MathUtils = NLParkViewer.Maths.MathUtils;

    export class Application {
        private baseView: View.BaseView;

        public options : any = {
            trackURL: null
        };

        constructor(baseView: HTMLElement, options : any) {
            this.options = Object.assign(this.options, options);

            // init some statics
            MathUtils.init();

            this.baseView = new View.BaseView(baseView, this);

            if(this.options.trackURL) {
                this.baseView.openParkFromURL(this.options.trackURL);
            }
        }

        public resize() {
            this.baseView.resize();
        }
    }
}