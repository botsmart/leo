import { Node } from "./linkList";

export class Stack<T>{
    dataStore: T[];
    top: number = 0;

    constructor() {
        this.dataStore = new Array<T>();
    }

    push(item: T): void {
        this.dataStore.push(item);
        // this.dataStore[this.top++] = item;
    }
    pop(): T {
        return this.dataStore.pop();
        // return this.dataStore[--this.top];
    }
    peek(): T {
        return this.dataStore[this.dataStore.length - 1];
        // return this.dataStore[this.top - 1];
    }

    size(): number {
        return this.dataStore.length;
    }

    length(): number {
        return this.top;
    }
    clear(): void {
        this.top = 0;
        this.dataStore = [];
    }
    isEmpty(): boolean {
        return this.dataStore.length === 0;
    }
}

export class StackLinkList<T>{
    head: Node<T>;
    length: number = 0;

    push(item: T): void {
        let newNode: Node<T> = new Node<T>(item);
        newNode.next = this.head;
        this.head = newNode;
    }

    pop(): T {
        let temp: Node<T>;
        if (this.head) {
            temp = this.head;
            this.head = this.head.next;
        }

        return temp.element;
    }

    peek(): T {
        if (this.head) {
            return this.head.element;
        } else {
            return null;
        }
    }
}