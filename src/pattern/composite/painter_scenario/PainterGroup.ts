// import { IPainter } from "./IPainter";
// import { ProportionalPainter } from "./proportionalPainter";



// export class PainterGroup implements IPainter {

//     painters: IPainter[];

//     constructor(painters: IPainter[]) {
//         this.painters = painters;
//     }

//     get isAvailabale() {
//         return this.painters.every((painter) => painter.isAvailabale);
//     }

//     EstimatePaintTime(squareMeters: number): number {
//         return this.reduce(squareMeters).EstimatePaintTime(squareMeters);
//     }
//     EstimatePaintCost(squareMeters: number): number {
//         return this.reduce(squareMeters).EstimatePaintCost(squareMeters);
//     }

//     reduce(squareMeters: number): IPainter {
//         const totalTime = this.painters.filter((painter) => painter.isAvailabale).map((painter) =>
//             1 / painter.EstimatePaintTime(squareMeters)).reduce((pre, curr) => pre + curr, 0);

//         const cost = this.painters.filter((painter) => painter.isAvailabale).map((painter) =>
//             1 / painter.EstimatePaintCost(squareMeters) / painter.EstimatePaintTime(squareMeters) * totalTime).reduce((pre, curr) => pre + curr, 0);

//         return new ProportionalPainter(totalTime, cost);
//     }

// }