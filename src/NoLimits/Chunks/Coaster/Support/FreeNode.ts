namespace NLParkViewer.NoLimits.Chunks.Coaster.Support {
    export class FreeNode {

        private position : vec3 = vec3.fromValues(0, 0, 0);

        getPosition(): vec3 {
            return this.position;
        }

        setPosition(value: vec3) {
            this.position = value;
        }
    }
}