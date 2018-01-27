// first step of refactoring process

import { IPainter } from "./IPainter";

export class Painters {

    private containedPainters: IPainter[]

    constructor(painters: IPainter[]) {
        this.containedPainters = painters;
    }

    private getMinimumCost<T extends IPainter, TKey extends number>(painters: T[],
        predict: (painter: T) => TKey): IPainter {
        return painters.map((painter) => <[IPainter, number]>[painter, predict(painter)]).reduce((best, current) =>
            best == null || current[1] < best[1] ? current : best, null)[0];
    }
    getAvailablePainters(): Painters {
        // if(this.containedPainters.every((painter)=> painter.isAvailabale))
        //     return this;
        return new Painters(this.containedPainters.filter((painter) => painter.isAvailabale));
    }
    getCheaperPainter(squareMeters: number): IPainter {
        return this.getMinimumCost(this.containedPainters,
            (painter) => painter.EstimatePaintCost(squareMeters));
    }
    GetFastestPainter(squareMeters: number): IPainter {
        return this.getMinimumCost(this.containedPainters,
            (painter) => painter.EstimatePaintTime(squareMeters));
    }

}