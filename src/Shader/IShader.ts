namespace NLParkViewer.Shader {
    export interface IShader {
        vertex() : string;
        fragment() : string;
    }
}