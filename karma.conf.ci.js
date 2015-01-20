var fs = require('fs');
var base = require('./karma.conf.base.js');
var _ = require('lodash');

module.exports = function(config) {
    console.log('travis job number:', process.env.TRAVIS_JOB_NUMBER);

  // Browsers to run on Sauce Labs
  var customLaunchers = {
    'SL_Chrome': {
      base: 'SauceLabs',
      browserName: 'chrome'
    }
    /*
    ,
    'SL_IE9': {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      version: '9'
    }
    */
  };

  config.set(_.merge({}, base, {
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['dots', 'saucelabs'],

    singleRun: true,

    sauceLabs: {
      testName: 'SaveJS',
      /*
      build: process.env.TRAVIS_BUILD_NUMBER,
      tags: process.env.TRAVIS_PULL_REQUEST,
      tunnelIdentifier: process.env.TRAVIS_JOB_NUMBER || 'autoGeneratedTunnelID'
      */
    },
    captureTimeout: 120000,
    customLaunchers: customLaunchers,
    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: Object.keys(customLaunchers),
  }));
};
