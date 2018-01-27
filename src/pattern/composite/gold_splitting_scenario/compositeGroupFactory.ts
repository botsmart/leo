import { IParty } from "./IParty";
import { CompositeGroup } from "./compositeGroup";


export class CompositeGroupFactory {
    static createSimpleGroup(member: IParty[]): IParty {
        return new CompositeGroup("simpleGrooup", member, (members, goldforSplit) => {
            const amountForEachPerson: number = goldforSplit / members.length;
            let leftOver: number = goldforSplit % members.length;

            for (let person of members) {
                person.gold = amountForEachPerson + leftOver;
                leftOver = 0;
            }
        });
    }
}