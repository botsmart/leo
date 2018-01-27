// export class Maybe<T>{

//     private content: T[];

//     constructor(content: T[]) {
//         this.content = content;
//     }

//     static some<T>(value: T): Maybe<T> {
//         return new Maybe<T>([value]);
//     }
//     none() {
//         return new Maybe<T>([]);
//     }
// }

// export class MaybeIterator<T> implements Iterator<T>{

//     private content: T[];

//     constructor(content: T[]) {
//         this.content = content;
//     }

//     next(): IteratorResult<T> {
//         this.content.forEach((value) => {
//             return {
//                 value: value, done: false
//             };
//         });
//         return { done: true, value: undefined };
//     }
// }

// export class Maybe<T> implements Iterable<T>{

//     private maybeIterator: MaybeIterator<T>;


//     constructor(maybeIterator: MaybeIterator<T>) {
//         this.maybeIterator = maybeIterator;
//     }

//     [Symbol.iterator]() {
//         return this.maybeIterator;
//     }

//     static some<T>(value: T): Maybe<T> {
//         return new Maybe<T>(new MaybeIterator<T>([value]));
//     }
//     static none<T>() {
//         return new Maybe(new MaybeIterator<T>([]));
//     }
// }


export class MaybeIterator<T> implements Iterator<T>{

    private content: T[];

    constructor(content: T[]) {
        this.content = content;
    }

    next(): IteratorResult<T> {
        this.content.forEach((value) => {
            return {
                value: value, done: false
            };
        });
        return { done: true, value: undefined };
    }
}

export class Maybe<T> implements Iterable<T>{

    private maybeIterator: MaybeIterator<T>;


    constructor(maybeIterator: MaybeIterator<T>) {
        this.maybeIterator = maybeIterator;
    }

    [Symbol.iterator]() {
        return this.maybeIterator;
    }

    static some<T>(value: T): Maybe<T> {
        return new Maybe<T>(new MaybeIterator<T>([value]));
    }
    static none<T>() {
        return new Maybe(new MaybeIterator<T>([]));
    }

    do(action: (content: T) => void) {
        for (let content of this) {
            action(content);
        }
    }
}