import { IWarrantyRules } from "./IWarrantyRules";


export abstract class ChainRules implements IWarrantyRules {


    private nextRule: IWarrantyRules;

    // private claimStrategy: (action: () => void) => void;
    protected claim: (action: () => void) => void;
    get Claim(): (action: () => void) => void {
        return this.claim;
    }

    constructor(nextRule: IWarrantyRules) {
        this.nextRule = nextRule;
    }

    protected forward(onValidClaim: () => void): void {
        this.nextRule.Claim(onValidClaim);
    }

    circuirtyOperational(): void {
        this.handlecircuirtyOperational();
        this.nextRule.circuirtyOperational();
    }
    circuirtyFaild(): void {
        this.handlecircuirtyFaild();
        this.nextRule.circuirtyFaild();
    }
    visibleDamage(): void {
        this.handlevisibleDamage();
        this.nextRule.visibleDamage();
    }
    notOperational(): void {
        this.handlenotOperational();
        this.nextRule.notOperational();
    }
    operational(): void {
        this.handleoperational();
        this.nextRule.operational();
    }


    protected handlecircuirtyOperational(): void {
    }
    protected handlecircuirtyFaild(): void {
    }
    protected handlevisibleDamage(): void {
    }
    protected handlenotOperational(): void {
    }
    protected handleoperational(): void {
    }
}
