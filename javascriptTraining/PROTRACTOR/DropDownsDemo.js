describe("Super Calculator  ", function () {

    function mathematicalOperation(a,b, operation) {
        element(by.model('first')).sendKeys(a);
        element(by.model('operator')).element(by.css("option[value='"+ operation +"']")).click();
        element(by.model('second')).sendKeys(b);
        element(by.id('gobutton')).click();
        element(by.binding('latest')).getText().then(function(text) {
            browser.sleep(1000);
            console.log(`${operation} of two numbrs is ${text}`);
        });
     
    }
    it('Validate Addition of two numbers', function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
        mathematicalOperation(2,1,"ADDITION");
        mathematicalOperation(2,1,"SUBTRACTION");    
        mathematicalOperation(2,1,"DIVISION");    
        mathematicalOperation(2,1,"MODULO");    
        
        
    
    });
});