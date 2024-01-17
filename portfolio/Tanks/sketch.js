
//#region variables

/*
* p5.js requires declaring variables outside of SETUP and DRAW functions so they can be used in both;
*
* p5.js functions:
*   setup(), camera(),translate(), requestPonterLock(), background(), push(),
*   pop(),texture(),preload(),exitPointerLock(), dist(), ambientLight(),pointLight(), 
*   keyIsDown(), keyPressed(), draw(), vector(), .add(), map(), random(), heading() and few more.
*   
*
* setup() creates the canvas and calls the functions once
* draw() is like setInterval() and refreshes 60 times per second;
* map() gets a minimum and maximum value of a given variable and maps new parameters ie. let map1 = map(something,0,3.14,0,360)
* vector() easens working with variables that need to consist 3 parameters example x, y, and z
* vector.add() adds one vector to another example vector1.add(vector2)
* camera() creates a camera, and .tilt() and .pan() are also p5.js functions
* requestPointerLock() locks the mouse on the middle of the screen.
* ambientLight(),pointLight() creates a light source on the given coordinates;
* dist() measures distance between 2 given sets of x,y,z locations
* preload() preloads large files before calling the sketch
* push() and pop() are used to contain one model properties in 1 place
* translate() is used to translate the position of the object
*
* Almost everything else is hard and honest work of functions.
*/

const globalExistenceDistanceLimit = 10000;
const globalBoundry = 8000;

let assets = {
  terrain: {},
  collision: {},
  environment: {},
  lockOn: false,
};

let models = {
  m1a2Body: "",
  m1a2Turret: "",
  m1a2Cannon: "",
  howitzerBody: "",
  howitzerTurret: "",
  howitzerCannon: "",
  howitzerRadar: "",
  tree1: "",
  tree3: "",
  barbedWire: "",
  grass: "",
  shellHESH: "",

  complexTree: {
    model: {
      body: ``,
      leaves: ``,
      flowers: ``,
    },
    texture: {
      body: ``,
      leaves: ``,
      flowers: ``,
    }
  }
};

let textures = {
  brick: "",
  grass: "",
  tree1: "",
  treeBark: "",
  sky: "",
  terrain: "",
  shellHESH: "",
  t34: "",
  m1a2Body: "",
  m1a2Turret: "",
  m1a2Cannon: "",
  desertCamo: "",
};

let sounds = {
  playerCannon: "",
  otherCannon: "",
  distantExplosion1: "",
  distantExplosion2: "",
  nearExplosion1: "",
  nearExplosion2: "",
};

// RANDOM STATE NUMBERS ARE CALLED IN THE AI OF THE ENEMY TANKS
let randomState = {
  randomNumber: Math.random() * 10000,
  randomStateArray: [true, false],

  randomState1: false,
  randomState2: false,
  randomState3: false,
  randomState4: false,
  randomState5: false,
  randomState6: false,
  randomState7: false,
  randomState8: false,
  randomState9: false,
  randomState10: false,
};
let { randomStateArray, randomState1, randomState2, randomState3, randomState4, randomState5, randomState6, randomState7, randomState8, randomState9, randomState10 } = randomState;

//#endregion
//#endregion

console.log(`You are at level ${localStorage.getItem('level')}`);
class Main {
  constructor() {
    this.level = localStorage.getItem('level');
    this.isPaused = true;
  }
  static level(number) {
    localStorage.setItem('level', number);
  }
  static nextLevel() {
    let intermediateNumber = +localStorage.getItem('save');
    intermediateNumber++;
    localStorage.setItem('level', intermediateNumber);
  }
  static save(number) {
    localStorage.setItem('save', number);
  }
  static toggleMenu() {
    this.isPaused = !this.isPaused;
    if (this.isPaused) {
      menu.continueGameButton.style.display = 'block';
      menu.canvas[0].style.display = 'none';
      menu.mainMenu.style.display = 'flex';
      // frameRate(0);
    }
    else {
      // frameRate(60);
      menu.canvas[0].style.display = 'block';
      menu.mainMenu.style.display = 'none'
    }
  }
}
let main = new Main();
//GAME IS STARTED
if (main.level > 0) {
  //#region OPTIONS
  const options = {
    tanksCount: 1,
    sceneryCount: 1,
    grassScale: 1,
    treesCount: 1,
    grassCount: 1,
    enemyTankRateOfFire: 1,
    ambientLight: [230, 240, 250],
    sunReflectionOffset: [-3000, 500, 0],
    sunReflectionColor: [250, 240, 200],

  }
  switch (menu.getDifficulty()) {
    case 0:
      options.tanksCount = 1 + Math.floor(+main.level / 4);
      options.enemyTankRateOfFire = 0.5;
      break;
    case 1:
      options.tanksCount = 2 + Math.floor(+main.level / 4);
      options.enemyTankRateOfFire = 1;

      break;
    case 2:
      options.tanksCount = 4 + Math.floor(+main.level / 4);
      options.enemyTankRateOfFire = 2;
      break;
    default:
      break;
  }

  switch (menu.getDetail()) {
    case 0:
      options.sceneryCount = 0.4;
      break;
    case 1:
      options.sceneryCount = 1;
      break;
    case 2:
      options.sceneryCount = 1.5;
      break;
    default:
      break;
  }

  //#endregion
  //#region CAMERA
  class Camera {
    constructor() {
      this.body = 0;
      this.mode = 2;

      this.xPosition = 0;
      this.xPositionSpeed = 0;

      this.yPosition = 0;
      this.yPositionSpeed = 0;

      this.zPosition = 0;
      this.zPositionSpeed = 0;
    }
  }
  let camera = new Camera()
  //#endregion
  //#region ENVIRONMENT 
  //ENVIROMENT WAS CREATED TO BUILD PHYSICS INTO, BUT WAS NOT UTILISED SO MUCH
  class Environment {
    constructor() {
      this.gravity = [0, 0.981, 0];
      this.sky;
    }
  }
  //ELEMENTS IS CONSISTED OF THE BASIS OF ALL ELEMENTS THAT ARE SHOWN ON THE SKETCH
  class Elements extends Environment {
    constructor(positionX, positionY, positionZ, sizeX = 100, sizeY = 100, sizeZ = 100, color = [255, 255, 255], radius = 100) {
      super();
      //POSITION AND SPEED OF THE OBJECTS
      this.pos = createVector(positionX, positionY, positionZ);
      this.vel = createVector();
      this.acc = createVector();

      //ROTATION AND ANGULAR SPEED OF OBJECTS
      this.rot = createVector();
      this.ang = createVector();
      this.acc2 = createVector();

      //SIZE IS USED FOR COLLISION PURPOSES
      this.size = createVector(sizeX, sizeY, sizeZ)
      this.collisionColor = color;
      //COLLISION OFFSET IS USED TO OFFSET THE COLLISION POSITION OF A GIVEN OBJECT
      this.collisionOffset = createVector();

      //RADIUS IS USED FOR MEASURING DISTANCE AND TRIGGER PURPOSEES
      this.radius = radius;
      this.r = radius;

      //THESE ARE USED FOR CALCULATING THE FORWARD MOVEMENT OF THE TANKS AND OTHER OBJECTS
      this.dirX;
      this.dirY;

      //GRAVITY IS ADDED TO ALL OBJECTS FROM THIS POINT ON
      this.acc.add(this.gravity[0], this.gravity[1], this.gravity[2]);

      //COLLISION IS SET TO TRUE FOR ALL OBJECTS BY DEFAULT
      this.setCollision = true;
      this.colided = false;

      //AI IS DISABLED FOR ALL OBJECTS BY DEFAULT
      this.AIActive = false;
      //EVERY OBJECT GETS ITS OWN ID, BUT TANK SHELLS INHERIT THE PARENT ID
      this.id = random(999999999)

      //OBJECT TYPE IS USED FOR LATER VERIFICATIONS
      this.objectType = `undefined`;
      this.playerTank = false;
      this.isTank = false;

      //DEFAULT OBJECTS MASS, MASS IS USED FOR PHYSICS
      this.mass = 1;

      //THIS IS USED FOR SEEKING MISSILES
      this.maxSpeed = 4;
      this.maxForce = 0.25;

      //EVERY OBJECT ISN'T DEAD BY DEFAULT
      this.isDead = false;
    }

    showCollisionBox() {
      push()
      fill(this.collisionColor)
      translate(this.pos.x + this.collisionOffset.x, this.pos.y + this.collisionOffset.y, this.pos.z + this.collisionOffset.z)
      // rotateY(-this.rot.x/100)
      box(this.size.x, this.size.y, this.size.z)
      pop()
    }

    seek(target) {
      let force = p5.Vector.sub(target, this.pos);
      force.setMag(this.maxSpeed);
      force.sub(this.vel);
      // force.limit(this.maxForce);
      this.applyForce(force);
    }
    applyForce(force) {
      this.acc.add(force);
    }
    playerControlled() {
      if (this.isDead === false && this.playerTank) {

        this.vel.limit(5 * (1 + hangar.tankUpgrades.getEngineValue() / 20));         // TANK SPEED
        this.ang.limit(0.4 * (1 + (hangar.tankUpgrades.getEngineValue() / 20)));        //TANK ROTATION SPEED
        this.turretVel.limit(0.01) // TURRET ROTATION SPEED

        keyIsDown(104) ? this.turretAcc.x -= 0.0005//NUM 8 KEY CANNON UP
          : keyIsDown(98) ? this.turretAcc.x += 0.0005  // NUM 2 KEY CANNON DOWN
            : this.turretVel.x /= 1.2; // 


        keyIsDown(100) ? this.turretAcc.y += 0.0005 * hangar.tankUpgrades.getServoMotorsValue() * 2 :   // NUM 4 KEY TURRET LEFT
          keyIsDown(102) ? this.turretAcc.y -= 0.0005 * hangar.tankUpgrades.getServoMotorsValue() * 2 :   // NUM 6 KEY TURRET RIGHT
            this.turretVel.y /= 5;


        keyIsDown(65) ? this.acc2.x -= 0.5  // A KEY TANK ROTATE LEFT    
          : keyIsDown(68) ? this.acc2.x += 0.5// D KEY TANK ROTATE RIGHT
            : this.ang.x /= 1.1



        if (keyIsDown(87)) {                  // W KEY TANK FORWARD
          this.acc.add(this.dirX * 0.25 * hangar.tankUpgrades.getEngineValue(), 0, -this.dirY * 0.25 * hangar.tankUpgrades.getEngineValue())
        }
        else if (keyIsDown(83)) {                  // S KEY TANK BACKWARD
          this.acc.add(0 - this.dirX * 0.25 * hangar.tankUpgrades.getEngineValue(), 0, this.dirY * 0.25 * hangar.tankUpgrades.getEngineValue())
        } else {
          this.vel.z /= 1.1;
          this.vel.x /= 1.1;
        }

        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.set(0);

        this.turretVel.limit(0.045);
        this.turretVel.add(this.turretAcc)
        this.turretAng.add(this.turretVel)
        this.turretAcc.set(0)

        this.ang.add(this.acc2);
        this.rot.add(this.ang);
        this.acc2.set(0);

        this.dirX = map(sin(this.rot.x / 100), 0, 628, 0, 360);
        this.dirY = map(cos(this.rot.x / 100), 0, 628, 0, 360);
      } else null;
    }



    updateOther() {
      if (this.AIActive === false)
        this.vel.limit(100);
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.acc.set(0);

      this.rot.limit(500);
      this.ang.add(this.acc2);
      this.rot.add(this.ang);
      this.acc2.set(0);

      this.dirX = map(sin(this.rot.x / 100), 0, 628, 0, 360);
      this.dirY = map(cos(this.rot.x / 100), 0, 628, 0, 360);

      this.ang.x /= 1.02
      this.ang.y /= 1.02
      this.ang.z /= 1.02

      if (this.isDead === true) {
        this.vel.x /= 1.02
        this.vel.y /= 1.02
        this.vel.z /= 1.02
      }


    }

    edges() {
      if (this.pos.y >= 0) {
        this.pos.y = 0;
        this.vel.y *= -0.5;
      }
    }
  }
  //#endregion
  //#region COLLISION
  // COLLISION CLASS CONTAINS ALL OBJECTS OF THE MAP IN AN ARRAY AND WORKS WITH THEM TO SPLICE OR ADD OR
  // DO A GIVEN CALCULATION
  class Collision extends Environment {
    constructor() {
      super()
      this.objects = [];
    }

    // THIS IS USED TO MEASURE DISTANCE BETWEEN OBJECTS
    measureDistance() {
      if (this.objects.length > 0) {
        for (let i = 0; i < this.objects.length; i++) {
          for (let g = i + 1; g < this.objects.length; g++) {
            if (this.objects[i].playerTank && this.objects[g].isTank) {
              let distance = dist(
                this.objects[i].pos.x,
                this.objects[i].pos.y,
                this.objects[i].pos.z,
                this.objects[g].pos.x,
                this.objects[g].pos.y,
                this.objects[g].pos.z);

              //THIS CORRECTS THE ENEMY TANK VERTICAL AIM
              if (distance < (this.objects[i].radius + this.objects[g].radius) * 50) {
                this.objects[g].turretAng.x = -distance / 21000;
                // pTank.turretAng.x = -distance / 17000
              }
            }
          }
        }
      }
    }

    //THIS IS THE FORMULA THAT IS USED FOR INTERSECTION
    static intersects(
      firstRectPosX, firstRectPosY, firstRectPosZ, firstRectWidth, firstRectHeight, firstRectDepth,
      secondRectPosX, secondRectPosY, secondRectPosZ, secondRectWidth, secondRectHeight, secondRectDepth
    ) {
      let rightSideFirst = firstRectPosX + firstRectWidth / 2;
      let leftSideFirst = firstRectPosX - firstRectWidth / 2;
      let bottomSideFirst = firstRectPosY + firstRectHeight / 2;
      let topSideFirst = firstRectPosY - firstRectHeight / 2;
      let frontSideFirst = firstRectPosZ + firstRectDepth / 2; //DEPTH
      let backSideFirst = firstRectPosZ - firstRectDepth / 2; //DEPTH

      let rightSideSecond = secondRectPosX + secondRectWidth / 2;
      let leftSideSecond = secondRectPosX - secondRectWidth / 2;
      let bottomSideSecond = secondRectPosY + secondRectHeight / 2;
      let topSideSecond = secondRectPosY - secondRectHeight / 2;
      let frontSideSecond = secondRectPosZ + secondRectDepth / 2; //DEPTH
      let backSideSecond = secondRectPosZ - secondRectDepth / 2; //DEPTH

      if (
        rightSideFirst > leftSideSecond &&
        leftSideFirst < rightSideSecond &&
        bottomSideFirst > topSideSecond &&
        topSideFirst < bottomSideSecond &&
        frontSideFirst > backSideSecond &&
        backSideFirst < frontSideSecond
      ) {
        return true;
      }
      return false;
    }
    //COLLISION IS CALCULATED HERE
    collision() {
      if (this.objects.length > 0) {
        for (let i = 0; i < this.objects.length; i++) {
          for (let g = i + 1; g < this.objects.length; g++) {
            //CHECK IF OBJECT IS IN GLOBAL EXISTENCE BOUNDARIES FIRST
            if (
              this.objects[g].pos.x > globalExistenceDistanceLimit ||
              this.objects[g].pos.z > globalExistenceDistanceLimit ||
              this.objects[g].pos.x < -globalExistenceDistanceLimit ||
              this.objects[g].pos.y < -globalExistenceDistanceLimit ||
              this.objects[g].pos.z < -globalExistenceDistanceLimit) {
              this.objects.splice(g, 1);
              break;
            }
            else if (this.objects[g].pos.y > 100) {
              if ((this.objects[g] instanceof Shell)) {
                for (let i = 0; i < 100 * options.sceneryCount; i++) {
                  let p = new Particles(
                    this.objects[g].pos.x,
                    this.objects[g].pos.y,
                    this.objects[g].pos.z)
                  particles.container.push(p);
                }
                this.objects[g].playerShell
                  ? random(100) < 50 ? sounds.distantExplosion1.play() : sounds.distantExplosion2.play()
                  : random(100) < 50 ? sounds.nearExplosion1.play() : sounds.nearExplosion2.play()

              }
              this.objects.splice(g, 1);
              break;
            }

            else if (this.objects[i].isTank === true) {
              if (this.objects[i].pos.x < -globalBoundry) {
                this.objects[i].pos.x += 10;
                this.objects[i].acc2.x = 5;

              }
              else if (this.objects[i].pos.x > globalBoundry) {
                this.objects[i].pos.x -= 10;
                this.objects[i].acc2.x = 5;
              }

              if (this.objects[i].pos.z < -globalBoundry) {
                this.objects[i].pos.z += 10;
                this.objects[i].acc2.x = 5;

              }
              else if (this.objects[i].pos.z > globalBoundry) {
                this.objects[i].pos.z -= 10;
                this.objects[i].acc2.x = 5;
              }

            }

            //COLLISION CHECK STARTS
            if (this.objects[i].setCollision && this.objects[g].setCollision) {
              let intersect = Collision.intersects(
                this.objects[i].pos.x + this.objects[i].collisionOffset.x,
                this.objects[i].pos.y + this.objects[i].collisionOffset.y,
                this.objects[i].pos.z + this.objects[i].collisionOffset.z,
                this.objects[i].size.x,
                this.objects[i].size.y,
                this.objects[i].size.z,
                this.objects[g].pos.x + this.objects[g].collisionOffset.x,
                this.objects[g].pos.y + this.objects[g].collisionOffset.y,
                this.objects[g].pos.z + this.objects[g].collisionOffset.z,
                this.objects[g].size.x,
                this.objects[g].size.y,
                this.objects[g].size.z
              )
              //IF CHECK PASSES AND ID OF OBJECT IS NOT SELF(SHELLS COLLIDING WITH PARENT OBJECT)
              if (intersect === true && this.objects[i].id !== this.objects[g].id) {
                // this.objects[g].showCollisionBox();
                // this.objects[i].showCollisionBox();

                if (this.objects[g].playerShell == true) {
                  if ((this.objects[i] instanceof Tank) && this.objects[i].playerTank == false) {
                    playerEconomy.addMoney(100 * (1 + (+menu.getDifficulty())));
                    playerScore.add(800 * (1 + (+menu.getDifficulty())));
                  }
                  else if ((this.objects[i] instanceof Tree)) {
                    playerEconomy.addMoney(50 * (1 + (+menu.getDifficulty())));
                    playerScore.add(100 * (1 + (+menu.getDifficulty())));
                  }
                  else null;
                }


                //#region 1. TANK SHELL INTERACTS WITH OBJECTS             
                if ((this.objects[g] instanceof Shell || this.objects[i] instanceof Shell)) {
                  this.objects[i].vel.limit(1000);
                  for (let i = 0; i < 100 * options.sceneryCount; i++) {
                    let p = new Particles(
                      this.objects[g].pos.x,
                      this.objects[g].pos.y,
                      this.objects[g].pos.z)
                    particles.container.push(p);
                  }
                  // PARTICLES ARE REMOVED FROM THE ARRAY LATER THROUGH DRAW



                  this.objects[i].vel.x = this.objects[g].vel.x / this.objects[i].mass / 50
                  this.objects[i].vel.z = this.objects[g].vel.z / this.objects[i].mass / 50

                  if ((this.objects[i] instanceof Tank)) {
                    this.objects[i].bodyExplodeVelocity.add(0, -10, 0);
                    this.objects[i].turretExplodeVelocity.add(random(-5, 5), -15, random(-5, 5));
                    this.objects[i].cannonExplodeVelocity.add(random(-10, 10), -20, random(-10, 10));
                    this.objects[i].cannonExplodeRotateAngularVelocity.add(random(0.05), random(-0.1, 0.1), random(0.05));
                    // TANK EXPLODES SOUND
                    this.objects[i].playerTank
                      ? (random(100) < 50 ? sounds.nearExplosion1.play() : sounds.nearExplosion2.play())
                      : (random(100) < 50 ? sounds.distantExplosion1.play() : sounds.distantExplosion2.play());


                  } else {
                    this.objects[i].vel.y = random(0, 30) + 100 / this.objects[i].mass / 5
                  }

                  this.objects[i].ang.x = 0.01 * random(1, 3)
                  this.objects[i].ang.z = 0.01 * random(1, 3)

                  this.objects[i].isDead = true;
                  this.objects[g].isDead = true;

                  this.objects[i].AIActive = false;
                  this.objects[g].AIActive = false;


                  this.objects[i].setCollision = false;

                  //SHELL IS ALWAYS SECOND OBJECT BECAUSE IS CREATED LATER IN ARRAY
                  this.objects.splice(g, 1);
                  //THE OTHER OBJECT IS SET TO DEAD, AND IT IS SPLICED LATER

                  continue;
                } else null;
                //#endregion

                //#region 2. TANK DUMMY SCANNERS

                //#region 2.1 BODY TANK DUMMY CHECK

                if ((this.objects[g] instanceof DummyShellBody)) {
                  if ((this.objects[i] instanceof Tank))
                    this.objects[i].turretAng.y = -this.objects[i].rot.x / 100
                }
                //#endregion
                //#endregion

                //#region 2.2 TURRET TANK DUMMY CHECK
                if ((this.objects[g] instanceof DummyShellTurret)) {
                  if ((this.objects[i].playerTank === true)) {
                    this.objects.forEach((tank) => {
                      if (tank.id === this.objects[g].id && tank.objectType == `tank`) {
                        tank.fire();
                      }
                      else null;
                    })

                  } else continue;
                  //SPLICE THE DUMMY SHELL AFTER HIT
                  this.objects.splice(g, 1);
                }
                //#endregion 

                // #region 3. TANK INTERACTS WITH OBJECTS

                if (this.objects[i] instanceof Tank && this.objects[g] != undefined) {


                  //THIS GUARDS THE COLLISION TO HAPPEN WITH DUMMY SHELL BUT NOT TO CONTINUE STOPPING THE TANK
                  if (
                    (this.objects[i] instanceof Shell) ||
                    (this.objects[g] instanceof Shell) ||
                    (this.objects[i] instanceof DummyShellTurret) ||
                    (this.objects[g] instanceof DummyShellTurret)) {
                    continue;
                  }
                  else { // COLLISION OBJECT FROM ARRAY IS NOT CHECKING WITH DUMMY SHELL, MOVING ON     
                    this.objects[i].vel.x /= this.objects[g].mass
                    this.objects[i].vel.y /= this.objects[g].mass
                    this.objects[i].vel.z /= this.objects[g].mass
                  }

                  //NONSTICK BOUNCE EFFECT
                  this.objects[g].pos.x -= ((this.objects[i].pos.x - this.objects[g].pos.x) / 500)
                  this.objects[g].pos.y -= ((this.objects[i].pos.y - this.objects[g].pos.y) / 500)
                  this.objects[g].pos.z -= ((this.objects[i].pos.z - this.objects[g].pos.z) / 500)

                  //#region 3.1 TANK INTERACTS WITH TREE
                  if ((this.objects[g] instanceof Tree)) {
                    this.objects[g].rot.z += ((1 / (this.objects[g].mass - 1)) / 400) * 1 + this.objects[g].rot.z / 20

                    if (this.objects[g].rot.z > 1.5) {
                      this.objects[g].setCollision = false;

                      this.objects[g].vel.x = 0;
                      this.objects[g].vel.y = 0;
                      this.objects[g].vel.z = 0;
                      //this.objects.splice(g, 1);
                    }
                  }
                  //#endregion
                }
                // endregion       
              }
              else null;
            }
            else null;
          }
        }
      }
      else null;
    }
  }
  //#endregion

  //#endregion
  //#region SCENERY
  class Terrain extends Environment {
    constructor(positionX = 1000, positionZ = 1000, sizeX = 1000, sizeZ = 1000, texture) {
      super();

      this.positionX = positionX;
      this.positionZ = positionZ;
      this.sizeX = sizeX;
      this.sizeZ = sizeZ;

      this.scale = scale;

      this.texture = texture;

      this.objects = {
        grass: [],
      }
    }

    show() {
      push();
      translate(this.positionX - 15000, 100, this.positionZ - 15000)
      rotateX(PI / 2);
      ambientMaterial(0);
      texture(this.texture);
      // texture(this.texture);
      noStroke();
      scale(150)
      beginShape(TRIANGLE_STRIP);
      vertex(0, 0, 0, 0, 0);
      vertex(0, 200, 0, 0, 100000);
      vertex(200, 0, 0, 100000, 0);
      vertex(200, 200, 0, 100000, 100000);
      vertex(200, 0, 0, 0, 0);
      vertex(200, 200, 0, 0, 100000);
      vertex(200, 0, 0, 100000, 0);
      vertex(200, 200, 0, 100000, 100000);
      endShape(CLOSE);
      // plane(this.sizeX, this.sizeZ);
      pop();

    }

  }
  class Sky extends Environment {
    constructor(x = 0, y = 0, z = 0, textureFileUrl = textures.sky) {
      super();
      this.position = createVector(x, y, z)
      this.textureFileUrl = textureFileUrl;
    }

    show() {
      push();
      translate(this.position.x, this.position.y, this.position.z);
      noStroke();
      texture(this.textureFileUrl);
      sphere(((width + height) / 2) * 15, 24, 24);

      noFill();
      pop();
    }

  }
  class Grass extends Elements {
    constructor(x = 0, y = -100, z = 0, rotateX = PI, rotateY = 0, model = models.grass) {
      super(x, y, z);

      this.rotateX = rotateX;
      this.rotateY = rotateY;
      this.radius = 100;
      this.scale = random(1, 80) * options.grassScale;

      this.setCollision = false;
      this.model = model;

    }
    show() {
      push();
      translate(this.pos.x, this.pos.y + 100 + this.scale / 4, this.pos.z);
      rotateY(this.rotateY);
      rotateX(this.rotateX);
      scale(this.scale);
      noStroke();
      texture(textures.grass);
      model(this.model);
      noFill();
      pop();
    }
  }
  //#region TREES
  class Tree extends Elements {
    constructor(x = 0, y = -100, z = 0, rotateX = PI, rotateY = 0, rotateZ = 0) {
      super(x, y, z);

      this.rot.x = rotateX;
      this.rot.y = random(0, 4);
      this.rot.z = rotateZ;


      // this.radius = 100;

      this.scale = random(0.05, 0.5)
      this.colided = false;


      this.size.x = 75 * this.scale;;
      this.size.y = 2000 * this.scale;
      this.size.z = 75 * this.scale;

      this.texture = ``;
      this.model = ``;

      this.mass = 5 + this.scale;
    }
  }
  class YellowTree extends Tree {
    constructor(x, y, z) {
      super();
      this.pos.x = x;
      this.pos.y = y;
      this.pos.z = z;
      this.model = model;
      this.texture = texture;
    }
    show() {
      //BODY
      push();
      translate(this.pos.x, this.pos.y + 110, this.pos.z);
      rotateX(this.rot.x);
      rotateY(this.rot.y);
      rotateZ(this.rot.z);
      scale(this.scale);
      noStroke();
      texture(models.complexTree.texture.body);
      model(models.complexTree.model.body);
      noFill();
      pop();

      //LEAVEAS
      push();
      translate(this.pos.x, this.pos.y + 110, this.pos.z);
      rotateX(this.rot.x);
      rotateY(this.rot.y);
      rotateZ(this.rot.z);
      scale(this.scale);
      noStroke();
      texture(models.complexTree.texture.leaves);
      model(models.complexTree.model.leaves);
      noFill();
      pop();

      //FLOWERS
      push();
      translate(this.pos.x, this.pos.y + 110, this.pos.z);
      rotateX(this.rot.x);
      rotateY(this.rot.y);
      rotateZ(this.rot.z);
      scale(this.scale);
      noStroke();
      ambientMaterial(255, 255, 0);
      // texture(models.complexTree.texture.flowers);
      model(models.complexTree.model.flowers);
      noFill();
      pop();
    }
  }
  //NOT USED
  class PalmTree extends Tree {
    constructor(x, y, z) {
      super();
      this.pos.x = x;
      this.pos.y = y;
      this.pos.z = z;
      this.model = model;
      this.texture = texture;
    }
    show() {
      //BODY
      push();
      translate(this.pos.x, this.pos.y + 110, this.pos.z);
      rotateX(this.rot.x);
      rotateY(this.rot.y);
      rotateZ(this.rot.z);
      scale(this.scale);
      noStroke();
      texture(models.complexTree.texture.body);
      model(models.complexTree.model.body);
      noFill();
      pop();

      //LEAVEAS
      push();
      translate(this.pos.x, this.pos.y + 110, this.pos.z);
      rotateX(this.rot.x);
      rotateY(this.rot.y);
      rotateZ(this.rot.z);
      scale(this.scale);
      noStroke();
      texture(models.complexTree.texture.leaves);
      model(models.complexTree.model.leaves);
      noFill();
      pop();

      //FLOWERS
      push();
      translate(this.pos.x, this.pos.y + 110, this.pos.z);
      rotateX(this.rot.x);
      rotateY(this.rot.y);
      rotateZ(this.rot.z);
      scale(this.scale);
      noStroke();
      ambientMaterial(255, 255, 0);
      // texture(models.complexTree.texture.flowers);
      model(models.complexTree.model.flowers);
      noFill();
      pop();
    }
  }
  //#endregion
  //NOT USED
  class Walls extends Elements {
    constructor(x = 0, y = 50, z = 0, rotateY = 0, rotateX = 0, rotateZ = 0, texture = brick) {
      super(x, y, z);

      this.rot.x = rotateX;
      this.rot.y = rotateY;
      this.rot.z = rotateZ;

      this.size.x = 10;
      this.size.y = 100;
      this.size.z = 100;

      this.length = 200;
      this.width = 5;
      this.radius = 100;
      this.mass = 20;

      this.texture = texture;
      this.setCollision = true;


    }
    show() {
      push();

      translate(this.pos.x, 50, this.pos.z);

      rotateY(this.rot.x);
      rotateX(this.rot.y);
      rotateZ(this.rot.z);

      noStroke();
      //ambientMaterial(0);
      texture(this.texture);
      box(10, 100, 200);
      noFill();

      pop();
    }
  }
  //#endregion
  //#region TANKS
  class Tank extends Elements {
    constructor(x, y, z, playerTank = false, driverName = `AI`, angle = 0, AIActive = `AIDisabled`, acc2x = 0) {
      super(x, y, z);

      this.bodyExplodePosition = createVector();
      this.bodyExplodeVelocity = createVector();

      this.turretExplodePosition = createVector();
      this.turretExplodeVelocity = createVector();

      this.cannonExplodePosition = createVector();
      this.cannonExplodeVelocity = createVector();

      this.cannonExplodeRotateAngle = createVector();
      this.cannonExplodeRotateAngularVelocity = createVector();


      this.size.x = 100;
      this.size.y = 110;
      this.size.z = 100;

      this.shellIsLoaded = true;

      this.collisionOffset.y = 90;
      this.acc2.x = acc2x;

      // this.ang.y = angle
      this.radius = 80;
      this.mass = 20; // MINIMUM 1, MAXIMUM ~20
      // this.size = createVector();w    

      this.turretAng = createVector()
      this.turretVel = createVector()
      this.turretAcc = createVector()

      this.dirXRecoil;
      this.dirYRecoil;

      this.driverName = driverName;
      this.playerTank = playerTank;
      this.objectType = `tank`;
      this.AIActive = AIActive;

      this.scale = 0.65;
      this.isTank = true;

      this.id = `${this.playerTank ? `PlayerTank_ID` : `AITank_ID`}${random(0, 999999999)}`

      //FIRE EVERY 60 FRAMES NEW SCANNING DUMMY SHELL FROM TURRET

      this.ai = {
        forward: false,
        backward: false,
        rotateLeft: false,
        rotateRight: false,

        turretLeft: true,
        turretRight: false,

        cannonUp: true,
        cannonDown: false,
      }
      this.randomState = {
        randomNumber: Math.random() * 10000,
        randomStateArray: [true, false],

        randomState1: false,
        randomState2: false,
        randomState3: false,
        randomState4: false,
        randomState5: false,
        randomState6: false,
        randomState7: false,
        randomState8: false,
        randomState9: false,
        randomState10: false,
      }
    }

    randomizeAI(number) {  // THE NUMBER IN THIS CASE IS TIED TO THE GAME "frameCount" 60 frames per second default

      if (number % 6 == 0) {
        let randomNumber = Math.random() * 100
        if (randomNumber < 10) {
          this.randomState.randomState1 = true;
          setTimeout(() => { this.randomState.randomState1 = false }, randomNumber * 100)
        }
      }

      else if (number % 12 == 0) {
        let randomNumber = Math.random() * 100
        if (randomNumber < 10) {
          this.randomState.randomState2 = true;
          setTimeout(() => { this.randomState.randomState2 = false }, randomNumber * 100)
        }
      }
      // VARIOUS RANDOMIZED STATES
      number % 60 == 0 ? this.randomState.randomState3 = randomStateArray[Math.floor(Math.random() * 2)] : null
      number % 120 == 0 ? this.randomState.randomState4 = randomStateArray[Math.floor(Math.random() * 2)] : null
      number % 240 == 0 ? this.randomState.randomState5 = randomStateArray[Math.floor(Math.random() * 2)] : null
      number % 300 == 0 ? this.randomState.randomState6 = randomStateArray[Math.floor(Math.random() * 2)] : null
      number % 400 == 0 ? this.randomState.randomState7 = randomStateArray[Math.floor(Math.random() * 2)] : null
      number % 500 == 0 ? this.randomState.randomState8 = randomStateArray[Math.floor(Math.random() * 2)] : null
      number % 600 == 0 ? this.randomState.randomState9 = randomStateArray[Math.floor(Math.random() * 2)] : null
      number % 800 == 0 ? this.randomState.randomState10 = randomStateArray[Math.floor(Math.random() * 2)] : null
    }

    show() {
      //CALCULATE COLLISION BOX CHANGE ON ROTATION
      let angleConvert = map(this.rot.x, -312.5, 312.5, -3.125, 3.125)
      angleConvert < 0 ? angleConvert *= -1 : null;
      this.size.x = sin(angleConvert) * 150 + 100
      this.size.z = -sin(angleConvert) * 130 + 210

      //COMPENSATE FOR ROTATION INNACURACY OF MODEL ROTATION
      if (this.rot.x > 312.5) {
        this.rot.x = -312.5
      }
      else if (this.rot.x <= -312.5) {
        this.rot.x = 312.5
      }
      if (this.turretAng.y > 3.125) {
        this.turretAng.y = -3.125
      }
      else if (this.turretAng.y <= -3.125) {
        this.turretAng.y = 3.125
      }

      //EXPLOSION CALCULATION
      // this.vel.add(this.bodyExplodeVelocity)
      // this.vel.add(this.bodyExplodeVelocity)
      // this.vel.add(this.bodyExplodeVelocity)

      //BODY   
      push();
      translate(
        this.pos.x + this.bodyExplodePosition.x,
        this.pos.y + 100 + this.bodyExplodePosition.y,
        this.pos.z + this.bodyExplodePosition.z
      );
      rotateY(-this.rot.x / 100);
      rotateZ(PI);
      rotateY(-PI / 2 + this.ang.y)
      rotateZ(this.ang.z);
      scale(this.scale);
      noStroke();
      ambientMaterial(100);
      texture(textures.m1a2Body);
      model(models.m1a2Body);
      pop();
      this.bodyExplodeVelocity.limit(1000);
      this.bodyExplodePosition.add(this.bodyExplodeVelocity);



      //TURRET
      push();
      translate(
        this.pos.x + this.turretExplodePosition.x,
        this.pos.y + 100 + this.turretExplodePosition.y,
        this.pos.z + this.turretExplodePosition.z
      );
      // this.turretAng.x += -movedX * 0.002 //MOVE BY MOUSE
      rotateY(PI / 2 + this.ang.y + this.turretAng.y);
      rotateZ(this.ang.z + PI);
      scale(this.scale);
      noStroke();
      ambientMaterial(100);
      texture(textures.m1a2Turret);
      model(models.m1a2Turret);
      pop();
      this.turretExplodeVelocity.limit(1000);
      this.turretExplodePosition.add(this.turretExplodeVelocity);

      //  CANNON
      push();
      translate(
        this.pos.x + this.cannonExplodePosition.x,
        this.pos.y + 100 + this.cannonExplodePosition.y,
        this.pos.z + this.cannonExplodePosition.z
      );
      rotateY(PI / 2 + this.turretAng.y + this.cannonExplodeRotateAngle.y);
      rotateZ(this.ang.z + PI + this.turretAng.x + this.cannonExplodeRotateAngle.x);
      this.turretAng.x > 0.03 ? this.turretAng.x = 0.03 :
        this.turretAng.x < -0.35 ? this.turretAng.x = -0.35 : null
      scale(this.scale);
      noStroke();
      ambientMaterial(100);
      texture(textures.m1a2Cannon);
      model(models.m1a2Cannon);
      pop();
      this.cannonExplodeVelocity.limit(1000);
      this.cannonExplodePosition.add(this.cannonExplodeVelocity);

      this.cannonExplodeRotateAngle.add(this.cannonExplodeRotateAngularVelocity);



      if (this.isDead) {
        this.bodyExplodeVelocity.add(0, 0.3, 0);
        this.cannonExplodeVelocity.add(0, 0.3, 0);
        this.turretExplodeVelocity.add(0, 0.3, 0);

        this.bodyExplodePosition.y > 0 ? this.bodyExplodeVelocity.y *= -0.3 : null;
        this.turretExplodePosition.y > 30 ? this.turretExplodeVelocity.y *= -0.3 : null;
        if (this.cannonExplodePosition.y > 50) {
          this.cannonExplodeVelocity.y *= -0.3;
          this.cannonExplodeRotateAngle.x = 0;
        }

        this.bodyExplodeVelocity.div(1.01, 1, 1.01);
        this.cannonExplodeVelocity.div(1.01, 1, 1.01);
        this.turretExplodeVelocity.div(1.01, 1, 1.01);

      }

      //THIS IS USED FOR RECOIL CALCULATION

      if (!this.isDead) {
        this.cannonExplodeVelocity.z /= 1.1
        this.cannonExplodeVelocity.x /= 1.1

        this.cannonExplodePosition.z /= 1.1
        this.cannonExplodePosition.x /= 1.1

        this.bodyExplodeVelocity.z /= 1.1
        this.bodyExplodeVelocity.x /= 1.1

        this.bodyExplodePosition.z /= 1.1
        this.bodyExplodePosition.x /= 1.1

        this.turretExplodeVelocity.z /= 1.1
        this.turretExplodeVelocity.x /= 1.1

        this.turretExplodePosition.z /= 1.1
        this.turretExplodePosition.x /= 1.1
      }

      this.dirXRecoil = map(sin(-this.turretAng.y), 0, 6.28, 0, 360);
      this.dirYRecoil = map(cos(-this.turretAng.y), 0, 6.28, 0, 360);
    }

    AIControlled() {
      this.vel.limit(5);         // TANK SPEED
      this.ang.limit(0.4)        // TANK ROTATION SPEED
      this.turretVel.limit(0.01) // TURRET ROTATION SPEED

      this.ai.cannonUp ? this.turretAcc.x -= 0.0005          // AI CANNON UP
        : this.ai.cannonDown ? this.turretAcc.x += 0.0005    // AI CANNON DOWN
          : this.turretVel.x /= 1.1;

      this.ai.turretLeft ? this.turretAcc.y += 0.0005        // AI TURRET LEFT
        : this.ai.turretRight ? this.turretAcc.y -= 0.0005   // AI TURRET RIGHT
          : this.turretVel.y /= 5;

      this.ai.rotateLeft ? this.acc2.x -= 0.5               // AI ROTATE LEFT    
        : this.ai.rotateRight ? this.acc2.x += 0.5          // AI ROTATE RIGHT
          : this.ang.x /= 1.1



      if (this.ai.forward === true) {                       // AI FORWARD
        this.acc.add(this.dirX * 0.25, 0, -this.dirY * 0.25)
      }
      else if (this.ai.backward) {                          // AI BACKWARD
        this.acc.add(0 - this.dirX * 0.25, 0, this.dirY * 0.25)
      } else {
        this.vel.z /= 1.1;
        this.vel.x /= 1.1;
      }

      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.acc.set(0);

      this.turretVel.add(this.turretAcc)
      this.turretAng.add(this.turretVel)
      this.turretAcc.set(0)

      this.ang.add(this.acc2);
      this.rot.add(this.ang);
      this.acc2.set(0);



      this.dirX = map(sin(this.rot.x / 100), 0, 628, 0, 360);
      this.dirY = map(cos(this.rot.x / 100), 0, 628, 0, 360);
    }
    setAI() {

      this.ai.forward = this.randomState.randomState4;

      this.randomState.randomState10 === false
        ? this.ai.rotateLeft = this.randomState.randomState1
        : this.ai.rotateRight = this.randomState.randomState1;
    }

    fire() {
      if (!this.isDead && this.shellIsLoaded) {
        //THIS ADDS RECOIL TO THE TANK
        this.shellIsLoaded = false;
        this.bodyExplodeVelocity.z = this.dirYRecoil / 200
        this.bodyExplodeVelocity.x = -this.dirXRecoil / 200;

        this.turretExplodeVelocity.z = this.dirYRecoil / 200
        this.turretExplodeVelocity.x = -this.dirXRecoil / 200

        this.cannonExplodeVelocity.z = this.dirYRecoil / 10
        this.cannonExplodeVelocity.x = -this.dirXRecoil / 10;
        // this.cannonExplodeVelocity.add      

        //CANNON SOUND
        this.playerTank ? sounds.playerCannon.play() : sounds.otherCannon.play();
        //SHOW LOADER PICTURE
        this.playerTank ? hud.shellLoaderGif.style.display = 'initial' : null;



        Shell.isFired(
          this.pos.x,
          this.pos.y,
          this.pos.z,
          -this.turretAng.y * 100,
          this.turretAng.x,
          this.rot.z,
          this.playerTank,
          `HESH`,
          this.id,
        )
      }
    }
    scanTurret() {
      if (!this.isDead) {
        DummyShellTurret.isFired(
          this.pos.x,
          this.pos.y,
          this.pos.z,
          -this.turretAng.y * 100,
          this.turretAng.x,
          this.rot.z,
          this.playerTank,
          `TURRET_DUMMY`,
          this.id
        )
      }
    }

    reloadShell(numberRate) {
      if (frameCount % numberRate == 0) {
        this.playerTank ? hud.shellLoaderGif.style.display = 'none' : null;
        this.shellIsLoaded = true;
      }
    }
    scanBody() {
      if (!this.isDead) {
        DummyShellBody.isFired(
          this.pos.x,
          this.pos.y,
          this.pos.z,
          this.rot.x,
          this.rot.y,
          this.rot.z,
          this.playerTank,
          `BODY_DUMMY`,
          this.id
        )
      }
    }
    getTurretHeading(posX1, posX2, posY1, posY2,) {

      let v1 = createVector(posX1 - posX2, posY1 - posY2);

      let myHeading = v1.heading();
      myHeading = map(myHeading, -PI, PI, -PI - PI / 2, PI / 2);
      if (myHeading < -3.14) {
        myHeading += PI * 2;

      }
      if (this.turretAng.y < -myHeading) {
        this.ai.turretLeft = true;
        this.ai.turretRight = false;
      }
      if (this.turretAng.y > -myHeading) {
        this.ai.turretRight = true;
        this.ai.turretLeft = false;
      }

    }

  }
  //#endregion
  //#region SHELLS DUMMY SHELLS AND PARTICLES
  class Shell extends Tank {
    constructor(x, y, z, rotX, turretAngX, rotZ, playerTank, type = `HESH`, id) {
      super();
      this.pos.x = x;
      this.pos.y = y + 60;
      this.pos.z = z;


      this.id = id;
      this.isTank = false;

      this.collisionOffset.y = -10;
      this.objectType = `shell`;

      this.size.x = 10;
      this.size.y = 10;
      this.size.z = 10;

      this.rot.x = rotX;
      this.turretAng.x = turretAngX; //VERTICAL TURRET POSITION
      this.rot.z = rotZ;
      this.AIActive = false;
      this.radius = 10;

      this.vel.limit(1000)

      this.vel.y = (this.turretAng.x * 80) - 5;

      this.type = type;

      this.playerShell = playerTank;

      this.setCollision = true;
    }

    show() {
      // this.pos.y =  this.pos.y - 60
      push();
      translate(this.pos.x, this.pos.y, this.pos.z);
      rotateY(-this.rot.x / 100);
      rotateX(this.vel.y / 75)
      scale(2);
      noStroke();
      specularMaterial(255, 230, 50);
      // texture(textures.shellHESH);

      model(models.shellHESH);
      pop();

      // MULTIPLY THESE TO MAKE MISSILE PHYSICS 
      // this.acc.z = -this.dirY*100;
      // this.acc.x = this.dirX*100;

      // UNCOMMENT THESE TO INCREASE SHELL SPEED
      // this.pos.x += -this.dirX * 150;
      // this.pos.z += this.dirY * 150;


      this.vel.z = -this.dirY * 150
      this.vel.x = this.dirX * 150;

      if (this.playerShell) {
        this.pos.x += this.dirX * hangar.tankUpgrades.getCannonValue() * 5;
        this.pos.z += -this.dirY * hangar.tankUpgrades.getCannonValue() * 5;
      }
    }

    static isFired(x, y, z, rotX, rotY, rotZ, playerTank, type = `HESH`, id) {
      assets.collison.objects.push(new Shell(x, y, z, rotX, rotY, rotZ, playerTank, type = `HESH`, id))
    }
  }
  class DummyShellTurret extends Tank {
    constructor(x, y, z, rotX, turretAngX, rotZ, playerTank, type = `DUMMY`, id) {
      super(x, y + 50, z);

      this.collisionOffset.y = -10;

      this.size.x = 100;
      this.size.y = 100;
      this.size.z = 100;
      this.rot.x = rotX;
      this.turretAng.x = turretAngX; //VERTICAL TURRET POSITION
      this.rot.z = rotZ;

      this.AIActive = false;
      this.isTank = false;

      this.id = id;

      this.objectType = `dummyShellTurret`;

      this.radius = 10;

      this.vel.limit(1000)

      this.vel.y = (this.turretAng.x * 80) - 5;

      this.type = type;

      this.playerShell = playerTank;

      this.setCollision = true;
    }

    show() {
      // this.pos.y =  this.pos.y - 60
      // push();
      // translate(this.pos.x, this.pos.y, this.pos.z);
      // rotateY(-this.rot.x / 100);
      // rotateX(this.vel.y / 75)
      // scale(1);
      // color(255);
      // box(100, 100)
      // ambientMaterial(100);
      // pop();

      // MULTIPLY THESE TO MAKE MISSILE PHYSICS 
      // this.acc.z = -this.dirY * 5000;
      // this.acc.x = this.dirX * 5000;

      this.vel.z = -this.dirY * 1000
      this.vel.x = this.dirX * 1000;
    }

    static isFired(x, y, z, rotX, rotY, rotZ, playerTank, type = `HESH`, id) {
      assets.collison.objects.push(new DummyShellTurret(x, y, z, rotX, rotY, rotZ, playerTank, type = `HESH`, id))
    }
  }
  class DummyShellBody extends Tank {
    constructor(x, y, z, rotX, turretAngX, rotZ, playerTank, type = `DUMMY`, id) {
      super(x, y + 50, z);

      this.collisionOffset.y = -10;

      this.AIActive = false;

      this.size.x = 100;
      this.size.y = 100;
      this.size.z = 100;
      this.rot.x = rotX;
      this.turretAng.x = turretAngX; //VERTICAL TURRET POSITION
      this.rot.z = rotZ;

      this.radius = 10;
      this.isTank = false;


      this.vel.limit(1000)

      this.id = id;

      this.objectType = `dummyShellBody`;

      this.vel.y = (this.turretAng.x * 80) - 5;

      this.type = type;

      this.playerShell = playerTank;

      this.setCollision = true;

      //SO IT DONT COLLIDES WITH PARENT OBJECT
      // setTimeout(() => {
      //   this.setCollision = true
      // }, 100);

    }

    show() {
      // this.pos.y =  this.pos.y - 60
      // push();
      // translate(this.pos.x, this.pos.y, this.pos.z);
      // rotateY(-this.rot.x / 100);
      // rotateX(this.vel.y / 75)
      // scale(1);
      // color(255, 0, 0);
      // box(100, 100)
      // ambientMaterial(100);
      // pop();

      // MULTIPLY THESE TO MAKE MISSILE PHYSICS 
      // this.acc.z = -this.dirY * 5000;
      // this.acc.x = this.dirX * 5000;

      this.vel.z = -this.dirY * 2000
      this.vel.x = this.dirX * 2000;
    }

    static isFired(x, y, z, rotX, rotY, rotZ, playerTank, type = `HESH`, id) {
      assets.collison.objects.push(new DummyShellBody(x, y, z, rotX, rotY, rotZ, playerTank, type = `HESH`, id))
    }
  }
  class Particles extends Elements {
    constructor(x, y, z) {
      super(x, y, z);
      this.vel = p5.Vector.random3D().normalize().mult(random(15, 25))
      let p = 255;
      this.color = [p, p, p]
      this.container = [];
    }
    update() {
      this.pos.add(this.vel)
    }
    show() {
      push();
      noStroke();
      this.vel.add(this.gravity[0], this.gravity[1] / 10, this.gravity[2]);
      translate(this.pos.x, this.pos.y, this.pos.z)
      emissiveMaterial(this.color[0], this.color[1], this.color[2], 255);
      sphere(5, 3, 2);
      pop();
    }
    delete(frames) {
      frameCount % frames == 0 ? this.container = [] : null;
    }
  }
  //#endregion
  //#region PRELOAD
  function preload() {
    //THIS FUNCTION LOADS ALL DATA BEFORE STARTING THE SKETCH
    //PRELOAD ALL DATA
    //TEXTURES TO LOAD DEPENDING ON LEVEL WHICH IS ON
    menu.loadingScreen.style.display = 'block';

    // ONLY 2 DIFFERENT LEVELS FOR NOW

    //DAWN LEVEL ORANGE
    switch (+main.level % 3) {
      case 1:

        textures.sky = loadImage("files/background/sky2.jpg");
        textures.terrain = loadImage("files/background/sandTexture.jpg");
        textures.brick = loadImage("files/background/brick.jpg");

        //TREE1
        models.complexTree.model.body = loadModel("files/models/scenery/trees/tree1noleaves.obj");
        models.complexTree.model.flowers = loadModel("files/models/scenery/trees/tree/nothing.obj");
        models.complexTree.model.leaves = loadModel("files/models/scenery/trees/tree/nothing.obj");
        models.complexTree.texture.body = loadImage("files/models/scenery/trees/tree/treeBody/bark1.jpg");


        models.grass = loadModel("files/models/scenery/grass/SpiderPlant.obj");
        textures.grass = loadImage("files/models/scenery/grass/spiderPlant/spiderLeafClean.png");

        options.grassScale = 1;
        options.grassCount = 0.7;
        options.treesCount = 2;
        options.ambientLight = [30, 30, 20];

        options.sunReflectionOffset = [100, -5000, -2000];
        options.sunReflectionColor = [155, 100, 0];


        break;

      //DAY LEVEL DESERT
      case 2:
        textures.sky = loadImage("files/background/sky1.jpg");
        textures.terrain = loadImage("files/background/sandTexture.jpg");
        textures.brick = loadImage("files/background/brick.jpg");

        //TREE1  
        models.complexTree.model.body = loadModel("files/models/scenery/trees/tree/treeBody.obj");
        models.complexTree.model.flowers = loadModel("files/models/scenery/trees/tree/treeFlowers.obj");
        models.complexTree.model.leaves = loadModel("files/models/scenery/trees/tree/leaves.obj");
        models.complexTree.texture.body = loadImage("files/models/scenery/trees/tree/treeBody/bark1.jpg");
        models.complexTree.texture.leaves = loadImage("files/models/scenery/trees/tree/treeBody/bladeren.jpg");
        models.complexTree.texture.flowers = loadImage("files/models/scenery/trees/tree/treeBody/bladeren.jpg");

        models.grass = loadModel("files/models/scenery/grass/SpiderPlant.obj");
        textures.grass = loadImage("files/models/scenery/grass/spiderPlant/spiderLeafClean.png");

        options.grassScale = 1;
        options.grassCount = 0.7;
        options.treesCount = 1.5;

        options.ambientLight = [230, 240, 250];
        options.sunReflectionOffset = [4000, 1000, 0];
        options.sunReflectionColor = [255, 255, 200];
        break;

      //DUSK LEVEL CLOUDY
      case 0:
        textures.sky = loadImage("files/background/sky3.jpg");
        textures.terrain = loadImage("files/background/grassTexture1.jpg");
        textures.brick = loadImage("files/background/brick.jpg");

        //TREE1  
        models.complexTree.model.body = loadModel("files/models/scenery/trees/tree/nothing.obj");
        models.complexTree.model.flowers = loadModel("files/models/scenery/trees/tree/nothing.obj");
        models.complexTree.model.leaves = loadModel("files/models/scenery/trees/tree/nothing.obj");

        models.grass = loadModel("files/models/scenery/grass/SpiderPlant.obj");
        textures.grass = loadImage("files/models/scenery/grass/spiderPlant/spiderLeafClean.png");

        options.grassScale = 1;
        options.grassCount = 2;
        options.treesCount = 0;

        options.ambientLight = [0, 0, 50];
        options.sunReflectionOffset = [4000, -1000, -3000];
        options.sunReflectionColor = [100, 120, 150];
        break;
      default:
        break;
    }

    // tankModel = loadModel("files/models/t34.obj");

    models.m1a2Body = loadModel("files/models/tanks/m1a2/m1a2body.obj");
    models.m1a2Turret = loadModel("files/models/tanks/m1a2/m1a2turret.obj");
    models.m1a2Cannon = loadModel("files/models/tanks/m1a2/m1a2cannon.obj");

    textures.m1a2Body = loadImage("files/textures/unclamped2.jpg")
    textures.m1a2Cannon = loadImage("files/textures/unclamped2.jpg")
    textures.m1a2Turret = loadImage("files/textures/unclamped2.jpg")
    textures.desertCamo = loadImage("files/textures/camo1.jpg")

    models.tree1 = loadModel("files/models/scenery/trees/tree1noleaves.obj");
    models.tree3 = loadModel("files/models/scenery/trees/treeBoomDobro.obj");
    models.steelBlockadeModel = loadModel("files/models/scenery/objects/steelBlockade.obj");

    models.shellHESH = loadModel("files/models//tanks/tankShells/g1.obj");

    // textures.t34 = loadImage("files/textures/t34.jpg");
    textures.shellHESH = loadImage("files/textures/HESH.png");


    textures.tree1 = loadImage("files/models/scenery/trees/tree1noleaves/tree1.jpg");
    textures.treeBarkTexture = loadImage("files/models/scenery/trees/treeWithLeaves/bark1.jpg");
    tree3Texture = loadImage("files/models/scenery/trees/treeBoomDobro/bladeren.jpg");

    //SOUNDS
    soundFormats('mp3', 'ogg');
    sounds.playerCannon = loadSound("files/sounds/pTankFireMono");
    sounds.otherCannon = loadSound("files/sounds/otherTankFire");

    sounds.nearExplosion1 = loadSound("files/sounds/explosionNear1");
    sounds.nearExplosion2 = loadSound("files/sounds/explosionNear2");
    sounds.distantExplosion1 = loadSound("files/sounds/explosionDistant1");
    sounds.distantExplosion2 = loadSound("files/sounds/explosionDistant2");


    // SOUND VOLUME AMMOUNTS
    sounds.playerCannon.setVolume(0.5);

  }
  //#endregion
  //#region SETUP
  function setup() {
    setAttributes('antialias', true);
    createCanvas(windowWidth, windowHeight, WEBGL);
    menu.canvas[0].style.display = 'block';
    hud.container.style.display = 'flex';
    menu.loadingScreen.style.display = 'none';


    //CREATE CAMERA
    camera.body = createCamera();
    perspective(PI / 2.3, width / height, 0.01, 35000)

    //CREATE ESSENTIALS
    assets.collison = new Collision();
    assets.environment = new Environment();
    textureWrap(MIRROR);
    assets.terrain = new Terrain(0, 0, 25000, 25000, textures.terrain);
    assets.environment.sky = new Sky(0, 0, 0);
    particles = new Particles();

    //CREATE PLAYER TANK
    pTank = new Tank(0, -100, 0, true, `BASHO`, 1, false, 0);
    assets.collison.objects.push(pTank);
    console.log(pTank);

    //CREATE ENEMY TANKS
    for (let tankCount = 0; tankCount < options.tanksCount; tankCount++) {
      console.log('tank has been spawned');
      assets.collison.objects.push(new Tank(random(-4000, 4000), -100, random(-4000, -6000), false, `AI Tank`, 100, `AIActive`, 60))
    }

    //CREATE SCENERY
    for (let grassCount = 0; grassCount < 150 * options.sceneryCount * options.grassCount; grassCount++) {
      assets.collison.objects.push(new Grass(random(-10000, 10000), 0, random(-10000, 10000), PI))
    }
    for (let treeCount = 0; treeCount < 60 * options.sceneryCount * options.treesCount; treeCount++) {
      assets.collison.objects.push(new YellowTree(random(-10000, 10000), 0, random(-10000, 10000)))
    }
    //CREATE WALLS, BUT GRAPHICS IS GLITCHY SO THEY ARE NOT CREATED
    // for (let blocks = 1; blocks < 30; blocks++) {  
    //     assets.collison.objects.push(new Walls(random(-8000,8000), 50, random(-8000,8000), PI / 2,PI / 2,PI / 2))    
    //    assets.collison.objects.push(new Walls(random(-8000,8000), 50, random(-8000,8000), PI,PI / 2))    
    // }
  }
  //#endregion
  //#region DRAW

  function draw() {

    background(125, 195, 255);
    //FRAMERATE DROPPING FOR DEBUGGING
    // frameCount(1);
    // frameRate(0.0025)     

    //LIGHT
    // lightFalloff(1, 0, 0);
    //SHOW SKY AND SET POSITION OF SKY   
    assets.environment.sky.show();
    assets.environment.sky.position.set(pTank.pos.x, 100, pTank.pos.z)

    ambientLight(options.ambientLight);
    pointLight(options.sunReflectionColor[0], options.sunReflectionColor[1], options.sunReflectionColor[2], pTank.pos.x - options.sunReflectionOffset[0], -600 + options.sunReflectionOffset[2], pTank.pos.z + options.sunReflectionOffset[1]);

    particles.container.forEach((particle) => {
      particle.update();
      particle.show();
    })
    if (particles.container.length > 0) {
      pointLight(250, 240, 200, particles.container[0].pos.x, particles.container[0].pos.y, particles.container[0].pos.z);
    }


    assets.collison.collision();
    assets.collison.measureDistance();


    //#region CAMERA
    //CLICK MOUSE TO LOOK AROUND
    if (assets.lockOn) {
      camera.body.pan(-movedX * 0.002);
      camera.body.tilt(movedY * 0.002);
    }

    //MOVE AROUND WITH NUMPAD KEYS IN CERTAIN CAMERA MODES
    keyIsDown(104) ? camera.body.move(0, 0, -5) : false;  //NUM 8  FORWARD
    keyIsDown(98) ? camera.body.move(0, 0, 5) : false;   //NUM 2  BACKWARD
    keyIsDown(100) ? camera.body.move(-5, 0, 0) : false;  //NUM 4  LEFT
    keyIsDown(102) ? camera.body.move(5, 0, 0) : false;   //NUM 6  RIGHT
    keyIsDown(97) ? camera.body.move(0, 5, 0) : false;   //NUM 1  DOWN
    keyIsDown(103) ? camera.body.move(0, -5, 0) : false;   //NUM 7  UP 

    //BOUNDRY FOR FLOOR FOR THE CAMERA
    camera.body.eyeY > 0 ? camera.body.setPosition(camera.body.eyeX, 0, camera.body.eyeZ) : false;

    //FREE MOVING CAMERA CONDITIONS
    camera.mode === 0 ? camera.body.setPosition(camera.body.eyeX, camera.body.eyeY, camera.body.eyeZ) // FREE LOOK
      : camera.mode === 1 ? camera.body.setPosition(pTank.pos.x, camera.body.eyeY = -4197, pTank.pos.z) //BIRD EYE LOOK
        : camera.mode === 2 ? camera.body.setPosition(pTank.pos.x, pTank.pos.y, pTank.pos.z) //FIRST PERSON
          : false;


    keyIsDown(100) && camera.mode === 2 ? camera.body.pan(pTank.turretVel.y) : false;
    keyIsDown(102) && camera.mode === 2 ? camera.body.pan(pTank.turretVel.y) : false;
    //#endregion

    // pTank.seek(createVector(500, 1000));

    //DRAW TERRAIN      
    assets.terrain.show();

    //MOUSE PRESSED
    if (mouseIsPressed) {
      if (!assets.lockOn) {
        assets.lockOn = true;
        requestPointerLock();
      } else {
        exitPointerLock();
        assets.lockOn = false;
      }
    }


    let tankCount = 0;
    /////////////////////////////////////
    //LOOP FOR REDRAWING CLASS METHODS///
    /////////////////////////////////////
    assets.collison.objects.forEach((object) => {
      object.applyForce(createVector(assets.environment.gravity[0], assets.environment.gravity[1], assets.environment.gravity[2]));

      //ENEMY TANKS REDRAWING
      if (object.playerTank === false && object.objectType == `tank`) {
        frameCount % 120 == 0 ? object.scanTurret() : null; //EACH 2 SECONDS ENEMY TANKS SCAN FOR YOUR TANK
        object.randomizeAI(frameCount);
      }

      if (object.objectType == `tank`) {
        tankCount++;
        object.playerTank
          ? object.reloadShell(300 / +hangar.tankUpgrades.getCannonValue())
          : object.reloadShell(300 / options.enemyTankRateOfFire);
      }
      if (object.AIActive === `AIActive`) {
        object.AIControlled();
        object.setAI();
        object.getTurretHeading(object.pos.x, pTank.pos.x, object.pos.z, pTank.pos.z)
      }
      object.playerTank === true ? object.playerControlled() : null;
      object.AIActive === false && object.playerTank === false ? object.updateOther() : null;

      (object instanceof Shell) === false ? object.edges() : null;
      object.show();
    })

    //HUD AND HANGAR
    hud.enemyTanks.innerHTML = tankCount - 1;
    hud.moneyValue.innerText = playerEconomy.getMoneyCount();

    if (pTank.isDead) {

      playerScore.setHigh();
      playerScore.reset();
      document.getElementsByClassName(`centerText`)[0].style.display = `flex`;

      // hangar.tankUpgrades.resetAll(); // RESET ALL UPGRADES ON DEATH, BUT GAME BECOMES TOO DIFFICULT
      //SOME TIMEOUT AFTER DEATH TO RETURN TO MAIN MENU
      if (frameCount % 600 == 0) {
        window.location.reload();
      }

    }
    if (tankCount - 1 === 0 && !pTank.isDead) {
      document.getElementsByClassName(`centerText`)[1].style.display = `flex`;
      //SOME TIMEOUT AFTER WINNING BEFORE GO TO NEXT LEVEL
      if (frameCount % 500 == 0) {
        Main.nextLevel();
        Main.save(+localStorage.getItem('level'));

        playerScore.add(0);
        playerScore.setHigh();
        hangar.go();
        window.location.reload();
      }
    }

    //DELETE PARTICLES AFTER 30 FRAMES OR 0.5 SECOND
    particles.delete(30);
    //REGULARY DELETE DEAD OBJECTS FROM ARRAY
    frameCount % 300 == 0 ? assets.collison.objects.forEach((object, index) => object.isDead ? assets.collison.objects.splice(index, 1) : null) : null;
  }

  //#endregion


  //SOME OTHER KEYBOARD KEY COMMANDS
  keyPressed = () => {
    keyCode === 67 ? camera.mode++ : null;  //C KEY
    camera.mode === 4 ? camera.mode = 0 : null; //CYCLE CAMERA TO FIRST MODE

    if (keyCode === 32) {
      pTank.fire(true);//SPACE KEY  
    }
    if (keyCode === 27) { // ESCAPE KEY
      Main.toggleMenu();
    }
  }

  menu.continueGameButton.addEventListener('click', () => {
    Main.toggleMenu();
  })
}

//RESET THE COUNTER TO ZERO SO WHEN PAGE IS REFRESHED IT RETURNS TO ZERO
Main.level(0);

