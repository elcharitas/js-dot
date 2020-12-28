
/**
 * The Dot Format to search for
 * 
 * @var string
 */
export var dot: string = ".";

/**
 * The Dot root denotes index
 * 
 * @var number
 */
export var root: number = 0;

/**
 * The Ideal Blank String
 * 
 * @var string
 */
export var blank: string = "";

export var glob: { [x: string]: any } = typeof window !== "undefined" ? window: global;

/**
 * Checks if a key is not in a type
 *
 * @var () => boolean
 */
export var is_unique = (key: string, typeset: object = {}): boolean => {
    return !(key in typeset);
}