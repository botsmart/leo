import { IWarrantyRules } from "./IWarrantyRules";
export interface IWarrantyRulesFactory {
    create: (
        moneyBackFunc: (action: () => void) => void,
        notOptFunc: (action: () => void) => void,
        circuitryFunc: (action: () => void) => void) => IWarrantyRules;

}