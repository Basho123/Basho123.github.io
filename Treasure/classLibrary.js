// classLibrary.js for treasureGame
//database
class GlobalObjects {
  static fish = [];
  static bullet = [];

  static drawTerrain(image) {
    push();
    texture(image);
    noStroke();
    plane(1920, 1080);
    pop();
  }
}

class GlobalCounter {
  static currentBulletProperty = "";

  static singleHitKills = 0;
  static totalKills = 0;

  static moreThan3killsCount = 0;
  static moreThan6killsCount = 0;
  static moreThan9killsCount = 0;

  static redFishKills = 0;
  static blueFishKills = 0;
  static greenFishKills = 0;

  static objectiveIsCompleted = false;

  static movesRemaining = 10;
  static currentPoints = 0;
  static totalPoints = 0;
  static level = +localStorage.getItem('treasureGameLevel');
  static levelIsFinished = false;
  static fireOnceInDraw = false;
  static stars = 0;


  static addKill(fishType) {
    this.totalKills++;

    switch (fishType) {
      case FishType.RED:
        this.redFishKills++;
        break;
      case FishType.GREEN:
        this.greenFishKills++;

        break;
      case FishType.BLUE:
        this.blueFishKills++;
        break;

      default:
        break;
    }
  }

  static multiKillCount() {
    this.singleHitKills++;
    if (this.singleHitKills == 3) this.moreThan3killsCount++;
    if (this.singleHitKills == 6) this.moreThan6killsCount++;
    if (this.singleHitKills == 9) this.moreThan9killsCount++;
  }
}

//Enums
class FishType {
  static RED = "red";
  static GREEN = "green";
  static BLUE = "blue";
  static SPECIAL = "special";
  static TOUGH = "tough";
  static ARRAY = [this.RED, this.GREEN, this.BLUE];
}
class BulletType extends FishType {

  //EXTENDED ALL ENUMS FROM FISH TYPE
}

//Abstract class
class BaseEntity {
  constructor(xPosition, yPosition) {
    this.pos = createVector(xPosition, yPosition);
    this.id = random(999999999);
  }
  show() {
    throw new Error("Not implemented, implement SHOW in extended object");
  }
}

class Fish extends BaseEntity {
  constructor(xPosition, yPosition, type) {
    super(xPosition, yPosition);
    this.pos = createVector(xPosition, yPosition);
    this.type = type;
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

class Bullet extends BaseEntity {
  constructor(xPosition, yPosition, xSpeed, ySpeed) {
    super(xPosition, yPosition);

    this.pos = createVector(xPosition, yPosition);
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