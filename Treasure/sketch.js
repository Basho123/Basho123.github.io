// IMPORTED CLASSES FROM classLibrary.js
// IMPORTED CLASSES FROM GUI.js

///////////// SETUP //////////////
console.log(`You are at level ${GlobalCounter.level}`);

preload = () => {
  Background.image1 = loadImage('./Images/underWater1.jpg');
}


setup = () => {
  createCanvas(1300, 800);
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

  for (i = 550; i < columnsCount * 100; i += 50) {
    for (g = 50; g < rowsCount * 100; g += 50) {

      if (random(200) < 2 && !specialFishIsInserted) {
        GlobalObjects.fish.push(new Fish(i, g, FishType.SPECIAL));
        specialFishIsInserted = true;
        continue;
      }
      if (random(100) < GlobalCounter.level) {
        GlobalObjects.fish.push(new Fish(i, g, FishType.TOUGH));
        continue;
      }

      GlobalObjects.fish.push(new Fish(i, g, FishType.ARRAY[Math.floor(random(0, 3))]))
    }
  }
  // Game.setLevel(1);
}

//DRAW
draw = () => {
  background(Background.image1);

  HUD.setTotalPoints(GlobalCounter.totalPoints);
  HUD.setStars();
  HUD.setMovesRemaining(GlobalCounter.movesRemaining)
  //must be in separate iterator due to flickering issue when a fish is killed
  GlobalObjects.fish.forEach((x) => {
    x.show();
  });

  GlobalObjects.bullet.forEach((bullet, i) => {
    bullet.show();

    if (bullet.pos.x > windowWidth || bullet.pos.x < 0 || bullet.pos.y > windowHeight || bullet.pos.y < 0) {
      GlobalObjects.bullet.splice(i, 1);
    }
    else if ((bullet.distanceTraveled < -20 || bullet.distanceTraveled > 20) && bullet.type != BulletType.SPECIAL) {
      GlobalObjects.bullet.splice(i, 1);
    }

    GlobalObjects.fish.forEach((fish, g) => {
      //bullet gets property that was selected with mouse
      bullet.type = GlobalCounter.currentBulletProperty;


      // every bullet distance gets measured with every fish in each frame, 
      // there is a less CPU hungry formula, but is more code complex,
      // so i decided to go with this one since the game mechanics is not heavy on CPU
      let bulletDistance = dist(bullet.pos.x, bullet.pos.y, fish.pos.x, fish.pos.y);

      //if bullet colides with same color that was before, but is not special bullet
      if (bulletDistance < 50 && bullet.type == fish.type && bullet.type != BulletType.SPECIAL && fish.type != FishType.TOUGH) {
        GlobalObjects.bullet.push(new Bullet(fish.pos.x, fish.pos.y, 0, 20));
        GlobalObjects.bullet.push(new Bullet(fish.pos.x, fish.pos.y, 20, 0));
        GlobalObjects.bullet.push(new Bullet(fish.pos.x, fish.pos.y, 0, -20));
        GlobalObjects.bullet.push(new Bullet(fish.pos.x, fish.pos.y, -20, 0));
        GlobalObjects.fish.splice(g, 1);
        GlobalCounter.singleHitKills++;
        GlobalCounter.totalKills++;
        GlobalCounter.currentPoints += 123;
      }

      //if bullet colides with invalid item
      else if (bulletDistance < 50 && bullet.type != fish.type && bullet.type != BulletType.SPECIAL) {
        GlobalObjects.bullet.splice(i, 1);
      }

      //if special item is pressed
      else if (bulletDistance < 30 && bullet.type == BulletType.SPECIAL && fish.type != FishType.TOUGH) {
        GlobalObjects.fish.splice(g, 1);
        GlobalCounter.singleHitKills++;
        GlobalCounter.totalKills++;
        GlobalCounter.currentPoints += 100;
      }
    });
  });

  if (GlobalCounter.movesRemaining == 0 && !GlobalCounter.levelIsFinished) {
    Game.nextLevel();
    GlobalCounter.levelIsFinished = true;
    console.log(GlobalCounter.level);
    setTimeout(() => { Document.reload(); }, 10000)
  }
}
mousePressed = () => {
  if (!GlobalCounter.levelIsFinished) {
    GlobalObjects.fish.forEach((fish) => {
      let mouseDistance = dist(fish.pos.x, fish.pos.y, mouseX, mouseY);
      if (mouseDistance < 30 && fish.type != FishType.TOUGH) {

        GlobalCounter.movesRemaining--;
        GlobalCounter.singleHitKills = 0;

        //POINTS CALCULATOR, has timeout because it waits for the bullets to finish
        setTimeout(() => {
          GlobalCounter.totalPoints += GlobalCounter.currentPoints * GlobalCounter.singleHitKills / 4;
        }, 500);

        //bullet property is stored for later use
        GlobalCounter.currentBulletProperty = fish.type;

        //bulelts are fired in all directions
        GlobalObjects.bullet.push(new Bullet(mouseX, mouseY, 0, 20));
        GlobalObjects.bullet.push(new Bullet(mouseX, mouseY, 20, 0));
        GlobalObjects.bullet.push(new Bullet(mouseX, mouseY, 0, -20));
        GlobalObjects.bullet.push(new Bullet(mouseX, mouseY, -20, 0));
      };
    });
  };
};

keyPressed = () => {
  // keyCode === 67 ? camera.mode++ : null;  //C KEY
  // camera.mode === 4 ? camera.mode = 0 : null; //CYCLE CAMERA TO FIRST MODE

  // if (keyCode === 32) {
  //   pTank.fire(true);//SPACE KEY  
  // }
  if (keyCode === 27) { // ESCAPE KEY
    Document.showIngameMenu();
  }
}


