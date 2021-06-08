let empID =  new Set();

empID.add("emp1");
empID.add("emp2");
empID.add("emp3");
empID.add("emp4");
empID.add("emp5");

console.log(empID.size);
console.log(empID.has('emp1'));
empID.add("emp4");
empID.add("emp5");

console.log(empID.values());
console.log(empID.size);

empID.forEach(element =>
{
    console.log(element);
});