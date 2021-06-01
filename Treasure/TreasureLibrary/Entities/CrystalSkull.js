import BaseEntity from './BaseEntity.js';
import Type from '../../TreasureEnums/Type/Type.js';
import SceneryModel from '../PreloadModels/SceneryModel.js';

export default class CrystalSkull extends BaseEntity {
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