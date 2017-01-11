/// <reference path="IShader.ts"/>

namespace NLParkViewer.Shader {
    export class FloorShader implements IShader {
        vertex(): string {
            return `
precision highp float;

attribute vec4 vPosition;
attribute vec4 vColor;

varying vec4 oColor;

uniform mat4 projectionMatrix;
uniform mat4 modelMatrix;

void main()   
{
	oColor = vColor;
    gl_Position = projectionMatrix * modelMatrix * vec4(vPosition.xyz, 1.0);
}
            `;
        }

        fragment(): string {
            return `
precision highp float;

varying vec4 oColor;

void main(void)
{
	gl_FragColor = oColor;
}
            `;
        }
    }
}