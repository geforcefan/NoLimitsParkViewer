namespace NLParkViewer {
    export class Event {
        private type: string;
        private target: any;

        constructor(type: string, targetObj: any) {
            this.type = type;
            this.target = targetObj;
        }

        public getTarget(): any {
            return this.target;
        }

        public getType(): string {
            return this.type;
        }
    }

    export class EventDispatcher {
        private listeners: Array<any> = [];

        public hasEventListener(type: string, listener: Function): Boolean {
            let has: boolean = false;

            for (var i = 0; i < this.listeners.length; i++) {
                if (this.listeners[i].type === type && this.listeners[i].listener === listener) {
                    has = true;
                }
            }

            return has;
        }

        public addEventListener(typeStr: string, listenerFunc: Function): void {
            if (this.hasEventListener(typeStr, listenerFunc))
                return;

            this.listeners.push({type: typeStr, listener: listenerFunc});
        }

        public removeEventListener(typeStr: string, listenerFunc: Function): void {
            for (let i = 0; i < this.listeners.length; i++) {
                if (this.listeners[i].listener === listenerFunc && this.listeners[i].type === typeStr)
                    this.listeners.splice(i, 1);
            }
        }

        public dispatchEvent(evt: Event) {
            for (let i = 0; i < this.listeners.length; i++) {
                if (this.listeners[i].type === evt.getType())
                    this.listeners[i].listener.call(this, evt);
            }
        }
    }
}