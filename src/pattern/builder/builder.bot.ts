export abstract class BuilderBot<T>{
    obj: T;
    giveMeObject(): T {
        return this.obj;
    }
}