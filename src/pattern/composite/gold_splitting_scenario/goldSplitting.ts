import { Group } from "./group";
import { Person } from "./person";


const goldforSplitt = 1023;

const person2 = new Person("person2");
const person1 = new Person("person1");
const person3 = new Person("person3");
const person4 = new Person("person4");
const person5 = new Person("person5");
const person6 = new Person("person6");
const group1 = new Group("group1");
const group2 = new Group("group2");

const individualGroup: Person[] = [person1, person2, person3, person4, person5, person6];
const groups: Group[] = [group1, group2];

const totalToSplitBy = individualGroup.length + groups.length;

const amountForEach: number = goldforSplitt / totalToSplitBy;
let leftOver: number = goldforSplitt % totalToSplitBy;

for (let person of individualGroup) {
    person.gold += amountForEach + leftOver;
    leftOver = 0;
    person.status();
}


for (let group of groups) {

    const amountForEachGroup: number = goldforSplitt / group.members.length;
    let groupLeftOver: number = goldforSplitt % group.members.length;

    for (const person of group.members) {

        person.gold += amountForEachGroup + groupLeftOver;
        groupLeftOver = 0;
        person.status();
    }

}
