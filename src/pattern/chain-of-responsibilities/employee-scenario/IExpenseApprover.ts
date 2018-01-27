import { ApprovalResponse } from "./ApprovalResponse";
import { IExpenseReport } from "./IExpenseReport";
export interface IExpenseApprover {
    approvalLimit: number;
    ApproveExpense(report: IExpenseReport): ApprovalResponse;
}