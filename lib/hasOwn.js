
var hasOwnInner = require('./hasOwnInner');
function hasOwn(object, path) {
    return hasOwnInner(object, path).has;
}

module.exports = hasOwn;
