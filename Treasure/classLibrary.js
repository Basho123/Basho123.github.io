// classLibrary.js for treasureGame
//database
class GlobalObjects {
    static fish = [];
    static bullet = [];
  }
  
  class GlobalCounter {
    static currentBulletProperty = "";
    static singleHitKills = 0;
    static totalKills = 0;
    static movesRemaining = 10;
    static currentPoints = 0;
    static totalPoints = 0;
    static level = +localStorage.getItem('treasureGameLevel');
    static levelIsFinished = false;
    static fireOnceInDraw = false;
    static stars = 0;  
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
  
      if (this.type != FishType.TOUGH) {
        fill(
          this.type == FishType.RED || this.type == FishType.SPECIAL ? 255 : 0,
          this.type == FishType.GREEN || this.type == FishType.SPECIAL ? 255 : 0,
          this.type == FishType.BLUE ? 255 : 0);
        circle(this.pos.x, this.pos.y, 50);
      }
      else {
        fill(0, 255, 255);
        rect(this.pos.x - 25, this.pos.y - 25, 50, 50)
      }
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