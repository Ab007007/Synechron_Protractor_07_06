let fn =  element(by.model('first'));
let addition = element(by.model('operator')).element(by.css("option[value='ADDITION']"))
let substraction = element(by.model('operator')).element(by.css("option[value='SUBTRACTION']"))
let sn = element(by.model('second'));
let go = element(by.id('gobutton'));
let resultEle = element(by.binding('latest'));



this.enterFn = function(fistNum) {
    fn.sendKeys(fistNum)
}


this.enterSn = function(secNum) {
    sn.sendKeys(secNum)
}

this.selectAdd = function() {
    addition.click();
}

this.clickGo = function() {
    go.click();
}

this.verifyResult = function(result) {
    resultEle.getText().then(function(text){
        expect(parseInt(text)).toEqual(result)
    })

}

