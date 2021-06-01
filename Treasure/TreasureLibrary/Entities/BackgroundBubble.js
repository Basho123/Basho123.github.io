import Bubble from './Bubble.js';
import SceneryModel from '../PreloadModels/SceneryModel.js';


export default class BackgroundBubble extends Bubble {

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
    };

    addGravity() {
      this.vel.limit(50);
      this.pos.add(this.vel);
      this.vel.add(this.acc);
      this.acc.add(0, -0.00981);
    };

    addBuoyency() {
      this.vel.limit(this.size / 15);
      this.pos.add(this.vel);
      this.vel.add(this.acc);
      this.acc.add(0, -0.000981);
    };
  };