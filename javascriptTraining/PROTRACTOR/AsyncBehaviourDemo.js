describe("My First Test ", function () {

    it('Welcome Protractor Test ', function() {
        browser.get('http://www.angularjs.org');
        browser.sleep(10000);
        console.log("'Executing After Sleep");

    }); 

});