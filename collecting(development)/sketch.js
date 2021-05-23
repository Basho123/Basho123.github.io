

const textures = {
  floorTexture: "",
}


let WorldObjects = {
  player: [],
  diamonds: [],
  obstacles: [],
}

let player = {
  xAxis: 700,
  yAxis: 700,
  movementsUsed: 0,
}


class Camera {
  static constructor() {
    this.body = 0;
    this.mode = 2;

    this.xPosition = 0;
    this.xPositionSpeed = 0;

    this.yPosition = 0;
    this.yPositionSpeed = 0;

    this.zPosition = 0;
    this.zPositionSpeed = 0;
  }

  static activateKeyboardControls() {
    keyIsDown(104) ? Camera.body.move(0, -5, 0) : false;  //NUM 8  FORWARD
    keyIsDown(98) ? Camera.body.move(0, 5, 0) : false;   //NUM 2  BACKWARD
    keyIsDown(100) ? Camera.body.move(-5, 0, 0) : false;  //NUM 4  LEFT
    keyIsDown(102) ? Camera.body.move(5, 0, 0) : false;   //NUM 6  RIGHT
    keyIsDown(97) ? Camera.body.move(0, 0, 5) : false;   //NUM 1  ZOOM OUT
    keyIsDown(103) ? Camera.body.move(0, 0, -5) : false;   //NUM 7  ZOOM IN
  }
}



class Environment {

  static constructor() {
    this.terrainScale = 1;
  }

  static terrain(detailLevel, textureImage) {

    //terrain
    push();
    translate(0, 0, 0);
    // ambientMaterial(0);
    noStroke();
    texture(textureImage);
    scale(this.terrainScale);

    beginShape(TRIANGLE_STRIP);
    vertex(0, 0, 0, 0, 0);
    vertex(0, 200, 0, 0, 100 * detailLevel);
    vertex(200, 0, 0, 100 * detailLevel, 0);
    vertex(200, 200, 0, 100 * detailLevel, 100 * detailLevel);
    vertex(200, 0, 0, 0, 0);
    vertex(200, 200, 0, 0, 100 * detailLevel);
    vertex(200, 0, 0, 100 * detailLevel, 0);
    vertex(200, 200, 0, 100 * detailLevel, 100 * detailLevel);
    endShape(CLOSE);

    pop();
    //terrain overlay grid
    for (let i = 0; i < 200 * this.terrainScale; i += 200) {
      for (let g = 0; g < 200 * this.terrainScale; g += 200) {
        push();
        translate(100 + g, 100 + i, 40);
        noStroke();

        if (i % 400 == 0) fill(200, 10 + ((g % 400) / 2));
        else fill(200, 60 - ((g % 400) / 2));

        plane(200, 200);     
        pop();
      }
    }

    if (player.xAxis > 200 * this.terrainScale) {
      player.xAxis -= 200;
    }
    if (player.xAxis < 0) {
      player.xAxis += 200;
    }
    if (player.yAxis > 200 * this.terrainScale) {
      player.yAxis -= 200;
    }
    if (player.yAxis < 0) {
      player.yAxis += 200;
    }
  }
}


//Abstract class
class BaseEntity {
  constructor(xPosition, yPosition, zPosition, xSize = 100, ySize = 100, zSize = 100, radius = 100) {
    //POSITION AND SPEED OF THE OBJECTS
    this.pos = createVector(xPosition, yPosition, zPosition);
    this.vel = createVector();
    this.acc = createVector();

    //ROTATION AND ANGULAR SPEED OF OBJECTS
    this.ang = createVector();
    this.angVel = createVector();
    this.angAcc = createVector();

    //SIZE IS USED FOR COLLISION PURPOSES
    this.size = createVector(xSize, ySize, zSize)

    //COLLISION OFFSET IS USED TO OFFSET THE COLLISION POSITION OF A GIVEN OBJECT
    this.collisionOffset = createVector();

    //RADIUS IS USED FOR MEASURING DISTANCE AND TRIGGER PURPOSEES
    this.radius = radius;

    //GRAVITY IS ADDED TO ALL OBJECTS FROM THIS POINT ON

    //COLLISION IS SET TO TRUE FOR ALL OBJECTS BY DEFAULT
    this.collisionIsSet = true;
    this.hasColided = false;

    //EVERY OBJECT GETS ITS OWN ID
    this.id = random(999999999)

    //DEFAULT OBJECTS MASS, MASS IS USED FOR PHYSICS
    this.mass = 1;

    //EVERY OBJECT ISN'T DEAD BY DEFAULT
    this.isDead = false;
  }

  show() {
    console.log("not implemented in some objects");
  };
}

class Player extends BaseEntity {
  constructor(xPosition, yPosition, zPosition) {
    super();
    this.pos = createVector(xPosition, yPosition, zPosition);
  }

  show() {
    push();
    translate(this.pos.x, this.pos.y, this.pos.z + 50);
    noStroke();
    // fill(100);
    specularMaterial(255);

    if (this.pos.z > 30) this.vel.add(0, 0, -0.981);
    else this.vel.z = 0;

    sphere(50);
    pop();

    this.pos.add(this.vel);
    this.vel.add(this.acc);
  }

  activateKeyboardControls(xAxis, yAxis) {
    this.pos.x < xAxis ? this.vel.x = 10 : this.pos.x > xAxis ? this.vel.x = -10 : this.vel.x = 0;
    this.pos.y < yAxis ? this.vel.y = 10 : this.pos.y > yAxis ? this.vel.y = -10 : this.vel.y = 0;
  }
}

class Diamond extends BaseEntity {
  constructor(xPosition, yPosition, zPosition) {
    super();
    this.pos = createVector(xPosition, yPosition, zPosition);

  }

  show() {
    push();
    translate(this.pos.x, this.pos.y, this.pos.z + 50);
    noStroke();
    // fill(100);
    specularMaterial(0, 200, 255);

    if (this.pos.z > 30) this.vel.add(0, 0, -0.981);
    else this.vel.z = 0;

    this.pos.add(this.vel);
    this.vel.add(this.acc);

    sphere(50, 4, 4);
    pop();
  }
}

function preload() {
  textures.floorTexture = loadImage("Images/Textures/sandTexture.jpg");
}


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  textureWrap(MIRROR);

  // Map size
  Environment.terrainScale = 14;



  let arrayOfRandomNumbers = [];
  let arrayOfRandomNumbers2 = [];


  for (i = 0; i < Environment.terrainScale; i++) {
    let randomNumber = Math.floor(random(Environment.terrainScale));
    let randomNumber2 = Math.floor(random(Environment.terrainScale));

    if (arrayOfRandomNumbers.some(x => x == randomNumber)) {
      i--;
      continue;
    };

    if (arrayOfRandomNumbers2.some(x => x == randomNumber2 && x == randomNumber)) {
      i--;
      continue;
    };

    arrayOfRandomNumbers.push(randomNumber);
    arrayOfRandomNumbers2.push(randomNumber2);
  }
  console.log(arrayOfRandomNumbers);



  WorldObjects.player = new Player(player.xAxis, player.yAxis, 100);

  for (i = 0; i < Environment.terrainScale; i++) {
    WorldObjects.diamonds.push(new Diamond(200 * i + 100, 200 * arrayOfRandomNumbers[i] + 100, 100));
    WorldObjects.diamonds.push(new Diamond(200 * i + 100, 200 * arrayOfRandomNumbers2[i] + 100, 100));
  }





  //Initialize camera
  Camera.body = createCamera();
  Camera.body.setPosition(100 * Environment.terrainScale, 120 * Environment.terrainScale, 150 * Environment.terrainScale);
  // Camera.body.setPosition(player.xAxis, player.yAxis+500, 150 * Environment.terrainScale);

  Camera.body.tilt(-0.1);
}
function draw() {
  background(0, 0, 0);


  //SETTINGS: x pos, y pos, z pos, textureDetail, textureFile
  Environment.terrain(15, textures.floorTexture);

  ambientLight(50);
  directionalLight(255, 255, 255, -1000, -1000, -1000);

  WorldObjects.player.show();
  WorldObjects.player.activateKeyboardControls(player.xAxis, player.yAxis);

  Camera.body.pan(WorldObjects.player.vel.x * -0.0000);


  WorldObjects.diamonds.forEach((x, i) => {

    x.show();

    let distance = dist(
      x.pos.x,
      x.pos.y,
      WorldObjects.player.pos.x,
      WorldObjects.player.pos.y);

    if (distance < 50) {
      WorldObjects.diamonds.splice(i, 1);
    }

  });


  Camera.activateKeyboardControls();

  perspective(PI / 2.3, width / height, 0.01, 35000);
}

function keyPressed() {

  if (keyCode === 87) { // W KEY
    player.yAxis -= 200;
    player.movementsUsed++;
  }
  if (keyCode === 83) {  // S KEY
    player.yAxis += 200;
    player.movementsUsed++;
  }
  if (keyCode === 65) { // A KEY
    player.xAxis -= 200;
    player.movementsUsed++;
  }
  if (keyCode === 68) { // D KEY
    player.xAxis += 200;
    player.movementsUsed++;
  }

  console.log(player.movementsUsed);
}