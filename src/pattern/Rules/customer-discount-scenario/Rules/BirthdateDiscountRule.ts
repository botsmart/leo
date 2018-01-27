import { Customer } from "../customer";
import { IDiscountRule } from "./IDiscountRule";

export class BirthDateDiscountRule implements IDiscountRule {

    CalculateCustomerDiscount(customer: Customer): number {
        const dateNow = new Date();
        if (customer.dateOfBirth.getDay() === dateNow.getDay() && customer.dateOfBirth.getMonth() === dateNow.getMonth()) {
            return 0.1;
        }

        return 0;
    }

}