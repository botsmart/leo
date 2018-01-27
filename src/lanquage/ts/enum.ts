/// sample one
enum Colors {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE",
}

console.log(Colors.Red);

/// sample two
enum Direction {
    Up = 1,
    Down,
    Left = 2,
    Right
}

/// sample three
enum FileAccess {
    // constant members
    None,
    Read,
    Write,
    ReadWrite = Read | Write,
    // computed member
    G = "123".length
}

/// sample four
enum Enum {
    A
}
let a = Enum.A;
let nameOfA = Enum[Enum.A];