import { IWarranty } from "./IWarranty";
import { LimitedTimeWarranty } from "./limitedTimeWarranty";
import { Maybe } from "./maybe";
import { Part } from "./part";
import { VoidWarranty } from "./voidWarranty";

// export class SoldEquipment {

//     private moneyBackGuarantee: IWarranty;

//     private faildCircuitryWarranty: IWarranty;
//     private circuirtyWarranty: IWarranty;
//     private circuitry: Part;

//     get MoneyBackGuarantee(): IWarranty {
//         return this.moneyBackGuarantee;
//     }

//     readonly ExpressGuaranty: IWarranty;

//     constructor(moneyBackGuaranty: IWarranty, expressGuaranty: IWarranty) {
//         this.ExpressGuaranty = expressGuaranty;
//         this.moneyBackGuarantee = moneyBackGuaranty;

//         this.circuirtyWarranty = VoidWarranty.Instance;
//     }

//     visibleDamage() {
//         this.moneyBackGuarantee = VoidWarranty.Instance;
//     }

//     notOperational() {
//         this.moneyBackGuarantee = VoidWarranty.Instance;
//     }

//     installCircuitry(circuitry: Part, extendedWarranty: IWarranty) {
//         this.circuitry = circuitry;
//         this.faildCircuitryWarranty = extendedWarranty;
//     }

//     circuitryNotOperational(detected: Date) {
//         if (this.circuitry) {
//             this.circuitry.markDefective(detected);
//             this.circuirtyWarranty = this.faildCircuitryWarranty;
//         }
//     }

//     claimCircuirtyWarranty(action: () => void) {
//         if (this.circuitry) {
//             this.circuirtyWarranty.claim(this.circuitry.defectDetectionDte, action);
//         }

//     }
// }

/// first step of refactoring

// export class SoldEquipment {

//     private moneyBackGuarantee: IWarranty;

//     private faildCircuitryWarranty: IWarranty;
//     private circuirtyWarranty: IWarranty;
//     // private circuitry: Part;
//     private circuitry: Part[] = [];

//     get MoneyBackGuarantee(): IWarranty {
//         return this.moneyBackGuarantee;
//     }

//     readonly ExpressGuaranty: IWarranty;

//     constructor(moneyBackGuaranty: IWarranty, expressGuaranty: IWarranty) {
//         this.ExpressGuaranty = expressGuaranty;
//         this.moneyBackGuarantee = moneyBackGuaranty;

//         this.circuirtyWarranty = VoidWarranty.Instance;
//     }

//     visibleDamage() {
//         this.moneyBackGuarantee = VoidWarranty.Instance;
//     }

//     notOperational() {
//         this.moneyBackGuarantee = VoidWarranty.Instance;
//     }

//     installCircuitry(circuitry: Part, extendedWarranty: IWarranty) {
//         // this.circuitry = circuitry;
//         this.circuitry = [circuitry];
//         this.faildCircuitryWarranty = extendedWarranty;
//     }

//     circuitryNotOperational(detected: Date) {
//         // if (this.circuitry) {
//         //     this.circuitry.markDefective(detected);
//         //     this.circuirtyWarranty = this.faildCircuitryWarranty;
//         // }

//         this.circuitry.forEach((circuitry) => {
//             circuitry.markDefective(detected);
//             this.circuirtyWarranty = this.faildCircuitryWarranty;
//         })
//     }

//     claimCircuirtyWarranty(action: () => void) {
//         // if (this.circuitry) {
//         //     this.circuirtyWarranty.claim(this.circuitry.defectDetectionDte, action);
//         // }

//         this.circuitry.forEach((circuitry) => this.circuirtyWarranty.claim(circuitry.defectDetectionDte, action));

//     }
// }


/// second step of refactoring

// export class SoldEquipment {

//     private moneyBackGuarantee: IWarranty;

//     private faildCircuitryWarranty: IWarranty;
//     private circuirtyWarranty: IWarranty;

//     // private circuitry: Part[] = [];

//     private circuitry: Maybe<Part> = Maybe.none<Part>();

//     get MoneyBackGuarantee(): IWarranty {
//         return this.moneyBackGuarantee;
//     }

//     readonly ExpressGuaranty: IWarranty;

//     constructor(moneyBackGuaranty: IWarranty, expressGuaranty: IWarranty) {
//         this.ExpressGuaranty = expressGuaranty;
//         this.moneyBackGuarantee = moneyBackGuaranty;

//         this.circuirtyWarranty = VoidWarranty.Instance;
//     }

//     visibleDamage() {
//         this.moneyBackGuarantee = VoidWarranty.Instance;
//     }

//     notOperational() {
//         this.moneyBackGuarantee = VoidWarranty.Instance;
//     }

//     installCircuitry(circuitry: Part, extendedWarranty: IWarranty) {

//         // this.circuitry = [circuitry];
//         this.circuitry = Maybe.some(circuitry);
//         this.faildCircuitryWarranty = extendedWarranty;
//     }

//     circuitryNotOperational(detected: Date) {

//         // this.circuitry.forEach((circuitry) => {
//         //     circuitry.markDefective(detected);
//         //     this.circuirtyWarranty = this.faildCircuitryWarranty;
//         // })

//         for (let circuitry of this.circuitry) {
//             circuitry.markDefective(detected);
//             this.circuirtyWarranty = this.faildCircuitryWarranty;
//         }
//     }

//     claimCircuirtyWarranty(action: () => void) {

//         // this.circuitry.forEach((circuitry) => this.circuirtyWarranty.claim(circuitry.defectDetectionDte, action));

//         for (let circuitry of this.circuitry) {
//             this.circuirtyWarranty.claim(circuitry.defectDetectionDte, action)
//         }


//     }
// }

/// third step of refactoring

export class SoldEquipment {

    private moneyBackGuarantee: IWarranty;

    private faildCircuitryWarranty: IWarranty;
    private circuirtyWarranty: IWarranty;

    private circuitry: Maybe<Part> = Maybe.none<Part>();

    get MoneyBackGuarantee(): IWarranty {
        return this.moneyBackGuarantee;
    }

    readonly ExpressGuaranty: IWarranty;

    constructor(moneyBackGuaranty: IWarranty, expressGuaranty: IWarranty) {
        this.ExpressGuaranty = expressGuaranty;
        this.moneyBackGuarantee = moneyBackGuaranty;

        this.circuirtyWarranty = VoidWarranty.Instance;
    }

    visibleDamage() {
        this.moneyBackGuarantee = VoidWarranty.Instance;
    }

    notOperational() {
        this.moneyBackGuarantee = VoidWarranty.Instance;
    }

    installCircuitry(circuitry: Part, extendedWarranty: IWarranty) {

        this.circuitry = Maybe.some(circuitry);
        this.faildCircuitryWarranty = extendedWarranty;
    }

    circuitryNotOperational(detected: Date) {

        // for (let circuitry of this.circuitry) {
        //     circuitry.markDefective(detected);
        //     this.circuirtyWarranty = this.faildCircuitryWarranty;
        // }

        this.circuitry.do((circuitry) => {
            circuitry.markDefective(detected);
            this.circuirtyWarranty = this.faildCircuitryWarranty;
        })
    }

    claimCircuirtyWarranty(action: () => void) {

        // for (let circuitry of this.circuitry) {
        //     this.circuirtyWarranty.claim(circuitry.defectDetectionDte, action)
        // }

        this.circuitry.do((circuitry) => {
            this.circuirtyWarranty.claim(circuitry.defectDetectionDte, action)
        });

    }
}