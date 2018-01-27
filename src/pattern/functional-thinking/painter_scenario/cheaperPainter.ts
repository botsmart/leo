
import { IPainter } from "./IPainter";

export function FindCheaperPainter(painters: IPainter[], squareMeters: number): IPainter {

    let bestPrice: number = 0;
    let cheaperPainter: IPainter = null;

    for (const painter of painters) {
        if (painter.isAvailabale) {
            const price = painter.EstimatePaintCost(squareMeters);

            if (cheaperPainter == null || price < bestPrice) {
                bestPrice = price;
                cheaperPainter = painter;
            }
        }
    }
    return cheaperPainter;
}