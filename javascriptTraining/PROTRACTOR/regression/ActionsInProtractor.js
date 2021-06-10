describe("Super Calculator  ", function () {

    beforeEach(function(){
        browser.driver.manage().window().maximize();
        browser.waitForAngularEnabled(false);
        
    })
    it("Not-Angular Demo - Using Actions in protractor", function() {
        browser.get('https://www.flipkart.com/').then(function() {

            var expectedConditions =  protractor.ExpectedConditions;
            browser.wait(expectedConditions.visibilityOf(element(by.xpath("//button[@class='_2KpZ6l _2doB4z']"))));
            element(by.xpath("//button[@class='_2KpZ6l _2doB4z']")).click();
            browser.actions().mouseMove(element(by.xpath("//div[text()='Electronics']"))).perform().then(function(){
                browser.sleep(2000);
            });
            browser.actions().mouseMove(element(by.xpath("//div[text()='Appliances']"))).perform().then(function(){
                browser.sleep(2000);
            });
            
            browser.actions().mouseMove(element(by.xpath("//div[text()='Home']"))).perform();

        });

    })


    it(" Perform Drag and drop " , function(){
        browser.get('https://jqueryui.com/droppable/');
        browser.switchTo().frame(element(by.tagName('iframe')).getWebElement());
        browser.actions().dragAndDrop(element(by.id('draggable')), element(by.id('droppable'))).perform().then(function(){
            element(by.id('droppable')).getText().then(function(text){
                console.log("Text on Droppable" + text);
            });
            browser.sleep(5000);
        })

        browser.switchTo().defaultContent();
        element(by.linkText('Draggable')).click().then(function(){
            browser.sleep(5000);
        });

    })

});