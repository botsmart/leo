/// example one

type State = "start" | "continu" | "end";
type mappedKeyAsValue = {[k in State]: k };
function nextState(state: mappedKeyAsValue) {
    if (state.start) {
    }
}

/// example two
interface Person {
    name: string;
    age: number;
    location: string;
}
type mappedtoOptionalParameter<T> = {
    [P in keyof T]?: T[P];
};
type partialPerson = mappedtoOptionalParameter<Person>;

/// example three
type Deferred<T> = {
    [P in keyof T]: Promise<T[P]>;
};

/// example four
type ReadonlyAttribute<T> = {
    readonly [P in keyof T]: T[P];
};

/// example five
type Proxify<T> = {
    [P in keyof T]: { get(): T[P]; set(v: T[P]): void }
};


/// example six (Pick Type)
// type Pick<T, K extends keyof T> = {
//     [P in K]: T[P];
// }


/// sample one
interface Person {
    name: string;
    age: number;
    location: string;
}

const person: Person = { name: "person1 ", age: 2, location: "here  ... " };

declare function pick<T, K extends keyof T>(obj: T, ...keys: K[]): Pick<T, K>;

const nameAndAgeOnly = pick(person, "name", "age");

/// sample two

type UserWithOnlyAddress = Pick<User, "address">;


type User = {
    id: number,
    name: string,
    address: {
        street: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string,
        },
    },
};

type UserWithOnlyStreetAddress = Pick2<User, "address", "street">;
type Pick2<T, K1 extends keyof T, K2 extends keyof T[K1]> = {
    [P1 in K1]: {
        [P2 in K2]: (T[K1])[P2];
    };
};

type UserWithOnlyGeoLat = Pick3<User, "address", "geo", "lat">;
type Pick3<T, K1 extends keyof T, K2 extends keyof T[K1], K3 extends keyof T[K1][K2]> = {
    [P1 in K1]: {
        [P2 in K2]: {
            [P3 in K3]: ((T[K1])[K2])[P3];
        };
    };
};


/// example (record)
// type Record<K extends string, T> = {
//     [P in K]: T;
// }
type ThreeStringProps = Record<"prop1" | "prop2" | "prop3", string>;

declare function mapObject<K extends string, T, U>(obj: Record<K, T>, f: (x: T) => U): Record<K, U>;

const names = { foo: "hello", bar: "world", baz: "bye" };
const lengths = mapObject(names, s => s.length);  // { foo: number, bar: number, baz: number }

