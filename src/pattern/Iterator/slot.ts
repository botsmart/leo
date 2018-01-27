// interface Iterable {
//     // default iterator
//     [System.iterator]() : Iterator;
// }
// interface Iterator {
//     // next method to continue iteration
//     next() : IteratorResult;

//     // optional return method
//     return?(value? : any) : IteratorResult;
// }
// interface IteratorResult {
//     value : any;
//     done : boolean;
// }


import { Component } from "./component";
// export class Slot implements Iterator<Component> {

//     private pointer = 0;

//     constructor(public name: string, private components: Component[]) { }

//     public next(): IteratorResult<Component> {
//         this.components.forEach((component) => {
//             return {
//                 done: false,
//                 value: this.components[this.pointer++]
//             }
//         });
//         return {
//             done: true,
//             value: undefined
//         }
//     }
// }

/// first part of refactoring
// export class Slot implements Iterable<Component> {

//     private pointer = 0;

//     constructor(public name: string, private components: Component[]) { }


//     [Symbol.iterator]() {
//         let pointer = 0;
//         let components = this.components;
//         return {
//             next(): IteratorResult<Component> {
//                 if (pointer < components.length) {
//                     return {
//                         done: false,
//                         value: components[pointer++]
//                     }
//                 } else {
//                     return {
//                         done: true,
//                         value: null
//                     };
//                 };
//             }
//         };
//     }
// }


/// second part of refactoring

export class Slot implements IterableIterator<Component> {

    private pointer = 0;

    constructor(public name: string, private components: Component[]) { }

    next(): IteratorResult<Component> {
        if (this.pointer < this.components.length) {
            return {
                done: false,
                value: this.components[this.pointer++]
            }
        } else {
            return {
                done: true,
                value: null
            };
        };
    }

    [Symbol.iterator]() {
        return this;
    }
}