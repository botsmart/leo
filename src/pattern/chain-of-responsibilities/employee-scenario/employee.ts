import { ApprovalResponse } from "./ApprovalResponse";
import { IExpenseApprover } from "./IExpenseApprover";
import { IExpenseReport } from "./IExpenseReport";

export class Employee implements IExpenseApprover {

    name: string;
    approvalLimit: number;

    constructor(approvalLimit: number, name: string) {
        this.approvalLimit = approvalLimit;
        this.name = name;
    }


    ApproveExpense(report: IExpenseReport): ApprovalResponse {
        return report.total > this.approvalLimit ? ApprovalResponse.limited() : ApprovalResponse.approved();
    }

}