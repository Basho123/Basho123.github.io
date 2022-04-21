export default class Machine {
    constructor(wheels = 4, fuel = `diesel`, color = `red`, type = `GENERIC MACHINE`, inService = true, licensePlates = `TEST DRIVE`, health = 100, isBroken = false, economyFactor = 0) {
        this.wheels = wheels;
        this.fuel = fuel;
        this.color = color;
        this.type = type;
        this.licensePlates = licensePlates;
        this.inService = inService;
        this.health = health;
        this.isBroken = isBroken;
        this.economyFactor = economyFactor;

        //TECHNICAL REGISTRATION CHECK FOR ANY MACHINE INHERITED
        setInterval(() => {
            if (this.inService === true) {
                let checkPrice = 1000;
                this.health = 100;
                this.isBroken = false;
                economy.totalBudget -= checkPrice;
                let newDivItem = document.createElement('DIV');
                newDivItem.innerHTML += ` <h3 class = "divCardMain" style = "color:black; background-color:yellow">VEHICLE OF ${this.type} WITH LICENCE PLATES ${this.licensePlates} HAS WENT TECHNICAL CHECK AND THE INSURANCE WAS RENEWED, ${checkPrice}$ HAVE BEEN DEDUCTED.</h3>`
                page.log.insertBefore(newDivItem, page.log.childNodes[0])
            }
            else null;

        }, 240000)

        //INTERVAL FOR SERVICE CHECKING IF THE VEHICLE IS BROKEN
        setInterval(() => {
            if (this.isBroken === true) {
                //SET THE ECONOMY WORK FACTOR TO NULL FOR THIS VEHICLE, BECAUSE IT IS SERVICING
                economy.workFactor -= this.economyFactor;

                let newDivItem = document.createElement('DIV');
                newDivItem.innerHTML += `<h3 class = "divCardMain" style="color: white;background-color:black;">VEHICLE OF ${this.type} WITH LICENCE PLATES ${this.licensePlates} IS UNDERGOING SERVICE, PLEASE WAIT...</h3>`
                page.log.insertBefore(newDivItem, page.log.childNodes[0])

                //WHEN SERVICE IS FINISHED
                setTimeout(() => {
                    let servicePrice = Math.floor(10000 / this.health) + this.economyFactor;
                    this.health = 100;
                    this.isBroken = false;
                    economy.workFactor += this.economyFactor;
                    economy.totalBudget -= servicePrice;

                    let newDivItem = document.createElement('DIV');
                    newDivItem.innerHTML += `<h3 class = "divCardMain" style="color: black;background-color:yellow;">VEHICLE ${this.type} WITH LICENCE PLATES ${this.licensePlates} HAS BEEN REPAIRED, ${servicePrice}$ HAVE BEEN DEDUCTED.</h3>`
                    page.log.insertBefore(newDivItem, page.log.childNodes[0])

                    //IF VEHICLE IS NOT BROKEN SO MUCH, SERVICE TIME IS SHORTER
                }, 1200000 / this.health)
            }

            else null;
        }, 20000)
    }
}