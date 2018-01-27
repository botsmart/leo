import { IWarranty } from "./IWarranty";

// export class Warranty {
//     dateIssued: Date;
//     duration: Date;

//     constructor(dataIssued: Date, duration: Date) {
//         this.dateIssued = dataIssued;
//         this.duration = duration;
//     }

//     isValidWarranty(date: Date): boolean {
//         return date.getTime() >= this.dateIssued.getTime() &&
//             date.getTime() <= this.dateIssued.getTime() + this.duration.getTime();
//     }
// }

/// first step of refactoring
// export class LimitedTimeWarranty implements IWarranty{
//     dateIssued: Date;
//     duration: Date;

//     constructor(dataIssued: Date, duration: Date) {
//         this.dateIssued = dataIssued;
//         this.duration = duration;
//     }

//     private  isValidWarranty(date: Date): boolean {
//         return date.getTime() >= this.dateIssued.getTime() &&
//             date.getTime() <= this.dateIssued.getTime() + this.duration.getTime();
//     }
// }


/// thirth step of refactoring
export class LimitedTimeWarranty implements IWarranty {
    dateIssued: Date;
    duration: Date;

    constructor(dataIssued: Date, duration: Date) {
        this.dateIssued = dataIssued;
        this.duration = duration;
    }

    claim(date: Date, onValidClaim: () => void): void {
        if (!this.isValidWarranty(date))
            return;
        onValidClaim();
    }

    private isValidWarranty(date: Date): boolean {
        return date.getTime() >= this.dateIssued.getTime() &&
            date.getTime() <= this.dateIssued.getTime() + this.duration.getTime();
    }
}