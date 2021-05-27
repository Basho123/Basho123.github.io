// imported classes from TreasureLibrary Folder
// imported classes from TreasureServices Folder
// imported classes from TreasureEnums Folder


console.log(`You are at level ${GlobalCounter.level}`);
Game.startSession();

const currentObjective = Objective.setRandom()

HUD.objectiveName.innerHTML = currentObjective.info;
LevelStartTooltip.objectiveInfo.innerHTML = currentObjective.info;
LevelStartTooltip.levelCount.innerHTML = GlobalCounter.level;


preload = () => {
  Background.image1 = loadImage('./Images/underWater1.png');
  Background.image2 = loadImage('./Images/underWater2.png');
  Background.image3 = loadImage('./Images/underWater3.png');

  SceneryModel.treasureChest = loadImage('./Images/treasures/treasure.png');
  SceneryModel.redDiamond = loadImage('./Images/treasures/redDiamond.png');
  SceneryModel.greenDiamond = loadImage('./Images/treasures/greenDiamond.png');
  SceneryModel.blueDiamond = loadImage('./Images/treasures/blueDiamond.png');
  SceneryModel.crystalSkull = loadImage('./Images/treasures/crystalSkull.png');

  SceneryModel.bubble = loadImage('./Images/bubble.png');

  FishModel.green = loadImage('./Images/fish/greenFish.png');
  FishModel.purple = loadImage('./Images/fish/purpleFish.png');
  FishModel.red = loadImage('./Images/fish/redFish.png');
  FishModel.orange = loadImage('./Images/fish/orangeFish.png');
  FishModel.blue = loadImage('./Images/fish/shark.png');

  Sound.bubble1 = loadSound('./Sounds/bubble1.mp3');
  Sound.bubble2 = loadSound('./Sounds/bubble2.mp3');
  Sound.bubble3 = loadSound('./Sounds/bubble3.mp3');
  Sound.bubble4 = loadSound('./Sounds/bubble4.mp3');
  Sound.bubble5 = loadSound('./Sounds/bubble5.mp3');
  Sound.bubble6 = loadSound('./Sounds/bubble6.mp3');
  Sound.bubble7 = loadSound('./Sounds/bubble7.mp3');
  Sound.bubble8 = loadSound('./Sounds/bubble8.mp3');
  Sound.bubbleBackground = loadSound('./Sounds/bubbleBackground.mp3');
  Sound.music1 = loadSound('./Sounds/music1.mp3');
  Sound.music2 = loadSound('./Sounds/music2.mp3');

  Font.openSans = loadFont('./Fonts/Open_Sans/OpenSans-Regular.ttf');
}

setup = () => {
  // setAttributes('antialias', true);
  const canvas = createCanvas(1300, 800, WEBGL);
  canvas.parent("canvasDiv");

  if (GlobalCounter.level > 1) LevelStartTooltip.show();
  if (GlobalCounter.level == 1) Tutorial.show();

  Sound.checkForOnOffState();

  setTimeout(() => { LevelStartTooltip.hide() }, 8000);
  Sound.playMusic();


  //MAIN MENU
  if (Game.getCurrentLevel() == 0) {
    Document.mainMenu.style.display = 'flex';
    Document.canvas[0].style.display = 'none';
    WorldMap.hide();
    HUD.hide();
    Sound.stopBackground();
    Sound.stopMusic();
  }

  //WORLD MAP
  else if (Game.getCurrentLevel() == -1) {
    Document.mainMenu.style.display = 'none';
    Document.canvas[0].style.display = 'none';
    HUD.hide();
    WorldMap.show();
    Sound.stopMusic();
    Sound.stopBackground();
  }

  //GAME CANVAS
  else {
    Document.mainMenu.style.display = 'none';
    Document.canvas[0].style.display = 'flex';
    WorldMap.hide();
    HUD.show();
    Sound.playBackground();
  };


  let rowsCount = 8;
  let columnsCount = 13;
  let treasureChestIsInserted = false;

  for (i = 550; i < columnsCount * 100; i += 75) {
    //spawn points when space opens up
    GlobalObjects.spawnPoints.push(new SpawnPoint(i, 0, i));

    for (g = 50; g < rowsCount * 100; g += 75) {

      // treasure chest spawn
      if (random(200) < 4 && !treasureChestIsInserted) {
        GlobalObjects.item.push(new Chest(i, g, 50));
        treasureChestIsInserted = true;
        continue;
      }

      //bubble spawn
      if (random(100) < GlobalCounter.level) {
        GlobalObjects.item.push(new Bubble(i, g, 50));
        continue;
      }

      //diamond spawn
      if (random(100) < 20) {
        GlobalObjects.item.push(new Diamond(i, g, 50, DiamondType.getRandom()));
        continue;
      }

      //crystal skull spawns above level 5
      if (random(100) < 1 && GlobalCounter.level >= 5) {
        GlobalObjects.item.push(new CrystalSkull(i, g, 50));
        continue;
      }
      // spawn a random fish if nothing special was spawned prior
      GlobalObjects.item.push(new Fish(i, g, 50, FishType.getRandom()));
    }
  }

  //populate initial background bubbles
  for (i = 0; i < 20; i++) {
    GlobalObjects.backgroundBubbles.push(new BackgroundBubble(random(-200, 1600), random(100, 800), random(15) + 5));
  }

}

//DRAW
draw = () => {
  background(255);
  frameRate(60);
  currentObjective.condition();




  //DRAW BACKGROUND
  switch (GlobalCounter.difficulty) {
    case Difficulty.EASY: //EASY
      GlobalObjects.drawTerrain(Background.image1);
      break;
    case Difficulty.MEDIUM: //MEDIUM
      GlobalObjects.drawTerrain(Background.image2);
      break;
    case Difficulty.HARD: //HARD
      GlobalObjects.drawTerrain(Background.image3);
      break;
    default:
      break;
  }
  //TRANSLATE ALL OBJECTS BECAUSE OF WEBGL RENDERING ITEMS FROM CENTER OF SCREEN AS 0 POINT
  translate(-1300 / 2, -800 / 2);

  //populate continiously background with background bubbles 
  if (random(1000) < 25) {
    GlobalObjects.backgroundBubbles.push(new BackgroundBubble(random(-200, 1600), 900, random(15) + 5));
  }
  GlobalObjects.backgroundBubbles.forEach((bubble, index) => {
    bubble.show();
    bubble.addBuoyency();
    if (bubble.pos.y < 0) GlobalObjects.backgroundBubbles.splice(index, 1);
  })


  MouseText.show(GlobalCounter.currentPoints * GlobalCounter.singleHitKills / 2,
    GlobalCounter.lastFrameClicked,
    frameCount,
    GlobalCounter.lastMouseClickedCoordinates[0],
    GlobalCounter.lastMouseClickedCoordinates[1]);


  HUD.setObjectiveRemainingCount(currentObjective.counter());
  HUD.setTotalPoints(GlobalCounter.totalPoints);
  HUD.setStars();
  HUD.setMovesRemaining(GlobalCounter.movesRemaining);


  for (i = 0; i < GlobalObjects.item.length; i++) {
    GlobalObjects.item[i].show();
    // GlobalObjects.item[i].showCollisionBox();
    GlobalObjects.item[i].addGravity();

    if (GlobalObjects.item[i].pos.y > 730) GlobalObjects.item[i].pos.y = 730;

    for (g = i + 1; g < GlobalObjects.item.length; g++) {
      if (Collision.isOccuring(GlobalObjects.item[i], GlobalObjects.item[g])) {
        GlobalObjects.item[i].vel.y = 0;
        GlobalObjects.item[i].acc.y = 0;
      }
    }
  }

  //SPAWNPOINT LOGIC
  GlobalObjects.spawnPoints.forEach(spawnPoint => {

    //MEASURE AND RECORD EVERY DISTANCE FROM EVERY SPAWN POINT
    let spawnPointDistances = [];
    GlobalObjects.item.forEach(entity => {
      let spawnPointDistance = dist(spawnPoint.pos.x, spawnPoint.pos.y, entity.pos.x, entity.pos.y);
      spawnPointDistances.push(spawnPointDistance);
    });

    spawnPointDistances.sort((x, y) => x - y);


    //if there is enough place to spawn an item, it will be spawned every 600 frames or 10 seconds
    // 70/30 % chance for Fish vs Diamond
    if (spawnPointDistances[0] > 150 && frameCount % 300 == 0) {
      if (random(100) < 70) {
        let newFish = new Fish(spawnPoint.pos.x, spawnPoint.pos.y, 50, FishType.getRandom());
        newFish.isSpawnedItem = true;
        GlobalObjects.item.unshift(newFish);
      }
      else {
        let newDiamond = new Diamond(spawnPoint.pos.x, spawnPoint.pos.y, 50, DiamondType.getRandom());
        newDiamond.isSpawnedItem = true;
        GlobalObjects.item.unshift(newDiamond);
      }
    }
  });


  //THE BULLET LOGIC STARTS HERE
  GlobalObjects.bullet.forEach((bullet, i) => {
    bullet.show();

    if (bullet.pos.x > windowWidth || bullet.pos.x < 0 || bullet.pos.y > windowHeight || bullet.pos.y < 0) {
      GlobalObjects.bullet.splice(i, 1);
    }
    else if ((bullet.distanceTraveled < -50 || bullet.distanceTraveled > 50) && bullet.type != BulletType.SPECIAL) {
      GlobalObjects.bullet.splice(i, 1);
    }

    GlobalObjects.item.forEach((item, g) => {
      //bullet gets property that was selected with mouse
      bullet.type = GlobalCounter.currentBulletProperty;


      //if bullet colides with same color that was before, but is not special bullet
      if (Collision.isOccuring(bullet, item)
        && bullet.type == item.type
        && bullet.type != BulletType.SPECIAL
        && !(item instanceof Bubble)) {
        GlobalObjects.bullet.push(new Bullet(item.pos.x, item.pos.y, 0, 20));
        GlobalObjects.bullet.push(new Bullet(item.pos.x, item.pos.y, 20, 0));
        GlobalObjects.bullet.push(new Bullet(item.pos.x, item.pos.y, 0, -20));
        GlobalObjects.bullet.push(new Bullet(item.pos.x, item.pos.y, -20, 0));
        GlobalObjects.item.splice(g, 1);

        GlobalCounter.multiKillCount();
        GlobalCounter.addKill(item);
        GlobalCounter.addPoints(item);
      }

      //if bullet colides with invalid item
      else if (Collision.isOccuring(bullet, item) && bullet.type != item.type && bullet.type != BulletType.SPECIAL) {
        GlobalObjects.bullet.splice(i, 1);
      }

      //if treasure chest is collected
      else if (Collision.isOccuring(bullet, item) && bullet.type == BulletType.SPECIAL && !(item instanceof Bubble)) {
        GlobalObjects.item.splice(g, 1);
        GlobalCounter.multiKillCount();
        GlobalCounter.addKill(item);
        GlobalCounter.addPoints(item);
      }

      // if crystal skull is collected, does splash damage
      if (Collision.isOccuring(bullet, item) && bullet.type == BulletType.SKULL && !(item instanceof Bubble)) {
        bullet.collisionSize = 300;
        GlobalObjects.item.splice(g, 1);
        GlobalCounter.multiKillCount();
        GlobalCounter.addKill(item);
        GlobalCounter.addPoints(item);
      }
    });
  });

  // END LEVEL
  if (GlobalCounter.movesRemaining == 0 && !GlobalCounter.levelIsFinished) {

    LevelFinishTooltip.show();

    setTimeout(() => {
      LevelFinishTooltip.showObjectiveCompletedLog(GlobalCounter.objectiveIsCompleted, currentObjective.questPoints());
    }, 2000)

    GlobalCounter.levelIsFinished = true;
    setTimeout(() => {
      Points.setForLevel(GlobalCounter.level);
      if (GlobalCounter.objectiveIsCompleted && GlobalCounter.level < 30) Game.nextLevel();
      Game.setLevel(-1);
      Document.reload();
    }, 10000);
  }
}

//When mouse is clicked
mousePressed = () => {

  //last frame clicked guards for the points not being calculated on mobile device
  if (!GlobalCounter.splashScreenIsActive && GlobalCounter.lastFrameClicked + 30 < frameCount) {
    if (!GlobalCounter.levelIsFinished) {
      GlobalCounter.currentPoints = 0;
      GlobalCounter.singleHitKills = 0;
      GlobalCounter.lastMouseClickedCoordinates = [mouseX, mouseY];
      GlobalObjects.item.forEach((item) => {
        let mouseDistance = dist(item.pos.x, item.pos.y, mouseX, mouseY);
        if (mouseDistance < 30
          && !(item instanceof Bubble)
          && !(item instanceof Diamond)) {

          Sound.fireRandom();
          GlobalCounter.lastFrameClicked = frameCount;
          GlobalCounter.movesRemaining--;

          //POINTS CALCULATOR, has timeout because it waits for the bullets to finish
          GlobalCounter.calculatePoints();

          //bullet property is stored for later use
          GlobalCounter.currentBulletProperty = item.type;

          //bulelts are fired in all directions
          GlobalObjects.bullet.push(new Bullet(mouseX, mouseY, 0, 20));
          GlobalObjects.bullet.push(new Bullet(mouseX, mouseY, 20, 0));
          GlobalObjects.bullet.push(new Bullet(mouseX, mouseY, 0, -20));
          GlobalObjects.bullet.push(new Bullet(mouseX, mouseY, -20, 0));
        };
      });
    }
    else {
      Points.setForLevel(GlobalCounter.level);
      if (GlobalCounter.objectiveIsCompleted && GlobalCounter.level < 30) Game.nextLevel();
      Game.setLevel(-1);
      Document.reload();
    }
  };
  Tutorial.hide();
  LevelStartTooltip.hide();
};

// KEYBOARD PRESSES
keyPressed = () => {
  // keyCode === 67  //C KEY
  // if (keyCode === 32) {  //   //SPACE KEY  
  if (keyCode === 27) { // ESCAPE KEY
    Tutorial.hide();
    WorldMap.hide();
    Document.showIngameMenu();
    HUD.container.style.display = 'none';
  }
}


