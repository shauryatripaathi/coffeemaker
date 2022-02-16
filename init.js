let milkBtn = document.getElementById("milkBtn");
let waterBtn = document.getElementById("waterBtn");
let infoBox = document.getElementById("infoBox");
let refillBtn = document.createElement("button")

class CoffeeMaker{
    constructor(waterTank,milkTank,coffeePod){
        this.waterTank = waterTank;
        this.milkTank = milkTank;
        this.coffeePod = coffeePod;
    }
    refillMilk(){
        
    }
    refillWater(){
        
    }
    refillCoffeePod(){
        
    }
    coffeeType(){

    }
}
class WaterTank {
    constructor(waterQuantity){
        this.waterQuantity = waterQuantity;
    }
    refill(){

    }
}

class MilkTank {
    constructor(milkQuantity){
        this.milkQuantity = milkQuantity;
    }
    refill(){

    }
}

class CoffeePod {
    constructor(coffeePodQuantity){
        this.coffeePodQuantity = coffeePodQuantity;
    }
    refill(){
        
    }
}
let waterTank = new WaterTank(1000);
let milkTank = new MilkTank(1000);
let coffeePod = new CoffeePod(200);
let coffeeMachine = new CoffeeMaker(waterTank,milkTank,coffeePod);
console.log(coffeeMachine);