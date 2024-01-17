//Abstract class
export default class Mammal {
    constructor(legs = 4, hands = 0, species = `species not defined`) {
        this.eyes = 2;
        this.legs = legs;
        this.hands = hands;
        this.drinkMilk = true;
        this.species = species;
    }
}