// Karma configuration
// Generated on Thu Mar 13 2014 14:12:04 GMT-0700 (PDT)

var base = require('./karma.conf.base.js');
var _ = require('lodash');
module.exports = function(config) {
  config.set(_.assign({}, {

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Chrome', 'Firefox'],
  }, base);
};
