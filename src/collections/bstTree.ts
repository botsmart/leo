import { Queue } from "./queue";

export class Node<T>{
    constructor(public item: T, public left: Node<T> = null, public right: Node<T> = null) {

    }
}
export class BSTTree<T>{

    constructor(private compareFunc: IBStCompareObject<T>) {


    }
    root: Node<T>;
    insert(item: T): void {
        let node: Node<T> = new Node<T>(item);
        if (this.root === null) {
            this.root = node;
        } else {
            let current: Node<T> = this.root;
            while (true) {
                let parent: Node<T> = current;
                const result: number = this.compareFunc.compare(item, current.item);
                if (result < 0) {
                    current = current.left;
                    if (current == null) {
                        parent.left = node;
                        break;
                    }
                } else if (result > 0) {
                    current = current.right;
                    if (current == null) {
                        parent.right = node;
                        break;
                    }
                }
            }
        }
    }

    inOrder(root: Node<T>, result: Queue<T> = new Queue<T>()): Queue<T> {
        if (root !== null) {
            this.inOrder(root.left, result);
            result.enqueue(root.item);
            this.inOrder(root.right, result);
        }
        return result;
    }
    preOrder(root: Node<T>, result: Queue<T> = new Queue<T>()): Queue<T> {
        if (root !== null) {
            result.enqueue(root.item);
            this.inOrder(root.left, result);
            this.inOrder(root.right, result);
        }
        return result;
    }
    postOrder(root: Node<T>, result: Queue<T> = new Queue<T>()): Queue<T> {
        if (root !== null) {
            this.inOrder(root.left, result);
            this.inOrder(root.right, result);
            result.enqueue(root.item);
        }
        return result;
    }


    levelOrder(root: Node<T>, result: Queue<T> = new Queue<T>()): Queue<T> {

        let node: Node<T>;
        let nodes: Queue<Node<T>> = new Queue<Node<T>>();
        nodes.enqueue(root);
        while (!nodes.isEmpty) {
            node = nodes.dequeue();
            result.enqueue(node.item);

            if (node.left) {
                nodes.enqueue(node.left);
            }

            if (node.right) {
                nodes.enqueue(node.right);
            }
        }

        return result;
    }

    getMin(): T {
        let current: Node<T> = this.root;
        while (current.left != null) {
            current = current.left;
        }
        return current.item;
    }
    getMax(): T {
        let current: Node<T> = this.root;
        while (current.right) {
            current = current.right;
        }

        return current.item;
    }
    find(item: T): T {
        let current: Node<T> = this.root;
        while (item !== current.item) {
            const compareResult: number = this.compareFunc.compare(item, current.item);
            if (compareResult < 0) {
                current = current.left;
            } else {
                current = current.right;
            }

            if (current === null) {
                return null;
            }
        }
        return current.item;
    }
    remove(item: T): void {
        this.root = this.removeItem(this.root, item);
    }
    private removeItem(root: Node<T>, item: T): Node<T> {
        if (root === null) {
            return null;
        }

        const compareResult: number = this.compareFunc.compare(item, root.item);

        if (compareResult < 0) {
            root.left = this.removeItem(root.left, item);
            return root;
        } else if (compareResult > 0) {
            root.right = this.removeItem(root.right, item);
            return root;
        } else {

            if (root.left === null) {
                return root.right;
            } else if (root.right === null) {
                return root.left;
            }
            let tempItem: Node<T> = this.getSmallest(root.right);
            root.item = tempItem.item;
            root.right = this.removeItem(root.right, tempItem.item);
            return root;
        }

    }


    private getSmallest(item: Node<T>): Node<T> {
        while (item && item.left !== null) {
            item = item.left;
        }
        return item;
    }
}


export interface IBStCompareObject<T> {
    compare(a: T, b: T): number;
}