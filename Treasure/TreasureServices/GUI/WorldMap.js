import Game from '../GameLogic/Game.js';
import GlobalCounter from '../GlobalCounter.js';
import Points from './Points.js';
import Document from './Document.js';

const WorldMap = {
    container: document.getElementById('worldMapContainer'),
    buttons: document.getElementsByClassName('levelButtons'),

    show() {
        this.container.style.display = 'flex';
    },

    hide() {
        this.container.style.display = 'none';
    },

    populateButtons() {
        let totalLevels = +localStorage.getItem('treasureGameMaxLevel');

        // UNLOCKED LEVEL BUTTONS
        for (let i = 1; i < totalLevels + 1; i++) {
            let emptyStar = `<img class="hud-stars" src="Images/emptyStar.png" alt="">`;
            let shinyStar = `<img class="hud-stars" src="Images/star.png" alt="">`;
            let stars = Points.getStarsForLevel(i);
            let points = 0;

            if (Points.getPointsForLevel(i) != null) points = Points.getPointsForLevel(i);

            this.container.innerHTML +=
                `
                <button class="levelButtons">
                    <div class="levelButtonLevelValue"> Level ${i}</div>
                    <div class="levelButtonStarValue">
                        ${stars >= 1 ? shinyStar : emptyStar}
                        ${stars >= 2 ? shinyStar : emptyStar} 
                        ${stars == 3 ? shinyStar : emptyStar}
                    </div>
                    <div class="levelButtonScoreValue">${points}</div>
                </button>   

            `;
        }
        // LOCKED LEVEL BUTTONS
        for (let i = totalLevels + 1; i < 30 + 1; i++) {
            let emptyStar = `<img src="Images/emptyStar.png" alt="">`;
            this.container.innerHTML +=
                `
                <button class="levelButtonDisabled" disabled>
                    <div class="levelButtonLevelValue"> Level ${i}</div>
                    <div class="levelButtonStarValue">
                        ${emptyStar}
                        ${emptyStar} 
                        ${emptyStar}
                    </div>
                    <div class="levelButtonScoreValue">0</div>
                </button>   

            `;
        }
    }
}

Game.setMaxLevel();
WorldMap.populateButtons();

for (let i = 0; i < WorldMap.buttons.length; i++) {
    WorldMap.buttons[i].addEventListener('click', () => {
        console.log('Level selected', i + 1);
        localStorage.setItem('treasureGameLevel', i + 1);
        GlobalCounter.level = i + 1;
        Document.reload();
    });
};


export default WorldMap;