var save = require('../');
var assert = require('assert');

describe('get should work', function() {
    it('test get', function () {
        var val = save.get({a: 'hello'}, 'a');
        assert.equal(val, 'hello');
    });

    it('test get with null/undefined value', function () {
        assert.equal(save.get(null, 'x'), void 0);
        assert.equal(save.get(void 0, 'x'), void 0);
        assert.equal(save.get(void 0, 'x.a.b'), void 0);
    });

    it('test get with none object value', function () {
        assert.equal(save.get(3, 'x'), void 0);
        assert.equal(save.get('hello', 'x'), void 0);
        assert.equal(save.get(true, 'x.a.b'), void 0);
    });

    it('test with path', function () {
        var obj = {
            a1: {
                b: 'good',
                c: 0,
                d: null,
                x: 3,
                y: new Date
            },
            a2: [
                'hello',
                'world'
            ]
        }
        assert.equal(save.get(obj, 'a1.b'), 'good');
        assert.equal(save.get(obj, 'a1.b.c'), void 0);
        assert.equal(save.get(obj, 'a1.c'), 0);
        assert.equal(save.get(obj, 'a1.c.f'), void 0);
        assert.equal(save.get(obj, 'a1.d'), null);
        assert.equal(save.get(obj, 'a1.x'), 3);
        assert.equal(save.get(obj, 'a1.y') - 0 > 10000, true);
        assert.equal(save.get(obj, 'a1.y.x'), void 0);

        assert.equal(save.get(obj, 'a2.0'), 'hello');
        assert.equal(save.get(obj, 'a2.1'), 'world');
    });

    it('test with default value', function () {
        var obj = {
            a1: {
                b: 'good',
                c: 0,
                d: null
            },
            a2: [
                'hello',
                'world'
            ]
        }
        assert.equal(save.get(obj, 'a1.b', 'def'), 'good');
        assert.equal(save.get(obj, 'a1.c', 'def'), 0);
        assert.equal(save.get(obj, 'a1.d', 'def'), null);
        assert.equal(save.get(obj, 'a1.e', 'def'), 'def');

        assert.equal(save.get(obj, 'a2.0', 'def'), 'hello');
        assert.equal(save.get(obj, 'a2.1', 'def'), 'world');
        assert.equal(save.get(obj, 'a2.3', 'def'), 'def');
    });
});
