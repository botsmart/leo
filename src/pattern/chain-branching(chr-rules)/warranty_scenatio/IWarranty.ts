
export interface IWarranty {
    claim(date: Date, onValidClaim: () => void): void;
}