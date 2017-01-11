/// <reference path="../NoLimits/Document/CustomTrackDocument.ts" />
/// <reference path="../Maths/MathUtils" />

namespace NLParkViewer.Camera {
    import MathUtils = NLParkViewer.Maths.MathUtils;
    import CustomTrackDocument = NLParkViewer.NoLimits.Document.CustomTrackDocument;
    import TrackNode = NLParkViewer.NoLimits.Document.TrackNode;

    export class POVCamera extends Camera {
        private trackDocument: CustomTrackDocument;

        private cameraMov: vec4 = vec4.fromValues(0, 0, 0, 0);
        private cameraBoost: number = 1;

        private moveToNodeIndex: number = 0;
        private nodeIndex: number = 0;

        private numberOfNodes: number = 0;

        private moveMode: boolean = false;
        private hasMoved: boolean = false;

        private lastX: number = 0;
        private lastY: number = 0;

        constructor(tackDocument: CustomTrackDocument) {
            super();
            this.stopMovement();

            this.trackDocument = tackDocument;
            this.cameraIsMoving = true;

            this.numberOfNodes = tackDocument.getNumberOfNodes();
        }

        public onMouseDown(e: MouseEvent): void {
            if (e.button == 0) {
                this.hasMoved = false;
                this.moveMode = true;

                this.lastX = e.clientX;
                this.lastY = e.clientY;
            }
        }

        public onMouseUp(e: MouseEvent): void {
            this.moveMode = false;

            if (!this.hasMoved) {
                this.stopMovement();
            }
        }

        public onMouseMove(e: MouseEvent): void {
            e.stopImmediatePropagation();
            e.preventDefault();

            if (this.moveMode) {
                this.hasMoved = true;
                this.incrementNodePosition(Math.floor(1000 * this.getRenderTimeInSeconds() * ((e.clientY - this.lastY))));

                this.lastX = e.clientX;
                this.lastY = e.clientY;
            }
        }

        public onMouseWheel(e: MouseWheelEvent): void {
            e.stopImmediatePropagation();
            e.preventDefault();
        }

        public onKeyDown(e: KeyboardEvent): void {
            e.stopImmediatePropagation();
            e.preventDefault();

            switch (e.key) {
                case "w":
                case "W":
                    this.cameraMov[0] = 1;
                    break;
                case "A":
                case "a":
                    this.cameraMov[1] = 1;
                    break;
                case "S":
                case "s":
                    this.cameraMov[2] = 1;
                    break;
                case "D":
                case "d":
                    this.cameraMov[3] = 1;
                    break;
                case "Shift":
                    this.cameraBoost = 2;
                    break;
            }
        }

        public onKeyUp(e: KeyboardEvent): void {
            e.stopImmediatePropagation();
            e.preventDefault();

            switch (e.key) {
                case "w":
                case "W":
                    this.cameraMov[0] = 0;
                    break;
                case "A":
                case "a":
                    this.cameraMov[1] = 0;
                    break;
                case "S":
                case "s":
                    this.cameraMov[2] = 0;
                    break;
                case "D":
                case "d":
                    this.cameraMov[3] = 0;
                    break;
                case "Shift":
                    this.cameraBoost = 1;
                    break;
            }
        }

        public incrementNodePosition(amountOfNodes: number) {
            this.moveToNodeIndex += amountOfNodes;
        }

        public update(): void {
            if (vec4.length(this.cameraMov) > 0.5) {
                this.incrementNodePosition(Math.floor(1000 * this.getRenderTimeInSeconds() * this.cameraBoost * (this.cameraMov[0] - this.cameraMov[2]) * 2));
            }
            
            this.nodeIndex += Math.floor((this.moveToNodeIndex - this.nodeIndex) * this.changeSpeed);
            
            if (this.nodeIndex < 0) {
                this.moveToNodeIndex = this.numberOfNodes - Math.abs(this.moveToNodeIndex);
                this.nodeIndex += this.numberOfNodes;
            }

            if (this.nodeIndex > this.numberOfNodes) {
                this.moveToNodeIndex = this.moveToNodeIndex - this.nodeIndex;
                this.nodeIndex = 0;
            }

            if (this.moveToNodeIndex - this.nodeIndex == 0) {
                this.cameraIsMoving = false;
            } else {
                this.cameraIsMoving = true;
            }

            let povMat: mat4 = this.trackDocument.getMatrixOfTrackNode(this.nodeIndex);

            let up: vec3 = vec3.fromValues(povMat[4], povMat[5], povMat[6]);
            let front: vec3 = vec3.fromValues(-povMat[8], -povMat[9], -povMat[10]);

            let pos4 : vec4 = MathUtils.multiplyMat4Vec4(povMat, vec4.fromValues(0, 0.5, 0, 1));
            let pos : vec3 = vec3.fromValues(pos4[0], pos4[1], pos4[2]);

            let scew: number = 0.0;
            let side: number = Math.tan(this.fov * Math.PI / 360.0) * (this.near);

            this.modelMatrix = mat4.lookAt(mat4.create(), pos, vec3.add(vec3.create(), pos, front), up);
            this.projectionMatrix = mat4.frustum(mat4.create(), -side + scew, side + scew, -this.viewPortHeight / this.viewPortWidth * side, this.viewPortHeight / this.viewPortWidth * side, this.near, this.far);
            this.projectionModelMatrix = mat4.multiply(mat4.create(), this.projectionMatrix, this.modelMatrix);
        }

        public stopMovement(): void {
            this.moveToNodeIndex = this.nodeIndex;
        }
    }
}