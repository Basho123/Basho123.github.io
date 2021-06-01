import BaseEntity from './BaseEntity.js';
import Type from '../../TreasureEnums/Type/Type.js';
import SceneryModel from '../PreloadModels/SceneryModel.js';

export default class Chest extends BaseEntity {
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