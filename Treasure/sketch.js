// IMPORTED CLASSES FROM classLibrary.js
// IMPORTED CLASSES FROM GUI.js
///////////// SETUP //////////////
console.log(`You are at level ${GlobalCounter.level}`);

let randomObjective = Math.floor(Math.random() * Objective.Difficulty[GlobalCounter.difficulty].length);
const currentObjective = Objective.Difficulty[GlobalCounter.difficulty][randomObjective];
console.log(randomObjective);


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

  Font.openSans = loadFont('./Fonts/Open_Sans/OpenSans-Regular.ttf');
}

setup = () => {

  console.log(GlobalCounter.difficulty);

  const canvas = createCanvas(1300, 800, WEBGL);
  canvas.parent("canvasDiv");

  if (GlobalCounter.level > 1) LevelStartTooltip.show();
  if (GlobalCounter.level == 1) Tutorial.show();

  setTimeout(() => { LevelStartTooltip.hide() }, 8000);


  if (Game.getCurrentLevel() == 0) {
    Document.mainMenu.style.display = 'flex';
    Document.canvas[0].style.display = 'none';
  }
  else {
    Document.mainMenu.style.display = 'none';
    Document.canvas[0].style.display = 'flex';
  }


  let rowsCount = 8;
  let columnsCount = 13;

  let specialFishIsInserted = false;


  for (i = 550; i < columnsCount * 100; i += 75) {

    //spawn spawn points
    GlobalObjects.spawnPoints.push(new SpawnPoint(i, 0, i));

    for (g = 50; g < rowsCount * 100; g += 75) {

      // treasure chest spawn
      if (random(200) < 2 && !specialFishIsInserted) {
        GlobalObjects.item.push(new Chest(i, g, 50));
        specialFishIsInserted = true;
        continue;
      }

      //bubble spawn
      if (random(100) < GlobalCounter.level) {
        GlobalObjects.item.push(new Bubble(i, g, 50));
        // //diamond inside bubble spawn
        // if (random(100) < 50) {
        //   GlobalObjects.item.push(new Diamond(i, g, 20, DiamondType.getRandom()));
        // }
        continue;
      }

      //diamond spawn
      if (random(100) < 20) {
        GlobalObjects.item.push(new Diamond(i, g, 50, DiamondType.getRandom()));
        continue;
      }

      //crystal skull spawn above level 5
      if (random(100) < 1 && GlobalCounter.level >= 5) {
        GlobalObjects.item.push(new CrystalSkull(i, g, 50));
        continue;
      }

      // spawn a random fish if nothing was spawned prior
      GlobalObjects.item.push(new Fish(i, g, 50, FishType.getRandom()));
    }
  }
}

//DRAW
draw = () => {
  background(255);

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


  MouseText.show(GlobalCounter.currentPoints * GlobalCounter.singleHitKills / 2,
    GlobalCounter.lastFrameClicked,
    frameCount,
    GlobalCounter.lastMouseClickedCoordinates[0],
    GlobalCounter.lastMouseClickedCoordinates[1]);


  HUD.objectiveRemainingCount.innerHTML = currentObjective.counter();
  HUD.setTotalPoints(GlobalCounter.totalPoints);
  HUD.setStars();
  HUD.setMovesRemaining(GlobalCounter.movesRemaining)



  for (i = 0; i < GlobalObjects.item.length; i++) {
    GlobalObjects.item[i].show();
    GlobalObjects.item[i].move();

    if (GlobalObjects.item[i].pos.y > 730) GlobalObjects.item[i].pos.y = 730;

    for (g = i + 1; g < GlobalObjects.item.length; g++) {
      if (Collision.isOccuring(GlobalObjects.item[i], GlobalObjects.item[g])) {
        GlobalObjects.item[i].vel.y = 0;
        GlobalObjects.item[g].isSpawnedItem ? GlobalObjects.item[g].vel.y = 0 : null;
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
        GlobalObjects.item.push(newFish);
      }
      else {
        let newDiamond = new Diamond(spawnPoint.pos.x, spawnPoint.pos.y, 50, DiamondType.getRandom());
        newDiamond.isSpawnedItem = true;
        GlobalObjects.item.push(newDiamond);
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


      // every bullet distance gets measured with every fish in each frame, 
      let bulletDistance = dist(bullet.pos.x, bullet.pos.y, item.pos.x, item.pos.y);

      //if bullet colides with same color that was before, but is not special bullet
      if (bulletDistance < 50 && bullet.type == item.type && bullet.type != BulletType.SPECIAL && item.type != FishType.TOUGH) {
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
      else if (bulletDistance < 50 && bullet.type != item.type && bullet.type != BulletType.SPECIAL) {
        GlobalObjects.bullet.splice(i, 1);
      }

      //if special item is pressed
      else if (bulletDistance < 30 && bullet.type == BulletType.SPECIAL && item.type != Type.TOUGH) {
        GlobalObjects.item.splice(g, 1);
        GlobalCounter.multiKillCount();
        GlobalCounter.addKill(item);
        GlobalCounter.addPoints(item);
      }

      // if crystal skull is pressed
      if (bulletDistance < 100 && bullet.type == BulletType.SKULL && item.type != Type.TOUGH) {
        GlobalObjects.item.splice(g, 1);
        GlobalCounter.multiKillCount();
        GlobalCounter.addKill(item);
        GlobalCounter.addPoints(item);
      }
    });
  });

  // END LEVEL
  if (GlobalCounter.movesRemaining == 0 && !GlobalCounter.levelIsFinished) {

    currentObjective.condition();
    Objective.isCompletedCheck(currentObjective.questPoints());

    LevelFinishTooltip.show();


    Game.nextLevel();
    GlobalCounter.levelIsFinished = true;
    console.log(GlobalCounter.level);
    setTimeout(() => { Document.reload(); }, 10000);
  }
}

//When mouse is clicked
mousePressed = () => {
  GlobalCounter.currentPoints = 0;
  GlobalCounter.singleHitKills = 0;

  Tutorial.hide();

  if (!GlobalCounter.levelIsFinished) {

    GlobalCounter.lastMouseClickedCoordinates = [mouseX, mouseY];

    LevelStartTooltip.hide();

    GlobalObjects.item.forEach((item) => {
      let mouseDistance = dist(item.pos.x, item.pos.y, mouseX, mouseY);
      if (mouseDistance < 30 && item.type != FishType.TOUGH) {

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
  else Document.reload();
};

// KEYBOARD PRESSES
keyPressed = () => {
  // keyCode === 67  //C KEY

  // if (keyCode === 32) {  //   //SPACE KEY  

  if (keyCode === 27) { // ESCAPE KEY
    Tutorial.hide();
    Document.showIngameMenu();
    HUD.container.style.display = 'none';
  }
}


