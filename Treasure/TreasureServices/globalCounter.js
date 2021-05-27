class GlobalObjects {
  static item = [];
  static bullet = [];
  static spawnPoints = [];
  static backgroundBubbles = [];

  static drawTerrain(image) {
    push();
    texture(image);
    noStroke();
    plane(1920, 1080);
    pop();
  }
}

class GlobalCounter {
  static currentBulletProperty = "";

  static singleHitKills = 0;
  static totalKills = 0;

  static splashScreenIsActive = false;

  static moreThan3killsCount = 0;
  static moreThan6killsCount = 0;
  static moreThan9killsCount = 0;

  static redFishKills = 0;
  static blueFishKills = 0;
  static greenFishKills = 0;

  static redDiamondsCollected = 0;
  static greenDiamondsCollected = 0;
  static blueDiamondsCollected = 0;

  static totalDiamondsCollected = 0;

  static objectiveIsCompleted = false;

  static movesRemaining = 10;
  static currentPoints = 0;
  static totalPoints = 0;

  static sessionStarted = sessionStorage.getItem('sessionStarted');

  static level = +localStorage.getItem('treasureGameLevel');
  static maxLevel = +localStorage.getItem('treasureGameMaxLevel');

  static levelIsFinished = false;
  static fireOnceInDraw = false;
  static stars = 0;

  static lastMouseClickedCoordinates = [0, 0];
  static lastFrameClicked = 0;

  static difficulty = this.level >= 0 && this.level < 5 ? Difficulty.EASY
    : this.level >= 5 && this.level < 10 ? Difficulty.MEDIUM
      : Difficulty.HARD

  static addKill(item) {
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
  }

  static addPoints(item) {
    //if one fish is killed 64 points are added because of the formula, but actually added 65 because of the counter speed
    if (item instanceof Fish) this.currentPoints += 128;
    if (item instanceof Diamond) this.currentPoints += 512;
    if (item instanceof Chest) this.currentPoints += 1024;
    if (item instanceof CrystalSkull) this.currentPoints += 2048;
  }

  static calculatePoints() {
    setTimeout(() => {
      this.totalPoints += this.currentPoints * this.singleHitKills / 2;
    }, 1000);
  }

  static multiKillCount() {
    this.singleHitKills++;
    if (this.singleHitKills == 3) this.moreThan3killsCount++;
    if (this.singleHitKills == 6) this.moreThan6killsCount++;
    if (this.singleHitKills == 9) this.moreThan9killsCount++;
  }
}