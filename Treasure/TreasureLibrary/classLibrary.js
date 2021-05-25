// classLibrary.js for treasureGame
//database
//Enums
//Abstract class
class BaseEntity {
  constructor(xPosition, yPosition, type) {
    this.pos = createVector(xPosition, yPosition);
    this.id = random(999999999);
    this.type = type;
  }
  show() {
    throw new Error("Not implemented, implement SHOW in extended object");
  }
}

class Fish extends BaseEntity {
  constructor(xPosition, yPosition, type) {
    super(xPosition, yPosition, type);
  }

  show() {
    push();
    texture(
      this.type == FishType.RED ? FishModel.red :
        this.type == FishType.GREEN ? FishModel.green :
          this.type == FishType.BLUE ? FishModel.blue :
            this.type == FishType.SPECIAL ? SceneryModel.treasureChest :
              this.type == FishType.TOUGH ? SceneryModel.bubble : null);
    noStroke();
    circle(this.pos.x, this.pos.y, 50);
    pop();
  }
}

class Diamond extends BaseEntity {
  constructor(xPosition, yPosition, type) {
    super(xPosition, yPosition, type);
  }

  show() {
    push();
    texture(
      this.type == DiamondType.RED ? SceneryModel.redDiamond :
        this.type == DiamondType.GREEN ? SceneryModel.greenDiamond :
          this.type == DiamondType.BLUE ? SceneryModel.blueDiamond : null);
    noStroke();
    circle(this.pos.x, this.pos.y, 50);
    pop();
  }
}

class Bullet extends BaseEntity {
  constructor(xPosition, yPosition, xSpeed, ySpeed) {
    super(xPosition, yPosition);

    this.vel = createVector(xSpeed, ySpeed);
    this.type = "null";
    this.distanceTraveled = 0;

  }

  show() {
    push();
    fill(255);
    circle(this.pos.x, this.pos.y, 25)
    pop();

    this.pos.add(this.vel);
    this.distanceTraveled += this.vel.x + this.vel.y;
  }
}