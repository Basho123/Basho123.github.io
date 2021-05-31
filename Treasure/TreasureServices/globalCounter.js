const GlobalObjects = {
  item: [],
  bullet: [],
  spawnPoints: [],
  backgroundBubbles: [],

  drawTerrain(image) {
    push();
    texture(image);
    noStroke();
    plane(1920, 1080);
    pop();
  }
}

const GlobalCounter = {
  currentBulletProperty: "",

  resolutionX: 0,
  resolutionY: 0,
  floor: 0,

  entitySize: 0,
  entityCollisionSize: 1.3,

  singleHitKills: 0,
  totalKills: 0,

  splashScreenIsActive: false,

  moreThan3killsCount: 0,
  moreThan6killsCount: 0,
  moreThan9killsCount: 0,

  redFishKills: 0,
  blueFishKills: 0,
  greenFishKills: 0,

  redDiamondsCollected: 0,
  greenDiamondsCollected: 0,
  blueDiamondsCollected: 0,

  totalDiamondsCollected: 0,

  objectiveIsCompleted: false,

  movesRemaining: 10,
  currentPoints: 0,
  totalPoints: 0,

  sessionStarted: sessionStorage.getItem('sessionStarted'),

  level: +localStorage.getItem('treasureGameLevel'),
  maxLevel: +localStorage.getItem('treasureGameMaxLevel'),

  levelIsFinished: false,
  fireOnceInDraw: false,
  stars: 0,

  lastMouseClickedCoordinates: [0, 0],
  lastFrameClicked: 0,

  difficulty: this.level >= 0 && this.level < 5 ? Difficulty.EASY
    : this.level >= 5 && this.level < 10 ? Difficulty.MEDIUM
      : Difficulty.HARD,

  addKill(item) {
    if ((item instanceof Fish)) {
      this.totalKills++;
      switch (item.type) {
        case Type.RED:
          this.redFishKills++;
          break;
        case Type.GREEN:
          this.greenFishKills++;

          break;
        case Type.BLUE:
          this.blueFishKills++;
          break;

        default:
          break;
      }
    }

    if ((item instanceof Diamond)) {
      this.totalDiamondsCollected++;
      switch (item.type) {
        case Type.RED:
          this.redDiamondsCollected++;
          break;
        case Type.GREEN:
          this.greenDiamondsCollected++;

          break;
        case Type.BLUE:
          this.blueDiamondsCollected++;
          break;

        default:
          break;
      }
    }
  },

  addPoints(item) {
    //if one fish is killed 64 points are added because of the formula, but actually added 65 because of the counter speed
    if (item instanceof Fish) this.currentPoints += 128;
    if (item instanceof Diamond) this.currentPoints += 512;
    if (item instanceof Chest) this.currentPoints += 1024;
    if (item instanceof CrystalSkull) this.currentPoints += 2048;
  },

  calculatePoints() {
    setTimeout(() => {
      this.totalPoints += this.currentPoints * this.singleHitKills / 2;
    }, 1000);
  },

  multiKillCount() {
    this.singleHitKills++;
    if (this.singleHitKills == 3) this.moreThan3killsCount++;
    if (this.singleHitKills == 6) this.moreThan6killsCount++;
    if (this.singleHitKills == 9) this.moreThan9killsCount++;
  },
};