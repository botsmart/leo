
import { IPainter } from "./IPainter";

// export function FindCheaperPainter(painters: IPainter[], squareMeters: number): IPainter {

//     let bestPrice: number = 0;
//     let cheaperPainter: IPainter = null;

//     for (const painter of painters) {
//         if (painter.isAvailabale) {
//             const price = painter.EstimatePaintCost(squareMeters);

//             if (cheaperPainter == null || price < bestPrice) {
//                 bestPrice = price;
//                 cheaperPainter = painter;
//             }
//         }
//     }
//     return cheaperPainter;
// }

/// first step of refactoring
// export function FindCheaperPainter(painters: IPainter[], squareMeters: number): IPainter {

//     let painter = painters.filter(p => p.isAvailabale).reduce((best, current) =>
//         best == null || current.EstimatePaintCost(squareMeters) <
//             best.EstimatePaintCost(squareMeters) ? best : current, null);

//     return painter;

// }

/// second step of refactoring
// function getMinimumCost<T extends IPainter, TKey extends number>(painters: T[], predict: (painter: T) => TKey) {

//     return painters.reduce((best, current) => predict(current) < predict(best) ? current : best , null)
// }

// export function FindCheaperPainter(painters: IPainter[], squareMeters: number): IPainter {

//     return getMinimumCost(painters, (painter) => painter.EstimatePaintCost(squareMeters));
// }

/// third step of refactoring

// function getMinimumCost<T extends IPainter, TKey extends number>(painters: T[],
//     predict: (painter: T) => TKey) {
//     return painters.map((painter) => <[IPainter, number]>[painter, predict(painter)]).reduce((best, current) =>
//         best == null || current[1] < best[1] ? current : best, null)[0];

// }
// export function FindCheaperPainter(painters: IPainter[], squareMeters: number): IPainter {
//     const availablePainters = painters.filter(painter => painter.isAvailabale);
//     return getMinimumCost(availablePainters, (painter) => painter.EstimatePaintCost(squareMeters));
// }

/// forth step of refactoring

function getMinimumCost<T extends IPainter, TKey extends number>(painters: T[],
    predict: (painter: T) => TKey) {
    return painters.map((painter) => <[IPainter, number]>[painter, predict(painter)]).reduce((best, current) =>
        best == null || current[1] < best[1] ? current : best, null)[0];

}

function findAvailablePainter(painters: IPainter[]): IPainter[] {
    return painters.filter((painter) => painter.isAvailabale);
}

export function FindCheaperPainter(painters: IPainter[], squareMeters: number): IPainter {
    return getMinimumCost(findAvailablePainter(painters), (painter) => painter.EstimatePaintCost(squareMeters));
}