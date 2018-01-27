import { IWarrantyRules } from "./IWarrantyRules";
import { IWarrantyRulesFactory } from "./IWarrantyRulesFactory";
import { ConditionalRule } from "./conditionalRule";
import { DefaultRule } from "./defaultRules";
export class ChristmassRuleFactory implements IWarrantyRulesFactory {
    private IsChristmass(): boolean {
        return new Date().getMonth() === 12;
    }
    create(
        moneyBackFunc: (action: () => void) => void,
        notOptFunc: (action: () => void) => void,
        circuitryFunc: (action: () => void) => void): IWarrantyRules {
        return new ConditionalRule(this.IsChristmass, moneyBackFunc,
            new DefaultRule().create(moneyBackFunc, notOptFunc, circuitryFunc));
    }

}