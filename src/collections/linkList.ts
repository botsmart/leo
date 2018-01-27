export class Node<T>{
    constructor(public element: T) {

    }
    next: Node<T>;
    previous: Node<T>;
}
export class LinkList<T>{
    head: Node<T>;
    length: number = 0;

    find(item: T): Node<T> {
        let currNode: Node<T> = this.head;
        while (currNode.element !== item) {
            currNode = currNode.next;
        }
        return currNode;
    }

    insert(item: T, currentItem?: T): void {
        let newNode: Node<T> = new Node<T>(item);
        if (currentItem && this.head) {
            let currNode: Node<T> = this.find(currentItem);
            newNode.next = currNode.next;
            currNode.next.previous = newNode;
            currNode.next = newNode;
            newNode.previous = currNode;
            this.length += 1;
        } else {
            this.insertAtFirst(item);
        }
    }

    insertAtFirst(item: T): void {
        let node: Node<T> = new Node<T>(item);

        if (!this.head) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head.previous = node;
            this.head = node;
        }
        this.length += 1;
    }

    insertAtEnd(item: T): void {
        let node: Node<T> = new Node<T>(item);
        let current: Node<T> = this.head;

        if (this.head == null) {
            this.head = node;
        } else {

            while (current.next != null) {
                current = current.next;
            }
            node.previous = current;
            current.next = node;
        }

        this.length += 1;

    }

    clear(): void {
        this.head = null;
    }

    remove(item: T): void {

        let currNode: Node<T> = this.find(item);

        if (currNode === this.head) {
            this.head = this.head.next;
            this.head.previous = null;
        } else if (currNode.next == null) {
            currNode.previous = null;
        } else if (currNode.next != null) {
            currNode.next.previous = currNode.previous;
            currNode.previous.next = currNode.next;
            currNode.next = null;
            currNode.previous = null;
        }

        this.length -= 1;

    }

    findLast(): Node<T> {
        let currNode: Node<T> = this.head;
        while (currNode.next != null) {
            currNode = currNode.next;
        }
        return currNode;
    }

    reverse(): T[] {

        let temp: T[] = new Array<T>();

        let currNode: Node<T> = this.findLast();

        while (currNode.previous != null) {
            temp.push(currNode.element);
            currNode = currNode.previous;
        }
        return temp;
    }

    giveMeCount(): number {
        let current: Node<T> = this.head;
        let count: number = 0;
        while (current != null) {
            count = count + 1;
            current = current.next;
        }
        return count;
    }

    private findPrevious(item: T): Node<T> {
        let currNode: Node<T> = this.head;
        if (currNode.element !== item) {
            while (!(currNode.next == null) && (currNode.next.element !== item)) {
                currNode = currNode.next;
            }
            return currNode;
        } else {
            return this.find(item);
        }
    }
}