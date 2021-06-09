describe("Super Calculator  ", function () {


    beforeEach(function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
   
    });

    afterEach(function() {
        browser.sleep(2000);
        console.log("From afterEach");
    })


    function mathematicalOperation(a,b, operator1) {
        element(by.model('first')).sendKeys(a);
        element(by.model('operator')).all(by.tagName("option")).each(function(option){

            option.getText().then(function(opt){
                if(operator1 === opt)
                {
                    option.click();
                }
            })

        })
        element(by.model('second')).sendKeys(b);
        element(by.id('gobutton')).click();
        element(by.binding('latest')).getText().then(function(text) {
            browser.sleep(1000);
            console.log(`${operator1} of two numbrs is ${text}`);
        });
     
    }
    it('Validate Addition of two numbers', function() {
        mathematicalOperation(2,1,"+");
    });

    it('Validate Substraction of two numbers', function() {
        mathematicalOperation(2,1,"-");
    });
    it('Validate Multiplication of two numbers', function() {
        mathematicalOperation(2,1,"*");
    });
    it('Validate Division of two numbers', function() {
        mathematicalOperation(2,1,"/");
    });

});