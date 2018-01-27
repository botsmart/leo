import { Customer } from "./customer";

import { IDiscountRule } from "./Rules/IDiscountRule";

import { BirthDateDiscountRule } from "./Rules/BirthdateDiscountRule";
import { FirstTimeDiscountRule } from "./Rules/firstTimeDiscountRule";
import { LoyalCustomerDiscountRule } from "./Rules/loyalCustomerDiscountRule";
import { SeniorDiscountRule } from "./Rules/seniorDiscountRule";
import { VeteranDiscountRule } from "./Rules/veteranDiscountRule";

// function calculatePurchaseDiscount(customer: Customer): number {
//     let discount: number = 0;
//     const dateNow = new Date();
//     if (customer.dateOfBirth.getFullYear() < dateNow.getFullYear() - 65) {
//         discount = 0.5;
//     }

//     if (customer.dateOfBirth.getDay() === dateNow.getDay() && customer.dateOfBirth.getMonth() === dateNow.getMonth()) {
//         discount = Math.max(discount, 0.1);
//     }

//     if (customer.dateOfFirstPurchase) {

//         if (customer.dateOfFirstPurchase.getFullYear() < dateNow.getFullYear() - 1) {
//             discount = Math.max(discount, 0.1);
//         }


//         if (customer.dateOfFirstPurchase.getFullYear() < dateNow.getFullYear() - 5) {
//             discount = Math.max(discount, 0.12);
//         }


//         if (customer.dateOfFirstPurchase.getFullYear() < dateNow.getFullYear() - 10) {
//             discount = Math.max(discount, 0.2);
//         }


//         if (customer.dateOfBirth.getDay() === dateNow.getDay() && customer.dateOfBirth.getMonth() === dateNow.getMonth()) {
//             discount += 0.1;
//         }

//     } else {
//         discount = Math.max(discount, 0.15);
//     }

//     if (customer.isVeteran) {
//         discount = Math.max(discount, 0.1);
//     }

//     return discount;
// }

/// first part of refactoring

class DiscountCalculator {

    rules: IDiscountRule[] = [
        new BirthDateDiscountRule(),
        new SeniorDiscountRule(),
        new VeteranDiscountRule(),
        new LoyalCustomerDiscountRule(1, 0.1),
        new LoyalCustomerDiscountRule(5, 0.12),
        new LoyalCustomerDiscountRule(10, 0.2),
        new FirstTimeDiscountRule()
    ];

    calculatePurchaseDiscount(customer: Customer): number {

        let discount: number = 0;
        // const dateNow = new Date();
        // if (customer.dateOfBirth.getFullYear() < dateNow.getFullYear() - 65) {
        //     discount = 0.5;
        // }

        // if (customer.dateOfBirth.getDay() === dateNow.getDay() && customer.dateOfBirth.getMonth() === dateNow.getMonth()) {
        //     discount = Math.max(discount, 0.1);
        // }

        for (let rule of this.rules) {
            discount = Math.max(rule.CalculateCustomerDiscount(customer), discount);
        }

        // if (customer.dateOfFirstPurchase) {

        //     if (customer.dateOfFirstPurchase.getFullYear() < dateNow.getFullYear() - 1) {
        //         discount = Math.max(discount, 0.1);
        //     }


        //     if (customer.dateOfFirstPurchase.getFullYear() < dateNow.getFullYear() - 5) {
        //         discount = Math.max(discount, 0.12);
        //     }


        //     if (customer.dateOfFirstPurchase.getFullYear() < dateNow.getFullYear() - 10) {
        //         discount = Math.max(discount, 0.2);
        //     }


        //     if (customer.dateOfBirth.getDay() === dateNow.getDay() && customer.dateOfBirth.getMonth() === dateNow.getMonth()) {
        //         discount += 0.1;
        //     }

        // } else {
        //     discount = Math.max(discount, 0.15);
        // }

        // if (customer.isVeteran) {
        //     discount = Math.max(discount, 0.1);
        // }

        return discount;
    }
}