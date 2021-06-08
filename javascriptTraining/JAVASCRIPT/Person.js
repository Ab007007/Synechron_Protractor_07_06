class Person {

    constructor(name, age)
    {
        this.name = name;
        this.age = age;
    }
}

Person.prototype.getAge = function () {
    return this.age;
}
Person.prototype.getName = function() {
    return this.name;
}

let person1 = new Person("Aravinda" , 36);
let person2 = new Person("Harry" , 37);

// Person.prototype
let pn = person1.getName()
//console.log( pn + " is "  + person1.getAge() + " years old") ;
//console.log(person2.name + " is "  + person2.age + " years old") ;

module.exports = Person
