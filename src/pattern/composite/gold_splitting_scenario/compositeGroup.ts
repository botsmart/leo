import { Person } from "./person";


// export class Group {

//     name: string;
//     members: Person[];

//     constructor(name: string) {
//         this.name = name;
//     }


//     status(): void {
//         console.log(this.name);
//     }
// }

import { IParty } from "./IParty";

export class CompositeGroup implements IParty {


    name: string;
    // members: Person[];
    members: IParty[];


    formula: (member: IParty[], goldforSplit: number) => void;

    set gold(value: number) {
        // const amountForEachPerson: number = value / this.members.length;
        // let leftOver: number = value % this.members.length;

        // for (let person of this.members) {
        //     person.gold = amountForEachPerson + leftOver;
        //     leftOver = 0;
        // }

        this.formula(this.members , value);

    }
    get gold(): number {
        let totalGold = 0;
        for (const person of this.members) {
            totalGold += person.gold;
        }

        return totalGold;
    }

    constructor(name: string, members: IParty[], formula: (member: IParty[] , goldforSplit: number) => void) {
        this.name = name;
        if (this.members)
            this.members = members;

        this.formula = formula;
    }


    status(): void {
        // console.log(this.name);
        for (const person of this.members) {
            console.log(`name : ${person.name} amunt of gold : ${person.gold}`);
        }
    }
}