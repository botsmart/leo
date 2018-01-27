export class Set<T>{
    private dataStore: T[] = [];

    add(item: T): boolean {
        if (this.dataStore.indexOf(item) === -1) {
            this.dataStore.push(item);
            return true;
        } else {
            return false;
        }
    }

    remove(item: T): boolean {
        const pos: number = this.dataStore.indexOf(item);
        if (pos > 0) {
            this.dataStore.slice(pos, 1);
            return true;
        } else {
            return false;
        }
    }

    contains(item: T): boolean {
        if (this.dataStore.indexOf(item) > 0) {
            return true;
        } else {
            return false;
        }
    }

    union(set: Set<T>): Set<T> {
        let newSet: Set<T> = new Set<T>();
        for (var index: number = 0; index < set.dataStore.length; index++) {
            newSet.add(set.dataStore[index]);
        }
        for (var i: number = 0; i < this.dataStore.length; i++) {
            if (!newSet.contains(this.dataStore[i])) {
                newSet.add(this.dataStore[i]);
            }
        }
        return newSet;
    }

    intersect(set: Set<T>): Set<T> {
        let newSet: Set<T> = new Set<T>();
        for (var index: number = 0; index < this.dataStore.length; index++) {
            if (set.contains(this.dataStore[index])) {
                newSet.add(this.dataStore[index]);
            }
        }
        return newSet;
    }

    size(): number {
        return this.dataStore.length;
    }

    subset(set: Set<T>): boolean {
        if (this.size() !== set.size()) {
            return false;
        }
        for (var index: number = 0; index < this.dataStore.length; index++) {
            if (!set.contains(this.dataStore[index])) {
                return false;
            }
        }
        return true;
    }

    difference(set: Set<T>): Set<T> {
        let newSet: Set<T> = new Set<T>();

        this.dataStore.forEach(item => {
            if (!set.contains(item)) {
                newSet.add(item);
            }
        });

        return newSet;
    }
}