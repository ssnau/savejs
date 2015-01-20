
function nativeHasOwn(obj, key) {
    return (obj instanceof Object) ? Object.prototype.hasOwnProperty.call(obj, key) : false;
}

function hasOwnInner(object, path) {
    var hasnot  = false;
    var res = path.split('.').reduce(function (obj, next) {
        return nativeHasOwn(obj, next) ? obj[next] : (hasnot = true);
    }, object);
    return {
        value: res,
        has: !hasnot
    };
}
module.exports = hasOwnInner;
