export interface IExpenseReport {
    total: number;
}

export class ExpenseReport implements IExpenseReport{
    total: number;

    constructor(total:number)
    {
        this.total = total;
    }

}