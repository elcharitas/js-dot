const { strictEqual } = require("assert")
const { loop } = require("js-dot")

describe('global', function () {
    describe('#loop 1', function () {
        strictEqual(loop({}, "foo", function (name) {
            return name
        }), "foo")
    })
})