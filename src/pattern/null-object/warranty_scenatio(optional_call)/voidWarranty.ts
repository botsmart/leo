import { IWarranty } from "./IWarranty";

// export class VoidWarranty implements IWarranty{
//     isValidWarranty(date: Date): boolean {
//        return false;
//     }

// }

/// second step of refactoring
// export class VoidWarranty implements IWarranty {

//     private static instance: VoidWarranty;

//     static get Instance(): VoidWarranty {
//         if (VoidWarranty.instance == null) {
//             VoidWarranty.instance = new VoidWarranty();
//         }
//         return VoidWarranty.instance;
//     }

//     private constructor() {
//     }

//     isValidWarranty(date: Date): boolean {
//         return false;
//     }

// }

/// thirth step of refactoring
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

    // private isValidWarranty(date: Date): boolean {
    //     return false;
    // }

}