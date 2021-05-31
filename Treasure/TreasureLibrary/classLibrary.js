// classLibrary.js for treasureGame


//Abstract class
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

class Fish extends BaseEntity {
  constructor(xPosition, yPosition, size, type) {
    super(xPosition, yPosition, size, type);
  }

  show() {
    push();
    texture(
      this.type == FishType.RED ? FishModel.red :
        this.type == FishType.GREEN ? FishModel.green :
          this.type == FishType.BLUE ? FishModel.blue : null);
    noStroke();
    circle(
      this.pos.x + (sin((frameCount / this.sinusMovement)) * 2),
      this.pos.y + (sin((frameCount / this.sinusMovement)) * 1),
      this.size);
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
    circle(this.pos.x + (sin((frameCount / this.sinusMovement)) * 2), this.pos.y, this.size);
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
    circle(this.pos.x + (sin((frameCount / this.sinusMovement)) * 2), this.pos.y, this.size);
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
    circle(this.pos.x + (sin((frameCount / this.sinusMovement)) * 2), this.pos.y, this.size);
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

    this.collisionSize = GlobalCounter.entitySize/2;
    this.vel = createVector(xSpeed, ySpeed);
    this.type = "null";
    this.distanceTraveled = 0;

  }

  show() {
    push();
    fill(255);
    circle(this.pos.x, this.pos.y, GlobalCounter.entitySize/2)
    pop();

    this.pos.add(this.vel);
    this.distanceTraveled += this.vel.x + this.vel.y;
  }
}

class SpawnPoint {
  constructor(xPosition, yPosition, id) {
    this.pos = createVector(xPosition, yPosition);
    this.Id = id;
  }
}

class BackgroundBubble extends Bubble {

  constructor(xPosition, yPosition, size) {
    super(xPosition, yPosition, size)
    this.collisionIsSet = false;
  }
  show() {
    push();
    texture(SceneryModel.bubble);
    noStroke();
    circle(this.pos.x + (sin((frameCount / this.sinusMovement)) * this.size), this.pos.y, this.size);
    pop();
  }

  addGravity() {
    this.vel.limit(50);
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.acc.add(0, -0.00981);
  }


  addBuoyency() {
    this.vel.limit(this.size / 15);
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.acc.add(0, -0.000981);
  }
}