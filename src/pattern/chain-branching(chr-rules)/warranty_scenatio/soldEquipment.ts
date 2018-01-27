import { IWarranty } from "./IWarranty";
import { IWarrantyRules } from "./IWarrantyRules";
import { IWarrantyRulesFactory } from "./IWarrantyRulesFactory";
import { LimitedTimeWarranty } from "./limitedTimeWarranty";
import { Maybe } from "./maybe";
import { Part } from "./part";
import { VoidWarranty } from "./voidWarranty";

// export class SoldEquipment {

//     private moneyBackGuarantee: IWarranty;
//     private notOperationalWarranty: IWarranty;
//     private circuirtyWarranty: IWarranty;

//     private circuitry: Maybe<Part> = Maybe.none<Part>();


//     private isOperational: boolean;
//     private isCircuirtyOperational: boolean;
//     private isVisibleDamage: boolean;


//     constructor(moneyBackGuaranty: IWarranty, expressGuaranty: IWarranty) {
//         this.notOperationalWarranty = expressGuaranty;
//         this.moneyBackGuarantee = moneyBackGuaranty;

//         this.circuirtyWarranty = VoidWarranty.Instance;

//         this.isOperational = true;

//     }

//     installCircuitry(circuitry: Part, extendedWarranty: IWarranty) {

//         this.circuitry = Maybe.some(circuitry);
//         this.circuirtyWarranty = extendedWarranty;

//         this.isCircuirtyOperational = true;
//     }

//     circuitryNotOperational(detected: Date) {
//         this.isCircuirtyOperational = false;
//     }

//     visibleDamage() {
//         this.isVisibleDamage = true;
//     }

//     notOperational() {
//         this.isOperational = false;
//     }

//     required() {
//         this.isOperational = true;
//     }

//     claimWarranty(onValidClaim: () => void) {

//         let moneyReturend = false;
//         let isAboutChristmas = this.isAboutChristmas();

//         if (isAboutChristmas) {
//             this.moneyBackGuarantee.claim(new Date(), () => {
//                 moneyReturend = true;
//                 onValidClaim();
//             });
//         }


//         if (!moneyReturend && !this.isOperational) {
//             this.notOperationalWarranty.claim(new Date(), onValidClaim);
//         } else if (!moneyReturend && !this.isCircuirtyOperational) {
//             this.circuitry.do((c) => this.circuirtyWarranty.claim(c.defectDetectionDte, onValidClaim));
//         } else (!moneyReturend && !this.isVisibleDamage)
//         this.moneyBackGuarantee.claim(new Date(), onValidClaim);
//     }

//     private isAboutChristmas(): boolean {
//         return false;
//     }
// }


/// first step of refactoring

export class SoldEquipment {

    private moneyBackGuarantee: IWarranty;
    private notOperationalWarranty: IWarranty;
    private circuirtyWarranty: IWarranty;

    private circuitry: Maybe<Part> = Maybe.none<Part>();


    // private isOperational: boolean;
    // private isCircuirtyOperational: boolean;
    // private isVisibleDamage: boolean;

    private warrantyRules: IWarrantyRules;

    constructor(moneyBackGuaranty: IWarranty, expressGuaranty: IWarranty, rulesFactory: IWarrantyRulesFactory) {
        this.notOperationalWarranty = expressGuaranty;
        this.moneyBackGuarantee = moneyBackGuaranty;

        this.circuirtyWarranty = VoidWarranty.Instance;

        // this.isOperational = true;

        this.warrantyRules = rulesFactory.create(this.claimMoneyBack,
            this.claimNotOperationalWarranty, this.claimCircuirtyWarranty);

    }


    private claimMoneyBack(action: () => void): void {
        this.moneyBackGuarantee.claim(new Date(), action);
    }

    private claimNotOperationalWarranty(action: () => void): void {
        this.notOperationalWarranty.claim(new Date(), action);
    }

    private claimCircuirtyWarranty(action: () => void): void {
        this.circuitry.do((c) => this.circuirtyWarranty.claim(c.defectDetectionDte, action));
    }

    installCircuitry(circuitry: Part, extendedWarranty: IWarranty) {

        this.circuitry = Maybe.some(circuitry);
        this.circuirtyWarranty = extendedWarranty;

        // this.isCircuirtyOperational = true;
        this.warrantyRules.circuirtyOperational();
    }

    circuitryNotOperational(detected: Date) {
        // this.isCircuirtyOperational = false;
        this.warrantyRules.circuirtyFaild();
    }

    visibleDamage() {
        // this.isVisibleDamage = true;
        this.warrantyRules.visibleDamage();
    }

    notOperational() {
        // this.isOperational = false;
        this.warrantyRules.notOperational();
    }

    required() {
        // this.isOperational = true;
        this.warrantyRules.operational();
    }

    claimWarranty(onValidClaim: () => void) {

        // let moneyReturend = false;
        // let isAboutChristmas = this.isAboutChristmas();

        // if (isAboutChristmas) {
        //     this.moneyBackGuarantee.claim(new Date(), () => {
        //         moneyReturend = true;
        //         onValidClaim();
        //     });
        // }


        // if (!moneyReturend && !this.isOperational) {
        //     this.notOperationalWarranty.claim(new Date(), onValidClaim);
        // } else if (!moneyRetureMoneyBackGuaranteend && !this.isCircuirtyOperational) {
        //     this.circuitry.do((c) => this.circuirtyWarranty.claim(c.defectDetectionDte, onValidClaim));
        // } else (!moneyReturend && !this.isVisibleDamage)
        // this.moneyBackGuarantee.claim(new Date(), onValidClaim);
        this.warrantyRules.claim(onValidClaim);
    }

    // private isAboutChristmas(): boolean {
    //     return false;
    // }
}