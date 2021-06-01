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

  export default GlobalObjects;