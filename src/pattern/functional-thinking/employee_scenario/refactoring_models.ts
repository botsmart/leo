export class Employee {
    constructor(public name: string, public salary: number) { }
}

export class Department {
    constructor(public employees: Employee[]) { }

    works(employee: Employee): boolean {
        return this.employees.indexOf(employee) > -1;
    }
}


/// first step of refactoring

// type Predicate = (e: Employee) => boolean;

// function avgSalary(employees: Employee[], salaryCondition: Predicate,
//     departmentCondition?: Predicate): number {
//     let total = 0;
//     let count = 0;

//     employees.forEach((e) => {
//         if (salaryCondition(e) && (departmentCondition === undefined || departmentCondition(e))) {
//             total += e.salary;
//             count += 1;
//         }
//     });

//     return total === 0 ? 0 : total / count;
// }

/// data
// const empls = [
//     new Employee("Jim", 100),
//     new Employee("John", 200),
//     new Employee("Liz", 120),
//     new Employee("Penny", 30)
// ];
// const sales = new Department([empls[0], empls[1]]);

// avgSalary(empls, (e) => e.salary > 50, (e) => sales.works(e));


/// second step of refactoring =============================

// type Predicate = (e: Employee) => boolean;

// function avgSalary(employees: Employee[], conditions: Predicate[]): number {
//     let total = 0;
//     let count = 0;

//     employees.forEach((e) => {
//         if (conditions.every(c => c(e))) {
//             total += e.salary;
//             count += 1;
//         }
//     });
//     return (count === 0) ? 0 : total / count;
// }

/// data
// const empls = [
//     new Employee("Jim", 100),
//     new Employee("John", 200),
//     new Employee("Liz", 120),
//     new Employee("Penny", 30)
// ];
// const sales = new Department([empls[0], empls[1]]);

// avgSalary(empls, [(e) => e.salary > 50, (e) => sales.works(e)]);

/// second step of refactoring =============================

// type Predicate = (e: Employee) => boolean;

// function and(conditions: Predicate[]): Predicate {
//     return (e) => conditions.every(p => p(e));
// }

// function avgSalary(employees: Employee[], conditions: Predicate[]): number {
//     let total = 0;
//     let count = 0;

//     employees.forEach((e) => {
//         if (and(conditions)(e)) {
//             total += e.salary;
//             count += 1;
//         }
//     });
//     return (count === 0) ? 0 : total / count;
// }

/// third step of refactoring =============================

// type Predicate = (e: Employee) => boolean;

// function and(conditions: Predicate[]): Predicate {
//     return (e) => conditions.every(p => p(e));
// }

// function avgSalary(employees: Employee[], conditions: Predicate[]): number {
//     let total = 0;

//     const filtered = employees.filter(and(conditions));

//     filtered.forEach((e) => {

//         total += e.salary;

//     });

//     return (filtered.length === 0) ? 0 : total / filtered.length;
// }

/// fourth step of refactoring =============================

// type Predicate = (e: Employee) => boolean;

// function and(conditions: Predicate[]): Predicate {
//     return (e) => conditions.every((p) => p(e));
// }

// function avgSalary(employees: Employee[], conditions: Predicate[]): number {

//     const filtered = employees.filter(and(conditions));

//     const salaries = filtered.map((e) => e.salary);

//     const total = salaries.reduce((p, c) => p + c , 0);

//     return (salaries.length === 0) ? 0 : total / salaries.length;
// }


/// fifth step of refactoring =============================

// type Predicate = (e: Employee) => boolean;

// function and(conditions: Predicate[]): Predicate {
//     return (e) => conditions.every((p) => p(e));
// }

// function avarage(salaries: number[]) {
//     const total = salaries.reduce((p, c) => p + c, 0);

//     return (salaries.length === 0) ? 0 : total / salaries.length;
// }

// function avgSalary(employees: Employee[], conditions: Predicate[]): number {

//     const filtered = employees.filter(and(conditions));

//     const salaries = filtered.map((e) => e.salary);

//     return avarage(salaries);

// }

/// sixth step of refactoring =============================

type Predicate = (e: Employee) => boolean;

function and(conditions: Predicate[]): Predicate {
    return (e) => conditions.every((p) => p(e));
}

function employeeSalaries(employees: Employee[], conditions: Predicate[]): number[] {
    const filtered = employees.filter(and(conditions));
    return filtered.map((e) => e.salary);
}

function avarage(salaries: number[]) {
    const total = salaries.reduce((p, c) => p + c, 0);
    return (salaries.length === 0) ? 0 : total / salaries.length;
}

function avgSalary(employees: Employee[], conditions: Predicate[]): number {
    return avarage(employeeSalaries(employees, conditions));
}


/// data
const empls = [
    new Employee("Jim", 100),
    new Employee("John", 200),
    new Employee("Liz", 120),
    new Employee("Penny", 30)
];
const sales = new Department([empls[0], empls[1]]);

avgSalary(empls, [(e) => e.salary > 50, (e) => sales.works(e)]);