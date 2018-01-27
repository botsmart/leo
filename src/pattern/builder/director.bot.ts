import { BuilderBot } from "./builder.bot";
export abstract class DirectorBot<T extends BuilderBot<K>, K>{
    private readonly BuilderBot: T;
    constructor(builderBot: T) {
        this.BuilderBot = builderBot;
    }
    BuildObject(): K {
        return this.BuilderBot.giveMeObject();
    }
}