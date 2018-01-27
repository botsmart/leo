import { IWarrantyRules } from "./IWarrantyRules";
import { ChainRules } from "./chainRules";

export class CircuitryRules extends ChainRules {


    private claimAction: (action: () => void) => void;

    constructor(claimAction: (action: () => void) => void, nextRule: IWarrantyRules) {
        super(nextRule);
        this.claimAction = claimAction;
        this.claim = super.forward;
    }

    handlecircuirtyFaild(): void {
        this.claim = this.claimAction;
    }
    handlecircuirtyOperational(): void {
        this.claim = super.forward;
    }
}