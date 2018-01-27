import { Customer } from "../customer";
import { BirthDateDiscountRule } from "./BirthdateDiscountRule";
import { IDiscountRule } from "./IDiscountRule";

export class LoyalCustomerDiscountRule implements IDiscountRule {

    yearsAsCustomer: number;
    discount: number;

    constructor(yearsAsCustomer: number, discount: number) {
        this.yearsAsCustomer = yearsAsCustomer;
        this.discount = discount;
    }


    CalculateCustomerDiscount(customer: Customer): number {
        const dateNow = new Date();
        if (customer.dateOfFirstPurchase) {

            if (customer.dateOfFirstPurchase.getFullYear() + this.yearsAsCustomer <= dateNow.getFullYear()) {
                const birthdateRule = new BirthDateDiscountRule();
                return this.discount + birthdateRule.CalculateCustomerDiscount(customer);
            }

            return 0;
        }

    }
}