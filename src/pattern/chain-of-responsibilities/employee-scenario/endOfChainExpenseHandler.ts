
import { ApprovalResponse } from "./ApprovalResponse";
import { IExpenseApprover } from "./IExpenseApprover";
import { ExpenseReport } from "./IExpenseReport";
import { IExpenseHandler } from "./expenseHandler";

export class EndOfChainExpenseHandler implements IExpenseHandler {

    private next: IExpenseHandler;
    private readonly approver: IExpenseApprover;

    private static instance: EndOfChainExpenseHandler = new EndOfChainExpenseHandler()

    static get Instance(): EndOfChainExpenseHandler {
        return EndOfChainExpenseHandler.instance;
    }


    private constructor() {

    }

    reginsterNext(next: IExpenseHandler): void {
    }

    approve(expense: ExpenseReport): ApprovalResponse {
        return ApprovalResponse.denied();
    }

}