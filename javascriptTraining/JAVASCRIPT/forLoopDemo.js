let num = 15;

for (let index = 1; index <= 10 ; index++) 
{
   console.log(num + " * " + index + " = " + (num * index));
    
}

let fruits = ['Apple', 'Mango' , 'Grapes', 'Orange']

console.log("for in Demo -> variable represents the index ");
for (i in fruits)
{
    console.log(fruits[i]);
}

console.log("for of Demo --> Variable represents the elment");
for(const fruit of fruits)
{
    console.log(fruit);
}

console.log("--- usning for each with arrow --------");
fruits.forEach(fruit1 => {
    console.log(fruit1);
});


console.log("--- using for each with function experssion ---");

fruits.forEach(function (fruit)
{
    console.log(fruit);
})


