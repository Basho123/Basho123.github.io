import BaseEntity from './BaseEntity.js';
import FishModel from '../PreloadModels/FishModel.js';
import FishType from '../../TreasureEnums/Type/FishType.js';



export default class Fish extends BaseEntity {
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