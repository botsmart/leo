import { CompositePainter } from "./CompositePainter";
import { IPainter } from "./IPainter";
import { Painters } from "./painters";
import { ProportionalPainter } from "./proportionalPainter";

export class CompositePainterFactory {

    static createGroup(painters: ProportionalPainter[]): IPainter {
        return new CompositePainter<ProportionalPainter>(painters,
            (squareMeters: number, painters: IPainter[]): IPainter => {
                const totalTime = painters.filter((painter) => painter.isAvailabale).map((painter) =>
                    1 / painter.EstimatePaintTime(squareMeters)).reduce((pre, curr) => pre + curr, 0);

                const cost = painters.filter((painter) => painter.isAvailabale).map((painter) =>
                    1 / painter.EstimatePaintCost(squareMeters) / painter.EstimatePaintTime(squareMeters) * totalTime).reduce((pre, curr) => pre + curr, 0);

                return new ProportionalPainter(totalTime / squareMeters, cost / totalTime);
            }
        );
    }

    static createCheapestPainter(painters: IPainter[]): IPainter {
        return new CompositePainter<IPainter>(painters, (squareMeter: number, painters: IPainter[]) => {
            return new Painters(painters).getAvailablePainters().getCheaperPainter(squareMeter);
        });
    }

    static createFastestPainter(painters: IPainter[]): IPainter {
        return new CompositePainter<IPainter>(painters, (squareMeter: number, painters: IPainter[]) => {
            return new Painters(painters).getAvailablePainters().GetFastestPainter(squareMeter);
        });
    }

}