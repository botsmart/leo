/// sample one

let myMap = new Map();
myMap.set(0, "zero");
myMap.set(1, "one");
for (const [key, value] of myMap) {
    console.log(key + " = " + value);
}

/// sample two
const kvArray: Array<[string, string]> = [["key1", "value1"], ["key2", "value2"]];
const myMap2 = new Map(kvArray);
console.log(myMap2.get("key1"));
console.log(Array.from(myMap2));


/// sample three
class Player {
    constructor(public name: string) {

    }
}
let steph = new Player("Stephen Curry");
let kobe = new Player("Kobe Bryant");
let lebron = new Player("LeBron James");
let allStarVotesInitialized = new Map([
    [steph, 50],
    [kobe, 0],
    [lebron, 22]
]);
console.log(allStarVotesInitialized.get(steph));

for (let [player, count] of allStarVotesInitialized) {
    console.log(`${player.name} (${count})`);
}


let durant = new Player("Kevin Durant");
let cp3 = new Player("Chris Paul");
let theBrow = new Player("Anthony Davis");

let russell = new Player("Russell Westbrook");
let carmelo = new Player("Carmelo Anthony");

let moreAllStarVotes = new Map([
    [durant, 20],
    [cp3, 5],
    [theBrow, 10]
]);
let rawData: Array<[Player, number]> = [
    [russell, 12],
    [carmelo, 15]
];
let mergedMap = new Map([...allStarVotesInitialized, ...moreAllStarVotes, ...rawData])