describe("Super Calculator  ", function () {

    it('Validate Addition of two numbers', function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys(2);
        element(by.model('second')).sendKeys(3);
        // since wait for angular elementes is disabled we are resolving the promise
        element(by.id('gobutton')).click();

        expect(element(by.binding('latest')).getText()).toEqual('5');
        expect(element(by.binding('latest')).getText()).toBe('5');
        element(by.binding('latest')).getText().then(function(text) {
            console.log(`sum of two numbrs is ${text}`);
           

        });     
    });
});