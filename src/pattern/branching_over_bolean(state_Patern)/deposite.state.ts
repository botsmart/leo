import { IAccountState } from './IAccountState';
import {Withdraw} from './withdraw.state';

export class DepositState implements IAccountState {
    deposite(action?: (data?: any) => void): IAccountState {
        action();
       return new Withdraw();
    }
    // how many test you can write for this method
    withdraw(action?: (data?: any) => void): IAccountState {
        return this;
    }


    verified(): IAccountState {
        return this;
    }

    close(): IAccountState {
        return this;
    }

    frozen(): IAccountState {
        return this;
    }
}