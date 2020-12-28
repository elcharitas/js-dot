const { strictEqual } = require("assert")
const { get } = require("js-dot")

describe('global', function () {
    describe('#get 1', function () {
        strictEqual(get({foo: "bar"}, "foo"), "bar")
    })
    describe('#get 2', function () {
        strictEqual(get({foo: {bar: "foo"}}, "foo.bar"), "foo")
    })
    describe('#get 3', function () {
        strictEqual(get({ foo: "bar" }, "nofoo", "bar"), "bar")
    })
})