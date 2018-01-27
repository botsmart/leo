import { ApprovalResponse } from "./ApprovalResponse";
import { IExpenseApprover } from "./IExpenseApprover";
import { ExpenseReport } from "./IExpenseReport";
import { EndOfChainExpenseHandler } from "./endOfChainExpenseHandler";
export interface IExpenseHandler {
    reginsterNext(next: IExpenseHandler): void;
    approve(expense: ExpenseReport): ApprovalResponse;
}

export class ExpenseHandler implements IExpenseHandler {

    private next: IExpenseHandler;
    private readonly approver: IExpenseApprover;


    constructor(approver: IExpenseApprover) {
        this.approver = approver;

        this.next = EndOfChainExpenseHandler.Instance;
    }

    reginsterNext(next: IExpenseHandler): void {
        this.next = next;
    }

    approve(expense: ExpenseReport): ApprovalResponse {
        const response = this.approver.ApproveExpense(expense);
        if (response.isLimited) {
            this.next.approve(expense);
        }
        return response;
    }

}