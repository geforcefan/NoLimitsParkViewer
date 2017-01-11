/// <reference path="../Shader/IShader.ts"/>

namespace NLParkViewer.Core {
    export class ShaderProgram {
        private program : WebGLProgram;
        private gl : WebGLRenderingContext;
        private shader : Shader.IShader;

        constructor(gl : WebGLRenderingContext, shader : Shader.IShader) {
            this.gl = gl;
            this.shader = shader;

            let vertexShader : WebGLShader = this.compileShader(shader.vertex(), gl.VERTEX_SHADER);
            let fragmentShader : WebGLShader = this.compileShader(shader.fragment(), gl.FRAGMENT_SHADER);

            this.program = gl.createProgram();

            if (this.program == 0) {
                console.log("Unable to create program");
            }

            gl.attachShader(this.program, vertexShader);
            gl.attachShader(this.program, fragmentShader);

            gl.bindAttribLocation(this.program, 0, "vPosition");
            gl.linkProgram(this.program);
        }

        private getShaderTypeString(shadeType : number) {
            switch(shadeType) {
                case this.gl.VERTEX_SHADER:
                    return "Vertex";
                case this.gl.FRAGMENT_SHADER:
                    return "Fragment";
            }
        }

        public compileShader(source : string, shaderType : number) : WebGLShader{
            let gl : WebGLRenderingContext = this.gl;

            let shader : WebGLShader = gl.createShader(shaderType);
            gl.shaderSource(shader, source);
            gl.compileShader(shader);

            let info : string = gl.getShaderInfoLog(shader);
            console.log("Compile Result of " + (<any>this.shader.constructor).name + "::" + this.getShaderTypeString(shaderType) + ": ", (info?info:"No Errors"));

            return shader;
        }

        public use() {
            this.gl.useProgram(this.program);
        }

        public uniformMat4(name : string, value : mat4) {
            this.gl.uniformMatrix4fv(this.gl.getUniformLocation(this.program, name), false, new Float32Array(value));
        }

        public uniformVec4(name : string, value : vec4) {
            this.gl.uniform4fv(this.gl.getUniformLocation(this.program, name), new Float32Array(value));
        }

        public uniformVec3(name : string, value : vec3) {
            this.gl.uniform3fv(this.gl.getUniformLocation(this.program, name), new Float32Array(value));
        }

        public uniformVec2(name : string, value : vec2) {
            this.gl.uniform2fv(this.gl.getUniformLocation(this.program, name), new Float32Array(value));
        }

        public uniformNumber(name : string, value : number) {
            this.gl.uniform1f(this.gl.getUniformLocation(this.program, name), value);
        }
    }
}