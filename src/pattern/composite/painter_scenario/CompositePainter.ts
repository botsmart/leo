import { IPainter } from "./IPainter";
import { ProportionalPainter } from "./proportionalPainter";



export class CompositePainter<TPainter extends IPainter>  implements IPainter {

    painters: TPainter[];

    reduce: (squareMeters: number, painters: IPainter[]) => IPainter;


    constructor(painters: TPainter[], reduce: (squareMeters: number, painters: TPainter[]) => IPainter) {
        this.painters = painters;
        this.reduce = reduce;
    }

    get isAvailabale() {
        return this.painters.every((painter) => painter.isAvailabale);
    }

    EstimatePaintTime(squareMeters: number): number {
        return this.reduce(squareMeters, this.painters).EstimatePaintTime(squareMeters);
    }
    EstimatePaintCost(squareMeters: number): number {
        return this.reduce(squareMeters, this.painters).EstimatePaintCost(squareMeters);
    }

}