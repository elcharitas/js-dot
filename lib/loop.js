"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dotloop = void 0;
var utils_1 = require("./utils");
/**
 * The loop queries through the context using a path and sets appropiately
 *
 * @var () => any
 */
exports.dotloop = function (context, key, callbackFn) {
    if (context && key && (typeof key === "string" || typeof key === "number")) {
        var couple_1 = (new String(key)).split(utils_1.dot), scoop = couple_1.shift() || utils_1.blank, holder_1 = context[scoop] || {}, parabox = holder_1;
        if (couple_1.length === utils_1.root && couple_1.push(scoop)) {
            var result = callbackFn(scoop, true);
            if (typeof result === "undefined") {
                return delete context[scoop];
            }
            return context[scoop] = result;
        }
        couple_1.forEach(function (name, index) {
            var result = callbackFn(name, couple_1.length - 1 == index ? true : false);
            holder_1[name] = result || {};
            if (typeof result === "undefined") {
                delete holder_1[name];
            }
            holder_1 = holder_1[name];
        });
        return context[scoop] = parabox;
    }
};
