
import { CompositePainterFactory } from "./CompositePainterFactory";
import { IPainter } from "./IPainter";
import { Painters } from "./painters";
import { ProportionalPainter } from "./proportionalPainter";

// function getMinimumCost<T extends IPainter, TKey extends number>(painters: T[],
//     predict: (painter: T) => TKey) {
//     return painters.map((painter) => <[IPainter, number]>[painter, predict(painter)]).reduce((best, current) =>
//         best == null || current[1] < best[1] ? current : best, null)[0];

// }

// function findAvailablePainter(painters: IPainter[]): IPainter[] {
//     return painters.filter((painter) => painter.isAvailabale);
// }

// export function FindCheaperPainter(painters: IPainter[], squareMeters: number): IPainter {
//     return getMinimumCost(findAvailablePainter(painters), (painter) => painter.EstimatePaintCost(squareMeters));
// }

// export function FindFastestPainter(painters: IPainter[], squareMeters: number): IPainter {
//     return getMinimumCost(findAvailablePainter(painters), (painter) => painter.EstimatePaintTime(squareMeters));
// }

// export function WorkTogether(painters: IPainter[], squareMeters: number): IPainter {
//     const totalTime = painters.filter((painter) => painter.isAvailabale).map((painter) =>
//         1 / painter.EstimatePaintTime(squareMeters)).reduce((pre, curr) => pre + curr, 0);

//     const cost = painters.filter((painter) => painter.isAvailabale).map((painter) =>
//         1 / painter.EstimatePaintCost(squareMeters) / painter.EstimatePaintTime(squareMeters) * totalTime).reduce((pre, curr) => pre + curr, 0);


//     return new ProportionalPainter(totalTime / squareMeters, cost / totalTime);

// }

/// first step of refactorings ========================

/// Transfers these methods to Painters Class

// function getMinimumCost<T extends IPainter, TKey extends number>(painters: T[],
//     predict: (painter: T) => TKey) {
//     return painters.map((painter) => <[IPainter, number]>[painter, predict(painter)]).reduce((best, current) =>
//         best == null || current[1] < best[1] ? current : best, null)[0];

// }

// function findAvailablePainter(painters: IPainter[]): IPainter[] {
//     return painters.filter((painter) => painter.isAvailabale);
// }

// export function FindCheaperPainter(painters: Painters, squareMeters: number): IPainter {
//     return painters.getCheaperPainter(squareMeters);
// }

// export function FindFastestPainter(painters: Painters, squareMeters: number): IPainter {
//     return painters.GetFastestPainter(squareMeters);
// }

// export function WorkTogether(painters: IPainter[], squareMeters: number): IPainter {
//     const totalTime = painters.filter((painter) => painter.isAvailabale).map((painter) =>
//         1 / painter.EstimatePaintTime(squareMeters)).reduce((pre, curr) => pre + curr, 0);

//     const cost = painters.filter((painter) => painter.isAvailabale).map((painter) =>
//         1 / painter.EstimatePaintCost(squareMeters) / painter.EstimatePaintTime(squareMeters) * totalTime).reduce((pre, curr) => pre + curr, 0);

//     return new ProportionalPainter(totalTime / squareMeters, cost / totalTime);
// }


/// second step of refactorings ========================


/// transfer this method to PainterGroup Class

// export function WorkTogether(painters: IPainter[], squareMeters: number): IPainter {
//     const totalTime = painters.filter((painter) => painter.isAvailabale).map((painter) =>
//         1 / painter.EstimatePaintTime(squareMeters)).reduce((pre, curr) => pre + curr, 0);

//     const cost = painters.filter((painter) => painter.isAvailabale).map((painter) =>
//         1 / painter.EstimatePaintCost(squareMeters) / painter.EstimatePaintTime(squareMeters) * totalTime).reduce((pre, curr) => pre + curr, 0);

//     return new ProportionalPainter(totalTime / squareMeters, cost / totalTime);
// }

// export function FindCheaperPainter(painters: Painters, squareMeters: number): IPainter {
//     return painters.getCheaperPainter(squareMeters);
// }

// export function FindFastestPainter(painters: Painters, squareMeters: number): IPainter {
//     return painters.GetFastestPainter(squareMeters);
// }


/// Thirth step of refactorings ========================

// export function FindCheaperPainter(painters: Painters, squareMeters: number): IPainter {
//     return painters.getCheaperPainter(squareMeters);
// }

// export function FindFastestPainter(painters: Painters, squareMeters: number): IPainter {
//     return painters.GetFastestPainter(squareMeters);
// }


const painter = CompositePainterFactory.combinePainters(new Array<ProportionalPainter>());


