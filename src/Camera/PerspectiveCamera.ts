/// <reference path="../Maths/MathUtils.ts"/>

namespace NLParkViewer.Camera {
    import MathUtils = NLParkViewer.Maths.MathUtils;

    export class PerspectiveCamera extends Camera {
        public cameraSide: vec3 = vec3.fromValues(1.0, 0.0, 0.0);
        public cameraDir: vec3 = vec3.fromValues(0.0, 0.0, -1.0);

        private moveToCameraPos: vec3 = vec3.fromValues(0, 0, 0);
        private moveToCameraDir: vec3 = vec3.fromValues(0, 0, 0);
        private moveToCameraSide: vec3 = vec3.fromValues(0, 0, 0);

        private cameraMov : vec4 = vec4.fromValues(0, 0, 0, 0);

        private cameraBoost : number = 1;
        private cameraJump : number = 0;

        private rotateMode: boolean = false;
        private hasMoved : boolean = false;

        private lastX: number = 0;
        private lastY: number = 0;

        constructor() {
            super();
            this.stopMovement();
        }

        public onMouseDown(e: MouseEvent): void {
            if (e.button == 0) {
                this.hasMoved = false;
                this.rotateMode = true;

                this.lastX = e.clientX;
                this.lastY = e.clientY;
            }
        }

        public onMouseUp(e: MouseEvent): void {
            this.rotateMode = false;

            if(!this.hasMoved) {
                this.stopMovement();
            }
        }

        public onMouseMove(e: MouseEvent): void {
            e.stopImmediatePropagation();
            e.preventDefault();

            if (this.rotateMode) {
                this.hasMoved = true;
                this.rotate(vec2.fromValues((this.lastX - e.clientX) * 0.4, (this.lastY - e.clientY) * 0.4));

                this.lastX = e.clientX;
                this.lastY = e.clientY;
            }
        }

        public onMouseWheel(e: MouseWheelEvent): void {
            e.stopImmediatePropagation();
            e.preventDefault();

            this.cameraJump -= e.wheelDeltaY * 0.5;

            this.moveCamera();
        }

        public onKeyDown(e: KeyboardEvent): void {
            e.stopImmediatePropagation();
            e.preventDefault();

            switch(e.key) {
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
                    this.cameraBoost =  2;
                    break;
            }
        }

        public onKeyUp(e: KeyboardEvent): void {
            e.stopImmediatePropagation();
            e.preventDefault();

            switch(e.key) {
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
                    this.cameraBoost =  1;
                    break;
            }
        }

        private moveCamera() {
            this.moveToCameraPos = vec3.add(vec3.create(),
                this.moveToCameraPos,
                vec3.sub(vec3.create(),
                    vec3.scale(vec3.create(),
                        this.cameraDir,
                        0.3 * this.cameraBoost * (this.cameraMov[0] - this.cameraMov[2])
                    ), vec3.scale(vec3.create(),
                        vec3.normalize(vec3.create(),
                            vec3.cross(vec3.create(),
                                this.cameraDir,
                                vec3.fromValues(0, 1, 0)
                            )
                        ),
                        (0.3 * this.cameraBoost * (this.cameraMov[1] - this.cameraMov[3]))
                    )
                )
            );

            this.moveToCameraPos = vec3.add(vec3.create(),
                this.moveToCameraPos,
                vec3.scale(vec3.create(), vec3.cross(vec3.create(), this.cameraDir, vec3.normalize(vec3.create(), vec3.cross(vec3.create(), this.cameraDir, vec3.fromValues(0, 1,0 )))), 0.01 * this.cameraJump * this.cameraBoost)
            );

            this.cameraJump = 0.0;
        }

        private rotate(v: vec2) {
            let sign: number = 1.0;
            let up: vec3 = vec3.cross(vec3.create(), this.moveToCameraSide, this.moveToCameraDir);

            if (up[1] < 0)
                sign = -1.0;

            this.moveToCameraDir = MathUtils.multiplyQuatVec3(quat.setAxisAngle(quat.create(), vec3.fromValues(0 * sign, 1 * sign, 0 * sign), MathUtils.radians(v[0])), this.moveToCameraDir);
            this.moveToCameraSide = MathUtils.multiplyQuatVec3(quat.setAxisAngle(quat.create(), vec3.fromValues(0 * sign, 1 * sign, 0 * sign), MathUtils.radians(v[0])), this.moveToCameraSide);
            this.moveToCameraDir = MathUtils.multiplyQuatVec3(quat.setAxisAngle(quat.create(), this.moveToCameraSide, MathUtils.radians(v[1])), this.moveToCameraDir);
        }

        public update(): void {
            if(vec4.length(this.cameraMov) > 0.5) {
                this.moveCamera();
            }

            this.cameraPos = vec3.add(vec3.create(), vec3.scale(vec3.create(), vec3.subtract(vec3.create(), this.moveToCameraPos, this.cameraPos), this.changeSpeed), this.cameraPos);
            this.cameraSide = vec3.add(vec3.create(), vec3.scale(vec3.create(), vec3.subtract(vec3.create(), this.moveToCameraSide, this.cameraSide), this.changeSpeed), this.cameraSide);
            this.cameraDir = vec3.add(vec3.create(), vec3.scale(vec3.create(), vec3.subtract(vec3.create(), this.moveToCameraDir, this.cameraDir), this.changeSpeed), this.cameraDir);

            if (vec3.distance(this.moveToCameraPos, this.cameraPos) < MathUtils.epsilon) {
                this.cameraIsMoving = false;
            } else {
                this.cameraIsMoving = true;
            }

            let offset: number = 0.0;
            let scew: number = 0.0;
            let side: number = Math.tan(this.fov * Math.PI / 360.0) * (this.near);

            let pos: vec3 = vec3.add(vec3.create(), this.cameraPos, vec3.scale(vec3.create(), this.cameraSide, offset));

            this.projectionMatrix = mat4.frustum(mat4.create(), -side + scew, side + scew, -this.viewPortHeight / this.viewPortWidth * side, this.viewPortHeight / this.viewPortWidth * side, this.near, this.far);
            this.modelMatrix = mat4.lookAt(mat4.create(), pos, vec3.add(vec3.create(), pos, this.cameraDir), vec3.cross(vec3.create(), this.cameraSide, this.cameraDir));
            this.projectionModelMatrix = mat4.multiply(mat4.create(), this.projectionMatrix, this.modelMatrix);
        }

        public stopMovement(): void {
            this.moveToCameraPos = vec3.clone(this.cameraPos);
            this.moveToCameraDir = vec3.clone(this.cameraDir);
            this.moveToCameraSide = vec3.clone(this.cameraSide);
        }
    }
}