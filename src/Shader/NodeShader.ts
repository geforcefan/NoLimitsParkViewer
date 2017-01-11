/// <reference path="IShader.ts"/>

namespace NLParkViewer.Shader {
    export class NodeShader implements IShader {
        vertex(): string {
            return `
precision highp float;

attribute vec4 vPosition;
attribute vec4 vNormal;
attribute vec2 vTexCoordinate;

varying vec4 oColor;
varying vec3 oNormal;

uniform float connectionType;
uniform mat4 projectionMatrix;
uniform mat4 modelMatrix;

void main()   
{
    if(connectionType > 3.0) { // beam node
        oColor = vec4(0.5, 0.0, 0.5, 1.0);
    } else if(connectionType > 2.0) { // rail connector
        oColor = vec4(0.8, 0.6, 0.0, 1.0);
    } else if(connectionType > 1.0) { // footer
        oColor = vec4(0.8, 0.6, 0.0, 1.0);
    } else {
        oColor = vec4(0.5, 0.0, 0.0, 1.0);
    }
    
    oNormal = vec3(vNormal);
    gl_Position = projectionMatrix * modelMatrix * vec4(vPosition.xyz, 1.0);
}
            `;
        }

        fragment(): string {
            return `
precision highp float;

uniform vec3 reverseLightDirection;

varying vec4 oColor;
varying vec3 oNormal;

void main(void)
{
   vec3 normal = normalize(oNormal); 
   float light = dot(normal, vec3(0.5, 0.7, 1.0));
    
    gl_FragColor = oColor;   
    gl_FragColor.rgb *= light;
}
            `;
        }
    }
}