export default class Type {
    static RED = 0;
    static GREEN = 1;
    static BLUE = 2;
    static SPECIAL = 3;
    static TOUGH = 4;
    static SKULL = 5;

    static getRandom() {
        let randomNumber = Math.floor(random(0, 3));
        switch (randomNumber) {
            case 0:
                return this.RED;
            case 1:
                return this.GREEN;
            case 2:
                return this.BLUE;
            default:
                break;
        }
    }    
}