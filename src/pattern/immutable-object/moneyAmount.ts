// export class MoneyAmount {
//     amount: number;
//     currencySymbol: string;
// }


/// second step of refactoring (make immutable object)

// export class MoneyAmount {
//     readonly amount: number;
//     readonly currencySymbol: string;

//     constructor(amount: number, currencySymbol: string) {
//         this.amount = amount;
//         this.currencySymbol = currencySymbol;
//     }
// }



/// thirth step of refactoring (make immutable object)

export class MoneyAmount {
    readonly amount: number;
    readonly currencySymbol: string;

    constructor(amount: number, currencySymbol: string) {
        this.amount = amount;
        this.currencySymbol = currencySymbol;
    }

    scale(factor: number): MoneyAmount {
        return new MoneyAmount(factor * this.amount, this.currencySymbol);
    }

    compareEquality(otherObject: MoneyAmount): boolean {
        /// todo:Implement equality algorythem
        return true;
    }
}
