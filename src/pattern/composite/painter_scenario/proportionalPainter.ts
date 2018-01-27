import { IPainter } from "./IPainter";
export class ProportionalPainter implements IPainter {

    timePerSquareHour: number;
    dollarsPerhour: number;

    constructor(timePerSquareHour: number, dollarsPerHour: number) {
        this.timePerSquareHour = timePerSquareHour;
        this.dollarsPerhour = dollarsPerHour;
    }


    get isAvailabale() {
        return true;
    };

    EstimatePaintTime(squareMeters: number): number {
        return this.timePerSquareHour * squareMeters;
    }
    EstimatePaintCost(squareMeters: number): number {
        return this.dollarsPerhour * squareMeters;
    }

}