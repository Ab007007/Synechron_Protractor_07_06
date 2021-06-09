describe("Super Calculator  ", function () {

    it("Addition Test" , function() {
        browser.waitForAngularEnabled(false);
        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys(2);
        element(by.model('second')).sendKeys(3);
        element(by.id('gobutton')).click().then(function(){
            browser.sleep(3000);
            //  element(by.css("h2[class='ng-binding']")).getText().then(function(text) {
            //         console.log(`sum of two numbrs is ${text}`);
    
            //  })
            element(by.binding('latest')).getText().then(function(text) {
                         console.log(`sum of two numbrs is ${text}`);
        
            });
    
        });
       
    })
});