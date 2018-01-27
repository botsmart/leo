/// special case patterns

import { IWarranty } from "./IWarranty";

// export class LifeTimeWarranty implements IWarranty {
//     issueDate: Date;
//     constructor(date: Date) {
//         this.issueDate = date;
//     }

//     isValidWarranty(date: Date): boolean {
//         return date.getTime() >= this.issueDate.getTime();
//     }

// }

/// thirth step of refactoring
export class LifeTimeWarranty implements IWarranty {
    issueDate: Date;
    constructor(date: Date) {
        this.issueDate = date;
    }

    claim(date: Date, onValidClaim: () => void): void {
        if (!this.isValidWarranty(date))
            return;
        onValidClaim();
    }

    private isValidWarranty(date: Date): boolean {
        return date.getTime() >= this.issueDate.getTime();
    }

}