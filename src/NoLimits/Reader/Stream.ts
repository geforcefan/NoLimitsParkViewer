namespace NLParkViewer.NoLimits.Stream {
    export class BaseStream {
        public static TYPE_WRITE: number = 0;
        public static TYPE_READ: number = 1;

        protected type: number = null;

        public getType() {
            return this.type;
        }

        public setType(type: number): void {
            this.type = type;
        }
    }
}