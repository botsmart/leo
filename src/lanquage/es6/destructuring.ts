// array pattern matching
let [first, second, third] = [8, 4, 100, -5, 20];

/// sample two ( different variable names)
let config = {
    delay: 500,
    title: "Hi!",
    info: { name: "Elijah" }
};
const { info: one, title: two, delay: four } = config;

// output: {name: 'Elijan'}, 'Hi!', undefined, 500
// missing properties have `undefined` value
console.log(one, two, four);


/// sample three (Nested object destructuring)
let config3 = { delay: 500, title: "Hi!", info: { name: "Elijah" } };

// `delay` is using shorthand syntax mixed in w/
// full syntax
const { info: { name: fullName }, delay, title: configTitle } = config3;
// output: 'Elijah', 'Hi!', 500
console.log(fullName, configTitle, delay);


/// sample four (combine)
const KEY = "empty";
let options = { delay2: 500, empty: true, title: "Hi!" };

const { [KEY]: empty, delay2, title } = options;

// outputs: 'Hi!', 500, true
console.log(title, delay2, empty);


/// sample five
let sequence = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34],
    [firstItem, , thirdItem, fourthItem, , , seventhItem] = sequence
    ;

// output: 0, 1, 2, 8
console.log(firstItem, thirdItem, fourthItem, seventhItem);


/// sample six 
let json = {
    shapes: ["circle", "square", "triangle"],
    colors: 5,
    fill: true,
    author: {
        firstName: "Ben",
        lastName: "Ilegbodu",
        city: "Pittsburg"
    }
};
const {
    fill,
    author: { lastName : lname, firstName },
    shapes: [, secondShape],
    colors: numColors
} = json;

// output: true, square, 5
console.log(fill, secondShape, numColors);
// output: Ilegbodu, Ben, Pittsburg
console.log(lname, firstName);