export class Part {
    installmentDate: Date;
    defectDetectionDte: Date;

    constructor(installmentDate: Date) {
        this.installmentDate = installmentDate;
    }

    markDefective(date: Date) {
        this.defectDetectionDte = date;
    }
}