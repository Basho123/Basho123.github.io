// import GlobalCounter from '../../TreasureServices/GlobalCounter.js';

export default class BaseEntity {
    constructor(xPosition, yPosition, size, type) {
      this.pos = createVector(xPosition, yPosition);
      this.vel = createVector();
      this.acc = createVector();
  
      this.id = random(999999999);
      this.type = type;
      this.size = size;
      this.collisionSize = this.size * 1.3;
  
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