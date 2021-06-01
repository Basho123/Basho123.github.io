
import GlobalCounter from '../GlobalCounter.js';
import Font from '../../TreasureLibrary/PreloadModels/Font.js';


const MouseText = {
    show(points, startingFrame, currentFrame, positionX, positionY) {

        //each frame the position goes up by 0.3
        GlobalCounter.lastMouseClickedCoordinates[1]-= 0.3;

        if(currentFrame - startingFrame < 180){
            if (GlobalCounter.singleHitKills >= 9) {
                textFont(Font.openSans);
                textSize(width / 3);
                textAlign(CENTER, CENTER);
                textSize(52);
                text(points, positionX, positionY);
                fill(255, 255, 0);
            }
    
            else if (GlobalCounter.singleHitKills >= 6) {
                textFont(Font.openSans);
                textSize(width / 3);
                textAlign(CENTER, CENTER);
                textSize(42);
                text(points, positionX, positionY);
                fill(0, 255, 0);
            }
            else if (GlobalCounter.singleHitKills >= 3) {
                textFont(Font.openSans);
                textSize(width / 3);
                textAlign(CENTER, CENTER);
                textSize(32);
                text(points, positionX, positionY);
                fill(255);
            }
        }        
    },
}

export default MouseText;