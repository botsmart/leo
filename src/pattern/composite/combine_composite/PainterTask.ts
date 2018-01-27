import { IPainter } from "./IPainter";

export class PainterTask<TPainter extends IPainter>{
    painter: TPainter;
    squareMeters: number;

    constructor(painter: TPainter, squareMeters: number) {
        this.painter = painter;
        this.squareMeters = squareMeters;
    }
}