// IMPORTED CLASSES FROM classLibrary.js
// IMPORTED CLASSES FROM GUI.js
///////////// SETUP //////////////
console.log(`You are at level ${GlobalCounter.level}`);

let randomObjective = Math.floor(Math.random() * Objective.Difficulty[GlobalCounter.difficulty].length);
const currentObjective = Objective.Difficulty[GlobalCounter.difficulty][randomObjective];


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

  LevelStartTooltip.show();
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
    for (g = 50; g < rowsCount * 100; g += 75) {

      if (random(200) < 2 && !specialFishIsInserted) {
        GlobalObjects.item.push(new Fish(i, g, FishType.SPECIAL));
        specialFishIsInserted = true;
        continue;
      }
      if (random(100) < GlobalCounter.level) {
        GlobalObjects.item.push(new Fish(i, g, FishType.TOUGH));
        continue;
      }

      if (random(100) < 20) {
        GlobalObjects.item.push(new Diamond(i, g, DiamondType.getRandom()));
        continue;
      }

      GlobalObjects.item.push(new Fish(i, g, FishType.getRandom()));
    }
  }
  // Game.setLevel(1);
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


  //ALL ITEMS MUST BE SHOWN IN SEPARATE ITERATOR DUE TO FLICKERING WHEN ONE IS DESTROYED
  GlobalObjects.item.forEach((x) => {
    x.show();
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
      // there is a less CPU hungry formula, but is more code complex,
      // so i decided to go with this one since the game mechanics is not heavy on CPU
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
    setTimeout(() => { Document.reload(); }, 6000);
  }
}

//When mouse is clicked
mousePressed = () => {
  GlobalCounter.currentPoints = 0;
  GlobalCounter.singleHitKills = 0;

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
  };
};

// KEYBOARD PRESSES
keyPressed = () => {
  // keyCode === 67  //C KEY

  // if (keyCode === 32) {  //   //SPACE KEY  

  if (keyCode === 27) { // ESCAPE KEY
    Document.showIngameMenu();
  }
}


