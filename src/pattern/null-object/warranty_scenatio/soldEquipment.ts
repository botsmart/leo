import { LimitedTimeWarranty } from "./limitedTimeWarranty";
import { IWarranty } from "./IWarranty";
import { VoidWarranty } from "./voidWarranty";
// export class SoldEquipment {
//     readonly MoneyBackGuarantee: Warranty;
//     readonly ExpressGuaranty: Warranty;

//     constructor(moneyBackGuaranty: Warranty, expressGuaranty: Warranty) {
//         this.ExpressGuaranty = expressGuaranty;
//         this.MoneyBackGuarantee = moneyBackGuaranty;
//     }
// }

/// first step of refactoring
// export class SoldEquipment {
//     readonly MoneyBackGuarantee: IWarranty;
//     readonly ExpressGuaranty: IWarranty;

//     constructor(moneyBackGuaranty: IWarranty, expressGuaranty: IWarranty) {
//         this.ExpressGuaranty = expressGuaranty;
//         this.MoneyBackGuarantee = moneyBackGuaranty;
//     }
// }


/// thirth step of refactoring
export class SoldEquipment {
    // readonly MoneyBackGuarantee: IWarranty;

    private moneyBackGuarantee: IWarranty;
    get MoneyBackGuarantee(): IWarranty {
        return this.moneyBackGuarantee;
    }

    readonly ExpressGuaranty: IWarranty;

    constructor(moneyBackGuaranty: IWarranty, expressGuaranty: IWarranty) {
        this.ExpressGuaranty = expressGuaranty;
        this.moneyBackGuarantee = moneyBackGuaranty;
    }

    visibleDamage() {
        this.moneyBackGuarantee = VoidWarranty.Instance;
    }

    notOperational() {
        this.moneyBackGuarantee = VoidWarranty.Instance;
    }
}