
// export interface IWarrantyRules {
//     circuirtyOperational(): void;
//     circuirtyFaild(): void;
//     visibleDamage(): void;
//     notOperational(): void;
//     operational(): void;
//     claim(onValidClaim: () => void): void;
// }

/// thirth step of refactoring
export interface IWarrantyRules {
    circuirtyOperational(): void;
    circuirtyFaild(): void;
    visibleDamage(): void;
    notOperational(): void;
    operational(): void;
    Claim: (onValidClaim: () => void) => void;
}