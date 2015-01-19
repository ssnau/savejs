var hasOwn = function(obj, key) {
    return (obj instanceof Object) ? Object.prototype.hasOwnProperty.call(obj, key) : false;
}
module.exports = hasOwn;
