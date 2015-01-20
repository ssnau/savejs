var hasOwnInner = require('./hasOwnInner');
/**
 * get the value from the provied path of the object.
 * if the path is not exist, return _default instead.
 */
function get(object, path, _default) {
    var tuple = hasOwnInner(object, path);
    return tuple.has ? tuple.value : _default;
}

module.exports = get;
