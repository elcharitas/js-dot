import { dot, glob } from "./utils";
import { dotloop } from "./loop";

/** dot notation loops */
export var loop = dotloop

/** dot notation get */
export var get = (context: typeof glob, key: string | number, default_value: any = null): any => {
    if (context && key && (typeof key === "string" || typeof key === "number")) {
        let couple: string[] = (new String(key)).split(dot),
            holder: typeof glob = Object.create(context),
            lastName: string = couple.pop() as string;

        for (let name of couple) {
            holder = holder[name] || {};
        }

        return holder[lastName] || default_value;
    }
}

/** dot notation set */
export var set = glob.set = (context: typeof glob, name: string, value: any): any => {
    return loop(context, name, (name, isLastName) => {
        if (isLastName) return value
    })
}

/** dual purpose namespaced function */
export const jsDot = glob.jsDot = (key: string, value: any) => typeof value !== "undefined" ? set(this, key, value): get(this, key)