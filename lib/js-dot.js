"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.set = void 0;
var utils_1 = require("./utils");
var loop_1 = require("./loop");
exports.set = utils_1.glob.set = function (context, name, value) {
    return loop_1.loop(context, name, function (name, isLastName) {
        if (isLastName)
            return value;
    });
};
Object.defineProperty(Object.prototype, "dot", {
    "value": function (key, value) {
        return exports.set(this, key, value);
    }
});
