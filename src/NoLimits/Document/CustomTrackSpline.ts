/// <reference path="../Chunks/Coaster/Track/Vertex.ts"/>
/// <reference path="../Chunks/Coaster/Track/CustomTrack.ts"/>
/// <reference path="../../Maths/MathUtils.ts"/>
/// <reference path="../../Core/BinarySearch.ts" />
/// <reference path="TrackNode.ts"/>

namespace NLParkViewer.NoLimits.Document {
    import BinarySearch = NLParkViewer.Core.BinarySearch;
    import Vertex = NLParkViewer.NoLimits.Chunks.Coaster.Track.Vertex;
    import MathUtils = NLParkViewer.Maths.MathUtils;

    export class CustomTrackSpline {
        private nodes: Array<TrackNode> = [];
        private nodesLen: Array<number> = [];
        private segmentLengths: Array<number> = [];
        private splineLength: number = 0;

        private track: Chunks.Coaster.Track.CustomTrack;
        private vertices: Array<Vertex> = [];

        private knots : Array<Array<number>> = [];

        constructor(track: Chunks.Coaster.Track.CustomTrack) {
            this.track = track;
            this.vertices = this.track.getVertices();

            this.update();
        };

        private deBoor(k: number, degree: number, i: number, x: number, knotIndex: number, startIndex: number): any {
            if (k == 0) {
                return [
                    this.vertices[startIndex + i].position[0] * this.vertices[startIndex + i].position[3],
                    this.vertices[startIndex + i].position[1] * this.vertices[startIndex + i].position[3],
                    this.vertices[startIndex + i].position[2] * this.vertices[startIndex + i].position[3],
                    this.vertices[startIndex + i].position[3]
                ];
            } else {
                let alpha: number = (x - this.knots[knotIndex][i]) / (this.knots[knotIndex][i + degree + 1 - k] - this.knots[knotIndex][i]);

                return vec4.add(vec4.create(),
                    vec4.scale(vec4.create(), this.deBoor(k - 1, degree, i - 1, x, knotIndex, startIndex), (1.0 - alpha)),
                    vec4.scale(vec4.create(), this.deBoor(k - 1, degree, i, x, knotIndex, startIndex), alpha)
                );
            }
        }

        private whichInterval(x : number, knotIndex : number, degree : number) : number {
            for (let i = 1; i < this.knots[knotIndex].length - 1; i++) {
                if(x < this.knots[knotIndex][i])
                    return i - 1;
                else if(x == this.knots[knotIndex][this.knots[knotIndex].length - 1])
                    return this.knots[knotIndex].length - degree - 2;
            }
            return -1;
        }

        private interpolate(t: number, degree: number, knotIndex: number, startIndex: number): vec3 {
            let pos : number[] = this.deBoor(
                degree,
                degree,
                this.whichInterval(t, knotIndex, degree),
                t,
                knotIndex,
                startIndex
            );

            return vec3.fromValues(
                pos[0] / pos[3],
                pos[1] / pos[3],
                pos[2] / pos[3]
            );
        }

        private estimateSplineSectionLength(fromIndex: number, knotIndex: number, degree: number): number {
            let lastPos: vec3 = vec3.fromValues(
                this.vertices[fromIndex].position[0],
                this.vertices[fromIndex].position[1],
                this.vertices[fromIndex].position[2]
            );
            let length: number = 0.0;

            let highestKnotValue = this.knots[knotIndex][this.knots[knotIndex].length - 1];

            for (let i = 0; i < 15; i++) {
                let t1: number = (highestKnotValue * i) / 14.0;
                let pos: vec3 = this.interpolate(t1, degree, knotIndex, fromIndex);

                length += vec3.distance(pos, lastPos);

                lastPos = pos;
            }

            return length;
        }

        public arcLength(alpha: number, beta: number, degree: number, knotIndex: number, startIndex: number): number {
            let gamma: number = (alpha + beta) / 2.0;
            let a: vec3 = this.interpolate(alpha, degree, knotIndex, startIndex);
            let b: vec3 = this.interpolate(beta, degree, knotIndex, startIndex);

            let ci: vec3 = vec3.fromValues(
                (a[0] + b[0]) / 2,
                (a[1] + b[1]) / 2,
                (a[2] + b[2]) / 2
            );

            let c: vec3 = this.interpolate(gamma, degree, knotIndex, startIndex);

            if (vec3.distance(c, ci) / vec3.distance(a, b) > 0.001) {
                return this.arcLength(alpha, gamma, degree, knotIndex, startIndex) + this.arcLength(gamma, beta, degree, knotIndex, startIndex);
            } else {
                return vec3.distance(a, b);
            }
        }

        public generateKnotVectors(verticesSize: number, degree: number): Array<number> {
            let n: number = verticesSize - 1;
            let p: number = degree;
            let nKnots: number = (n + p + 1) + 1;
            let m: number = nKnots - 1;

            let knots: Array<number> = [];
            knots.length = nKnots;

            for (let u: number = 0; u <= p; u++) {
                knots[u] = 0.0;
                knots[m - u] = 1.0 * n;
            }

            for (let i: number = 1; i <= n - p; i++) {
                knots[p + i] = (i / (n - p + 1)) * n;
            }

            return knots;
        }

        public update(): void {
            this.nodes.length = 0;
            this.nodesLen.length = 0;
            this.segmentLengths.length = 0;

            let sections: Array<number> = this.getSplineSections();

            if (sections.length < 2)
                return;

            this.splineLength = 0.0;

            for (let i = 0; i < sections.length - 1; i++) {
                let fromIndex: number = sections[i];
                let toIndex: number = sections[i + 1];

                let numVertices: number = toIndex - fromIndex + 1;

                if (numVertices < 2)
                    return;

                let degree: number = Math.min(numVertices - 1, 3);

                let knotIndex = this.knots.length;
                this.knots.push(this.generateKnotVectors(numVertices, degree));
                let highestKnotValue = this.knots[knotIndex][this.knots[knotIndex].length - 1];

                let length: number = this.estimateSplineSectionLength(fromIndex, knotIndex, degree);
                let flatLengthEstimated: number = Math.floor(length * 100);

                let lastPos: vec3 = vec3.fromValues(
                    this.vertices[fromIndex].position[0],
                    this.vertices[fromIndex].position[1],
                    this.vertices[fromIndex].position[2]
                );

                let secLen: number = 0.0;

                for (let k = 0; k < flatLengthEstimated; k++) {
                    let t: number = (highestKnotValue * k) / (flatLengthEstimated - 1);

                    let pos: vec3 = this.interpolate(t, degree, knotIndex, fromIndex);

                    secLen += vec3.distance(pos, lastPos);
                    lastPos = pos;

                    let node: TrackNode = new TrackNode();
                    node.pos = pos;
                    node.dist = this.splineLength + secLen;

                    this.nodesLen.push(node.dist);
                    this.nodes.push(node);
                }

                this.segmentLengths.push(this.splineLength);

                if (numVertices >= 4) {
                    let lastLength = 0;
                    let subdivisionRollPoints: number = (numVertices - 1) / (numVertices - 3);
                    let divideBy = 2;

                    if (numVertices == 4)
                        divideBy = 3;

                    this.segmentLengths.push(this.splineLength + (this.arcLength(0, subdivisionRollPoints, degree, knotIndex, fromIndex) / divideBy));

                    let lastParameter = 0;

                    for (let o = 2; o < numVertices - 2; o++) {
                        let parameter: number = (o - 1) * subdivisionRollPoints;
                        lastLength = this.segmentLengths[this.segmentLengths.length - 1];

                        if (o == 2) {
                            this.segmentLengths.push(this.splineLength + this.arcLength(lastParameter, parameter, degree, knotIndex, fromIndex));
                        } else {
                            this.segmentLengths.push(lastLength + this.arcLength(lastParameter, parameter, degree, knotIndex, fromIndex));
                        }

                        lastParameter = parameter;
                    }

                    lastLength = this.segmentLengths[this.segmentLengths.length - 1];
                    this.segmentLengths.push(lastLength + (this.arcLength(numVertices - 1 - subdivisionRollPoints, numVertices - 1, degree, knotIndex, fromIndex) / divideBy));
                }

                this.splineLength += secLen;

                if (numVertices == 3) {
                    let length = this.splineLength - this.segmentLengths[this.segmentLengths.length - 1];
                    this.segmentLengths.push(this.segmentLengths[this.segmentLengths.length - 1] + (length / 2));
                }

                if(i >= sections.length - 2)
                    this.segmentLengths.push(this.splineLength);
            }
        }

        private getSplineSections(): Array<number> {
            let res: Array<number> = [];

            for (let i = 0; i < this.track.getVertices().length; i++) {
                if (!i || i == this.track.getVertices().length - 1 || this.track.getVertices()[i].isStrict())
                    res.push(i);
            }

            return res;
        }

        public getDistanceOnParameter(t: number): number {
            let index = Math.floor(t);

            if(index >= this.segmentLengths.length - 1)
                return this.segmentLengths[this.segmentLengths.length - 1];

            let s1 : number = this.segmentLengths[index];
            let s2 : number = this.segmentLengths[index + 1];

            return s1 + ((s2 - s1) * (t - index));
        }

        public getPositionAtDistance(at: number): vec3 {
            let index: number = BinarySearch.lowerBound<number>(this.nodesLen, at);
            index--;

            if (index < 0)
                index = 0;

            if (index >= this.nodes.length - 1) {
                return this.nodes[this.nodes.length - 1].pos;
            }

            let currentNode: TrackNode = this.nodes[index];
            let nextNode: TrackNode = this.nodes[index + 1];

            if (at < currentNode.dist || at > nextNode.dist) {
                console.log("something is terribly wrong", at, currentNode.dist, nextNode.dist);
            }

            let t: number = 0;
            let nodesDistanceDiff: number = nextNode.dist - currentNode.dist;
            let distanceDiff: number = at - currentNode.dist;

            if (nodesDistanceDiff > MathUtils.epsilon) {
                t = Math.max(Math.min(distanceDiff / nodesDistanceDiff, 1.0), 0.0);
            } else t = 0.5;

            return vec3.lerp(vec3.create(), currentNode.pos, nextNode.pos, t);
        }

        public getNumberOfNodes(): number {
            return this.nodes.length;
        }

        public getNodetAt(at: number): TrackNode {
            return this.nodes[at];
        }

        public getSplineLength(): number {
            return this.splineLength;
        }

        public getSegmentLengths(): Array<number> {
            return this.segmentLengths;
        }
    }
}