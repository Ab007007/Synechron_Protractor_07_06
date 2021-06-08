const resto = new Map();
resto.set('name','Nagarjuna')
resto.set('address', 'MG-Road - Bangalore')
resto.set('categories' ,['Veg', 'Non-Veg', 'Chinees'])


resto
.set('open', 11)
.set('close', 23)
.set(true, 'We are Open')
.set(false, 'We are Closed')

let time = 10
console.log(resto.size);
// console.log(resto.get(true));
console.log(resto.get((time >= resto.get('open') && time<= resto.get('close'))));
console.log(resto.entries());

resto.set('categories' ,[resto.get('categories'),'South indian' , 'North indian'])
console.log(resto.entries());
