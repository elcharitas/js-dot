import { glob } from "./utils";
import { dotloop } from "./loop";

export var loop = dotloop

export var set = glob.set = (context: typeof glob, name: string, value: any): any => {
    return loop(context, name, (name, isLastName) => {
        if (isLastName) return value
    })
}

Object.defineProperty(Object.prototype, "dot", {
    "value": function(key: string, value: any) {
        return set(this, key, value)
    }
})