export class Employee {
  constructor(public name: string, public salary: number) {}
}

export class Department {
  constructor(public employees: Employee[]) {}

  works(employee: Employee): boolean {
    return this.employees.indexOf(employee) > -1;
  }
}


function averageSalary(employees: Employee[], minSalary: number, department?: Department): number {
   let total = 0;
   let count = 0;

   employees.forEach((e) => {
     if(minSalary <= e.salary && (department === undefined || department.works(e))){
       total += e.salary;
       count += 1;
     }
   });

  return total === 0 ? 0 : total / count;
 }