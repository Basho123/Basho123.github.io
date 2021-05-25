//enums.js for treasure

// ENUM CONCEPT FROM C#.
class Type {
    static RED = 0;
    static GREEN = 1;
    static BLUE = 2;
    static SPECIAL = 3;
    static TOUGH = 4;

    static getRandom() {
        let randomNumber = Math.floor(random(0, 3));
        switch (randomNumber) {
            case 0:
                return Type.RED;
            case 1:
                return Type.GREEN;
            case 2:
                return Type.BLUE;
            default:
                break;
        }
    }    
}
class FishType extends Type {
    //EXTENDED ALL ENUMS FROM TYPE
};
class BulletType extends FishType {
    //EXTENDED ALL ENUMS FROM TYPE
};
class DiamondType extends FishType {
    //EXTENDED ALL ENUMS FROM TYPE
};

class Difficulty {
    static EASY = 0;
    static MEDIUM = 1;
    static HARD = 2;
}


