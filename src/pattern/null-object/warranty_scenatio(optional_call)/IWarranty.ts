// export interface IWarranty {
//     isValidWarranty(date: Date): boolean;
// }

/// thirth step of refactoring
export interface IWarranty {
    // isValidWarranty(date: Date): boolean;
    claim(date: Date, onValidClaim: () => void): void;
}