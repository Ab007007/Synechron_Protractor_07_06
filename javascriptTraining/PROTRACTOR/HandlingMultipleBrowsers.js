describe("Switch to Window ", function () {


    beforeEach(function() {
        browser.driver.manage().window().maximize();
        browser.waitForAngularEnabled(false);
        browser.get('https://www.irctc.co.in/eticketing/errors.html#');
     
    });

    afterEach(function() {
        browser.sleep(2000);
        console.log("From afterEach");
    })


    it('Validate Addition of two numbers', function() {
        element(by.linkText('Contact Us')).click();
        browser.getAllWindowHandles().then(function(windowIds){
            console.log(windowIds[0] + "---" + windowIds[1]);
            browser.switchTo().window(windowIds[1]);
            element.all(by.tagName('a')).each(function(link) {
                link.getText().then(function(email){
                    console.log("Child window hyper links " + email)
                })
                console.log("-----------------------------------------------------------------")
            })
            browser.switchTo().window(windowIds[0]); 
            element.all(by.tagName('a')).each(function(link) {
                link.getText().then(function(hlink){
                    console.log("Parent window hyper links " + hlink)
                })
            })
        })
    });

});