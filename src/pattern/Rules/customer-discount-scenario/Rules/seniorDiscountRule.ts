import { Customer } from "../customer";
import { IDiscountRule } from "./IDiscountRule";

export class SeniorDiscountRule implements IDiscountRule {

    CalculateCustomerDiscount(customer: Customer): number {
        const dateNow = new Date();
        if (customer.dateOfBirth.getFullYear() < dateNow.getFullYear() - 65) {
            return 0.5;
        }
        return 0;
    }

}