var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
  dest: 'target/screenshots',
  filename: 'my-report.html'
});

exports.config = {
      capabilities : {
      browserName : 'chrome'
    },
    directConnect: true,
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['development.js'],
    
    suites : {
      smoke : ['./ActionsInProtractor.js','./BeforeAndAfterEach.js'],
      sanity : ['./ChromResolvePromise.js','./NonAngularAppDemo.js'],
      regression :['./HandlingAlertsDemo.js','./regression/*.js']
    },

     // Setup the report before any tests start
    beforeLaunch: function() {
      return new Promise(function(resolve){
        reporter.beforeLaunch(resolve);
      });
    },

    // Assign the test reporter to each running instance
    framework: 'jasmine2',
    onPrepare: function() {
      var jasmineReporters = require('jasmine-reporters');
      jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
      consolidateAll: true,
      savePath: './',
      filePrefix: 'xmlresults'
      }));
      jasmine.getEnv().addReporter(reporter);
      var AllureReporter = require('jasmine-allure-reporter');
      jasmine.getEnv().addReporter(new AllureReporter({
        resultsDir: 'allure-results'
      }));
      var AllureReporter = require('jasmine-allure-reporter');
      jasmine.getEnv().addReporter(new AllureReporter());
      jasmine.getEnv().afterEach(function(done){
        browser.takeScreenshot().then(function (png) {
          allure.createAttachment('Screenshot', function () {
            return new Buffer(png, 'base64')
          }, 'image/png')();
          done();
        })
      });
    },

    

    // Close the report after all tests finish
    afterLaunch: function(exitCode) {
      return new Promise(function(resolve){
        reporter.afterLaunch(resolve.bind(this, exitCode));
      });
    },
    
    onComplete: function() {
      var browserName, browserVersion;
      var capsPromise = browser.getCapabilities();
  
      capsPromise.then(function (caps) {
         browserName = caps.get('browserName');
         browserVersion = caps.get('version');
         platform = caps.get('platform');
  
         var HTMLReport = require('protractor-html-reporter-2');
  
         testConfig = {
             reportTitle: 'Protractor Test Execution Report',
             outputPath: './',
             outputFilename: 'ProtractorTestReport',
             screenshotPath: './screenshots',
             testBrowser: browserName,
             browserVersion: browserVersion,
             modifiedSuiteName: false,
             screenshotsOnlyOnFailure: true,
             testPlatform: platform
         };
         new HTMLReport().from('xmlresults.xml', testConfig);
     });
  }

 
  }