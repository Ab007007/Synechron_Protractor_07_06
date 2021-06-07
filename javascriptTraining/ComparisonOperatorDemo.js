let x = 2;
let y = 2;
let p = 10;
let r = "2"
let z;

console.log("-- Comparision operators --");

console.log("--- Data types ---")
console.log("x " + typeof(x));
console.log("r " + typeof(r));
console.log("z " + typeof(z));

console.log("Two integer Equals " + (x==y));
console.log("Two non-integer Equals " + (x==r));
console.log("Two integer Equals with DataTypd " + (x===y));
console.log("Two non-integer Equals with DataTypd " + (x===r));


console.log("Two integer Not-Equals " + (x!=y));
console.log("Two non-integer Not-Equals " + (x!=r));
console.log("Two integer Not-Equals with DataTypd " + (x!==y));
console.log("Two non-integer Not-Equals with DataTypd " + (x!==r));

console.log("Greater than " + (x > p));
console.log("Less than " + (x < p));

console.log("Greater than OR Equal " + (x >= p));
console.log("Less than  OR Equal " + (x <= p));


console.log((x > p)?"X is Greater Element ":"P is greater Element " );
console.log((x < p)?"X is Smaller Element ":"P is Smaller Element " );
