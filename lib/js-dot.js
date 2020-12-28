"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsDot = exports.set = exports.get = exports.loop = void 0;
var utils_1 = require("./utils");
var loop_1 = require("./loop");
/** dot notation loops */
exports.loop = loop_1.dotloop;
/** dot notation get */
exports.get = function (context, key, default_value) {
    if (default_value === void 0) { default_value = null; }
    if (context && key && (typeof key === "string" || typeof key === "number")) {
        var couple = (new String(key)).split(utils_1.dot), holder = Object.create(context), lastName = couple.pop();
        for (var _i = 0, couple_1 = couple; _i < couple_1.length; _i++) {
            var name_1 = couple_1[_i];
            holder = holder[name_1] || {};
        }
        return holder[lastName] || default_value;
    }
};
/** dot notation set */
exports.set = utils_1.glob.set = function (context, name, value) {
    return exports.loop(context, name, function (name, isLastName) {
        if (isLastName)
            return value;
    });
};
/** dual purpose namespaced function */
exports.jsDot = utils_1.glob.jsDot = function (key, value) { return typeof value !== "undefined" ? exports.set(_this, key, value) : exports.get(_this, key); };
