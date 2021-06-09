exports.config = {
    directConnect: true,
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['development.js']
    //capabilities : {
     //       'browserName' : 'firefox'
        // 'browserName' : 'internet explorer'
    //}
  }