export default class Farm {
    constructor(game, surfaceArea = 5, stablesCount = 1, sleepingQuarters = 1, waterTowerCapacity = 1000, numberOfWells = 1, waterTowerCount = 1) {
        this.surfaceArea = surfaceArea;
        this.stablesCount = stablesCount;
        this.sleepingQuarters = sleepingQuarters;
        this.waterTowerCapacity = waterTowerCapacity;
        this.waterTowerCount = waterTowerCount;
        this.numberOfWells = numberOfWells;
        this.game = game;

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
        }, this.game.time.day)

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
        }, this.game.time.year)
    }
}