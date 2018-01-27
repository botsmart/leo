import { Customer } from "../customer";
import { IDiscountRule } from "./IDiscountRule";

export class FirstTimeDiscountRule implements IDiscountRule {

    CalculateCustomerDiscount(customer: Customer): number {
        if (!customer.dateOfFirstPurchase) {
            return 0.15;
        }

        return 0;
    }

}