    //script.js for title "Farm", index.js

    // ANIMAL CYCLES ARE 12 TIMES SHORTER THAN REAL LIFE, SO HORSE LIVES 30 MONTHS, HEN 10 MONTHS AND SO ON...
    const page = {
        table: document.getElementById(`tableBody`),
        log: document.getElementById(`log`),
        upgradeSleepingHouseButton: document.getElementById(`upgradeSleepingHouse`),
        upgradeStablesButton: document.getElementById(`upgradeStables`),
        upgradeWaterTowerButton: document.getElementById(`upgradeWaterTower`),
        buyMoreSurfaceButton: document.getElementById(`buyMoreSurface`),
        tablePrint() {
            page.table.innerHTML = `
        <tr>
            <td><abbr customTitle ="Current Month">${currentMonth}</abbr></td>
            <td><abbr customTitle ="Surface Area Occupied, measured in hectares. the more area occupied, the less fields for hay and corn.">${globalDwellings.surfaceOccupied}/${globalDwellings.surface} ha</abbr></td>
            <td><abbr customTitle ="Number of tractors: ${machines.tractor.length}">${machines.all}</abbr></td>
            <td><abbr customTitle ="Tractor Driver: ${workers.tractorDriver}\nHay Combers: ${workers.haystackComber}\nAnimal Handlers: ${workers.animalHandler} \nFarmers: ${workers.farmer}\nApprentice: ${workers.apprentice}">${workers.all.length}/${globalDwellings.beds}</abbr></td>
            <td><abbr customTitle ="Chicken: ${poultry.chicken.length}\r\nCows: ${livestock.cows.length} Pigs: ${livestock.pigs.length} Horses: ${livestock.horses.length}">${animals.all}/${globalDwellings.stables}</abbr></td>            
            <td><abbr customTitle ="Milk: ${resources.milk} Meat: ${resources.meat} Eggs: ${resources.eggs}">${Math.floor(resources.milk + resources.eggs + resources.meat)}</abbr></td>
            <td><abbr customTitle ="Corn: ${resources.corn}">${Math.floor(resources.corn)}</abbr></td>
            <td><abbr customTitle ="Hay: ${resources.hay}">${Math.floor(resources.hay)}</abbr></td>
            <td><abbr customTitle ="Water: ${resources.water}/${globalDwellings.waterTowerCapacity}">${resources.water}</abbr></td>
            <td><abbr customTitle ="Economy Work Factor:${economy.workFactor}\n Fertile Lands Coefficient: ${economy.fertileLandsCoefficient()}">${Math.floor(economy.workFactor + economy.fertileLandsCoefficient())}</abbr></td>
            <td><abbr customTitle ="Worker Revenue: ${parseInt(economy.workerRevenue)}$\nSalaries Paid: ${parseInt(economy.salariesPaid)}$\nFarm Expenses: ${Math.floor(economy.farmExpenses)}$">${parseInt(economy.totalBudget)}$</abbr></td>
           
        </tr>
        `
        },

        //FUNCTION FOR RANDOM WHOLE NUMBER, USED A LOT
        random: (number) => {
            return Math.floor(Math.random() * number);
        }
    }
    const { random } = page;

    let time = {
        year: 120000,
        month: 10000,
        week: 2500,
        day: 350,
        currentMonth: `January`,

        counterForMonths: 0,
        monthCounter: () => {
            const months = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"];

            let monthName = months[time.counterForMonths];
            currentMonth = monthName;
            time.counterForMonths++;

            time.counterForMonths === 12 ? time.counterForMonths = 0 : null;

            return currentMonth;
        }
    }
    let { day, week, year, month, currentMonth } = time;
    setInterval(() => { currentMonth = time.monthCounter() }, month)


    //#region PROTOTYPE CLASSES

    class Mammal {
        constructor(legs = 4, hands = 0, species = `species not defined`) {
            this.eyes = 2;
            this.legs = legs;
            this.hands = hands;
            this.drinkMilk = true;
            this.species = species;
        }
    }

    class Bird {
        constructor(age = 1, legs = 2, wings = 2, species = `species not defined`, weight) {
            this.legs = legs;
            this.weight = weight;
            this.age = age;
            this.wings = wings;
            this.laysEggs = true;
            this.hasFeathers = true;
            this.hasBeak = true;
            this.species = species;
        }
    }

    class Machine {
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

    //#endregion

    //#region  MACHINES
    //CLASSES AND THEIR CORRESPONDING FUNCTIONALITIES FUNCTIONS
    class Tractor extends Machine {
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
    //#endregion

    //#region FARM
    class Farm {
        constructor(surfaceArea = 5, stablesCount = 1, sleepingQuarters = 1, waterTowerCapacity = 1000, numberOfWells = 1, waterTowerCount = 1) {
            this.surfaceArea = surfaceArea;
            this.stablesCount = stablesCount;
            this.sleepingQuarters = sleepingQuarters;
            this.waterTowerCapacity = waterTowerCapacity;
            this.waterTowerCount = waterTowerCount;
            this.numberOfWells = numberOfWells;

            this.machines = {
                tractor: [],
                all: 0,
            }

            this.population = {
                all: 0,
                workers: {
                    all: [],
                    tractorDriver: 0,
                    haystackComber: 0,
                    farmer: 0,
                    animalHandler: 0,
                    apprentice: 0,
                },
                tourists: {
                    all: [],
                },
                inspection: {
                    finance: [],
                    veterinary: [],
                    butcher: [],
                }
            }

            this.animals = {
                all: 0,
                livestock: {
                    cows: [],
                    horses: [],
                    pigs: [],
                },
                poultry: {
                    chicken: [],
                    turkey: [],
                }
            }

            this.globalDwellings = {
                beds: 0,
                stables: 0,
                waterTowerCapacity: 1000,
                wells: 0,
                surface: 0,
                surfaceOccupied: 0,
            }


            this.resources = {
                meat: 100,
                milk: 100,
                water: 1000,
                hay: 100,
                corn: 100,
                eggs: 0,
            }

            this.economy = {
                totalBudget: parseInt(Math.random() * 1000) + 100000,
                salariesPaid: 0,
                workerRevenue: 0,
                farmExpenses: 0,
                workFactor: 0,

                //FERTILE LANDS COEFFICIENT MEANS IF MORE LAND IS BUILT, THE LESS THE LANDS ARE FOR CORN OR HAY
                fertileLandsCoefficient: () => {
                    return (this.globalDwellings.surface / this.globalDwellings.surfaceOccupied) / 4
                },
                //THIS FORMULA IS USED TO CALCULATE THE WORK FACTOR FOR A WORKER
                workFactorCalculated: () => {
                    return 1 + (this.economy.workFactor / 100)
                }
            }

            //ONE SLEEPING QUARTER HAS 5 BEDS    
            //ONE STABLE CAN ACCOMODATE 20 ANIMALS    
            this.globalDwellings.beds = this.sleepingQuarters * 5;
            this.globalDwellings.stables = this.stablesCount * 20;

            //INTERVAL IS USED FOR UPDATING THE DATA
            setInterval(() => {
                this.globalDwellings.wells = this.numberOfWells;
                if (this.resources.water < this.globalDwellings.waterTowerCapacity - this.numberOfWells * 10) {
                    this.resources.water += this.numberOfWells * 2
                }

                this.globalDwellings.surface = this.surfaceArea;
                this.globalDwellings.surfaceOccupied = this.stablesCount + this.sleepingQuarters + this.waterTowerCount / 2;
                this.globalDwellings.occupiedSurface = 0;
                this.globalDwellings.beds = this.sleepingQuarters * 5;
                this.globalDwellings.stables = this.stablesCount * 20;
                this.globalDwellings.waterTowerCapacity = this.waterTowerCapacity;

                this.machines.all = this.machines.tractor.length;

                this.animals.all =
                    this.animals.livestock.horses.length +
                    this.animals.livestock.pigs.length +
                    this.animals.livestock.cows.length +
                    Math.floor(this.animals.poultry.chicken.length / 10) +
                    Math.floor(this.animals.poultry.turkey.length / 7)

                this.population.workers.tractorDriver = 0;
                this.population.workers.haystackComber = 0;
                this.population.workers.farmer = 0;
                this.population.workers.animalHandler = 0;
                this.population.workers.apprentice = 0;

                for (let worker of this.population.workers.all) {
                    switch (worker.workingPosition) {
                        case `TRACTOR DRIVER`:
                            this.population.workers.tractorDriver++
                            break;
                        case `HAYSTACK COMBER`:
                            this.population.workers.haystackComber++
                            break;
                        case `FARMER`:
                            this.population.workers.farmer++;
                            break;
                        case `ANIMAL HANDLER`:
                            this.population.workers.animalHandler++;
                            break;
                        case `APPRENTICE`:
                            this.population.workers.apprentice++;
                            break;
                        default:
                            break;
                    }
                }
            }, day)

            //RANDOM WATER SPRING IS FOUND
            setInterval(() => {
                if (random(100) < 5) {
                    farm.numberOfWells++;
                    let newDivItem = document.createElement('DIV');
                    newDivItem.innerHTML += `
                <div class = "divCardMain">
                <div class = "divCard1">
                    <h3>WATER SPRING HAS BEEN FOUND</h3>           
                    <ul>  
                        <li>WATER WELLS ON FARM NOW: ${farm.numberOfWells}</li>          
                    </ul>
                </div>
                <div class = "divCard2">
                    <img src="images/geyser.png" height="100%">
                </div>
                </div>
                `
                    page.log.insertBefore(newDivItem, page.log.childNodes[0])
                };
            }, year)
        }
    }

    //FARM IS CALLED ONLY ONCE
    let farm = new Farm();
    let { machines, population, globalDwellings, animals, resources, economy } = farm;
    let { workers, tourists } = population;
    let { livestock, poultry } = animals;

    console.log(farm);

    //UPGRADE BUTTONS
    page.upgradeSleepingHouseButton.addEventListener(`click`, () => {
        if (globalDwellings.surface - globalDwellings.surfaceOccupied > 1) {
            if (economy.totalBudget >= 10000) {
                farm.sleepingQuarters++;
                economy.totalBudget -= 10000;
                let newDivItem = document.createElement('DIV');
                newDivItem.innerHTML += `
            <div class = "divCardMain">
                <div class = "divCard1">
                    <h3>NEW SLEEPING QUARTERS BUILT</h3>           
                    <ul>  
                        <li>COSTS: 10000$</li>
                        <li>SLEEPING PLACES: +5</li>                                  
                    </ul>
                </div>
                <div class = "divCard2">
                    <img src="images/sleepingQuarters.png" height="100%">
                </div>
            </div>
            `
                page.log.insertBefore(newDivItem, page.log.childNodes[0])

            }
            else {
                let newDivItem = document.createElement('DIV');
                newDivItem.innerHTML += ` <h3 class = "divCardMain">NOT ENOUGH MONEY FOR THIS UPGRADE</h3>`
                page.log.insertBefore(newDivItem, page.log.childNodes[0])
            }
        }
        else {
            let newDivItem = document.createElement('DIV');
            newDivItem.innerHTML += ` <h3 class = "divCardMain">NOT ENOUGH SURFACE AREA ON YOUR FARM</h3>`
            page.log.insertBefore(newDivItem, page.log.childNodes[0])
        }

    })

    page.upgradeStablesButton.addEventListener(`click`, () => {
        if (globalDwellings.surface - globalDwellings.surfaceOccupied > 1) {
            if (economy.totalBudget >= 5000) {
                farm.stablesCount++;
                economy.totalBudget -= 5000;
                let newDivItem = document.createElement('DIV');
                newDivItem.innerHTML += `
        <div class = "divCardMain">
            <div class = "divCard1">
                <h3>NEW STABLES BUILT</h3>           
                <ul>  
                    <li>COSTS: 5000$</li>
                    <li>STABLES CAPACITY: +10</li>                                  
                </ul>
            </div>
            <div class = "divCard2">
                <img src="images/stables.png" height="100%">
            </div>
        </div>
        `
                page.log.insertBefore(newDivItem, page.log.childNodes[0])


            }
            else {
                let newDivItem = document.createElement('DIV');
                newDivItem.innerHTML += ` <h3 class = "divCardMain">NOT ENOUGH MONEY FOR THIS UPGRADE</h3>`
                page.log.insertBefore(newDivItem, page.log.childNodes[0])
            }
        }
        else {
            let newDivItem = document.createElement('DIV');
            newDivItem.innerHTML += ` <h3 class = "divCardMain">NOT ENOUGH SURFACE AREA ON YOUR FARM</h3>`
            page.log.insertBefore(newDivItem, page.log.childNodes[0])
        }
    })

    page.upgradeWaterTowerButton.addEventListener(`click`, () => {
        if (economy.totalBudget >= 5000 && globalDwellings.surface - globalDwellings.surfaceOccupied >= 0.5) {
            farm.waterTowerCapacity += 500;
            farm.waterTowerCount++;
            economy.totalBudget -= 5000;
            let newDivItem = document.createElement('DIV');
            newDivItem.innerHTML += `
        <div class = "divCardMain">
            <div class = "divCard1">
                <h3>WATER TOWER CAPACITY EXTENDED</h3>           
                <ul>  
                    <li>COSTS: 5000$</li>
                    <li>WATER TOWER CAPACITY +500</li>                                  
                </ul>
            </div>
            <div class = "divCard2">
                <img src="images/waterTower.png" height="100%">
            </div>
        </div>
        `
            page.log.insertBefore(newDivItem, page.log.childNodes[0])


        }
        else {
            let newDivItem = document.createElement('DIV');
            newDivItem.innerHTML += ` <h3 class = "divCardMain">NOT ENOUGH MONEY FOR THIS UPGRADE</h3>`
            page.log.insertBefore(newDivItem, page.log.childNodes[0])
        }
    })

    page.buyMoreSurfaceButton.addEventListener(`click`, () => {
        if (economy.totalBudget >= 20000) {
            farm.surfaceArea += 2.5;
            economy.totalBudget -= 25000;
            let newDivItem = document.createElement('DIV');
            newDivItem.innerHTML += `
        <div class = "divCardMain">
            <div class = "divCard1">
                <h3>FARM SURFACE AREA EXTENDED</h3>           
                <ul>  
                    <li>COSTS: 20000$</li>
                    <li>SURFACE AREA +2.5 ACRES</li>                                  
                </ul>
            </div>
            <div class = "divCard2">
                <img src="images/surfaceArea.png" height="100%">
            </div>
        </div>
        `
            page.log.insertBefore(newDivItem, page.log.childNodes[0])


        }
        else {
            let newDivItem = document.createElement('DIV');
            newDivItem.innerHTML += ` <h3 class = "divCardMain">NOT ENOUGH MONEY FOR THIS UPGRADE</h3>`
            page.log.insertBefore(newDivItem, page.log.childNodes[0])
        }
    })
    //#endregion

    //#region HUMAN
    class Human extends Mammal {
        constructor(name = `name not specified`, gender = `gender not specified`, age = `age not specified`) {
            super(2, 2, `Human`)
            this.name = name;
            this.gender = gender;
            this.age = age;
        }
        static randomName = (gender) => {
            if (gender === `male`) {
                let arrayOfMaleNames = [`Trajko`, `Petko`, `Mitko`, `Ratko`, `Zoran`, `Goran`, `Simeon`, `Aleksandar`, `Fenjir`, `Fuat`, `Onur`]
                let arrayOfMaleLastNames = [`Acevski`, `Petkovski`, `Mitkov`, `Ratkovski`, `Zogravski`, `Goranovski`, `Simonovski`, `Spasevski`, `Nikolovski`, `Mehmed`, `Kishov`]

                let randomMaleName = arrayOfMaleNames[random(arrayOfMaleNames.length)]
                let randomMaleLastName = arrayOfMaleLastNames[random(arrayOfMaleLastNames.length)]

                return `${randomMaleName.toUpperCase()} ${randomMaleLastName.toUpperCase()}`
            }
            else if (gender === `female`) {

                let arrayOfFemaleNames = [`Martina`, `Sara`, `Elena`, `Aleksandra`, `Ana`, `Renata`, `Bojana`, `Kristina`, `Sonja`, `Ivana`, `Tina`]
                let arrayOfFemaleLastNames = [`Martinovska`, `Spasevska`, `Ilajzovska`, `Skenderovska`, `Nikolovska`, `Ristevska`, `Ugrinovska`, `Kralevic`, `Markovska`, `Vrvenovska`, `Manojlovska`]

                let randomFemaleName = arrayOfFemaleNames[random(arrayOfFemaleNames.length)]
                let randomFemaleLastNames = arrayOfFemaleLastNames[random(arrayOfFemaleLastNames.length)]

                return `${randomFemaleName.toUpperCase()} ${randomFemaleLastNames.toUpperCase()}`;
            }
            else return;
        }

    }
    class Worker extends Human {
        constructor(name, gender, age, workingPosition = `apprentice`, yearsOfService = 0, salary = 0, salaryBonus = 0, baseSalary = 0) {
            super(name, gender, age)
            this.isWorker = true;
            this.workingPosition = workingPosition.toLocaleUpperCase();
            this.yearsOfService = yearsOfService;
            this.baseSalary = baseSalary;
            this.salary = salary;
            this.salaryBonus = salaryBonus;
            this.works = true;

            switch (this.workingPosition) {
                case `FARMER`:
                    economy.workFactor += 5;
                    break;
                case `APPRENTICE`:
                    economy.workFactor += 3;
                    break;
                default:
                    break;
            }


            if (this.workingPosition === `TRACTOR DRIVER`
                || this.workingPosition === `HAYSTACK COMBER`
                || this.workingPosition === `FARMER`
                || this.workingPosition === `ANIMAL HANDLER`
                || this.workingPosition === `APPRENTICE`
            ) {
                console.log(this.gender);
                Worker.addRemoveWorkerPositions(this.workingPosition, '++');
                let newDivItem = document.createElement('DIV');
                newDivItem.innerHTML = `
                <div class = "divCardMain">
                    <div class = "divCard1">
                        <h3>NEW WORKER HIRED</h3>
                        <ul>
                            <li>FARM WORKER NUMBER: ${workers.all.length}</li>
                            <li>NAME: ${this.name}</li>
                            <li>AGE: ${this, age}</li>
                            <li>GENDER: ${this.gender}</li>
                            <li>WORKING POSITION: ${this.workingPosition}</li>
                            <li>YEARS OF SERVICE: ${this.yearsOfService}</li>
                            <li>BASE SALARY: ${this.baseSalary}$</li>
                            <li>BONUSES: ${this.salaryBonus}$</li>
                        </ul>
                    </div>
                    <div class = "divCard2">
                    <img src="images/${this.gender}${(Math.ceil(Math.random() * 4))}.jpg" height="100%">
                    </div>
                </div>
                    `
                page.log.insertBefore(newDivItem, page.log.childNodes[0])

            }
            else {
                console.log(`SERVICE IS NOT REQUIRED`)
            }

            //SALARY, REVENUE, AGE AND YEARS OF SERVICE ARE UPDATED HERE
            setInterval(() => {
                if (this.works == true) {
                    if (this.yearsOfService < 10) {
                        this.salaryBonus = parseInt((this.baseSalary * (this.yearsOfService / 10) * 50) / 150)
                    }
                    else if (this.yearsOfService > 10) {
                        this.salaryBonus = parseInt((this.baseSalary * (this.yearsOfService / 10) * 25) / 150)
                    }
                    this.salary = (this.baseSalary + this.salaryBonus)

                    //IF THERE IS NO FOOD OR WATER WORKER LEAVES WORK
                    if (resources.eggs < 1) {
                        if (resources.milk < 1) {
                            resources.meat--;
                            if (resources.meat < 1) {
                                this.works = false;
                                workers.all.splice(this, 1);
                                let newDivItem = document.createElement('DIV');
                                newDivItem.innerHTML += `<h3 class ="dropDown" style = "font-size: 25px;color:red; background-color: black;">${this.name} has left the farm because there was no food!</h3>`
                                page.log.insertBefore(newDivItem, page.log.childNodes[0])
                            }
                            else null;
                        }
                        else {
                            resources.milk--;
                        }
                    }
                    else resources.eggs--;


                    if (resources.water > 1) {
                        resources.water--;
                    }

                    else {
                        this.works = false;
                        workers.all.splice(this, 1);
                        let newDivItem = document.createElement('DIV');
                        newDivItem.innerHTML += `<h3 class ="dropDown" style = "font-size: 25px;color:red; background-color: black;">${this.name} has left the farm because there was no water!</h3>`
                        page.log.insertBefore(newDivItem, page.log.childNodes[0])
                    }


                    economy.totalBudget -= this.baseSalary * 1.1;
                    economy.salariesPaid -= this.baseSalary * 1.1;

                    economy.totalBudget += (this.salary * 1.3);
                    economy.workerRevenue += (this.salary * 1.3);

                    this.age++;
                    this.yearsOfService++;

                    switch (this.workingPosition) {
                        case `TRACTOR DRIVER`:
                            null;
                            break;
                        case `HAYSTACK COMBER`:
                            resources.hay += parseInt((this.yearsOfService / 2) * 10 * economy.workFactorCalculated()) * economy.fertileLandsCoefficient();
                            break;
                        case `FARMER`:
                            resources.hay += parseInt((this.yearsOfService / 2) * 5 * economy.workFactorCalculated()) * economy.fertileLandsCoefficient();
                            resources.water += 1;
                            resources.corn += parseInt((this.yearsOfService / 2) * 10 * economy.workFactorCalculated()) * economy.fertileLandsCoefficient();
                            break;
                        case `ANIMAL HANDLER`:
                            null;
                            break;
                        case `APPRENTICE`:
                            resources.hay += parseInt((this.yearsOfService / 2) * 2 * economy.workFactorCalculated()) * economy.fertileLandsCoefficient();
                            resources.corn += parseInt((this.yearsOfService / 2) * 4 * economy.workFactorCalculated()) * economy.fertileLandsCoefficient();
                            resources.water += 1;
                            break;
                        default:
                            break;
                    }
                }
                else null;

            }, month)
        }

        static generate = (interval) => {
            setInterval(() => {
                if (workers.all.length < globalDwellings.beds) {
                    let arrayOfJobs = [`TRACTOR DRIVER`, `HAYSTACK COMBER`, `FARMER`, `ANIMAL HANDLER`, `APPRENTICE`]

                    let gender = random(2);
                    let age = random(50) + 15
                    let yearsOfService = 0;
                    let job = arrayOfJobs[random(arrayOfJobs.length)]

                    let workerSalary = 0;
                    let workerSalaryBonus = 0;
                    let workerSalaryBase = 0;

                    switch (job) {
                        case `OVERSEER`:
                            workerSalaryBase = 1200;
                            break;
                        case `TRACTOR DRIVER`:
                            workerSalaryBase = 500;
                            break;
                        case `HAYSTACK COMBER`:
                            workerSalaryBase = 230;
                            break;
                        case `FARMER`:
                            workerSalaryBase = 250;
                            break;
                        case `ANIMAL HANDLER`:
                            workerSalaryBase = 400;
                            break;
                        case `APPRENTICE`:
                            workerSalaryBase = 30;
                            break;

                        default:
                            break;
                    }

                    //IF WORKER HAS MORE YEARS OF SERVICE, HIS SALARY IS HIGHER
                    yearsOfService < 10
                        ? workerSalaryBonus = parseInt((workerSalaryBase * yearsOfService * 50) / 150)
                        : workerSalaryBonus = parseInt((workerSalaryBase * yearsOfService * 25) / 150)


                    if (gender === 1) {//MALE
                        workers.all.push(new Worker(`${Human.randomName(`male`)}`, `Male`, age, job, yearsOfService, workerSalary, workerSalaryBonus, workerSalaryBase))
                    }
                    else if (gender === 0) {//FEMALE
                        workers.all.push(new Worker(`${Human.randomName(`female`)}`, `Female`, age, job, yearsOfService, workerSalary, workerSalaryBonus, workerSalaryBase));
                    }
                }
                else null;
            }, interval)
        }
        static addRemoveWorkerPositions(parameter, operator) {
            if (operator === `--`) {
                switch (parameter) {
                    case `TRACTOR DRIVER`:
                        workers.tractorDriver--
                        break;
                    case `HAYSTACK COMBER`:
                        workers.haystackComber--
                        break;
                    case `FARMER`:
                        workers.farmer--;
                        break;
                    case `ANIMAL HANDLER`:
                        workers.animalHandler--;
                        break;
                    case `APPRENTICE`:
                        workers.apprentice--;
                        break;
                    default:
                        break;
                }
            }
            else if (operator === `++`) {
                switch (parameter) {
                    case `TRACTOR DRIVER`:
                        workers.tractorDriver++
                        break;
                    case `HAYSTACK COMBER`:
                        workers.haystackComber++
                        break;
                    case `FARMER`:
                        workers.farmer++;
                        break;
                    case `ANIMAL HANDLER`:
                        workers.animalHandler++;
                        break;
                    case `APPRENTICE`:
                        workers.apprentice++;
                        break;
                    default:
                        break;
                }
            }
            else console.warn(`please type '++' or '--' in the operator fields`);
        }
    }
    class Tourist extends Human {
        constructor(name, gender, age, reason = `sight seeing`) {
            super(name, gender, age)
            this.reason = reason.toUpperCase();
            this.touristTimeSpent = 0;
            this.touristBudget = random(5000);
            this.isOnFarm = true;
            this.touristBudgetThatCameWith = this.touristBudget;

            //TOURIST ACTIVITIES
            if (this.reason === `SIGHT SEEING`
                || (this.reason === `HORSE RIDING`)
                || (this.reason === `FOOD SHOPPING`)
            ) {
                let newDivItem = document.createElement('DIV');
                newDivItem.innerHTML += `           
            <div class = "divCardMain">
                <div class = "divCard1">
                    <h3>NEW TOURIST VISIT LOGGED</h3>           
                    <ul>                
                        <li>NAME: ${this.name}</li>
                        <li>AGE: ${this.age}</li>
                        <li>GENDER: ${this.gender}</li>               
                        <li>REASON OF VISIT: ${this.reason}</li>
                    </ul>
                </div>
                <div class = "divCard2">
                    <img src="images/${this.gender}${(Math.ceil(Math.random() * 4))}.jpg" height="100%">
                </div>
            </div>
            `
                page.log.insertBefore(newDivItem, page.log.childNodes[0])

            }
            else {
                page.log.innerHTML += `TOURIST ${this.name} VISITED THE FARM FOR ${this.reason}, BUT FOUND NOTHING OF INTEREST`
            }


            //TOURIST STAYS TO SPEND ALL MONEY, OR LEAVES WHEN LONG TIME PASSES EVEN IF THE TOURIST STILL HAS MONEY
            setInterval(() => {
                if (this.isOnFarm === true) {
                    this.touristTimeSpent++;
                    if (this.touristBudget < 100) {
                        let newDivItem = document.createElement('DIV');
                        newDivItem.innerHTML += `<p class ="dropDown" style = "font-size: 20px;color:yellow; background-color: blue;">Tourist ${this.name} came for ${this.reason}, spent ${this.touristBudgetThatCameWith - this.touristBudget}$ the tourist came in ${time.currentMonth}</p>`
                        page.log.insertBefore(newDivItem, page.log.childNodes[0])
                        this.isOnFarm = false;
                        tourists.all.splice(this, 1);

                    }
                    else if (this.touristTimeSpent > 10) {
                        let newDivItem = document.createElement('DIV');
                        newDivItem.innerHTML += `<p class ="dropDown" style = "font-size: 20px;color:yellow; background-color: blue;">Tourist ${this.name} came for ${this.reason}, spent ${this.touristBudgetThatCameWith - this.touristBudget}$ and had a great time on your farm. The tourist came in ${time.currentMonth}</p>`
                        page.log.insertBefore(newDivItem, page.log.childNodes[0])
                        this.isOnFarm = false;
                        tourists.all.splice(this, 1);
                    }
                    else {

                        switch (this.reason) {
                            case `SIGHT SEEING`:
                                economy.totalBudget += 100;
                                this.touristBudget -= 100;
                                break;
                            case `HORSE RIDING`:
                                if (livestock.horses.length > 0) {
                                    economy.totalBudget += 500;
                                    this.touristBudget -= 500;
                                }
                                else {
                                    let newDivItem = document.createElement('DIV');
                                    newDivItem.innerHTML += `<p class ="dropDown" style = "font-size: 20px;color:pink; background-color: black;">Tourist ${this.name} came for ${this.reason} and has left the farm because there were no horses</p>`
                                    page.log.insertBefore(newDivItem, page.log.childNodes[0])
                                    this.isOnFarm = false;
                                    tourists.all.splice(this, 1)
                                }
                                break;

                            case `FOOD SHOPPING`:
                                let shopAmmountMilk = random(20);
                                let shopAmmountMeat = random(20);
                                let shopAmmountEggs = random(20);

                                if (resources.meat > shopAmmountMeat) {
                                    resources.meat -= shopAmmountMeat
                                    economy.totalBudget += shopAmmountMeat * 20;
                                    this.touristBudget -= shopAmmountMeat * 20;
                                }
                                if (resources.milk > shopAmmountMilk) {
                                    resources.milk -= shopAmmountMilk
                                    economy.totalBudget += shopAmmountMilk * 20;
                                    this.touristBudget -= shopAmmountMilk * 20;
                                }
                                if (resources.eggs > shopAmmountEggs) {
                                    resources.eggs -= shopAmmountEggs
                                    economy.totalBudget += shopAmmountEggs * 1;
                                    this.touristBudget -= shopAmmountEggs * 1;
                                }
                                else if (resources.milk < shopAmmountMilk && resources.meat < shopAmmountMeat && resources.eggs < shopAmmountEggs) {
                                    tourists.all.splice(this, 1);
                                    this.isOnFarm = false
                                    let newDivItem = document.createElement('DIV');
                                    newDivItem.innerHTML += `<p class ="dropDown" style = "font-size: 20px;color:pink; background-color: pink;">Tourist ${this.name} came for ${this.reason} and has left the farm because there was nothing to shop</p>`
                                    page.log.insertBefore(newDivItem, page.log.childNodes[0])
                                }
                                else null;
                                break;
                            default:
                                break;
                        }
                    }
                }
                else null;
            }, month)
        }

        static generate = (interval) => {
            setInterval(() => {
                let randomNumberWithDependancy = Math.floor(Math.random() * 1000 / (((resources.meat + resources.milk + livestock.horses.length) + 2000) / 1000))

                if (randomNumberWithDependancy < 100) {
                    let arrayOfActivities = [`SIGHT SEEING`, `HORSE RIDING`, `FOOD SHOPPING`]
                    let gender = random(2);
                    let age = random(50) + 15;

                    let activity = arrayOfActivities[random(arrayOfActivities.length)]

                    if (gender === 1) {//MALE
                        tourists.all.push(new Tourist(`${Human.randomName(`male`)}`, `Male`, age, activity))
                    }
                    else if (gender === 0) {//FEMALE
                        tourists.all.push(new Tourist(`${Human.randomName(`female`)}`, `Female`, age, activity));
                    }
                }
            }, interval)
        }


    }
    class Inspector extends Human {
        constructor(name) {
            super();
            this.name = name;
            this.hasFinished = false;
            this.fines = 0;

            //TRUDOVA INSPEKCIJA :))))

            if (this.hasFinished === false) {
                let newDivItem = document.createElement('DIV')
                newDivItem.innerHTML += `<p class ="dropDown" style = "font-size: 20px;color:red; background-color: black;">An inspection is conducting on the farm...</p>`
                page.log.insertBefore(newDivItem, page.log.childNodes[0])

                setTimeout(() => {

                    for (let worker of workers.all) {
                        let newDivItem = document.createElement('DIV');
                        if (worker.age < 18) {
                            newDivItem.innerHTML += `<p class ="dropDown" style = "font-size: 20px;color:cyan; background-color: black;">worker ${worker.name} was sent home because of young age</p>`
                            page.log.insertBefore(newDivItem, page.log.childNodes[0])

                            Worker.addRemoveWorkerPositions(worker.workingPosition, '--');
                            worker.works = false;
                            workers.all.splice(worker, 1)
                            this.fines++;
                            continue;
                        }
                        else if (worker.age > 70) {
                            newDivItem.innerHTML += `<p class ="dropDown" style = "font-size: 20px;color:yellow; background-color: black;">worker ${worker.name} was retired due to old age</p>`
                            page.log.insertBefore(newDivItem, page.log.childNodes[0])

                            Worker.addRemoveWorkerPositions(worker.workingPosition, '--');
                            worker.works = false;
                            workers.all.splice(worker, 1)
                            this.fines++;
                            continue;
                        }
                        else if (worker.yearsOfService > 20) {
                            newDivItem.innerHTML += `<p class ="dropDown" style = "font-size: 20px;color:yellow; background-color: cyan;">worker ${worker.name} was retired and was granted bonus money</p>`
                            page.log.insertBefore(newDivItem, page.log.childNodes[0])
                            economy.totalBudget -= 1000;

                            Worker.addRemoveWorkerPositions(worker.workingPosition, '--');
                            worker.works = false;
                            workers.all.splice(worker, 1)
                            continue;
                        }
                    }
                    if (this.fines === 0) {
                        newDivItem.innerHTML += `<p class ="dropDown" style = "font-size: 20px;color:green; background-color: yellow;">Everythings seems to be in order</p>`
                        page.log.insertBefore(newDivItem, page.log.childNodes[0])
                    }
                    else {
                        newDivItem.innerHTML += `<p class ="dropDown" style = "font-size: 20px;color:yellow; background-color: red;">Some irregularities were found on your farm</p>`
                        page.log.insertBefore(newDivItem, page.log.childNodes[0])
                    }
                }, 10000)

                //INSPECTION FINISHED
                setTimeout(() => {
                    if (this.fines !== 0) {
                        economy.totalBudget -= (fines * 500);

                        let newDivItem = document.createElement('DIV');
                        newDivItem.innerHTML += `<p class ="dropDown" style = "font-size: 20px;color:black; background-color: red;">Inspection has finished. You have been charged ${fines * 500}$ for ${fines} found irregularities.</p>`
                        fines = 0;
                        page.log.insertBefore(newDivItem, page.log.childNodes[0])


                    }
                    else {
                        let newDivItem = document.createElement('DIV');
                        newDivItem.innerHTML += `<p class ="dropDown" style = "font-size: 20px;color:yellow; background-color: Green;">Inspection has finished. Everything seems to be in order. Thank you for your cooperation.</p>`
                        page.log.insertBefore(newDivItem, page.log.childNodes[0])
                    }
                    //INSPECTOR LEAVES THE FARM
                    farm.population.inspection.finance.splice(this, 1);

                    this.hasFinished = true;
                    console.log(`inspector leaves`, farm.population.inspection.finance);
                }, 2500)
            }
            else null;
        }

        static generate = (interval) => {
            setInterval(() => {
                let randomNumber = random(100);
                if (randomNumber < 5) {
                    farm.population.inspection.finance.push(new Inspector(Human.randomName(`male`)));
                    console.log(`inspector comes`, farm.population.inspection.finance);
                }
            }, interval)
            //INSPECTOR CHECKS ON RANDOM INTERVALS IF THERE IS SOMEONE ON THE FARM OLDER OR YOUNGER THAN THE PROPOSED AGE, OR IF THE WORKER HAS TO BE SENT TO RETIREMENT
        }
    }
    class Veterinary extends Human {
        constructor(name) {
            super();
            this.name = name;
            this.hasFinished = false;
            this.numberOFsickAnimalsFound = 0;
            this.numberOFsickPoultryFound = 0;
            this.cost = 100;

            if (this.hasFinished === false) {

                economy.totalBudget -= this.cost;

                let newDivItem = document.createElement('DIV');
                newDivItem.innerHTML += `<h3 class ="dropDown" style = "font-size: 20px;color:WHITE; background-color: darkred;">A VETERINARY HAS BEEN HIRED TO CHECK THE ANIMALS, AND COSTED ${this.cost} $</h3>`
                page.log.insertBefore(newDivItem, page.log.childNodes[0])

                for (let cow of livestock.cows) {
                    if (cow.sick) {
                        this.numberOFsickAnimalsFound++;
                        let newDivItem = document.createElement('DIV');
                        newDivItem.innerHTML += `<h3 class ="dropDown" style = "font-size: 20px;color:black; background-color: red;"> A COW HAS BEEN FOUND SICK AND TAKEN CARE OF</h3>`
                        page.log.insertBefore(newDivItem, page.log.childNodes[0])
                        cow.sick = false;
                        continue;
                    }
                    else continue;
                }
                for (let pig of livestock.pigs) {
                    if (pig.sick) {
                        this.numberOFsickAnimalsFound++;
                        let newDivItem = document.createElement('DIV');
                        newDivItem.innerHTML += `<h3 class ="dropDown" style = "font-size: 20px;color:black; background-color: red;"> A PIG HAS BEEN FOUND SICK AND TAKEN CARE OF</h3>`
                        page.log.insertBefore(newDivItem, page.log.childNodes[0])
                        pig.sick = false;
                        continue;
                    }
                    else continue;
                }
                for (let horse of livestock.horses) {
                    if (horse.sick) {
                        this.numberOFsickAnimalsFound++;
                        let newDivItem = document.createElement('DIV');
                        newDivItem.innerHTML += `<h3 class ="dropDown" style = "font-size: 20px;color:black; background-color: red;"> A HORSE HAS BEEN FOUND SICK AND TAKEN CARE OF</h3>`
                        page.log.insertBefore(newDivItem, page.log.childNodes[0])
                        horse.sick = false;
                        continue;
                    }
                    else continue;
                }
                for (let hen of poultry.chicken) {
                    if (hen.sick) {
                        this.numberOFsickPoultryFound++;
                        let newDivItem = document.createElement('DIV');
                        newDivItem.innerHTML += `<h3 class ="dropDown" style = "font-size: 20px;color:black; background-color: red;"> A ${this.gender} HAS BEEN FOUND SICK AND TAKEN CARE OF</h3>`
                        page.log.insertBefore(newDivItem, page.log.childNodes[0])
                        hen.sick = false;
                        continue;
                    }
                    else continue;
                }
                for (let turkey of poultry.turkey) {
                    if (turkey.sick) {
                        this.numberOFsickPoultryFound++;
                        let newDivItem = document.createElement('DIV');
                        newDivItem.innerHTML += `<h3 class ="dropDown" style = "font-size: 20px;color:black; background-color: red;"> A TURKEY HAS BEEN FOUND SICK AND TAKEN CARE OF</h3>`
                        page.log.insertBefore(newDivItem, page.log.childNodes[0])
                        turkey.sick = false;
                        continue;
                    }
                    else continue;
                }

                setTimeout(() => {
                    if (this.numberOFsickAnimalsFound === 0 && this.numberOFsickPoultryFound === 0) {
                        let newDivItem = document.createElement('DIV');
                        newDivItem.innerHTML += `<h3 class ="dropDown" style = "font-size: 20px;color:black; background-color: pink;"> NO SICK ANIMALS WERE FOUND ON THE FARM</h3>`
                        page.log.insertBefore(newDivItem, page.log.childNodes[0])
                    }

                    else if (this.numberOFsickPoultryFound === 0 && this.numberOFsickAnimalsFound != 0) {
                        let newDivItem = document.createElement('DIV');
                        newDivItem.innerHTML += `<h3 class ="dropDown" style = "font-size: 20px;color:white; background-color: darkred;"> ${this.numberOFsickAnimalsFound} SICK ANIMALS WERE FOUND, AND THE VET CHARGED ${this.numberOFsickAnimalsFound * this.cost} $</h3>`
                        economy.totalBudget -= numberOFsickAnimalsFound * this.cost
                        page.log.insertBefore(newDivItem, page.log.childNodes[0])
                    }
                    else {
                        let newDivItem = document.createElement('DIV');
                        newDivItem.innerHTML += `<h3 class ="dropDown" style = "font-size: 20px;color:white; background-color: red;"> ${this.numberOFsickPoultryFound} SICK BIRDS WERE FOUND, AND THE VET CHARGED ${this.numberOFsickPoultryFound * this.cost / 4} $</h3>`
                        economy.totalBudget -= numberOFsickAnimalsFound * this.cost
                        page.log.insertBefore(newDivItem, page.log.childNodes[0])
                    }
                    this.hasFinished = true;
                    farm.population.inspection.veterinary.splice(this, 1);
                }, 10000)
            }

        }
        static generate = (interval) => {
            setInterval(() => {
                farm.population.inspection.veterinary.push(new Veterinary(Human.randomName(`female`)));
            }, interval)
            //INSPECTOR CHECKS ON RANDOM INTERVALS IF THERE IS SOMEONE ON THE FARM OLDER OR YOUNGER THAN THE PROPOSED AGE, OR IF THE WORKER HAS TO BE SENT TO RETIREMENT
        }
    }
    class Butcher extends Human {
        constructor(name) {
            super();
            this.name = name

            this.hasFinished = false;

            if (this.hasFinished === false) {
                economy.totalBudget -= 200;
                let newDivItem = document.createElement('DIV');
                newDivItem.innerHTML += `<h3 class ="dropDown" style = "font-size: 20px;color:black; background-color: red;">A BUTCHER HAS BEEN HIRED TO CHECK THE ANIMALS, AND COSTED 200$</h3>`
                page.log.insertBefore(newDivItem, page.log.childNodes[0])

                for (let cow of livestock.cows) {
                    if ((cow.age > 25 && cow.weight > 100) || cow.weight > 300) {
                        let newDivItem = document.createElement('DIV');
                        newDivItem.innerHTML += `<h3 class ="dropDown" style = "font-size: 20px;color:black; background-color: red;"> A COW HAS BEEN BUTCHERED AND GAVE ${Math.floor(cow.weight / 2)} KG MEAT</h3>`
                        page.log.insertBefore(newDivItem, page.log.childNodes[0])

                        resources.meat += cow.weight / 2
                        cow.age = -1;
                        livestock.cows.splice(cow, 1)
                        continue;
                    }
                    else continue;
                }
                for (let pig of livestock.pigs) {
                    if ((pig.age > 5 && pig.weight > 250) || pig.weight > 500) {
                        let newDivItem = document.createElement('DIV');
                        newDivItem.innerHTML += `<h3 class ="dropDown" style = "font-size: 20px;color:black; background-color: red;"> A PIG HAS BEEN BUTCHERED AND GAVE ${parseInt(pig.weight / 1.2)} KG MEAT</h3>`
                        page.log.insertBefore(newDivItem, page.log.childNodes[0])

                        resources.meat += pig.weight / 1.2
                        pig.age = -1;
                        livestock.pigs.splice(pig, 1)
                        continue;
                    }
                    else continue;
                }
                for (let horse of livestock.horses) {
                    if (horse.age > 35 && horse.weight > 150) {
                        let newDivItem = document.createElement('DIV');
                        newDivItem.innerHTML += `<h3 class ="dropDown" style = "font-size: 20px;color:black; background-color: red;"> AN OLD HORSE HAS BEEN BUTCHERED AND GAVE ${parseInt(horse.weight / 3)} KG MEAT</h3>`
                        page.log.insertBefore(newDivItem, page.log.childNodes[0])

                        resources.meat += horse.weight / 3
                        horse.age = -1;
                        livestock.horses.splice(horse, 1)
                        continue;
                    }
                    else continue;
                }
                for (let hen of poultry.chicken) {
                    if (hen.age > 2 && hen.weight > 2) {
                        let newDivItem = document.createElement('DIV');
                        newDivItem.innerHTML += `<h3 class ="dropDown" style = "font-size: 20px;color:black; background-color: red;"> ${hen.gender} HAS BEEN BUTCHERED AND GAVE ${parseInt(hen.weight)} KG MEAT</h3>`
                        page.log.insertBefore(newDivItem, page.log.childNodes[0])

                        resources.meat += hen.weight
                        hen.age = -1;
                        poultry.chicken.splice(hen, 1)
                        continue;
                    }
                    else continue;
                }
                for (let turkey of poultry.turkey) {
                    if (turkey.age > 3 && turkey.weight > 3) {
                        let newDivItem = document.createElement('DIV');
                        newDivItem.innerHTML += `<h3 class ="dropDown" style = "font-size: 20px;color:black; background-color: red;"> TURKEY HAS BEEN BUTCHERED AND GAVE ${parseInt(turkey.weight)} KG MEAT</h3>`
                        page.log.insertBefore(newDivItem, page.log.childNodes[0])

                        resources.meat += turkey.weight
                        turkey.age = -1;
                        poultry.turkey.splice(turkey, 1)
                        continue;
                    }
                    else continue;
                }
                farm.population.inspection.butcher.splice(this, 1)
                this.hasFinished = true;

            }

        }

        static generate = (interval) => {
            setInterval(() => {
                farm.population.inspection.butcher.push(new Butcher(Human.randomName(`male`)))
            }, interval)
        }
    }

    //#endregion

    //#region ANIMAL
    class Horse extends Mammal {
        constructor(age, color, weight, price) {
            super(4, 0, `Horse`)
            this.age = age;
            this.color = color;
            this.weight = weight;
            this.price = price;
            this.eats = `Hay`;
            this.sick = false;

            this.color.toUpperCase();

            economy.workFactor += parseInt((this.weight + 300 / this.age + 15) / 30)

            let newDivItem = document.createElement('DIV');
            newDivItem.innerHTML += `
            <div class = "divCardMain">
            <div class = "divCard1">
                <h3>A ${this.color} HORSE HAS BEEN BOUGHT</h3>           
                <ul>  
                    <li>AGE: ${this.age}</li>                   
                    <li>WEIGHT: ${this.weight} KG</li>          
                    <li>HORSE PRICE: ${Math.floor(this.price)} $</li>
                </ul>
            </div>
            <div class = "divCard2">
                <img src="images/${this.color}horse.png" height="100%">
            </div>
        </div>
            `
            page.log.insertBefore(newDivItem, page.log.childNodes[0])


            // SCRIPT FOR THE ANIMAL
            // AGE -1 MEANS THE ANIMAL IS DEAD
            setInterval(() => {
                if (this.age != -1) {

                    this.age++;
                    if (this.age > 45 || this.weight < 100) {
                        livestock.horses.splice(this, 1)
                        //HORSE DIES OF OLD AGE OR OF WEAKNESS
                        let newDivItem = document.createElement('DIV');
                        newDivItem.innerHTML += `<h3 class ="dropDown" style="color: white; background-color:black">A ${this.color} HORSE HAS JUST DIED ON YOUR FARM, AND THE MEAT HAD TO BE THROWN OUT</h3>`
                        page.log.insertBefore(newDivItem, page.log.childNodes[0])

                        this.age = -1;
                        return;
                    }
                    if (resources.hay >= 2 && resources.water >= 2) {
                        this.weight += random(10) + 5
                        resources.hay -= 2;
                        resources.water -= 2;
                    }
                    //ANIMAL LOSES WEIGHT IF NO FOOD IS PRESENT
                    else {
                        this.weight -= random(10) + 10
                    }

                    //RANDOM CHANCE FOR THE ANIMAL TO GET SICK
                    let sicknessRandomNumber = random(100)
                    let terminalSicknessRandomNumber = random(100)

                    if (sicknessRandomNumber < 3) {
                        this.sick = true;
                    }
                    if (this.sick === true) {
                        //IF TERMINAL SICKNESS NUMBER CHECKS ROLL NUMBER WITH THIS NUMBER, THE ANIMAL DIES
                        if (terminalSicknessRandomNumber < 3) {
                            this.age = -1;
                            livestock.horses.splice(this, 1)
                            let newDivItem = document.createElement('DIV');
                            newDivItem.innerHTML += `<h3 class ="dropDown" style = "font-size: 20px;color:black; background-color: red;"> A ${this.color} HORSE HAS DIED FROM SICKNESS</h3>`
                            page.log.insertBefore(newDivItem, page.log.childNodes[0])
                        }
                        else {
                            this.weight -= random(20)
                        }

                    }
                }
                else null;

            }, 10000)
        }

        static generate = (interval) => {
            setInterval(() => {
                if (animals.all < globalDwellings.stables) {
                    let age = random(5) + 1;
                    let weight = random(200) + 200;

                    let price = weight / age * 10

                    let colors = [`BLACK`, `WHITE`, `BROWN`, `ALBINO`]
                    let color = colors[random(3)]

                    //ON EVERY 1 FARMER, 3 HORSES CAN BE BOUGHT
                    if (livestock.horses.length < workers.farmer * 3 && economy.totalBudget > price) {
                        economy.totalBudget -= price;
                        economy.farmExpenses -= price;

                        livestock.horses.push(new Horse(age, color, weight, price));
                    }
                }
            }, interval)
        }
    }
    class Pig extends Mammal {
        //NEARLY SAME AS THE HORSE
        constructor(age = 1, weight = 50, price = 100) {
            super(4, 0, `Pig`)
            this.age = age;
            this.weight = weight;
            this.price = price;
            this.eats = `Hay`;
            this.sick = false;


            let newDivItem = document.createElement('DIV');
            newDivItem.innerHTML += `
            <div class = "divCardMain">
            <div class = "divCard1">
                <h3>A PIG HAS BEEN BOUGHT</h3>           
                <ul>  
                    <li>AGE: ${this.age}</li>
                    <li>WEIGHT: ${this.weight} KG</li>          
                    <li>PIG PRICE: ${Math.floor(this.price)} $</li>
                </ul>
            </div>
            <div class = "divCard2">
                <img src="images/pig.png" height="100%">
            </div>
        </div>
            `
            page.log.insertBefore(newDivItem, page.log.childNodes[0])

            setInterval(() => {
                if (this.age != -1) {
                    this.age++;
                    if (this.age > 25 || this.weight < 20) {
                        livestock.pigs.splice(this, 1)

                        let newDivItem = document.createElement('DIV');
                        newDivItem.innerHTML += `<h3 class ="dropDown" style="color: white; background-color:black">A PIG HAS JUST DIED ON YOUR FARM BECAUSE OF OLD AGE, AND THE MEAT HAD TO BE THROWN OUT</h3>`
                        page.log.insertBefore(newDivItem, page.log.childNodes[0])

                        this.age = -1;
                        return;
                    }
                    if (resources.hay > 0 && resources.water > 0) {
                        this.weight += random(25) + 10
                        resources.hay--;
                        resources.water--;
                    }
                    else {
                        this.weight -= random(40)
                    }

                    let sicknessRandomNumber = random(100);
                    let terminalSicknessRandomNumber = random(100);

                    if (sicknessRandomNumber < 5) {
                        this.sick = true;
                    }
                    if (this.sick === true) {
                        if (terminalSicknessRandomNumber < 5) {
                            this.age = -1;
                            livestock.pigs.splice(this, 1)

                            let newDivItem = document.createElement('DIV');
                            newDivItem.innerHTML += `<h3 class ="dropDown" style = "font-size: 20px;color:black; background-color: red;"> A PIG HAS DIED FROM SICKNESS</h3>`
                            page.log.insertBefore(newDivItem, page.log.childNodes[0])
                        }
                        else {
                            this.weight -= random(20)
                        }

                    }
                }
                else null;

            }, 10000)
        }

        static generate = (interval) => {
            setInterval(() => {
                if (animals.all < globalDwellings.stables) {
                    let age = 1;
                    let weight = random(100) + 100

                    let price = weight / age

                    //ON EVERY 1 ANIMAL HANDLER, 6 PIGS CAN BE BOUGHT
                    if (livestock.pigs.length < workers.animalHandler * 6 && economy.totalBudget > price) {
                        economy.totalBudget -= price;
                        economy.farmExpenses -= price;

                        livestock.pigs.push(new Pig(age, weight, price));
                    }
                }
            }, interval)
        }
    }
    class Cow extends Mammal {
        //NEARLY SAME AS HORSE
        constructor(age, milkAmount, weight, price) {
            super(4, 0, `Cow`)
            this.age = age;
            this.milkAmount = milkAmount;
            this.weight = weight;
            this.price = price;
            this.eats = `Hay`;
            this.sick = false;


            let newDivItem = document.createElement('DIV');
            newDivItem.innerHTML += `
            <div class = "divCardMain">
            <div class = "divCard1">
                <h3>A COW HAS BEEN BOUGHT</h3>           
                <ul>  
                    <li>AGE: ${this.age}</li>
                    <li>WEIGHT: ${this.weight} KG</li>               
                    <li>MILK PER MONTH: ${this.milkAmount} LITERS</li>
                    <li>COW PRICE: ${Math.floor(this.price)} $</li>
                </ul>
            </div>
            <div class = "divCard2">
                <img src="images/cow.jpg" height="100%">
         </div>
        </div>
            `
            page.log.insertBefore(newDivItem, page.log.childNodes[0])



            setInterval(() => {
                if (this.age != -1) {
                    this.age++;
                    if (this.age > 30 || this.weight < 80) {
                        livestock.cows.splice(this, 1)

                        let newDivItem = document.createElement('DIV');
                        newDivItem.innerHTML += `<h3 class ="dropDown" style="color: white; background-color:black">A COW HAS JUST DIED ON YOUR FARM BECAUSE OF OLD AGE, AND THE MEAT HAD TO BE THROWN OUT</h3>`
                        page.log.insertBefore(newDivItem, page.log.childNodes[0])

                        this.age = -1;
                        return;
                    }
                    if (resources.hay >= 3 && resources.water >= 3) {
                        this.weight += random(10) + 10
                        this.milkAmount++;
                        resources.hay -= 3;
                        resources.water -= 3;
                    }
                    else {
                        this.weight -= random(40)
                        this.milkAmount -= 2;
                    }

                    if (this.age > 15) {
                        if (this.milkAmount > 0) {
                            this.milkAmount--
                        }
                    }

                    let sicknessRandomNumber = random(100);
                    let terminalSicknessRandomNumber = random(100);
                    // console.log(`===========`);
                    // console.log(`sickness random number`, sicknessRandomNumber);
                    // console.log(`terminal sickness random number`, terminalSicknessRandomNumber);
                    // console.log(this.sick);
                    // console.log(`===================`);

                    if (sicknessRandomNumber < 5) {
                        this.sick = true;
                    }
                    if (this.sick === true) {
                        if (terminalSicknessRandomNumber < 5) {
                            this.age = -1;
                            livestock.cows.splice(this, 1)
                            let newDivItem = document.createElement('DIV');
                            newDivItem.innerHTML += `<h3 class ="dropDown" style = "font-size: 20px;color:black; background-color: red;"> A COW HAS DIED FROM SICKNESS</h3>`
                            page.log.insertBefore(newDivItem, page.log.childNodes[0])
                        }
                        else {
                            this.milkAmount /= 2;
                            this.weight -= random(100);
                        }

                    }


                    resources.milk += this.milkAmount;
                }
                else null;

            }, 10000)
        }

        static generate = (interval) => {
            setInterval(() => {
                if (animals.all < globalDwellings.stables) {
                    let age = random(3) + 1;
                    let milkAmount = random(20) + 5;
                    let weight = random(100) + 100;

                    let price = (milkAmount * weight) / age / 10

                    //ON EVERY 1 ANIMAL HANDLER, 3 COWS CAN BE BOUGHT
                    if (livestock.cows.length < workers.animalHandler * 3 && economy.totalBudget > price) {
                        economy.totalBudget -= price;
                        economy.farmExpenses -= price;

                        livestock.cows.push(new Cow(age, milkAmount, weight, price));
                    }
                }
            }, interval)
        }
    }

    class Chicken extends Bird {
        //SAME AS ANY OTHER ANIMAL, EXCEPT IT EATS CORN INSTEAD OF HAY, AND HENS GIVE EGGS, ROOSTERS DONT
        constructor(age, weight, price, gender = `HEN`) {
            super();

            this.age = age;
            this.weight = weight;
            this.price = price;

            this.gender = gender;

            let newDivItem = document.createElement('DIV');
            newDivItem.innerHTML += `
            <div class = "divCardMain">
            <div class = "divCard1">
                <h3>A ${this.gender} HAS BEEN BOUGHT</h3>           
                <ul>  
                    <li>AGE: ${this.age}</li>
                    <li>WEIGHT: ${this.weight} KG</li>          
                    <li>${this.gender} PRICE: ${Math.floor(this.price)} $</li>
                </ul>
            </div>
            <div class = "divCard2">
                <img src="images/${this.gender}.png" height="100%">
            </div>
        </div>
            `
            page.log.insertBefore(newDivItem, page.log.childNodes[0])

            setInterval(() => {
                if (this.age != -1) {
                    this.age++;
                    if (this.age > 12 || this.weight < 1) {
                        poultry.chicken.splice(this, 1)

                        let newDivItem = document.createElement('DIV');
                        newDivItem.innerHTML += `<h3 class ="dropDown" style="color: white; background-color:black">A ${this.gender} HAS JUST DIED ON YOUR FARM BECAUSE OF OLD AGE, AND THE MEAT HAD TO BE THROWN OUT</h3>`
                        page.log.insertBefore(newDivItem, page.log.childNodes[0])

                        this.age = -1;
                        return;
                    }
                    if (resources.corn > 0 && resources.water > 0) {
                        this.weight += random(300) / 100
                        resources.corn--;
                        resources.water--;
                        if (this.gender === `HEN`) {
                            resources.eggs++;
                        }
                    }
                    else {
                        this.weight -= random(200) / 100
                    }

                    let sicknessRandomNumber = random(100);
                    let terminalSicknessRandomNumber = random(100);

                    if (sicknessRandomNumber < 5) {
                        this.sick = true;
                    }
                    if (this.sick === true) {
                        if (terminalSicknessRandomNumber < 5) {
                            this.age = -1;
                            poultry.chicken.splice(this, 1)

                            let newDivItem = document.createElement('DIV');
                            newDivItem.innerHTML += `<h3 class ="dropDown" style = "font-size: 20px;color:black; background-color: red;"> A ${this.gender} HAS DIED FROM SICKNESS</h3>`
                            page.log.insertBefore(newDivItem, page.log.childNodes[0])
                        }
                        else {
                            this.weight -= random(200) / 100
                        }

                    }
                }
                else null;

            }, 10000)
        }

        static generate = (interval) => {
            setInterval(() => {
                if (animals.all < globalDwellings.stables && poultry.chicken.length < workers.farmer * 6) {
                    let age = random(2) + 1;
                    let weight = random(2) + 1;

                    let price = weight / age * 2

                    let genderType = [`HEN`, `ROOSTER`]
                    let gender = genderType[random(2)]

                    //ON EVERY 1 FARMER, 6 CHICKENS CAN BE BOUGHT

                    if (economy.totalBudget > price) {
                        economy.totalBudget -= price;
                        economy.farmExpenses -= price;

                        poultry.chicken.push(new Chicken(age, weight, price, gender));
                    }
                }
            }, interval)
        }
    }
    class Turkey extends Bird {
        //SAME AS ANY OTHER ANIMAL, EXCEPT IT EATS CORN INSTEAD OF HAY
        constructor(age, weight, price) {
            super();

            this.age = age;
            this.weight = weight;
            this.price = price;

            let newDivItem = document.createElement('DIV');
            newDivItem.innerHTML += `
            <div class = "divCardMain">
            <div class = "divCard1">
                <h3>A TURKEY HAS BEEN BOUGHT</h3>           
                <ul>  
                    <li>AGE: ${this.age}</li>
                    <li>WEIGHT: ${this.weight} KG</li>          
                    <li>PRICE: ${Math.floor(this.price)} $</li>
                </ul>
            </div>
            <div class = "divCard2">
                <img src="images/turkey.png" height="100%">
            </div>
        </div>
            `
            page.log.insertBefore(newDivItem, page.log.childNodes[0])

            setInterval(() => {
                if (this.age != -1) {
                    this.age++;
                    if (this.age > 18 || this.weight < 1) {
                        poultry.turkey.splice(this, 1)

                        let newDivItem = document.createElement('DIV');
                        newDivItem.innerHTML += `<h3 class ="dropDown" style="color: white; background-color:black">A TURKEY HAS JUST DIED ON YOUR FARM BECAUSE OF OLD AGE, AND THE MEAT HAD TO BE THROWN OUT</h3>`
                        page.log.insertBefore(newDivItem, page.log.childNodes[0])

                        this.age = -1;
                        return;
                    }
                    if (resources.corn > 0 && resources.water > 0) {
                        this.weight += random(700) / 100
                        resources.corn--;
                        resources.water--;
                    }
                    else {
                        this.weight -= random(300) / 100
                    }

                    let sicknessRandomNumber = random(100);
                    let terminalSicknessRandomNumber = random(100);

                    if (sicknessRandomNumber < 5) {
                        this.sick = true;
                    }
                    if (this.sick === true) {
                        if (terminalSicknessRandomNumber < 5) {
                            this.age = -1;
                            poultry.turkey.splice(this, 1)

                            let newDivItem = document.createElement('DIV');
                            newDivItem.innerHTML += `<h3 class ="dropDown" style = "font-size: 20px;color:black; background-color: red;"> A TURKEY HAS DIED FROM SICKNESS</h3>`
                            page.log.insertBefore(newDivItem, page.log.childNodes[0])
                        }
                        else {
                            this.weight -= random(200) / 100
                        }

                    }
                }
                else null;

            }, 10000)
        }
        static generate = (interval) => {
            setInterval(() => {
                if (animals.all < globalDwellings.stables && poultry.turkey.length < workers.farmer * 3) {
                    let age = random(2) + 1;
                    let weight = random(2) + 1;

                    let price = weight / age * 2


                    //ON EVERY 1 FARMER, 3 TURKEYS CAN BE BOUGHT

                    if (economy.totalBudget > price) {
                        economy.totalBudget -= price;
                        economy.farmExpenses -= price;

                        poultry.turkey.push(new Turkey(age, weight, price));
                    }
                }
            }, interval)
        }
    }

    //#endregion


    page.tablePrint();
    setInterval(() => {
        page.tablePrint();
    }, 1000)

    Cow.generate(month * 2);
    Horse.generate(month * 3);
    Pig.generate(month);

    Chicken.generate(week);
    Turkey.generate(week * 2);

    Tractor.generate(month);

    Tourist.generate(month);
    Worker.generate(week);

    Inspector.generate(month);
    Veterinary.generate(year)
    Butcher.generate(year / 2);