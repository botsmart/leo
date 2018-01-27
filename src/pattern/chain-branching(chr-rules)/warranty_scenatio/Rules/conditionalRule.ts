import { IWarrantyRules } from "./IWarrantyRules";
export class ConditionalRule implements IWarrantyRules {

    constructor(private predicate: () => boolean, private claimAction: (action: () => void) => void, private next: IWarrantyRules) {

    }

    circuirtyOperational(): void {
        this.next.circuirtyOperational();
    }
    circuirtyFaild(): void {
        this.next.circuirtyFaild();
    }
    visibleDamage(): void {
        this.next.visibleDamage();
    }
    notOperational(): void {
        this.next.notOperational();
    }
    operational(): void {
        this.next.operational();
    }
    get Claim(): (onValidClaim: () => void) => void {
        return this.predicate() ? this.AttemptClaim : this.forward;
    };

    AttemptClaim(onValidClaim: () => void) {
        let subsequentAction: (action: () => void) => void = this.forward;
        this.claimAction(() => {
            onValidClaim();
            subsequentAction = () => { };
        });
        subsequentAction(onValidClaim);
    }

    forward(action: () => void) {
        this.next.Claim(action);
    }

}