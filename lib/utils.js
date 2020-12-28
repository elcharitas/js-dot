"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.is_unique = exports.glob = exports.blank = exports.root = exports.dot = void 0;
/**
 * The Dot Format to search for
 *
 * @var string
 */
exports.dot = ".";
/**
 * The Dot root denotes index
 *
 * @var number
 */
exports.root = 0;
/**
 * The Ideal Blank String
 *
 * @var string
 */
exports.blank = "";
exports.glob = typeof window !== "undefined" ? window : global;
/**
 * Checks if a key is not in a type
 *
 * @var () => boolean
 */
exports.is_unique = function (key, typeset) {
    if (typeset === void 0) { typeset = {}; }
    return !(key in typeset);
};
