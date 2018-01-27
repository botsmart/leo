
import { IPainter } from "./IPainter";
import { PainterTask } from "./PainterTask";

import { ProportionalPainter } from "./proportionalPainter";

// export interface IPainterScheduler<TPainter extends IPainter> {
//     scheduleWork: (squareMeters: number, painters: TPainter[]) => Array<[TPainter, number]>;
// }

export interface IPainterScheduler<TPainter extends IPainter> {
    scheduleWork: (squareMeters: number, painters: TPainter[]) => Array<PainterTask<TPainter>>;
}
