import { IPainterScheduler } from "./IPainterScheduler";
import { PainterTask } from "./PainterTask";
import { ProportionalPainter } from "./proportionalPainter";

export class PainterScheduler implements IPainterScheduler<ProportionalPainter>
{
    scheduleWork(squareMeters: number, painters: ProportionalPainter[]): Array<PainterTask<ProportionalPainter>> {
        const velocities: Array<[ProportionalPainter, number]> = painters.map((painter) => {
            return <[ProportionalPainter, number]>[painter, squareMeters / painter.EstimatePaintTime(squareMeters)]
        });

        const totalVelocity: number = velocities.reduce((prev, curr) => prev + curr[1], 0);

        return velocities.map((velocity) => new PainterTask<ProportionalPainter>(velocity[0], velocity[1]/totalVelocity));
    }

}
