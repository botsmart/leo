import { Customer } from "../customer";
import { IDiscountRule } from "./IDiscountRule";

export class VeteranDiscountRule implements IDiscountRule {

    CalculateCustomerDiscount(customer: Customer): number {
        if (customer.isVeteran) {
            return 0.1;
        }
        return 0;
    }

}