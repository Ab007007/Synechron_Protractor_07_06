describe("Super Calculator  ", function () {

    beforeEach(function(){
        browser.driver.manage().window().maximize();
        browser.waitForAngularEnabled(false);
        
    })
    it("Not-Angular Demo - Using Actions in protractor", function() {
        browser.get('https://www.flipkart.com/');
        browser.sleep(10000);
        browser.actions().mouseMove(element(by.xpath("//div[text()='Electronics']"))).perform();
        browser.sleep(2000);
        browser.actions().mouseMove(element(by.xpath("//div[text()='Appliances']"))).perform();
        browser.sleep(2000);
        browser.actions().mouseMove(element(by.xpath("//div[text()='Home']"))).perform();

    })


    it(" Perform Drag and drop " , function(){
        browser.get('https://jqueryui.com/droppable/');
        browser.switchTo().frame(element(by.tagName('iframe')).getWebElement());
        browser.actions().dragAndDrop(element(by.id('draggable')), element(by.id('droppable'))).perform().then(function(){

            browser.sleep(5000);
        })

    })

});