class Car {

    startEngine() {
        console.log("Start Engine");
    }

    stopEngine() {
        console.log("Stop Engine");
    }
}
class Tyota extends Car 
{
    carModel() {
        console.log("Tyota Innova");
    }
}
class Innova extends Tyota
{
    yearOfManufacture()
    {
        console.log("2020 Model");
    }
}
let innovaCar = new Innova();
innovaCar.startEngine();
innovaCar.stopEngine();
innovaCar.carModel();
innovaCar.yearOfManufacture();