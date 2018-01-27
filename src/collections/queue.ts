import { Node } from "./linkList";


export class Queue<T>{
    dataStore: T[];
    front: number;
    rear: number;
    size: number;
    constructor() {
        this.dataStore = new Array<T>();
    }

    enqueue(item: T): void {
        this.dataStore.push(item);

        if (this.front) {
            this.rear = this.front;
        } else {
            this.front = this.rear = 0;
        }
        this.size += 1;
    }

    dequeue(): T {
        if (this.size > 0) {
            this.size -= 1;

            if (this.size === 0) {
                this.front = this.rear = null;
            } else {
                this.rear = this.size - 1;
            }

            return this.dataStore.shift();
        }
    }
    first(): T {
        return this.dataStore[this.front];
    }
    last(): T {
        return this.dataStore[this.rear];
        // return this.dataStore[this.dataStore.length - 1];
    }
    isEmpty(): boolean {
        return this.size <= 0;
        // return this.dataStore.length === 0;
    }
    count(): number {
        return this.size;
        // return this.dataStore.length;
    }
    clear(): void {
        this.dataStore = [];
    }
}


export class QueueLinkList<T>{
    rearNode: Node<T>;
    firstNode: Node<T>;
    size: number;
    enqueue(item: T): void {
        let lastNode: Node<T> = this.firstNode;
        let newNode: Node<T> = new Node<T>(item);
        newNode.next = this.firstNode;
        this.firstNode = newNode;

        if (lastNode) {
            newNode.next.previous = this.firstNode;
        }

        if (!this.rearNode) {
            this.rearNode = this.firstNode;
        }

        this.size += 1;
    }

    dequeue(): T {
        const result: T = this.rearNode.element;

        this.rearNode = this.rearNode.previous;

        this.size -= 1;

        return result;

    }

    length(): number {
        return this.size;
    }
}