var hasOwn = function(obj, key) {
    return obj ? Object.prototype.hasOwnProperty.call(obj, key) : false;
}

/**
 * get the value from the provied path of the object.
 * if the path is not exist, return _default instead.
 */
function get(object, path, _default) {
    var useDefault = false;
    var res = path.split('.').reduce(function(obj, next) {
        console.log(obj);
        console.log('next:', next);
        return hasOwn(obj, next) ? obj[next] : (useDefault = true);
    }, object);
    return useDefault ? _default : res;
}
module.exports = {
    get: get    
};
