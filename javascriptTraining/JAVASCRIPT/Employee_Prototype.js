let Employee = function(companyname, companyemail) {
    this.companyname = companyname;
    this.companyemail = companyemail;
};

Employee.prototype.getCompanyName = function() {
    return this.companyname
}

Employee.prototype.getEmail= function() {
    return this.companyemail;

}

let emp1 = new Employee("synechron","ahb@synechron.com")
console.log(emp1.getCompanyName());
console.log(emp1.getEmail());

