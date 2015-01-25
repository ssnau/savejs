var ps = require('../').paths;
var assert = require('assert');
describe('paths', function() {
  it('simple object', function(){
    var paths = ps({a:1, b:2});

    assert.deepEqual([
      {path: ['a'], value: 1},
      {path: ['b'], value: 2},
      ], paths);
  });

  it('simple object2', function(){
    paths = ps({a:1, b: { c: 2, d: 3}, f: 7});

    assert.deepEqual(
      [
          { path: ['a'], value: 1 },
          { path: ['b', 'c'], value: 2 },
          { path: ['b', 'd'], value: 3 },
          { path: ['f'], value: 7 }
      ]
      , paths);
  });

  it('simple array', function(){
    var paths = ps(["a", "b"]);

    assert.deepEqual([
      {path: ['0'], value: "a"},
      {path: ['1'], value: "b"},
      ], paths);
  });

  it('mixed array and obj', function() {
    var paths = ps([{a:1, b:2}, {a:6}]);

    assert.deepEqual([
        {path: ['0', 'a'], value: 1},
        {path: ['0', 'b'], value: 2},
        {path: ['1', 'a'], value: 6},
      ], paths);
  });

  it('throw error with circular', function(){
    var a = {};
    var b = {};

    a.b = b;
    b.a = a;

    assert.throws(function(){
      ps(a);
    });
  });

  it('support concat', function(){
    paths = ps({a:1, b: { c: 2, d: 3}, f: 7}, '.');

    assert.deepEqual(
      [
          { path: 'a', value: 1 },
          { path: 'b.c', value: 2 },
          { path: 'b.d', value: 3 },
          { path: 'f', value: 7 }
      ]
      , paths);
  });

});
