import GlobalCounter from '../../TreasureServices/GlobalCounter.js';

import SceneryModel from '../PreloadModels/SceneryModel.js';
import Type from '../../TreasureEnums/Type/Type.js';
import BaseEntity from './BaseEntity.js';




export default class Bubble extends BaseEntity {
    constructor(xPosition, yPosition, size) {
      super(xPosition, yPosition, size);
      this.type = Type.TOUGH;
    };

    show() {
      push();
      texture(SceneryModel.bubble);
      noStroke();
      circle(this.pos.x + (sin((frameCount / this.sinusMovement)) * 2), this.pos.y, this.size);
      pop();
    };
  };
  