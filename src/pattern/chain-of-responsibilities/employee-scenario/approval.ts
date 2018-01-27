import { ApprovalResponse } from "./ApprovalResponse";
import { ExpenseReport } from "./IExpenseReport";
import { Employee } from "./employee";
import { ExpenseHandler } from "./expenseHandler";



// function approveExpense(expence: number) {

//     const expenseReport = new ExpenseReport(expence);

//     let expenseProcessed: boolean = false;

//     let employees: Employee[] =
//         [new Employee(1000, "first"),
//         new Employee(2000, "second"),
//         new Employee(3000, "thirth"),
//         new Employee(4000, "forth"),
//         new Employee(5000, "fifth")];

//     for (const employee of employees) {
//         const response = employee.ApproveExpense(expenseReport);

//         if (response.isApproved()) {
//             expenseProcessed = true;
//             break;
//         }
//     }

//     if (!expenseProcessed) {
//         console.log(`no one was able to approve this expense report !`);
//     }

// }


/// first part of refactoring

function approveExpense(expence: number) {

    const expenseReport = new ExpenseReport(expence);

    // let expenseProcessed: boolean = false;

    // let employees: Employee[] =
    //     [new Employee(1000, "first"),
    //     new Employee(2000, "second"),
    //     new Employee(3000, "thirth"),
    //     new Employee(4000, "forth"),
    //     new Employee(5000, "fifth")];

    const first = new ExpenseHandler(new Employee(1000, "first"));
    const second = new ExpenseHandler(new Employee(2000, "second"));
    const thirth = new ExpenseHandler(new Employee(3000, "thirth"));
    const forth = new ExpenseHandler(new Employee(4000, "forth"));
    const fifth = new ExpenseHandler(new Employee(5000, "fifth"));

    first.reginsterNext(second);
    second.reginsterNext(thirth);
    thirth.reginsterNext(forth);
    forth.reginsterNext(fifth);

    // for (const employee of employees) {
    //     const response = employee.ApproveExpense(expenseReport);

    //     if (response.isApproved()) {
    //         expenseProcessed = true;
    //         break;
    //     }
    // }

    const result = first.approve(expenseReport);

    console.log(`the request was ${result}`);

}