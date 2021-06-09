describe("My First Test ", function () {

    it('Welcome Protractor Test ', function() {
        browser.get('http://www.angularjs.org');
        // Resolve the promise
        browser.sleep(10000).then(function() {
            console.log("'Executing After Sleep");
        });
    }); 
});