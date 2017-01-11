/// <reference path="../Chunks/Coaster/Track/CustomTrack.ts"/>
/// <reference path="CustomTrackSpline.ts"/>

/// <reference path="../../Core/BinarySearch.ts" />

namespace NLParkViewer.NoLimits.Document {
    import RollPoint = NoLimits.Chunks.Coaster.Track.RollPoint;
    import Track = NoLimits.Chunks.Coaster.Track.Track;
    import MathUtils = Maths.MathUtils;
    import BinarySearch = NLParkViewer.Core.BinarySearch;

    export class CustomTrackDocument {
        private track: Chunks.Coaster.Track.CustomTrack = null;
        private trackSpline: CustomTrackSpline = null;

        private nodes: Array<TrackNode> = [];
        private nodesLen: Array<number> = [];
        private rollPointSectionNodes: Array<Array<TrackNode>> = [];
        private segmentLengths: Array<number> = [];

        private totalLength: number = 0;

        constructor(track: Chunks.Coaster.Track.CustomTrack = null) {
            if(track === null)
                return;

            this.track = track;

            this.update();
        }

        public update() {
            this.trackSpline = new CustomTrackSpline(this.track);
            this.segmentLengths = this.trackSpline.getSegmentLengths();

            this.nodes.length = 0;
            this.nodesLen.length = 0;
            this.rollPointSectionNodes.length = 0;

            this.totalLength = 0;

            // TODO: No Roll is loaded
            //let tmpRollPoints: Array<RollPoint> = [];//this.track.getRollPoints();
            let tmpRollPoints: Array<RollPoint> = this.track.getRollPoints().slice(0);
            let rollPoints: Array<RollPoint> = [];

            tmpRollPoints.push(this.track.getFirstRollPoint());
            tmpRollPoints.push(this.track.getLastRollPoint());

            tmpRollPoints.sort((a: RollPoint, b: RollPoint) => {
                return a.getPosition() > b.getPosition() ? 1 : -1;
            });

            // TODO: getDistanceOnParameter is still wrong!!!!!!
            for (let i = 0; i < tmpRollPoints.length; i++) {
                tmpRollPoints[i].setPosition(this.trackSpline.getDistanceOnParameter(tmpRollPoints[i].getPosition()));
            }

            tmpRollPoints[0].setPosition(0);
            tmpRollPoints[tmpRollPoints.length - 1].setPosition(this.trackSpline.getSplineLength());

            // clear nodes with no offset between
            for (let i = 0; i < tmpRollPoints.length - 1; i++) {

                if (tmpRollPoints[i + 1].getPosition() - tmpRollPoints[i].getPosition() > MathUtils.epsilon) {
                    rollPoints.push(tmpRollPoints[i]);
                }
            }

            if (tmpRollPoints.length > 1)
                rollPoints.push(tmpRollPoints[tmpRollPoints.length - 1]);

            for (let i = 0; i < rollPoints.length - 1; i++) {
                let sectionNodes: Array<TrackNode> = [];

                let rp1: RollPoint = rollPoints[i];
                let rp2: RollPoint = rollPoints[i + 1];

                let rollLength: number = rp2.getPosition() - rp1.getPosition();

                let numNodes: number = Math.floor(rollLength / 0.01);

                let sectionLength: number = 0.0;
                let lastPos: vec3 = vec3.fromValues(0, 0, 0);

                for (let k = 0; k < numNodes; k++) {
                    let atDistance: number = rp1.getPosition() + ((k / (numNodes - 1)) * rollLength);
                    let pos: vec3 = this.trackSpline.getPositionAtDistance(atDistance);

                    let trackNode: TrackNode = new TrackNode();

                    if (k) {
                        sectionLength += vec3.distance(pos, lastPos);
                    } else {
                        // init matrix at first point
                        let atNextDistance: number = rp1.getPosition() + (((k + 1) / (numNodes - 1)) * rollLength);
                        let pos2: vec3 = this.trackSpline.getPositionAtDistance(atNextDistance);
                        let normal: vec3 = vec3.subtract(vec3.create(), pos2, pos);

                        let mat: mat4 = this.initMatrix(normal);

                        mat4.rotateZ(mat, mat, MathUtils.radians(rp1.getRoll()));

                        mat[12] = pos[0];
                        mat[13] = pos[1];
                        mat[14] = pos[2];

                        trackNode.angle = vec3.fromValues(0, 0, 0);
                        trackNode.roll = Math.sin(Math.atan2(normal[1], vec2.len(vec2.fromValues(normal[0], normal[2]))));
                        trackNode.mat = mat;
                    }

                    trackNode.pos = pos;
                    trackNode.dist = this.totalLength + sectionLength;

                    this.nodesLen.push(trackNode.dist);
                    sectionNodes.push(trackNode);

                    lastPos = pos;
                }

                if (!sectionNodes.length) {
                    this.rollPointSectionNodes.push(sectionNodes);
                    continue;
                }

                this.totalLength += sectionLength;

                // update the matrices on the generated nodes (ptf and stuff)
                let prevNodeMatrix: mat4 = mat4.clone(sectionNodes[0].mat);

                prevNodeMatrix[12] = 0;
                prevNodeMatrix[13] = 0;
                prevNodeMatrix[14] = 0;

                for (let k = 1; k < sectionNodes.length; k++) {
                    let currentNode: TrackNode = sectionNodes[k];
                    let prevNode: TrackNode = sectionNodes[k - 1];

                    let nodesNormal: vec3 = vec3.subtract(vec3.create(), currentNode.pos, prevNode.pos);

                    currentNode.roll = Math.sin(Math.atan2(nodesNormal[1], vec2.len(vec2.fromValues(nodesNormal[0], nodesNormal[2]))));

                    let newMatrix: mat4 = mat4.clone(prevNodeMatrix);
                    newMatrix[15] = 1.0;

                    let b0: number = newMatrix[4];
                    newMatrix[4] = newMatrix[1];
                    newMatrix[1] = b0;

                    b0 = newMatrix[8];
                    newMatrix[8] = newMatrix[2];
                    newMatrix[2] = b0;

                    b0 = newMatrix[9];
                    newMatrix[9] = newMatrix[6];
                    newMatrix[6] = b0;

                    let nn: vec4 = MathUtils.multiplyMat4Vec4(newMatrix, vec4.fromValues(nodesNormal[0], nodesNormal[1], nodesNormal[2], 1.0));
                    nodesNormal = vec3.fromValues(nn[0], nn[1], nn[2]);

                    currentNode.angle[0] = Math.atan2(nodesNormal[1], vec2.len(vec2.fromValues(nodesNormal[0], nodesNormal[2])));
                    currentNode.angle[1] = Math.atan2(nodesNormal[0] * -1, nodesNormal[2] * -1);
                    currentNode.angle[2] = 0.0;

                    mat4.rotateY(prevNodeMatrix, prevNodeMatrix, currentNode.angle[1]);
                    mat4.rotateX(prevNodeMatrix, prevNodeMatrix, currentNode.angle[0]);

                    currentNode.mat = mat4.clone(prevNodeMatrix);
                    currentNode.mat[12] = currentNode.pos[0];
                    currentNode.mat[13] = currentNode.pos[1];
                    currentNode.mat[14] = currentNode.pos[2];
                }

                let lastNode: TrackNode = sectionNodes[sectionNodes.length - 1];

                // Roll correction
                let rollOffset: number = MathUtils.radians(rp2.getRoll()) - Math.atan2(lastNode.mat[1], lastNode.mat[5]);

                if (Math.abs(rollOffset) > MathUtils.radians(180.0)) {
                    if (rollOffset > 0.0) rollOffset -= MathUtils.radians(360.0);
                    else rollOffset += MathUtils.radians(360.0);
                }

                rp2.setRollOffset(rollOffset);

                this.rollPointSectionNodes.push(sectionNodes);
            }

            let rollSections: Array<number> = this.getRollSections(rollPoints);
            let sectionX: Array<Array<number>> = [];
            let sectionY: Array<Array<number>> = [];

            sectionX.length = sectionY.length = rollSections.length;

            // prepare spline for interpolation
            for (let k = 0; k < rollSections.length - 1; k++) {
                let totalOffset: number = 0.0;

                sectionX[k] = [];
                sectionY[k] = [];

                for (let i = rollSections[k]; i < rollSections[k + 1] + 1; i++) {
                    let rp: RollPoint = rollPoints[i];

                    let rollOffset: number = rp.getRollOffset();
                    let roll: number = rollOffset + totalOffset;

                    if (i == rollSections[k]) {
                        sectionX[k].push(rp.getPosition() - (MathUtils.epsilon * 10000.0));
                        sectionY[k].push(roll);
                    }

                    sectionX[k].push(rp.getPosition());
                    sectionY[k].push(roll);

                    if (i == rollSections[k + 1]) {
                        sectionX[k].push(rp.getPosition() + (MathUtils.epsilon * 10000.0));
                        sectionY[k].push(roll);
                    }

                    rp.setNodeIndex(k);

                    totalOffset += rollOffset;
                }
            }

            // interpolate roll
            for (let i = 0; i < rollPoints.length - 1; i++) {
                let rp1: RollPoint = rollPoints[i];
                let rp2: RollPoint = rollPoints[i + 1];

                let sectionNodes: Array<TrackNode> = this.rollPointSectionNodes[i];

                let segmentLength: number = rp2.getPosition() - rp1.getPosition();

                let xValues: Array<number> = sectionX[rp1.getNodeIndex()];
                let yValues: Array<number> = sectionY[rp1.getNodeIndex()];

                let spline: Tk.Spline = new Tk.Spline();
                spline.setPoints(xValues, yValues);

                let firstAngle: number = spline.get(rp1.getPosition());

                if (sectionNodes.length - 1 > 1) {
                    for (let k = 0; k < sectionNodes.length; k++) {
                        let atDistance: number = rp1.getPosition() + ((k / (sectionNodes.length - 1)) * segmentLength);
                        let currNode: TrackNode = sectionNodes[k];

                        currNode.angle[2] = spline.get(atDistance) - firstAngle;

                        this.nodes.push(currNode);

                    }
                }
            }
        }

        private getRollSections(rollPoints: Array<RollPoint>): Array<number> {
            let res: Array<number> = [];

            for (let i = 0; i < rollPoints.length; i++) {
                if (!i || i == rollPoints.length - 1 || rollPoints[i].isStrict())
                    res.push(i);
            }

            return res;
        }

        private initMatrix(normal: vec3): mat4 {
            let mat: mat4 = mat4.fromValues(
                1, 0, 0, 0,
                0, 1, 0, 0,
                0, 0, 1, 0,
                0, 0, 0, 1
            );
            
            let normalLen: number = vec2.len(vec2.fromValues(normal[0], normal[2]));

            let angle1: number = Math.atan2(normal[1], normalLen);
            let angle2: number = Math.atan2(normal[0] * -1, normal[2] * -1);

            mat4.rotateY(mat, mat, angle2);
            mat4.rotateX(mat, mat, angle1);

            return mat;
        }

        public getMatrixAtDistance(at : number) : mat4 {
            let index : number = BinarySearch.lowerBound<number>(this.nodesLen, at);
            index--;

            if(index < 0)
                index = 0;

            if(index >= this.nodes.length - 1) {
                let lastNode : TrackNode = this.nodes[this.nodes.length - 1];
                let res : mat4 = mat4.clone(lastNode.mat);
                mat4.rotateZ(res, res, lastNode.angle[2]);
                return res;
            }

            let n1 : TrackNode = this.nodes[index];
            let n2 : TrackNode = this.nodes[index + 1];

            let t : number = 0;
            let nodesDistanceDiff : number = n2.dist - n1.dist;
            let distanceDiff : number = at - n1.dist;

            if (nodesDistanceDiff > MathUtils.epsilon) {
                t = Math.max(Math.min(distanceDiff / nodesDistanceDiff, 1.0), 0.0);
            } else t = 0.5;

            let newPos : vec3 = vec3.lerp(vec3.create(), n1.pos, n2.pos, t);
            let res : mat4 = mat4.clone(n1.mat);

            res[12] = newPos[0];
            res[13] = newPos[1];
            res[14] = newPos[2];

            mat4.rotateY(res, res, n1.angle[1] * t);
            mat4.rotateX(res, res, n1.angle[0] * t);
            mat4.rotateZ(res, res, n1.angle[2] + ((n2.angle[2] - n1.angle[2]) * t));

            return res;
        }

        public getMatrixOfTrackNode(at: number): mat4 {
            let trackNode : TrackNode = this.nodes[at];

            let mat : mat4 = mat4.clone(trackNode.mat);
            mat4.rotateZ(mat, mat, trackNode.angle[2]);

            return mat;
        }

        public getDistanceOnParameter(t: number): number {
            let index = Math.floor(t);

            if(index >= this.segmentLengths.length - 1)
                return this.segmentLengths[this.segmentLengths.length - 1];

            let s1 : number = this.segmentLengths[index];
            let s2 : number = this.segmentLengths[index + 1];

            return s1 + ((s2 - s1) * (t - index));
        }

        public initFromWorker(obj : any) {
            this.nodes = obj.nodes;
            this.nodesLen = obj.nodesLen;
            this.totalLength = obj.totalLength;
            this.segmentLengths = obj.segmentLengths;
        }

        public getLength() : number {
            return this.totalLength;
        }

        public getNodeAt(at : number) {
            return this.nodes[at];
        }

        public setTrack(track : Chunks.Coaster.Track.CustomTrack, update : boolean = true) {
            this.track = track;

            if(update)
                this.update();
        }

        public getNumberOfNodes() : number {
            return this.nodes.length;
        }

        public getRawTrack() : Chunks.Coaster.Track.CustomTrack {
            return this.track;
        }
    }
}