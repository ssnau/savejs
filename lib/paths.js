var _ = require('lodash');
var isPlainObject = _.isPlainObject;
var isArray = _.isArray;
var each = _.each;

function test(object) {
    JSON.stringify(object);
}

function paths(object) {
  test(object);
  var paths = [];

  function dfs(curpath, obj) {
    if (!isPlainObject(obj) && !isArray(obj)) {
      paths.push({
        path: curpath,
        value: obj
      });
      return;
    }

    each(obj, function(val, key) {
       dfs(curpath.concat(key), val);
    });
  }

  dfs([], object);
  return paths;
}

module.exports = paths;
