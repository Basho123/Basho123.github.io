
import GlobalCounter from '../../TreasureServices/GlobalCounter.js';
import BaseEntity from './BaseEntity.js';


export default class Bullet extends BaseEntity {
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