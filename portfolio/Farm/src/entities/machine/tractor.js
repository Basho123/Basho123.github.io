import Machine from "./machine.js";

export default class Tractor extends Machine {
    constructor(type, licensePlates, inService, isBroken, price) {
        super();
        this.type = type;
        this.licensePlates = licensePlates;
        this.inService = inService;
        this.isBroken = isBroken;
        this.price = price;
        //USED TO CALCULATE PRODUCTION OF RESOURCES
        this.economyFactor = 500;
        economy.workFactor += this.economyFactor;

        let newDivItem = document.createElement('DIV');
        newDivItem.innerHTML += `
            <div class = "divCardMain">
                <div class = "divCard1">
                    <h3>NEW TRACTOR BOUGHT</h3>           
                    <ul>  
                        <li>MODEL: ${this.type}</li>
                        <li>LICENSE PLATES: ${this.licensePlates}</li>                                  
                        <li>TRACTOR PRICE: ${this.price}$</li>                                  
                    </ul>
                </div>
                <div class = "divCard2">
                    <img src="images/tractor.png" height="100%">
                </div>
            </div>
            `
        page.log.insertBefore(newDivItem, page.log.childNodes[0])

        //RANDOM CHANCE FOR EVERY CYCLE FOR THE VEHICLE TO BREAK DOWN WHEN HEALTH DROPS SLOWLY
        setInterval(() => {
            if (this.inService === true && !this.isBroken) {
                let randomBreakdownChance = random(100)
                if (this.health < randomBreakdownChance) {
                    this.isBroken = true;

                    let newDivItem = document.createElement('DIV');
                    newDivItem.innerHTML += ` <h3 class = "divCardMain" style = color:red; background-color: blue;" >VEHICLE  ${this.type} WITH LICENCE PLATES ${this.licensePlates} HAS BROKEN DOWN!</h3>`
                    page.log.insertBefore(newDivItem, page.log.childNodes[0])
                    return;
                }
                else null;

                this.health -= 1;
            }
            else null;
        }, 10000)
    }
    static generate = (interval) => {
        setInterval(() => {
            let type = `IMT 560 TRACTOR`
            let licensePlates = `SK-${random(10)}${random(10)}${random(10)}${random(10)}-${random(10)}${random(10)}`
            let price = 10000;

            //ON EVERY 1 TRACTOR DRIVER, 1 TRACTOR CAN BE BOUGHT
            if (machines.tractor.length < workers.tractorDriver && economy.totalBudget > price) {
                economy.totalBudget -= price;
                economy.farmExpenses -= price;
                machines.tractor.push(new Tractor(type, licensePlates, true, false, price));
            }
        }, interval)
    }
}