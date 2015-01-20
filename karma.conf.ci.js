var fs = require('fs');
var base = require('./karma.conf.base.js');
var _ = require('lodash');

module.exports = function(config) {
  console.log('travis job number:', process.env.TRAVIS_JOB_NUMBER);

  var customLaunchers = {
    'SL_Chrome': {
        base: 'SauceLabs',
        browserName: 'chrome',
        version: '39'
    },
    'SL_IE9': {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      version: '9'
    },
    'SL_IE11': {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      version: '11'
    },
  };

  config.set(_.merge({}, base, {
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['dots', 'saucelabs'],

    singleRun: true,

    sauceLabs: {
      testName: 'SaveJS',
      "public": "public",
      startConnect: true
    },
    // BrowserStack config for local development.
    browserStack: {
      project: 'SaveJS',
      name: "SaveJS",
      startTunnel: true,
      timeout: 600 // 10min
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

  if (process.env.TRAVIS) {
        var buildLabel = 'TRAVIS #' + process.env.TRAVIS_BUILD_NUMBER + ' (' + process.env.TRAVIS_BUILD_ID + ')';

        config.logLevel = config.LOG_DEBUG;
        // Karma (with socket.io 1.x) buffers by 50 and 50 tests can take a long time on IEs;-)
        config.browserNoActivityTimeout = 120000;

        config.browserStack.build = buildLabel;
        config.browserStack.startTunnel = false;
        config.browserStack.tunnelIdentifier = process.env.TRAVIS_JOB_NUMBER;

        config.sauceLabs.build = buildLabel;
        config.sauceLabs.startConnect = false;
        config.sauceLabs.tunnelIdentifier = process.env.TRAVIS_JOB_NUMBER;
        config.sauceLabs.recordScreenshots = true;

        // Debug logging into a file, that we print out at the end of the build.
        config.loggers.push({
          type: 'file',
          filename: process.env.LOGS_DIR + '/' +  'karma.log'
        });

        if (process.env.BROWSER_PROVIDER === 'saucelabs' || !process.env.BROWSER_PROVIDER) {
          // Allocating a browser can take pretty long (eg. if we are out of capacity and need to wait
          // for another build to finish) and so the `captureTimeout` typically kills
          // an in-queue-pending request, which makes no sense.
          config.captureTimeout = 0;
        }
  }
};
