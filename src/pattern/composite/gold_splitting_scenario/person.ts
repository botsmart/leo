import { IParty } from "./IParty";

export class Person implements IParty {
    name: string;
    gold: number;

    constructor(name: string, gold?: number) {
        this.name = name;
        if (gold)
            this.gold = gold;
    }

    status() {
        console.log(this.gold);
    }
}