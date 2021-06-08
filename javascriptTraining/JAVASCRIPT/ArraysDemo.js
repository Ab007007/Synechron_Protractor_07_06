let numbers = [1,2,3,4,5,6,7,8]

console.log(numbers);

const fruits = new Array('Apple', 'Grapes', 'Orange','ButterFruit')
console.log(fruits);
console.log(`Element at index 0 ${fruits[0]}`);
console.log("Total elements in an array is " + fruits.length);

console.log(fruits[fruits.length-1]);

fruits.push('Cherry')
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.shift()
console.log(fruits);

fruits.unshift('Lemon')
console.log(fruits);

delete fruits[1]
console.log(fruits);
fruits[1] = 'New Grapes'
console.log(fruits);

let newfruits = fruits.slice(1,3); //startingindex and ending index
console.log(newfruits);


let newEl = fruits.splice(0,3); //starting index and number of elemetns
console.log(fruits);
console.log(newEl);
// let evennum = [2,4,6]
// let oddnum = [1,3,5]

// let num = evennum.concat(oddnum)
// console.log(num);