/// <reference path="../Views/View.ts"/>

namespace NLParkViewer.Camera {
    import GLView = NLParkViewer.View.GLView;
    export class CameraManager {
        private cameras: Array<CameraInstance> = [];
        private view: View.View<HTMLElement>;

        public currentCamera: Camera = null;
        private currentIndex: number = 0;

        private lastViewPortWidth : number = 0;
        private lastViewPortHeight : number = 0;

        private eventHandlers : Array<any> = [];

        protected changeSpeed: number = 0.03;
        
        constructor(view: View.View<HTMLElement>) {
            this.view = view;
        }

        public getActiveCamera(): string {
            return this.cameras[this.currentIndex].identifier;
        }

        public addCamera(cam: Camera, identifier: string) {
            this.cameras.push(new CameraInstance(cam, identifier));
        }

        private getCameraInstance(identifier: string): CameraInstance {
            for (let i = 0; i < this.cameras.length; i++) {
                if (this.cameras[i].identifier == identifier) {
                    return this.cameras[i];
                }
            }

            return null;
        }

        public removeAllCameras() {
            this.currentIndex = 0;
            this.currentCamera = null;

            this.cameras = [];
        }

        public getCamera(identifier: string): Camera {
            for (let i = 0; i < this.cameras.length; i++) {
                if (this.cameras[i].identifier == identifier) {
                    return this.cameras[i].cam;
                }
            }

            return null;
        }

        private getIndexOfCameraInstance(camInstance: CameraInstance): number {
            for (let i = 0; i < this.cameras.length; i++) {
                if (this.cameras[i] == camInstance) {
                    return i;
                }
            }

            return -1;
        }

        private getIndexOfCameraInstanceByIdentifier(identifier: string): number {
            return this.getIndexOfCameraInstance(this.getCameraInstance(identifier));
        }

        public replaceCamera(identifier: string, cam: Camera) {
            let index: number = this.getIndexOfCameraInstanceByIdentifier(identifier);

            cam.setViewPort(this.cameras[index].cam.viewPortWidth, this.cameras[index].cam.viewPortHeight);

            if (this.currentCamera == this.cameras[index].cam) {
                this.currentIndex = index;
                this.currentCamera = cam;
            }

            this.cameras[index].cam = cam;
        }

        private registerEvents(cam: Camera) {
            this.eventHandlers.push(cam.onMouseDown.bind(cam));
            this.eventHandlers.push(cam.onMouseUp.bind(cam));
            this.eventHandlers.push(cam.onMouseMove.bind(cam));
            this.eventHandlers.push(cam.onMouseWheel.bind(cam));
            this.eventHandlers.push(cam.onKeyDown.bind(cam));
            this.eventHandlers.push(cam.onKeyUp.bind(cam));

            this.view.getView().addEventListener("mousedown", this.eventHandlers[0]);
            this.view.getView().addEventListener("mouseup", this.eventHandlers[1]);
            this.view.getView().addEventListener("mousemove", this.eventHandlers[2]);
            this.view.getView().addEventListener("mousewheel", this.eventHandlers[3]);
            this.view.getView().addEventListener("keydown", this.eventHandlers[4]);
            this.view.getView().addEventListener("keyup", this.eventHandlers[5]);

            cam.setCameraManager(this);
        }

        private removeEvents(cam: Camera) {
            if(!this.eventHandlers.length)
                return;

            this.view.getView().removeEventListener("mousedown", this.eventHandlers[0]);
            this.view.getView().removeEventListener("mouseup", this.eventHandlers[1]);
            this.view.getView().removeEventListener("mousemove", this.eventHandlers[2]);
            this.view.getView().removeEventListener("mousewheel", this.eventHandlers[3]);
            this.view.getView().removeEventListener("keydown", this.eventHandlers[4]);
            this.view.getView().removeEventListener("keyup", this.eventHandlers[5]);

            this.eventHandlers.length = 0;
        }

        public activateNext() {
            this.currentIndex++;
            if (this.currentIndex >= this.cameras.length)
                this.currentIndex = 0;

            this.activate(this.cameras[this.currentIndex].identifier);

            return this.cameras[this.currentIndex].identifier;
        }

        public activate(identifier: string) {
            this.setViewPort(this.lastViewPortWidth, this.lastViewPortHeight);

            let camInstance: CameraInstance = this.getCameraInstance(identifier);

            if (camInstance != null) {
                if (this.currentCamera != null) {
                    this.removeEvents(this.currentCamera);
                }

                camInstance.cam.stopMovement();

                this.currentCamera = camInstance.cam;
                this.currentIndex = this.getIndexOfCameraInstance(camInstance);

                this.registerEvents(this.currentCamera);
            }
        }

        public setViewPort(w: number, h: number) {
            this.lastViewPortWidth = w;
            this.lastViewPortHeight = h;

            for (let i = 0; i < this.cameras.length; i++) {
                this.cameras[i].cam.setViewPort(w, h);
            }
        }

        public getRenderTimeInSeconds() : number {
            return (<GLView>this.view).renderTimeInSec;
        }
    }

    class CameraInstance {
        public cam: Camera;
        public identifier: string;

        constructor(cam: Camera, identifier: string) {
            this.cam = cam;
            this.identifier = identifier;
        }
    }
}