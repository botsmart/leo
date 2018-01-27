export interface IPainter {
    isAvailabale: boolean;
    EstimatePaintTime(squareMeters: number): number;
    EstimatePaintCost(squareMeters: number): number;
}