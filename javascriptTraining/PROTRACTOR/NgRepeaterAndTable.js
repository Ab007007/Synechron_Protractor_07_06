describe("Super Calculator  ", function () {

    function add(a,b) {
        element(by.model('first')).sendKeys(a);
        element(by.model('second')).sendKeys(b);
        element(by.id('gobutton')).click();
     
    }
    it('Validate Addition of two numbers', function() {
        browser.get('http://juliemr.github.io/protractor-demo/').then(function(){
            add(29,30);
            add(44,55);
            add(22,11);    
            add(4,5);
            add(2,1);    

        });
        
        // getting the Row Count in Results Table
        element.all(by.repeater('result in memory')).count().then(function(count) {
            console.log("Total number of Rows in a table "  + count);
            expect(parseInt(count)).toBe(5);
        });


        // get the  first row date and time value
        element.all(by.repeater('result in memory')).get(0).element(by.binding('result.timestamp'))
        .getText().then(function(d) {
                console.log("First Row Date is : " + d);

        });

        // get the result of first row 
        element.all(by.repeater('result in memory')).get(0).element(by.binding('result.value'))
        .getText().then(function(value) {
                console.log("First Row Result is : " + value);

        });

         // get the  first row date and time value
         element.all(by.repeater('result in memory')).get(0).getText().then(function(d) {
                 console.log("First Row USING GETTEXT Is : " + d);
 
         });
        // get the first row in a table
        element.all(by.repeater('result in memory').row(0)).getText().then(function(row1){
            console.log("First Row : " + row1);
        });

        // GET TEH COLUMN 
        element.all(by.repeater('result in memory').column('result.value')).getText().then(function(colValues){
            console.log("Column values : " + colValues);
        });


        // get the first Column values
        element.all(by.repeater('result in memory').row(0).column('result.value')).getText()
        .then(function(firstColValue){
            console.log("firstColValue  : " + firstColValue);
        });


        // print entire table
        element.all(by.repeater('result in memory')).getText().then(function(tabledata) {
            console.log("Printing Entire table "  + tabledata);
        });

          // print entire table with format
        element.all(by.repeater('result in memory')).getText().then(function(rows) {
        console.log("Printing Entire table with format ");
        for(row of rows)
        {
                console.log(row);
        }
    });

    });
});