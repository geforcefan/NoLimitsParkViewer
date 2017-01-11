/// <reference path="TrackStyle.ts" />
/// <reference path="SpineType.ts" />

namespace NLParkViewer.Renderer.TrackStyles {
    import RailNodeConnectionStyle = NLParkViewer.NoLimits.Chunks.Coaster.Support.RailNodeConnectionStyle;
    import MathUtils = NLParkViewer.Maths.MathUtils;

    export class HyperCoaster extends TrackStyle {
        constructor() {
            super();

            this.spineTypes.push(new HyperCoasterSpine3Tubes());
            this.spineTypes.push(new HyperCoasterSpine4Tubes());
            this.spineTypes.push(new HyperCoasterSpine2TubesWD());
            this.spineTypes.push(new HyperCoasterSpine2TubesWoD());
        }
    }

    class HyperCoasterSpine3Tubes extends SpineType {
        constructor() {
            super();

            this.wireframeCrosstiesSpacing = 0.85;
            this.wireframeRailSpacing = 0.2;
            this.wireframeCrossties = [
                vec4.fromValues(0.45, 0, 0, 1),
                vec4.fromValues(0, -0.9, 0, 1),
                vec4.fromValues(-0.45, 0, 0, 1),
                vec4.fromValues(0.45, 0, 0, 1),
            ];

            this.wireframeRails = [
                vec4.fromValues(0.45, 0, 0, 1),
                vec4.fromValues(0, -0.9, 0, 1),
                vec4.fromValues(-0.45, 0, 0, 1)
            ];
        }

        public getRailConnectorNodes(style: RailNodeConnectionStyle, mat : mat4): Array<vec3> {
            return [
                MathUtils.multiplyMat4Vec4ToVec3(mat, vec4.fromValues(0, -1.1, 0, 1)),
                MathUtils.multiplyMat4Vec4ToVec3(mat, vec4.fromValues(0, -1.4, 0, 1)),
            ];
        }
    }

    class HyperCoasterSpine4Tubes extends SpineType {
        constructor() {
            super();

            this.wireframeCrosstiesSpacing = 0.85;
            this.wireframeRailSpacing = 0.2;

            this.wireframeCrossties = [
                vec4.fromValues(0.45, 0, 0, 1),
                vec4.fromValues(0.45, -1.03, 0, 1),
                vec4.fromValues(-0.45, -1.03, 0, 1),
                vec4.fromValues(-0.45, 0, 0, 1),
                vec4.fromValues(0.45, 0, 0, 1)
            ];

            this.wireframeRails = [
                vec4.fromValues(0.45, 0, 0, 1),
                vec4.fromValues(0.45, -1.03, 0, 1),
                vec4.fromValues(-0.45, -1.03, 0, 1),
                vec4.fromValues(-0.45, 0, 0, 1)
            ];
        }

        public getRailConnectorNodes(style: RailNodeConnectionStyle, mat : mat4): Array<vec3> {
            return [
                MathUtils.multiplyMat4Vec4ToVec3(mat, vec4.fromValues(0, -1.2, 0, 1)),
                MathUtils.multiplyMat4Vec4ToVec3(mat, vec4.fromValues(0, -1.5, 0, 1)),
            ];
        }
    }

    class HyperCoasterSpine2TubesWD extends SpineType {
        constructor() {
            super();

            this.wireframeCrosstiesSpacing = 0.85;
            this.wireframeRailSpacing = 0.2;

            this.wireframeCrossties = [
                vec4.fromValues(0.45, 0, 0, 1),
                vec4.fromValues(-0.45, 0, 0, 1),
            ];

            this.wireframeRails = [
                vec4.fromValues(0.45, 0, 0, 1),
                vec4.fromValues(-0.45, 0, 0, 1)
            ];

        }

        public getRailConnectorNodes(style: RailNodeConnectionStyle, mat : mat4): Array<vec3> {
            if(style == RailNodeConnectionStyle.TrackDefault) {
                return [
                    MathUtils.multiplyMat4Vec4ToVec3(mat, vec4.fromValues(0, -0.17, 0, 1)),
                ];
            }

            return [
                MathUtils.multiplyMat4Vec4ToVec3(mat, vec4.fromValues(0, -0.17, 0, 1)),
            ];
        }
    }

    class HyperCoasterSpine2TubesWoD extends SpineType {
        constructor() {
            super();

            this.wireframeCrosstiesSpacing = 0.85;
            this.wireframeRailSpacing = 0.2;

            this.wireframeCrossties = [
                vec4.fromValues(0.45, 0, 0, 1),
                vec4.fromValues(-0.45, 0, 0, 1),
            ];

            this.wireframeRails = [
                vec4.fromValues(0.45, 0, 0, 1),
                vec4.fromValues(-0.45, 0, 0, 1)
            ];

        }

        public getRailConnectorNodes(style: RailNodeConnectionStyle, mat : mat4): Array<vec3> {
            return [
                MathUtils.multiplyMat4Vec4ToVec3(mat, vec4.fromValues(0, -0.17, 0, 1)),
            ];
        }
    }
}