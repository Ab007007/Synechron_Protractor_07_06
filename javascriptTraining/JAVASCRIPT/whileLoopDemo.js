let counter = 1;
let num = 12;
while (counter <= 10)
{
    console.log(num + " * " + counter + " = " + (num * counter));
    counter++;
}

console.log("--- Do while Loop demo---");
let newCounter = 11;
do 
{
    console.log(num + " * " + newCounter + " = " + (num * newCounter));
    newCounter++;
} while (newCounter <=10);