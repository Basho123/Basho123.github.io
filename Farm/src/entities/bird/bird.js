export default class Bird {
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