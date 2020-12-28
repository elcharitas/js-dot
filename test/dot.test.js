const { strictEqual } = require("assert")
const data = require("js-dot")

describe('Object', function () {
    describe('#set 1', function () {
        data.dot("foo", "foo")
        strictEqual(data.foo, "foo")
    })
    describe('#set 2', function () {
        data.dot("bar.foo", "bar")
        strictEqual(data.bar.foo, "bar")
    })
})