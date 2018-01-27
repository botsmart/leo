import { IWarrantyRules } from "./IWarrantyRules";
import { ChainRules } from "./chainRules";
// export class NotOperationalRules implements IWarrantyRules {


//     private nextRule: IWarrantyRules;

//     private isOperational: boolean = true;

//     private claimAction: (action: () => void) => void;

//     constructor(claimAction: (action: () => void) => void, nextRule: IWarrantyRules) {
//         this.claimAction = claimAction;
//         this.nextRule = nextRule;
//     }

//     circuirtyOperational(): void {
//     }
//     circuirtyFaild(): void {
//     }
//     visibleDamage(): void {
//     }

//     notOperational(): void {
//         this.isOperational = false;
//     }
//     operational(): void {
//         this.isOperational = true;
//     }
//     claim(onValidClaim: () => void): void {
//         if (this.isOperational) {
//             this.nextRule.claim(onValidClaim);
//         } else {
//             this.claimAction(onValidClaim);
//         }
//     }

// }


/// second step of refactoring
// export class NotOperationalRules implements IWarrantyRules {


//     private nextRule: IWarrantyRules;

//     // private isOperational: boolean = true;
//     private claimStrategy: (action: () => void) => void;

//     private claimAction: (action: () => void) => void;

//     constructor(claimAction: (action: () => void) => void, nextRule: IWarrantyRules) {
//         this.claimAction = claimAction;
//         this.nextRule = nextRule;
//     }

//     circuirtyOperational(): void {
//     }
//     circuirtyFaild(): void {
//     }
//     visibleDamage(): void {
//     }

//     notOperational(): void {
//         // this.isOperational = false;
//         this.claimStrategy = (onValidClaim) => this.claimAction(onValidClaim);
//     }
//     operational(): void {
//         // this.isOperational = true;
//         this.claimStrategy = (onValidClaim) => this.nextRule.claim(onValidClaim);
//     }
//     claim(onValidClaim: () => void): void {
//         // if (this.isOperational) {
//         //     this.nextRule.claim(onValidClaim);
//         // } else {
//         //     this.claimAction(onValidClaim);
//         // }

//         this.claimStrategy(onValidClaim);
//     }

// }


/// thirth step of refactoring
// export class NotOperationalRules implements IWarrantyRules {


//     private nextRule: IWarrantyRules;

//     // private claimStrategy: (action: () => void) => void;
//     private claim: (action: () => void) => void;
//     get Claim(): (action: () => void) => void {
//         return this.claim;
//     }

//     private claimAction: (action: () => void) => void;



//     constructor(claimAction: (action: () => void) => void, nextRule: IWarrantyRules) {
//         this.claimAction = claimAction;
//         this.nextRule = nextRule;

//         this.claim = this.forward;
//     }

//     private forward(onValidClaim: () => void): void {
//         this.nextRule.Claim(onValidClaim);
//     }

//     circuirtyOperational(): void {
//     }
//     circuirtyFaild(): void {
//     }
//     visibleDamage(): void {
//     }

//     notOperational(): void {
//         // this.claimStrategy = (onValidClaim) => this.claimAction(onValidClaim);
//         this.claim = this.claimAction;
//     }
//     operational(): void {
//         // this.claimStrategy = (onValidClaim) => this.nextRule.claim(onValidClaim);
//         this.claim = this.forward;
//     }
//     // claim(onValidClaim: () => void): void {
//     //     this.claimStrategy(onValidClaim);
//     // }

// }


/// firth step of refactoring
export class NotOperationalRules extends ChainRules {


    private claimAction: (action: () => void) => void;

    constructor(claimAction: (action: () => void) => void, nextRule: IWarrantyRules) {
        super(nextRule);
        this.claimAction = claimAction;
        this.claim = super.forward;
    }

    handlenotOperational(): void {
        this.claim = this.claimAction;
    }
    handleoperational(): void {
        this.claim = super.forward;
    }
}