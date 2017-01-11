namespace NLParkViewer.Tk {
    export class BandMatrix {
        private mUpper: Array<Array<number>> = [];
        private mLower: Array<Array<number>> = [];

        constructor(dim: number = 0, nU: number = 0, nL: number = 0) {
            this.resize(dim, nU, nL);
        }

        public get(i: number, j: number): number {
            let k: number = j - i;
            if (k >= 0)
                return this.mUpper[k][i];
            else
                return this.mLower[-k][i];
        }

        public set(i: number, j: number, val: number) {
            let k: number = j - i;
            if (k >= 0)
                this.mUpper[k][i] = val;
            else
                this.mLower[-k][i] = val;
        }

        public resize(dim: number, nU: number, nL: number) {
            this.mUpper.length = nU + 1;
            this.mLower.length = nL + 1;

            for (let i = 0; i < this.mUpper.length; i++) {
                if(typeof this.mUpper[i] !== "array")
                    this.mUpper[i] = [];

                this.mUpper[i].length = dim;

                for (let k = 0; k < this.mUpper[i].length; k++) {
                    this.mUpper[i][k] = 0;
                }
            }

            for (let i = 0; i < this.mLower.length; i++) {
                if(typeof this.mLower[i] !== "array")
                    this.mLower[i] = [];

                this.mLower[i].length = dim;

                for (let k = 0; k < this.mLower[i].length; k++) {
                    this.mLower[i][k] = 0;
                }
            }
        }

        public dim(): number {
            if (this.mUpper.length > 0) {
                return this.mUpper[0].length;
            } else {
                return 0;
            }
        }

        public numUpper(): number {
            return this.mUpper.length - 1;
        }

        public numLower(): number {
            return this.mLower.length - 1;
        }

        public savedDiag(i: number): number {
            return this.mLower[0][i];
        }

        public setSavedDiag(i: number, val: number) {
            this.mLower[0][i] = val;
        }

        public luDecompose() {
            let i_max: number;
            let j_max: number;
            let j_min: number;
            let x: number;

            for(let i=0; i<this.dim(); i++) {
                this.setSavedDiag(i, 1.0/this.get(i,i));

                j_min=Math.max(0,i-this.numLower());
                j_max=Math.min(this.dim()-1,i+this.numUpper());

                for(let j=j_min; j<=j_max; j++) {
                    this.set(i,j, this.get(i,j) * this.savedDiag(i));
                }
                this.set(i,i, 1.0);
            }

            for (let k = 0; k < this.dim(); k++) {
                i_max = Math.min(this.dim() - 1, k + this.numLower());

                for (let i = k + 1; i <= i_max; i++) {
                    x = -this.get(i, k) / this.get(k, k);

                    this.set(i, k, -x);

                    j_max = Math.min(this.dim() - 1, k + this.numUpper());

                    for (let j = k + 1; j <= j_max; j++) {
                        this.set(i, j, this.get(i, j) + x * this.get(k, j));
                    }
                }
            }
        }

        public rSolve(b: Array<number>): Array<number> {
            let x: Array<number> = [];
            x.length = this.dim();

            let j_stop: number;
            let sum: number;

            for (let i = this.dim() - 1; i >= 0; i--) {
                sum = 0;
                j_stop = Math.min(this.dim() - 1, i + this.numUpper());

                for (let j = i + 1; j <= j_stop; j++) sum += this.get(i, j) * x[j];

                x[i] = ( b[i] - sum ) / this.get(i, i);
            }
            return x;
        }

        public lSolve(b: Array<number>): Array<number> {
            let x: Array<number> = [];
            x.length = this.dim();

            let j_start: number;
            let sum: number;

            for (let i = 0; i < this.dim(); i++) {
                sum = 0;
                j_start = Math.max(0, i - this.numLower());

                for (let j = j_start; j < i; j++) sum += this.get(i, j) * x[j];

                x[i] = (b[i] * this.savedDiag(i)) - sum;
            }
            return x;
        }

        public luSolve(b: Array<number>, isLuDecomposed: boolean = false): Array<number> {
            let x: Array<number>;
            let y: Array<number>;

            if (isLuDecomposed == false) {
                this.luDecompose();
            }

            y = this.lSolve(b);
            x = this.rSolve(y);

            return x;
        }
    }

    export enum SplineBDType {
        FirstDerivative = 1,
        SecondDerivative = 2
    }

    export class Spline {
        private mX: Array<number> = [];
        private mY: Array<number> = [];

        private mA: Array<number> = [];
        private mB: Array<number> = [];
        private mC: Array<number> = [];

        private mB0: number = 0;
        private mC0: number = 0;

        private mLeft: SplineBDType = SplineBDType.SecondDerivative;
        private mRight: SplineBDType = SplineBDType.SecondDerivative;

        private mLeftValue: number = 0;
        private mRightValue: number = 0;
        private mForceLinearExtrapolation: boolean = false;


        public setBoundary(left: SplineBDType, leftValue: number,
                           right: SplineBDType, rightValue: number,
                           forceLinearExtrapolation: boolean = false) {

            if (!this.mX.length) {
                this.mLeft = left;
                this.mRight = right;
                this.mLeftValue = leftValue;
                this.mRightValue = rightValue;
                this.mForceLinearExtrapolation = forceLinearExtrapolation;
            }
        }

        public setPoints(x: Array<number>, y: Array<number>, cubicSpline: boolean = true) {
            this.mX = x;
            this.mY = y;
            let n: number = x.length;

            if (cubicSpline == true) {
                let A: BandMatrix = new BandMatrix(n, 1, 1);

                let rhs: Array<number> = [];
                rhs.length = n;

                for(let i=1; i<n-1; i++) {
                    A.set(i,i-1, 1.0/3.0*(x[i]-x[i-1]));
                    A.set(i,i, 2.0/3.0*(x[i+1]-x[i-1]));
                    A.set(i,i+1, 1.0/3.0*(x[i+1]-x[i]));
                    rhs[i]=(y[i+1]-y[i])/(x[i+1]-x[i]) - (y[i]-y[i-1])/(x[i]-x[i-1]);
                }

                if (this.mLeft == SplineBDType.SecondDerivative) {
                    A.set(0, 0, 2.0);
                    A.set(0, 1, 0.0);
                    rhs[0] = this.mLeftValue;
                } else if (this.mLeft == SplineBDType.FirstDerivative) {
                    A.set(0, 0, 2.0 * (x[1] - x[0]));
                    A.set(0, 1, 1.0 * (x[1] - x[0]));
                    rhs[0] = 3.0 * ((y[1] - y[0]) / (x[1] - x[0]) - this.mLeftValue);
                } else {
                    return;
                }
                if (this.mRight == SplineBDType.SecondDerivative) {
                    A.set(n - 1, n - 1, 2.0);
                    A.set(n - 1, n - 2, 0.0);
                    rhs[n - 1] = this.mRightValue;
                } else if (this.mRight == SplineBDType.FirstDerivative) {
                    A.set(n - 1, n - 1, 2.0 * (x[n - 1] - x[n - 2]));
                    A.set(n - 1, n - 2, 1.0 * (x[n - 1] - x[n - 2]));
                    rhs[n - 1] = 3.0 * (this.mRightValue - (y[n - 1] - y[n - 2]) / (x[n - 1] - x[n - 2]));
                } else {
                    return;
                }

                this.mB = A.luSolve(rhs);

                this.mA.length = n;
                this.mC.length = n;
                for (let i = 0; i < n - 1; i++) {
                    this.mA[i] = 1.0 / 3.0 * (this.mB[i + 1] - this.mB[i]) / (x[i + 1] - x[i]);
                    this.mC[i] = (y[i + 1] - y[i]) / (x[i + 1] - x[i])
                        - 1.0 / 3.0 * (2.0 * this.mB[i] + this.mB[i + 1]) * (x[i + 1] - x[i]);
                }
            } else {
                this.mA.length = n;
                this.mB.length = n;
                this.mC.length = n;

                for (let i = 0; i < n - 1; i++) {
                    this.mA[i] = 0.0;
                    this.mB[i] = 0.0;
                    this.mC[i] = (this.mY[i + 1] - this.mY[i]) / (this.mX[i + 1] - this.mX[i]);
                }
            }

            this.mB0 = (this.mForceLinearExtrapolation == false) ? this.mB[0] : 0.0;
            this.mC0 = this.mC[0];

            let h: number = x[n - 1] - x[n - 2];

            this.mA[n - 1] = 0.0;
            this.mC[n - 1] = 3.0 * this.mA[n - 2] * h * h + 2.0 * this.mB[n - 2] * h + this.mC[n - 2];   // = f'_{n-2}(x_{n-1})
            if (this.mForceLinearExtrapolation == true)
                this.mB[n - 1] = 0.0;
        }

        private interpolationSearch(x: number): number {
            let low: number = 0;
            let high: number = this.mX.length - 1;
            let mid: number = 0;

            while (this.mX[high] != this.mX[low] && x >= this.mX[low] && x <= this.mX[high]) {
                mid = Math.floor(low + ((x - this.mX[low]) * (high - low) / (this.mX[high] - this.mX[low])));

                if (this.mX[mid] < x)
                    low = Math.floor(mid + 1);
                else if (x < this.mX[mid])
                    high = Math.floor(mid - 1);
                else
                    return mid;
            }

            if(mid < 0)
                mid = 0;

            if(mid >= this.mX.length - 1) {
                mid = this.mX.length - 1;
            }

            if(x < this.mX[mid]) {
                mid -= 1;
            }

            return mid;
        }

        public get(x: number): number {
            let n: number = this.mX.length;
            let idx: number = Math.max(this.interpolationSearch(x), 0);

            let h: number = x - this.mX[idx];
            let interpol: number;

            if (x < this.mX[0]) {
                interpol = (this.mB0 * h + this.mC0) * h + this.mY[0];
            } else if (x > this.mX[n - 1]) {
                interpol = (this.mB[n - 1] * h + this.mC[n - 1]) * h + this.mY[n - 1];
            } else {
                interpol = ((this.mA[idx] * h + this.mB[idx]) * h + this.mC[idx]) * h + this.mY[idx];
            }

            return interpol;
        }
    }
}