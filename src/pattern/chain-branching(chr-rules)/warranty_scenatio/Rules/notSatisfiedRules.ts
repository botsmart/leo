import { IWarrantyRules } from "./IWarrantyRules";


export class NotSatisfiedRules implements IWarrantyRules {


    private claim: (action: () => void) => void = (action: () => void): void => {};

    get Claim(): (action: () => void) => void {
        return this.claim;
    }

    circuirtyOperational(): void {

    }
    circuirtyFaild(): void {

    }
    visibleDamage(): void {

    }
    notOperational(): void {

    }
    operational(): void {

    }

}