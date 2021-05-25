// classLibrary.js for treasureGame
//database
//Enums
//Abstract class
class BaseEntity {
  constructor(xPosition, yPosition, size, type) {
    this.pos = createVector(xPosition, yPosition);
    this.id = random(999999999);
    this.type = type;
    this.size = size;

  }
  show() {
    throw new Error("Not implemented, implement SHOW in extended object");
  }
}

class Fish extends BaseEntity {
  constructor(xPosition, yPosition, size, type) {
    super(xPosition, yPosition, size, type);
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
    circle(this.pos.x, this.pos.y, this.size);
    pop();
  }
}

class Chest extends BaseEntity {
  constructor(xPosition, yPosition, size) {
    super(xPosition, yPosition, size);
    this.type = Type.SPECIAL;
  }

  show() {
    push();
    texture(SceneryModel.treasureChest);
    noStroke();
    circle(this.pos.x, this.pos.y, this.size);
    pop();
  }
}

class Diamond extends BaseEntity {
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
    circle(this.pos.x, this.pos.y, this.size);
    pop();
  }
}

class Bubble extends BaseEntity {
  constructor(xPosition, yPosition, size) {
    super(xPosition, yPosition, size);
    this.type = Type.TOUGH;

  }

  show() {
    push();
    texture(SceneryModel.bubble);
    noStroke();
    circle(this.pos.x, this.pos.y, this.size);
    pop();
  }
};

class CrystalSkull extends BaseEntity {
  constructor(xPosition, yPosition, size) {
    super(xPosition, yPosition, size);
    this.type = Type.SKULL;
  }
  show() {
    push();
    texture(SceneryModel.crystalSkull);
    noStroke();
    circle(this.pos.x, this.pos.y, this.size);
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