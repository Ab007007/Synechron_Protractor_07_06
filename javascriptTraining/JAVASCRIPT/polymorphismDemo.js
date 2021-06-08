class Animal
{
    constructor(name) {
        this.name = name;
    }
    eats() {
        console.log(this.name + " eat grass");
    }
}
class Cow extends Animal
{
    domastic() {
        console.log( "  Cow  is a domastic Animal");
    }
}
class Tiger extends Animal
{
    eats() {
        console.log(" Tiger Eat living animals");
    }
    forest() {
        console.log("Lives in forest");
    }
}

let tiger1 = new Tiger("MyTiger ")
tiger1.eats()
tiger1.forest()