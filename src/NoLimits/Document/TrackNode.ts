namespace NLParkViewer.NoLimits.Document {
    export class TrackNode {
        constructor(obj : any = null) {
            if(obj !== null)
                this.setFromObject(obj);
        }

        public pos : vec3 = vec3.fromValues(0, 0, 0);
        public angle : vec3 = vec3.fromValues(0, 0, 0);

        public mat : mat4 = mat4.fromValues(
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        );

        public dist : number = 0;
        public roll : number = 0;

        public setFromObject(obj : any) {
            this.pos = vec3.fromValues(obj.pos[0], obj.pos[1], obj.pos[2]);
            this.angle = vec3.fromValues(obj.angle[0], obj.angle[1], obj.angle[2]);
            this.roll = obj.roll;
            this.dist = obj.dist;
            this.mat = mat4.fromValues(
                obj.mat[0], obj.mat[1], obj.mat[2], obj.mat[3],
                obj.mat[4], obj.mat[5], obj.mat[6], obj.mat[7],
                obj.mat[8], obj.mat[9], obj.mat[10], obj.mat[11],
                obj.mat[12], obj.mat[13], obj.mat[14], obj.mat[15]
            );
        }
    }
}