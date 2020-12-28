declare module "utils" {
    /**
     * The Dot Format to search for
     *
     * @var string
     */
    export var dot: string;
    /**
     * The Dot root denotes index
     *
     * @var number
     */
    export var root: number;
    /**
     * The Ideal Blank String
     *
     * @var string
     */
    export var blank: string;
    export var glob: {
        [x: string]: any;
    };
    /**
     * Checks if a key is not in a type
     *
     * @var () => boolean
     */
    export var is_unique: (key: string, typeset?: object) => boolean;
}
declare module "loop" {
    import { glob } from "utils";
    /**
     * The loop queries through the context using a path and sets appropiately
     *
     * @var () => any
     */
    export var dotloop: (context: typeof glob, key: string | number, callbackFn: (name: string, isLastName: boolean) => any) => any;
}
declare module "js-dot" {
    import { glob } from "utils";
    export var loop: (context: {
        [x: string]: any;
    }, key: string | number, callbackFn: (name: string, isLastName: boolean) => any) => any;
    /**
     * Auto Dot notation resolve function
     *
     */
    export var get: (context: typeof glob, key: string | number, default_value?: any) => any;
    export var set: (context: typeof glob, name: string, value: any) => any;
}
