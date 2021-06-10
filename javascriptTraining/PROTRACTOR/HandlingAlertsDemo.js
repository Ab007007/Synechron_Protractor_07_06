describe("Switch to Alert ", function () {


    beforeEach(function() {
        browser.driver.manage().window().maximize();
        browser.waitForAngularEnabled(false);
        browser.get('http://formy-project.herokuapp.com/switch-window');
     
    });

    afterEach(function() {
        browser.sleep(2000);
        console.log("From afterEach");
    })


    it('Validate Addition of two numbers', function() {
        element(by.id('alert-button')).click();
        browser.switchTo().alert().getText().then(function(textOnpopup){
            console.log(textOnpopup);
        });
        browser.switchTo().alert().accept();
    });

});