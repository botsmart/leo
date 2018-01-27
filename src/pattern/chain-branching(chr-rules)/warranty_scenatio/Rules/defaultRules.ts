import { IWarrantyRules } from "./IWarrantyRules";
import { IWarrantyRulesFactory } from "./IWarrantyRulesFactory";
import { CircuitryRules } from "./circuitryRules";
import { MoneyBackRules } from "./moneyBackRules";
import { NotOperationalRules } from "./notOperationalRules";
import { NotSatisfiedRules } from "./notSatisfiedRules";

export class DefaultRule implements IWarrantyRulesFactory {
    create(
        moneyBackFunc: (action: () => void) => void,
        notOptFunc: (action: () => void) => void,
        circuitryFunc: (action: () => void) => void): IWarrantyRules {
        return new NotOperationalRules(notOptFunc,
            new CircuitryRules(circuitryFunc,
                new MoneyBackRules(moneyBackFunc,
                    new NotSatisfiedRules())));
    };
}