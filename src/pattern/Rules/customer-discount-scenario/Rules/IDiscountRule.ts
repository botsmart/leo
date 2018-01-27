import { Customer } from "../customer";
export interface IDiscountRule {
    CalculateCustomerDiscount(customer: Customer): number;
}