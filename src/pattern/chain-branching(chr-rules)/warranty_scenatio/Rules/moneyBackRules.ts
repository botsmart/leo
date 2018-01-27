import { IWarrantyRules } from "./IWarrantyRules";
import { ChainRules } from "./chainRules";

export class MoneyBackRules extends ChainRules {


    private claimAction: (action: () => void) => void;

    constructor(claimAction: (action: () => void) => void, nextRule: IWarrantyRules) {
        super(nextRule);
        this.claimAction = claimAction;
        this.claim = super.forward;
    }

    handlevisibleDamage(): void {
        this.claim = super.forward;
    }
    handlenotOperational(): void {
        this.claim = super.forward;
    }
    handlecircuirtyFaild(): void {
        this.claim = super.forward;
    }
}