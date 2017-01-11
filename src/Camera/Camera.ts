namespace NLParkViewer.Camera {
    export abstract class Camera {
        public fov: number = 90.0;
        public near: number = 0.1;
        public far: number = 1000.0;

        public projectionMatrix: mat4;
        public modelMatrix: mat4;
        public projectionModelMatrix: mat4;

        public viewPortHeight: number;
        public viewPortWidth: number;

        public cameraPos: vec3 = vec3.fromValues(5.0, 5.0, 7.0);

        public cameraIsMoving: boolean = false;

        protected changeSpeed: number = 0.03;

        public abstract update(): void;

        public abstract stopMovement(): void;

        public abstract onMouseDown(e : MouseEvent) : void;
        public abstract onMouseUp(e : MouseEvent) : void;
        public abstract onMouseMove(e : MouseEvent) : void;
        public abstract onMouseWheel(e : MouseWheelEvent) : void;
        public abstract onKeyDown(e : KeyboardEvent) : void;
        public abstract onKeyUp(e : KeyboardEvent) : void;

        private cameraManager : CameraManager = null;

        public setViewPort(w: number, h: number) {
            this.viewPortHeight = h;
            this.viewPortWidth = w;
        }

        public setCameraManager(cameraManager : CameraManager) {
            this.cameraManager = cameraManager;
        }

        public getRenderTimeInSeconds() : number {
            return this.cameraManager.getRenderTimeInSeconds();
        }
    }
}