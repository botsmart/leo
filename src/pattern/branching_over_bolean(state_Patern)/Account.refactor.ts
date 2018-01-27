
/*
use case1;   
    money can be deposit any time but money can be withdraw only when accountholder's identify has been verified by system 
    maybe after two days another use case came up from customer :
    accountholder can be close his account at any time.
    close account cann't be procceed deposit or withdraw (doesn't allow deposit or withdraw)
    account will be unfrozen automatically on deposit or withdraw but unfreezing the account triggers custom action  

 */
import { IAccountState } from "./IAccountState";
import { DepositState } from "./deposite.state";

export class RefactorAccount {


    state: IAccountState;

    balance: number;

    customOnUnfreeze: (data?: any) => void;

    constructor(onFreezing: (data?: any) => void) {
        this.customOnUnfreeze = onFreezing;

        this.state = new DepositState();
    }


    deposite(amount: number): void {

        this.state.deposite(() => {
            this.balance += amount;
        })

    }
    // how many test you can write for this method
    withdraw(amount: number): void {

        this.state.deposite(() => {
            this.balance -= amount;
        })
    }


    verified(): void {

    }

    close() {

    }

    frozen() {

    }


}