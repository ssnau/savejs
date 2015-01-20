var save = require('../');
var assert = require('assert');
describe("hasOwn", function() {
    it('should work with single field', function () {
        assert.equal(save.hasOwn({a: 'cc'}, 'a'), true);
        assert.equal(save.hasOwn({a: 'cc'}, 'b'), false);
    });

    it('should work with path', function () {
        assert.equal(save.hasOwn({a: {b:'cc'}}, 'a.b'), true);
        assert.equal(save.hasOwn({a: {c:'cc'}}, 'a.b'), false);

        assert.equal(save.hasOwn({a: {b: false}}, 'a.b'), true);
        assert.equal(save.hasOwn({a: {c: false}}, 'a.b'), false);

        assert.equal(save.hasOwn({a: {b: NaN}}, 'a.b'), true);
        assert.equal(save.hasOwn({a: {c: NaN}}, 'a.b'), false);

        assert.equal(save.hasOwn({a: {b: ''}}, 'a.b'), true);
        assert.equal(save.hasOwn({a: {c: null}}, 'a.b'), false);
    });
});
