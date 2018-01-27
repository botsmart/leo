import { CompositePainter } from "./CompositePainter";
import { IPainter } from "./IPainter";
import { Painters } from "./painters";
import { ProportionalPainter } from "./proportionalPainter";
import { IPainterScheduler } from "./IPainterScheduler";
import { PainterTask } from "./PainterTask";

// export class CombinePainter extends CompositePainter<IPainter> {

//     constructor(painters: IPainter[]) {
//         super(painters);
//         this.reduce = this.combine;
//     }

//     combine(squareMeters: number, painters: IPainter[]): IPainter {
//         const totalTime = painters.filter((painter) => painter.isAvailabale).map((painter) =>
//             1 / painter.EstimatePaintTime(squareMeters)).reduce((pre, curr) => pre + curr, 0);

//         const cost = painters.filter((painter) => painter.isAvailabale).map((painter) =>
//             1 / painter.EstimatePaintCost(squareMeters) / painter.EstimatePaintTime(squareMeters) * totalTime).reduce((pre, curr) => pre + curr, 0);

//         return new ProportionalPainter(totalTime / squareMeters, cost / totalTime);
//     }
// }

/// first step of refactoring

// export class CombinePainter extends CompositePainter<IPainter> {

//     constructor(painters: IPainter[]) {
//         super(painters);
//         this.reduce = this.combine;
//     }

//     combine(squareMeters: number, painters: IPainter[]): IPainter {
//         const totalTime = this.estimateTime(squareMeters, painters);

//         const cost = painters.filter((painter) => painter.isAvailabale).map((painter) =>
//             1 / painter.EstimatePaintCost(squareMeters) / painter.EstimatePaintTime(squareMeters) * totalTime).reduce((pre, curr) => pre + curr, 0);

//         return new ProportionalPainter(totalTime / squareMeters, cost / totalTime);
//     }

//      estimateTime(squareMeters: number, painters: IPainter[]) {
//          return painters.filter((painter) => painter.isAvailabale).map((painter) =>
//              1 / painter.EstimatePaintTime(squareMeters)).reduce((pre, curr) => pre + curr, 0);
//      }
// }

/// second step of refactoring

// export class CombinePainter extends CompositePainter<IPainter> {

//     estimateTime: (squareMeters: number, painters: IPainter[]) => number;

//     constructor(painters: IPainter[]) {
//         super(painters);
//         this.reduce = this.combine;
//     }

//     private availablePainter(painters: IPainter[]): IPainter[] {
//         return painters.filter((painters) => painters.isAvailabale);
//     }

//     combine(squareMeters: number, painters: IPainter[]): IPainter {


//         const totalTime = this.estimateTime(squareMeters, painters);

//         const cost = painters.filter((painter) => painter.isAvailabale).map((painter) =>
//             1 / painter.EstimatePaintCost(squareMeters) / painter.EstimatePaintTime(squareMeters) * totalTime).reduce((pre, curr) => pre + curr, 0);


//         // const cost = painters.filter((painter) => painter.isAvailabale).map((painter) =>
//         //     1 / painter.EstimatePaintCost(squareMeters) / painter.EstimatePaintTime(squareMeters) * totalTime)
//         //     .reduce((pre, curr) => pre + curr, 0);

//         return new ProportionalPainter(totalTime / squareMeters, cost / totalTime);
//     }

//     // estimateTime(squareMeters: number, painters: IPainter[]) {
//     //     return painters.filter((painter) => painter.isAvailabale).map((painter) =>
//     //         1 / painter.EstimatePaintTime(squareMeters)).reduce((pre, curr) => pre + curr, 0);
//     // }

// }

/// thirth step of refactoring

// export class CombinePainter extends CompositePainter<IPainter> {

//     // estimateTime: (squareMeters: number, painters: IPainter[]) => number;

//     constructor(painters: IPainter[]) {
//         super(painters);
//         this.reduce = this.combine;
//     }

//     private availablePainter(painters: IPainter[]): IPainter[] {
//         return painters.filter((painters) => painters.isAvailabale);
//     }

//     combine(squareMeters: number, painters: IPainter[]): IPainter {

//         let schedule: Array<[IPainter, number]> = null;

//         // const totalTime = this.estimateTime(squareMeters, painters);

//         const totalTime = schedule.reduce((previous, current) => previous + current[0].EstimatePaintTime(current[1]), 0);
//         const cost = schedule.reduce((previous, current) => previous + current[0].EstimatePaintCost(current[1]), 0);

//         // const cost = painters.filter((painter) => painter.isAvailabale).map((painter) =>
//         //     1 / painter.EstimatePaintCost(squareMeters) / painter.EstimatePaintTime(squareMeters) * totalTime)
//         //     .reduce((pre, curr) => pre + curr, 0);

//         return new ProportionalPainter(totalTime / squareMeters, cost / totalTime);
//     }

// }

/// forth step of refactoring
// export class CombinePainter extends CompositePainter<IPainter> {

//     scheduleWork: (squareMeters: number, painters: IPainter[]) => Array<[IPainter, number]>;

//     constructor(painters: TPainter[], scheduleWork: (squareMeters: number, painters: TPainter[]) => Array<[TPainter, number]>) {
//          super(painters);
//          this.reduce = this.combine;
//          this.scheduleWork = scheduleWork;
//     }

//     private availablePainter(painters: IPainter[]): IPainter[] {
//         return painters.filter((painters) => painters.isAvailabale);
//     }

//     combine(squareMeters: number, painters: IPainter[]): IPainter {

//         let schedule: Array<[IPainter, number]> = this.scheduleWork(squareMeters, this.availablePainter(painters));

//         const totalTime = schedule.reduce((previous, current) => previous + current[0].EstimatePaintTime(current[1]), 0);
//         const cost = schedule.reduce((previous, current) => previous + current[0].EstimatePaintCost(current[1]), 0);


//         return new ProportionalPainter(totalTime / squareMeters, cost / totalTime);
//     }
// }


/// fifth step of refactoring (make generic)
// export class CombinePainter<TPainter extends IPainter> extends CompositePainter<TPainter> {

//     scheduleWork: (squareMeters: number, painters: TPainter[]) => Array<[TPainter, number]>;

//     constructor(painters: TPainter[],
//         scheduleWork: (squareMeters: number, painters: TPainter[]) => Array<[TPainter, number]>) {
//         super(painters);
//         this.reduce = this.combine;
//         this.scheduleWork = scheduleWork;
//     }

//     private availablePainter(painters: TPainter[]): TPainter[] {
//         return painters.filter((painters) => painters.isAvailabale);
//     }

//     combine(squareMeters: number, painters: TPainter[]): IPainter {

//         let schedule: Array<[TPainter, number]> = this.scheduleWork(squareMeters, this.availablePainter(painters));

//         const totalTime = schedule.reduce((previous, current) => previous + current[0].EstimatePaintTime(current[1]), 0);
//         const cost = schedule.reduce((previous, current) => previous + current[0].EstimatePaintCost(current[1]), 0);

//         return new ProportionalPainter(totalTime / squareMeters, cost / totalTime);
//     }
// }

// /// sixth step of refactoring
// export class CombinePainter<TPainter extends IPainter> extends CompositePainter<TPainter> {

//         scheduler: IPainterScheduler<TPainter>;

//         constructor(painters: TPainter[],
//             scheduleWork: IPainterScheduler<TPainter>) {
//             super(painters);
//             this.reduce = this.combine;
//             this.scheduler = scheduleWork;
//         }

//         private availablePainter(painters: TPainter[]): TPainter[] {
//             return painters.filter((painters) => painters.isAvailabale);
//         }

//         combine(squareMeters: number, painters: TPainter[]): IPainter {

//             let schedule: Array<[TPainter, number]> = this.scheduler.scheduleWork(squareMeters, this.availablePainter(painters));

//             const totalTime = schedule.reduce((previous, current) => previous + current[0].EstimatePaintTime(current[1]), 0);
//             const cost = schedule.reduce((previous, current) => previous + current[0].EstimatePaintCost(current[1]), 0);

//             return new ProportionalPainter(totalTime / squareMeters, cost / totalTime);
//         }
//     }

/// seventh step of refactoring
export class CombinePainter<TPainter extends IPainter> extends CompositePainter<TPainter> {

    scheduler: IPainterScheduler<TPainter>;

    constructor(painters: TPainter[],
        scheduleWork: IPainterScheduler<TPainter>) {
        super(painters);
        this.reduce = this.combine;
        this.scheduler = scheduleWork;
    }

    private availablePainter(painters: TPainter[]): TPainter[] {
        return painters.filter((painters) => painters.isAvailabale);
    }

    combine(squareMeters: number, painters: TPainter[]): IPainter {

        let schedule: Array<PainterTask<TPainter>> = this.scheduler.scheduleWork(squareMeters, this.availablePainter(painters));

        // const totalTime = schedule.reduce((previous, current) => previous + current[0].EstimatePaintTime(current[1]), 0);
        // const cost = schedule.reduce((previous, current) => previous + current[0].EstimatePaintCost(current[1]), 0);

        const totalTime = schedule.reduce((previous, current) => previous + current.painter.EstimatePaintTime(current.squareMeters), 0);
        const cost = schedule.reduce((previous, current) => previous + current.painter.EstimatePaintCost(current.squareMeters), 0);



        return new ProportionalPainter(totalTime / squareMeters, cost / totalTime);
    }
}