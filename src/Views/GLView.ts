/// <reference path="../Core/ShaderProgram.ts" />

/// <reference path="../Camera/CameraManager.ts" />
/// <reference path="../Camera/Camera.ts" />
/// <reference path="../Camera/PerspectiveCamera.ts" />
/// <reference path="../Camera/POVCamera.ts" />
/// <reference path="../Camera/SimulationCamera.ts" />

/// <reference path="../Renderer/FloorRenderer.ts" />
/// <reference path="../Renderer/ParkRenderer/ParkRenderer.ts" />
/// <reference path="../Shader/FloorShader.ts" />
/// <reference path="../NoLimits/Document/ParkDocument.ts" />

/// <reference path="View.ts"/>

namespace NLParkViewer.View {
    import ShaderProgram = NLParkViewer.Core.ShaderProgram;
    import CameraManager = NLParkViewer.Camera.CameraManager;
    import PerspectiveCamera = NLParkViewer.Camera.PerspectiveCamera;

    import FloorShader = NLParkViewer.Shader.FloorShader;
    import FloorRenderer = NLParkViewer.Renderer.FloorRenderer;
    import ParkDocument = NLParkViewer.NoLimits.Document.ParkDocument;
    import ParkRenderer = NLParkViewer.Renderer.ParkRenderer;
    import POVCamera = NLParkViewer.Camera.POVCamera;
    import SimulationCamera = NLParkViewer.Camera.SimulationCamera;

    export class GLView extends View<HTMLCanvasElement> {
        private gl: WebGLRenderingContext = null;
        private parkDocument : ParkDocument = null;

        private shaderFloor: ShaderProgram = null;
        private rendererFloor: FloorRenderer = null;
        private rendererPark : ParkRenderer = null;

        private cameraManager : CameraManager = new CameraManager(this);

        private activeCoaster : number = NaN;
        private activeTrack : number = NaN;

        private startTime : any;

        public renderTimeInSec : number = 0;

        constructor() {
            super(document.createElement("canvas"));
            this.view.tabIndex = 1;

            window.setTimeout(() => {
                this.start();
            }, 0);
        };

        private init() {
            try {
                this.gl = <WebGLRenderingContext>this.view.getContext("webgl");
            } catch (e) {
            }
            if (!this.gl)
                alert("Could not initialise WebGL, sorry :-(");

            this.gl.getExtension("OES_element_index_uint");
        }

        private initShader() {
            this.shaderFloor = new ShaderProgram(this.gl, new FloorShader());
        }

        private initRenderer() {
            this.rendererFloor = new FloorRenderer(this.gl);
        }

        private initCameras() {
            this.cameraManager.addCamera(new PerspectiveCamera(), "Perspective");
            this.cameraManager.setViewPort(this.view.width, this.view.height);
            this.cameraManager.activate("Perspective");
        }

        public onTrackOrCoasterActivated(e : Event) {
            let activeCoasterTrack : ActiveCoasterTrackView = <ActiveCoasterTrackView> e.getTarget();

            this.activeCoaster = activeCoasterTrack.getActiveCoaster();
            this.activeTrack = activeCoasterTrack.getActiveTrack();
        }

        public onParkDocumentLoad(e : Event) {
            this.parkDocument = <ParkDocument> e.getTarget();
            this.rendererPark = new ParkRenderer(this.gl, this.parkDocument);

            let perspectiveCamera : Camera.Camera = this.cameraManager.getCamera("Perspective");
            this.cameraManager.removeAllCameras();

            // init POV cameras
            for(let i = 0; i < this.parkDocument.getCoasterDocuments().length; i++) {
                for(let j = 0; j < this.parkDocument.getCoasterDocuments()[i].getTrackDocuments().length; j++) {
                    this.cameraManager.addCamera(new POVCamera(this.parkDocument.getCoasterDocuments()[i].getTrackDocuments()[j]), "POV, " + i + ", " + j);
                }
            }

            // add the perspective camera again
            this.cameraManager.addCamera(perspectiveCamera, "Perspective");
            this.cameraManager.activate("Perspective");

            this.dispatchEvent(new Event("parkload", this));
        }

        public onCameraChanged(e : Event) {
            let cameraSwitch = <CameraSwitchView> e.getTarget();
            switch(cameraSwitch.getActiveCamera()) {
                case "POV":
                    if(isNaN(this.activeTrack))
                        return;

                    this.cameraManager.activate("POV, " + this.activeCoaster + ", " + this.activeTrack);
                    break;
                case "Perspective":
                    this.cameraManager.activate("Perspective");
                    break;
            }
        }

        private draw() {
            this.gl.viewport(0, 0, this.cameraManager.currentCamera.viewPortWidth, this.cameraManager.currentCamera.viewPortHeight);
            this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
            this.gl.clearColor(1, 1, 1, 1.0);

            this.cameraManager.currentCamera.update();

            this.rendererFloor.render(this.shaderFloor, this.cameraManager.currentCamera);

            if(this.rendererPark != null)
                this.rendererPark.render(this.cameraManager.currentCamera);


            let endTime : any = new Date();
            let diff : any = endTime - this.startTime;

            this.renderTimeInSec = diff * 0.001;
            this.startTime = endTime;
        }

        private tick() {
            window.requestAnimationFrame(() => {
                this.tick();
            });

            this.draw();
        }

        private start() {
            this.init();
            //this.printContextInformation();
            this.initShader();
            this.initCameras();
            this.initRenderer();
            this.resize(this.gl.canvas.clientWidth, this.gl.canvas.clientHeight);

            this.gl.enable(this.gl.DEPTH_TEST);

            this.startTime = new Date();
            this.tick();

            this.dispatchEvent(new Event("load", this));
        };

        public resize(w: number, h: number) {
            if(this.gl) {
                let realToCSSPixels = window.devicePixelRatio;

                let displayWidth = Math.floor(w * realToCSSPixels);
                let displayHeight = Math.floor(h * realToCSSPixels);

                this.gl.canvas.width = displayWidth;
                this.gl.canvas.height = displayHeight;

                this.cameraManager.setViewPort(displayWidth, displayHeight);
            }
        }

        public printContextInformation() {
            console.log("===============================================================");
            console.log("Version: " + this.gl.getParameter(this.gl["VERSION"]));
            console.log("Renderer: " + this.gl.getParameter(this.gl["RENDERER"]));
            console.log("ShadingLanguageVersion: " + this.gl.getParameter(this.gl["SHADING_LANGUAGE_VERSION"]));
            console.log("Vendor: " + this.gl.getParameter(this.gl["VENDOR"]));
            console.log("Version: " + this.gl.getParameter(this.gl["VERSION"]));
            console.log("===============================================================");
        }
    }
}