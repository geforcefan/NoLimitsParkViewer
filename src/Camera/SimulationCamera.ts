/// <reference path="../NoLimits/Document/CustomTrackDocument.ts" />
/// <reference path="../Maths/MathUtils" />

namespace NLParkViewer.Camera {
    import MathUtils = NLParkViewer.Maths.MathUtils;
    import CustomTrackDocument = NLParkViewer.NoLimits.Document.CustomTrackDocument;
    import TrackNode = NLParkViewer.NoLimits.Document.TrackNode;

    export class SimulationCamera extends Camera {
        private trackDocument: CustomTrackDocument;

        private distance : number = 0;
        private velocity : number = 0;
        private energy = 0;

        constructor(tackDocument: CustomTrackDocument) {
            super();
            this.stopMovement();

            this.trackDocument = tackDocument;
            this.distance = 0.0;

            let povMat: mat4 = this.trackDocument.getMatrixAtDistance(this.distance);
            this.energy = 0.5 * this.velocity * this.velocity + 9.81 * povMat[13];
        }

        public onMouseDown(e: MouseEvent): void {
        }

        public onMouseUp(e: MouseEvent): void {
        }

        public onMouseMove(e: MouseEvent): void {
        }

        public onMouseWheel(e: MouseWheelEvent): void {
        }

        public onKeyDown(e: KeyboardEvent): void {
        }

        public onKeyUp(e: KeyboardEvent): void {
        }

        public update(): void {
            if(this.distance < 0)
                this.distance = this.trackDocument.getLength();
            if(this.distance > this.trackDocument.getLength())
                this.distance = 0;

            let povMat: mat4 = this.trackDocument.getMatrixAtDistance(this.distance);

            let up: vec3 = vec3.fromValues(povMat[4], povMat[5], povMat[6]);
            let front: vec3 = vec3.fromValues(-povMat[8], -povMat[9], -povMat[10]);

            let pos4 : vec4 = MathUtils.multiplyMat4Vec4(povMat, vec4.fromValues(0, 0.5, 0, 1));
            let pos : vec3 = vec3.fromValues(pos4[0], pos4[1], pos4[2]);

            let scew: number = 0.0;
            let side: number = Math.tan(this.fov * Math.PI / 360.0) * (this.near);

            this.modelMatrix = mat4.lookAt(mat4.create(), pos, vec3.add(vec3.create(), pos, front), up);
            this.projectionMatrix = mat4.frustum(mat4.create(), -side + scew, side + scew, -this.viewPortHeight / this.viewPortWidth * side, this.viewPortHeight / this.viewPortWidth * side, this.near, this.far);
            this.projectionModelMatrix = mat4.multiply(mat4.create(), this.projectionMatrix, this.modelMatrix);

            this.energy -= (this.velocity * this.velocity * this.velocity);
            this.velocity = Math.sqrt(2 *(this.velocity + 9.81 * povMat[13]));

            this.distance += (this.velocity * this.getRenderTimeInSeconds()) / 1;

            //console.log(this.velocity);
        }

        public stopMovement(): void {
        }
    }
}