describe("Super Calculator  ", function () {

    beforeEach(function(){
        browser.driver.manage().window().maximize();
        browser.waitForAngularEnabled(false);
        
    })

    
    it(" Perform Drag and drop " , function(){
        browser.get('https://jqueryui.com/droppable/');
        browser.switchTo().frame(element(by.tagName('iframe')).getWebElement());
        browser.actions().dragAndDrop(element(by.id('draggable')), element(by.id('droppable'))).perform().then(function(){

            browser.sleep(5000);
        })

    })

});