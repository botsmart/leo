import { IWarranty } from "./IWarranty";


export class VoidWarranty implements IWarranty {

    private static instance: VoidWarranty;

    static get Instance(): VoidWarranty {
        if (VoidWarranty.instance == null) {
            VoidWarranty.instance = new VoidWarranty();
        }
        return VoidWarranty.instance;
    }

    private constructor() {
    }


    claim(date: Date, onValidClaim: () => void): void {
    }
}