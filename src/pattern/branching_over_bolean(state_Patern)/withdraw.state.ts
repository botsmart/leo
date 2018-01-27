import { IAccountState } from './IAccountState';
export class Withdraw implements IAccountState {
    deposite(action?: (data?: any) => void): IAccountState {
        return this;
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