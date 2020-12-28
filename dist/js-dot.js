(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.dot = exports.set = exports.get = exports.loop = void 0;
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
exports.dot = utils_1.glob.jsDot = function (key, value) { return typeof value !== "undefined" ? exports.set(_this, key, value) : exports.get(_this, key); };
/** Extend objects with dot method */
Object.defineProperty(Object.prototype, "dot", {
    set: function (_v) { return null; },
    get: function () { return exports.dot; }
});

},{"./loop":2,"./utils":3}],2:[function(require,module,exports){
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

},{"./utils":3}],3:[function(require,module,exports){
(function (global){(function (){
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

}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1]);
