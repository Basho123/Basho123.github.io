import GlobalCounter from '../../TreasureServices/GlobalCounter.js';
import DiamondType from '../../TreasureEnums/Type/DiamondType.js';
import SceneryModel from '../PreloadModels/SceneryModel.js';


class BaseEntity {
    constructor(xPosition, yPosition, size, type) {
        this.pos = createVector(xPosition, yPosition);
        this.vel = createVector();
        this.acc = createVector();

        this.id = random(999999999);
        this.type = type;
        this.size = size;
        this.collisionSize = this.size * GlobalCounter.entityCollisionSize;

        this.collisionIsSet = true;

        this.sinusMovement = random(40) + 20;

        this.isSpawnedItem = false;
        this.color = 0;


    }
    show() {
        push();
        fill(255, 0, 0);
        rectMode(CENTER);
        circle(this.pos.x, this.pos.y, this.collisionSize);
        pop();
    };

    showCollisionBox() {
        push();
        fill(this.color, 255, 0);
        rectMode(CENTER);
        rect(this.pos.x, this.pos.y, this.collisionSize);
        pop();
    }

    addGravity() {

        this.vel.limit(50);
        this.pos.add(this.vel);
        this.vel.add(this.acc);
        this.acc.add(0, 0.00981);
    }
}
export default class Diamond extends BaseEntity {
    constructor(xPosition, yPosition, size, type) {
        super(xPosition, yPosition, size, type);
    }

    show() {
        push();
        texture(
            this.type == DiamondType.RED ? SceneryModel.redDiamond :
                this.type == DiamondType.GREEN ? SceneryModel.greenDiamond :
                    this.type == DiamondType.BLUE ? SceneryModel.blueDiamond : null);
        noStroke();
        circle(this.pos.x + (sin((frameCount / this.sinusMovement)) * 2), this.pos.y, this.size);
        pop();
    }
}