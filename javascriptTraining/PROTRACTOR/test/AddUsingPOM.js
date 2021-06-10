let homepage = require('../page/calculatorHomePage')


describe("End to End Test  ", function () {

    it('add using POM' , function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
        homepage.enterFn(5);
        homepage.enterSn(29);
        homepage.selectAdd();
        homepage.go();
        homepage.verifyResult(34)


    })
})