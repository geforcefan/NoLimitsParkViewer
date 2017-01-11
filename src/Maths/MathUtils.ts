namespace NLParkViewer.Maths {
    export class MathUtils {
        public static epsilon : number = 0;

        public static getEpsilon() {
            var e = 1.0;
            while ( ( 1.0 + 0.5 * e ) !== 1.0 )
                e *= 0.5;
            return e;
        }

        public static init() {
            MathUtils.epsilon = MathUtils.getEpsilon();
        }

        public static radians(a : number) : number {
            return a * Math.PI / 180.0;
        }

        public static degrees(a : number) : number {
            return a * (180 / Math.PI);
        }

        public static multiplyQuatVec3(q : quat, v : vec3) : vec3 {
            let uv : vec3;
            let uuv : vec3;
            let quatVector : vec3 = vec3.fromValues(q[0], q[1], q[2]);

            uv = vec3.cross(vec3.create(), quatVector, v);
            uuv = vec3.cross(vec3.create(), quatVector, uv);

            uv = vec3.scale(vec3.create(), uv, (2.0 * q[3]));
            uuv = vec3.scale(vec3.create(), uuv, 2.0);

            return vec3.add(vec3.create(), vec3.add(vec3.create(), v, uv), uuv);
        }

        public static multiplyMat4Vec4(lhs : mat4, rhs : vec4) : vec4 {
            return vec4.fromValues(
                lhs[0] * rhs[0] + lhs[4] * rhs[1] + lhs[8] * rhs[2] + lhs[12] * rhs[3],
                lhs[1] * rhs[0] + lhs[5] * rhs[1] + lhs[9] * rhs[2] + lhs[13] * rhs[3],
                lhs[2] * rhs[0] + lhs[6] * rhs[1] + lhs[10] * rhs[2] + lhs[14] * rhs[3],
                lhs[3] * rhs[0] + lhs[7] * rhs[1] + lhs[11] * rhs[2] + lhs[15] * rhs[3]
            );
        }

        public static multiplyMat4Vec4ToVec3(lhs : mat4, rhs : vec4) : vec3 {
            return vec3.fromValues(
                lhs[0] * rhs[0] + lhs[4] * rhs[1] + lhs[8] * rhs[2] + lhs[12] * rhs[3],
                lhs[1] * rhs[0] + lhs[5] * rhs[1] + lhs[9] * rhs[2] + lhs[13] * rhs[3],
                lhs[2] * rhs[0] + lhs[6] * rhs[1] + lhs[10] * rhs[2] + lhs[14] * rhs[3]
            );
        }

        public static debugMat4(mat : mat4) {
            console.log(
                mat[0], mat[4], mat[8], mat[12], "\n",
                mat[1], mat[5], mat[9], mat[13], "\n",
                mat[2], mat[6], mat[10], mat[14], "\n",
                mat[3], mat[7], mat[11], mat[15], "\n"
            );
        }
    }
}