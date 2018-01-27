import { Component } from "./component";
import { Slot } from "./slot";

// export function loadComponents() {
//     const slot = new Slot("first", [new Component("loader"), new Component("menu")]);

//     const componentOne = slot.next().value;
//     const componentTwo = slot.next().value;
// }


/// first part of refactoring
export function loadComponents() {
    const slot = new Slot("first", [new Component("loader"), new Component("menu")]);

    // const componentOne = slot.next().value;
    // const componentTwo = slot.next().value;

    for (let component of slot) {
        console.log(component.name);
    }
}