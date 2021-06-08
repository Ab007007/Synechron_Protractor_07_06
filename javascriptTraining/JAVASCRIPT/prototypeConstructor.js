let Employee = function(companyname, companyemail) {
    this.companyname = companyname;
    this.companyemail = companyemail;


    this.getCompanyName = function() {
        return this.companyname
    }

    this.getEmail= () => this.companyemail;
   
};

let emp1 = new Employee("synechron","ahb@synechron.com")
console.log(emp1.getCompanyName());
console.log(emp1.getEmail());

