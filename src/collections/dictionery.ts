export class Dictionery<T>{
    private dataStore: { [key: string]: any } = {};
    add(key: string, item: T): void {
        this.dataStore[key] = item;
    }
    find(key: string): T {
        return this.dataStore[key];
    }
    remove(key: string): void {
        delete this.dataStore[key];
    }
    count(): number {
        let number: number = 0;
        Object.keys(this.dataStore).forEach(key => ++number);
        return number;
    }
    clean(): void {
        Object.keys(this.dataStore).forEach(key => delete this.dataStore[key]);
    }
}