/// <reference path="Info/Info.ts"/>

namespace NLParkViewer.NoLimits.Chunks {
    export class Park {
        private info : Info.Info = null;
        private coasters : Array<Coaster.Coaster> = [];

        constructor() {
            this.info = new Info.Info();
        }

        public getInfo() : Info.Info {
            return this.info;
        }

        public setInfo(info : Info.Info) : void {
            this.info = info;
        }

        public getCoasters(): Array<Coaster.Coaster> {
            return this.coasters;
        }

        public setCoasters(value: Array<Coaster.Coaster>) {
            this.coasters = value;
        }

        public setCoaster(value: Coaster.Coaster) {
            this.coasters.push(value);
        }
    }
}