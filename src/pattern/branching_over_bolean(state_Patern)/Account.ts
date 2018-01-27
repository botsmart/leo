
/*
use case1;   
    money can be deposit any time but money can be withdraw only when accountholder's identify has been verified by system 
    maybe after two days another use case came up from customer :
    accountholder can be close his account at any time.
    close account cann't be procceed deposit or withdraw (doesn't allow deposit or withdraw)
    account will be unfrozen automatically on deposit or withdraw but unfreezing the account triggers custom action  

 */

class UserAccount {

    balance: number;

    isVerified: boolean;

    isClosed: boolean;

    isFrozen: boolean;

    customOnUnfreeze: (data?: any) => void;

    constructor(onFreezing: (data?: any) => void) {
        this.customOnUnfreeze = onFreezing;
    }


    deposite(amount: number): void {

        if (!this.isClosed) {
            // return something
        }

        // if (this.isFrozen) {
        //     this.isFrozen = false;
        //     this.customOnUnfreeze();
        // }
        this.manageUnFreezing();

        this.balance += amount;
    }
    // how many test you can write for this method
    withdraw(amount: number): void {
        if (!this.isVerified) {
        }

        if (!this.isClosed) {
            /// return something
        }

        // if (this.isFrozen) {
        //     this.isFrozen = false;
        //     this.customOnUnfreeze();
        // }
        this.manageUnFreezing();
        // withdraw money

        this.balance -= amount;
        /// return something  
    }

    manageUnFreezing() {
        // if (this.isFrozen) {
        //     this.isFrozen = false;
        //     this.customOnUnfreeze();
        // }

        // this is a preconditiond guard clause for method
        if (!this.isFrozen) {
            return;
        }
        this.isFrozen = false;
        this.customOnUnfreeze();
    }

    verified(): void {
        this.isVerified = true;
    }

    close() {
        this.isClosed = true;
    }

    frozen() {
        if (!this.isVerified) {
            return;
            // return something
        }

        if (!this.isClosed) {
            return;
            // return something
        }

        this.isFrozen = true;
    }


}