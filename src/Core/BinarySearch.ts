namespace NLParkViewer.Core {
    export class BinarySearch {
        public static lowerBound<T>(a : Array<T>, x : T) : number {
            let l : number = 0;
            let h : number = a.length;

            while (l < h) {
                let mid : number = Math.floor((l + h) / 2);
                if (x >= a[mid]) {
                    l = mid + 1;
                } else {
                    h = mid;
                }
            }

            return l;
        }
    }
}