const { strictEqual } = require("assert")
const { set } = require("js-dot")

const data = {}

describe('global', function () {
    describe('#set 1', function () {
        set(data, "foo", "bar")
        strictEqual(data.foo, "bar")
    })
    describe('#set 2', function () {
        set(data, "bar.foo", "bar")
        strictEqual(data.bar.foo, "bar")
    })
})