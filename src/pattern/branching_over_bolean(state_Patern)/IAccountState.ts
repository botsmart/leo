export interface IAccountState {
    deposite(action?: (data?: any) => void): IAccountState;
    withdraw(action?: (data?: any) => void): IAccountState;
    frozen(): IAccountState;
    close(): IAccountState;
    verified(): IAccountState
}