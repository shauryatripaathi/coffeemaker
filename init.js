let container = document.querySelector("#container");
let milkBtn = document.getElementById("milkBtn");
let waterBtn = document.getElementById("waterBtn");
let infoBox = document.getElementById("infoBox");
let refillBtn = document.createElement("button")

class CoffeeMaker {
    constructor(waterTank, milkTank, coffeePod) {
        this.waterTank = waterTank;
        this.milkTank = milkTank;
        this.coffeePod = coffeePod;
    }
    refillMilk() {
        if (milkTank.milkQuantity == -250) {
            milkTank.milkQuantity = 0;
            coffeePod.coffeePodQuantity = coffeePod.coffeePodQuantity + 1
        }
    }
    refillWater() {
        if (waterTank.waterQuantity == -250) {
            waterTank.waterQuantity = 0;
            coffeePod.coffeePodQuantity = coffeePod.coffeePodQuantity + 1;
        }
    }
    refillCoffeePod() {
        
    }
    coffeeType() {
           console.log("you selected milk coffee")
    }
}
class WaterTank {
    constructor(waterQuantity) {
        this.waterQuantity = waterQuantity;
    }
    refill() {
        if (waterTank.waterQuantity == 0) {
            alert("refill water tank")
            let refillButn = document.createElement("button");
            refillButn.id = "refillButn";
            infoBox.appendChild(refillButn);
            console.log(refillButn);
            refillButn.innerHTML = "refill button";
            function handleOnRefillButn() {
                waterTank.waterQuantity = 1000;
                infoBox.innerText = "Water tank refilled 1000ml"
            }
            refillButn.addEventListener("click", handleOnRefillButn)
        }
    }
}

class MilkTank {

    constructor(milkQuantity) {
        this.milkQuantity = milkQuantity;
    }
    refill() {
        if (milkTank.milkQuantity == 0) {
            alert("refill milk tank")
            let refillButn = document.createElement("button");
            refillButn.id = "refillButn";
            infoBox.appendChild(refillButn);
            refillButn.innerHTML = "refill button";
            function handleOnRefillButn() {
                milkTank.milkQuantity = 1000;
                infoBox.innerText = "Milk tank refilled 1000ml"
            }
            refillButn.addEventListener("click", handleOnRefillButn)
        }
    }
}

class CoffeePod {
    constructor(coffeePodQuantity) {
        this.coffeePodQuantity = coffeePodQuantity;
    }
    refill() {
        if (coffeePod.coffeePodQuantity == 1) {
            alert("refill coffee pod");
            let refillButn = document.createElement("button");
            refillButn.id = "refillButn";
            refillButn.innerHTML = "refill button";
            infoBox.appendChild(refillButn);
            function handleOnRefillButn() {
                coffeePod.coffeePodQuantity = 200;
                infoBox.innerText = "Coffee Tank refilled";
            }
            refillButn.addEventListener("click", handleOnRefillButn);
        }
    }
}


let waterTank = new WaterTank(1000);
let milkTank = new MilkTank(1000);
let coffeePod = new CoffeePod(200);
let coffeeMachine = new CoffeeMaker(waterTank, milkTank, coffeePod);
console.log(coffeeMachine);


container.addEventListener("click", handleOnButton);
function handleOnButton(e) {

    if (e.target.id == "waterBtn") {
        waterTank.waterQuantity = waterTank.waterQuantity - 250;
        coffeeMachine.refillWater();
        coffeePod.coffeePodQuantity = coffeePod.coffeePodQuantity - 1;
        infoBox.innerText = `You selected Espresso!!!
    remaining water ${waterTank.waterQuantity}ml
    ${coffeePod.coffeePodQuantity} coffee pods left`;
        waterTank.refill();
        coffeePod.refill();
    }

    else if (e.target.id == "milkBtn") {
        coffeeMachine.coffeeType();
        milkTank.milkQuantity = milkTank.milkQuantity - 250;
        coffeeMachine.refillMilk();
        coffeePod.coffeePodQuantity = coffeePod.coffeePodQuantity - 1;
        infoBox.innerText = `You selected Milk Coffee!!!
    remaining milk ${milkTank.milkQuantity}ml
    ${coffeePod.coffeePodQuantity} coffee pods left`;
        milkTank.refill();
        coffeePod.refill();
    }
}