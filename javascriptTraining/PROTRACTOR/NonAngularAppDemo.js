describe("Super Calculator  ", function () {

    it("Addition Test" , function() {
        // below line of code is mandatory for non angular applications
        browser.waitForAngularEnabled(false);
        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys(2);
        element(by.model('second')).sendKeys(3);
        // since wait for angular elementes is disabled we are resolving the promise
        element(by.id('gobutton')).click().then(function(){
            browser.sleep(3000);
            element(by.binding('latest')).getText().then(function(text) {
                console.log(`sum of two numbrs is ${text}`);
            });
    
        });
       
    })
});