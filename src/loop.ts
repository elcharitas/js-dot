import { dot, glob, root, blank } from "./utils";


/**
 * The loop queries through the context using a path and sets appropiately
 * 
 * @var () => any
 */
export var dotloop = (context: typeof glob, key: string | number, callbackFn: (name: string, isLastName: boolean) => any): any => {
    if (context && key && (typeof key === "string" || typeof key === "number")) {
        let couple: string[] = (new String(key)).split(dot),
            scoop: string = couple.shift() || blank,
            holder: typeof glob = context[scoop] || {},
            parabox: typeof glob = holder;

        if (couple.length === root && couple.push(scoop)) {
            let result = callbackFn(scoop, true);
            if (typeof result === "undefined") {
                return delete context[scoop];
            }
            return context[scoop] = result;
        }

        couple.forEach((name, index) => {
            let result = callbackFn(name, couple.length - 1 == index ? true : false);
            holder[name] = result || {};
            if (typeof result === "undefined") {
                delete holder[name];
            }
            holder = holder[name];
        });

        return context[scoop] = parabox;
    }
}
