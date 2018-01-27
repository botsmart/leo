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

export class Group implements IParty {


    name: string;
    // members: Person[];
    members: IParty[];

    set gold(value: number) {
        const amountForEachPerson: number = value / this.members.length;
        let leftOver: number = value % this.members.length;

        for (let person of this.members) {
            person.gold = amountForEachPerson + leftOver;
            leftOver = 0;
        }

    }
    get gold(): number {
        let totalGold = 0;
        for (const person of this.members) {
            totalGold += person.gold;
        }

        return totalGold;
    }

    constructor(name: string, members?: IParty[]) {
        this.name = name;

        this.members = members;
    }


    status(): void {
        // console.log(this.name);
        for (const person of this.members) {
            console.log(`name : ${person.name} amunt of gold : ${person.gold}`);
        }
    }
}