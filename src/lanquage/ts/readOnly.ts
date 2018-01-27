/// read-only class
class Circle {
    readonly radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    get area() {
        return Math.PI * this.radius ** 2;
    }
}

/// read-only type
type Point = {
    readonly x: number;
    readonly y: number;
};


/// read-only index signature
interface ReadonlyArray<T> {
    readonly length: number;
    // ...
    readonly [n: number]: T;
}
const primesBelow10: ReadonlyArray<number> = [2, 3, 5, 7];
/// you can't do this
//primesBelow10[4] = 11;
