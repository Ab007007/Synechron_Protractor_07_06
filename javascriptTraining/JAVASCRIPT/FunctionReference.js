function calAge(birthYear)
{
    return 2021 - birthYear;   
}

let age = calAge(1984);
console.log("Age of a Person is using function Declaration " + age);

// Function Expressions are also called as annonymous functions
let calAge1 = function (birthYear) {
    return 2021 - birthYear;
}

let age2 = calAge1(1980);
console.log("Age of a Person is using function Expression " + age2);


let calAge3 = birthYear => 2021 - birthYear;
let age3 = calAge3(1970)
console.log("Age of a Person is using Arrow function  " + age3);


let retirement = birthYear => {
    let age = 2021 - birthYear;
    let retirementage = 60 - age
    return retirementage
}

console.log("You have " + retirement(1984) + " years left for retirement");