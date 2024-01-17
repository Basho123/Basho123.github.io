export default class SpawnPoint {
    constructor(xPosition, yPosition, id) {
      this.pos = createVector(xPosition, yPosition);
      this.Id = id;
    }
  }