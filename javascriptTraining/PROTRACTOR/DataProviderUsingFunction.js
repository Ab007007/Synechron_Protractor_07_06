var using = require('jasmine-data-provider');
var Objects = require("./data/Object.json");

describe("End to End Test  ", function () {

    beforeEach(function () {
        browser.driver.manage().window().maximize();
        browser.waitForAngularEnabled(false);
        browser.get(Objects.url);

    });

    afterEach(function () {
        browser.sleep(2000);
        console.log("From afterEach");
    })

    function registrationData() {
        return [
            { fn: Objects.formdata.firstname, ln: Objects.formdata.lastname, jt: Objects.formdata.jobtitle },
            { fn: Objects.formdata.firstname, ln: Objects.formdata.lastname, jt: Objects.formdata.jobtitle }
          ];
    }

    using(registrationData(), function (data) {

        it('Register User', function () {
            element(by.id(Objects.locators.formpage.firstname)).sendKeys(data.fn);
            element(by.id(Objects.locators.formpage.lastname)).sendKeys(data.ln);
            element(by.id(Objects.locators.formpage.jobtitle)).sendKeys(data.jt);
            element(by.linkText(Objects.locators.formpage.submit)).click();

            var expectedConditions = protractor.ExpectedConditions;
            browser.wait(expectedConditions.visibilityOf(element(by.css("div[class='alert alert-success']"))));
            element(by.css("div[class='alert alert-success']")).getText().then(function (successmsg) {
                console.log(successmsg)
            })

        })

    })
});