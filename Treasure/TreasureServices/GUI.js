// GUI.js for Treasure Game

//Extending existing document class
class Document {
    static mainMenu = document.getElementById('mainMenu');
    static canvas = document.getElementsByTagName('canvas');
    static playButton = document.getElementById('playButton');
    static continueButton = document.getElementById('continueButton');
    static restartGameButton = document.getElementById('restartGame');
    static worldMapButton = document.getElementById('worldMapButton');
    static soundButton = document.getElementById('soundButton');

    static reload() {
        window.location.reload();
    };
    
    static showIngameMenu() {
        Document.canvas[0].style.display = 'none';
        Document.playButton.style.display = 'none';

        Document.continueButton.style.display = 'block';
        Document.mainMenu.style.display = 'flex';
    };

    static hideIngameMenu() {
        Document.canvas[0].style.display = 'flex';
        Document.playButton.style.display = 'block';

        Document.continueButton.style.display = 'none';
        Document.mainMenu.style.display = 'none';
    };
}


const Tutorial = {
    container: document.getElementById('tutorialContainer'),
    show() {
        this.container.style.display = 'flex';
        GlobalCounter.splashScreenIsActive = true;
    },
    hide() {
        this.container.style.display = 'none';
        GlobalCounter.splashScreenIsActive = false;
    },
};

const LevelStartTooltip = {
    container: document.getElementById('levelStart'),

    levelStartContainer: document.getElementById('levelStartContainer'),
    levelCount: document.getElementById('levelCountStart'),

    objectiveInfoContainer: document.getElementById('objectiveInfoContainer'),
    objectiveInfo: document.getElementById('objectiveInfoStart'),


    show() {
        GlobalCounter.splashScreenIsActive = true;
        this.container.style.display = 'flex';

        this.levelStartContainer.style.display = 'none';
        this.objectiveInfoContainer.style.display = 'none';

        setTimeout(() => {
            this.levelStartContainer.style.display = 'flex';
        }, 300);

        setTimeout(() => {
            this.objectiveInfoContainer.style.display = 'flex';
        }, 2500);
    },

    hide() {
        GlobalCounter.splashScreenIsActive = false;
        this.container.style.display = 'none';
        this.levelStartContainer.style.display = 'none';
        this.objectiveInfoContainer.style.display = 'none';
    },
}

const LevelFinishTooltip = {
    container: document.getElementById('levelFinish'),

    diamondsCollectedCount: document.getElementById('diamondsCollectedCount'),

    fishKilledContainer: document.getElementById('fishKilledContainer'),
    fishKilledCount: document.getElementById('fishKilledCount'),

    objectiveCompletedContainer: document.getElementById('objectiveCompletedContainer'),
    objectiveCompletedText: document.getElementById('objectiveCompletedText'),

    objectiveCompletedPoints: document.getElementById('objectiveCompletedPoints'),

    show() {
        this.container.style.display = 'flex';

        this.fishKilledCount.innerHTML = GlobalCounter.totalKills;
        this.diamondsCollectedCount.innerHTML = GlobalCounter.totalDiamondsCollected;
        this.fishKilledContainer.style.display = 'none';
        this.objectiveCompletedContainer.style.display = 'none';

        setTimeout(() => {
            this.fishKilledContainer.style.display = 'flex';
        }, 1000);
    },

    hide() {
        this.container.style.display = 'none';
        this.fishKilledContainer.style.display = 'none';
        this.objectiveCompletedContainer.style.display = 'none';
    },

    showObjectiveCompletedLog(objectiveIsCompleted, questPoints) {
        if (objectiveIsCompleted) {
            GlobalCounter.totalPoints += questPoints;
            LevelFinishTooltip.objectiveCompletedPoints.innerHTML = `<span class="green-text">+${questPoints} points</span>`;
            LevelFinishTooltip.objectiveCompletedContainer.style.display = 'flex';

        }
        else {
            GlobalCounter.totalPoints += questPoints;
            LevelFinishTooltip.objectiveCompletedText.innerHTML = '<span style="color: red;">OBJECTIVE FAILED!</span>';
            LevelFinishTooltip.objectiveCompletedPoints.innerHTML = ``;
            LevelFinishTooltip.objectiveCompletedContainer.style.display = 'flex';
        };
    }
}

const HUD = {
    container: document.getElementById('HUD'),
    movesRemainingCount: document.getElementById('movesRemainingCount'),
    objectiveRemainingCount: document.getElementById('objectiveRemainingCount'),
    objectiveName: document.getElementById('objectiveName'),
    totalPoints: document.getElementById('totalPoints'),
    star1: document.getElementById('star1'),
    star2: document.getElementById('star2'),
    star3: document.getElementById('star3'),

    show() {
        this.container.style.display = 'flex';
    },
    hide() {
        this.container.style.display = 'none';
    },

    setMovesRemaining(moves) {
        if (moves <= 10) this.movesRemainingCount.innerHTML = `<span class="green-text">${moves}</span>`;
        if (moves <= 6) this.movesRemainingCount.innerHTML = `<span class="yellow-text">${moves}</span>`;
        if (moves <= 3) this.movesRemainingCount.innerHTML = `<span class="red-text">${moves}</span>`;
    },

    setObjectiveRemainingCount(objectiveCount) {
        this.objectiveRemainingCount.innerHTML = objectiveCount;

        if (GlobalCounter.objectiveIsCompleted) {
            this.objectiveRemainingCount.innerHTML = `<span class="green-text" style="font-size: 25px;">Done!</span>`
        }
    },

    setObjectiveName(objectiveName) {
        this.objectiveName.innerHTML = objectiveName;
    },

    setTotalPoints(points) {
        let previousPoints = +this.totalPoints.innerHTML;
        let pointsToPrint = +this.totalPoints.innerHTML;

        if (previousPoints < points) {
            if (points - previousPoints > 1000) {
                pointsToPrint += 321;
            }
            else if (points - previousPoints < 1000 && points - previousPoints > 100) {
                pointsToPrint += 126;
            }
            else if (points - previousPoints < 100 && points - previousPoints > 10) {
                pointsToPrint += 12;
            }
            else if (points - previousPoints < 10) {
                pointsToPrint += 1;
            };
        }

        this.totalPoints.innerHTML = pointsToPrint;
    },

    setStars() {
        let totalPoints = +this.totalPoints.innerHTML;
        if (totalPoints > 20000) {
            GlobalCounter.stars = 1;
            this.star1.innerHTML = `<img src="./Images/star.png" alt="" class="hud-stars">`;
        }
        if (totalPoints > 40000) {
            GlobalCounter.stars = 2;
            this.star2.innerHTML = `<img src="./Images/star.png" alt="" class="hud-stars">`;
        }
        if (totalPoints > 60000) {
            GlobalCounter.stars = 3;
            this.star3.innerHTML = `<img src="./Images/star.png" alt="" class="hud-stars">`;
        }
    },
}

const Points = {
    setForLevel(number) {
        localStorage.setItem(`starsForLevel${number}`, GlobalCounter.stars),
            localStorage.setItem(`pointsForLevel${number}`, GlobalCounter.totalPoints)
    },

    getPointsForLevel(number) {
        return localStorage.getItem(`pointsForLevel${number}`);
    },

    getStarsForLevel(number) {
        return localStorage.getItem(`starsForLevel${number}`);
    },
};

const Game = {
    getCurrentLevel() {
        return +localStorage.getItem('treasureGameLevel');
    },

    getMaxLevel() {
        return +localStorage.getItem('treasureGameMaxLevel');
    },

    setLevel(number) {
        localStorage.setItem('treasureGameLevel', number);
        GlobalCounter.level = number;
    },

    setMaxLevel() {
        let level = +localStorage.getItem('treasureGameLevel');
        let maxLevel = +localStorage.getItem('treasureGameMaxLevel');

        if (level > maxLevel) {
            localStorage.setItem('treasureGameMaxLevel', level);
        };
    },

    setImplicitMaxLevel(number) {
        localStorage.setItem('treasureGameMaxLevel', number);
    },
    nextLevel() {
        let currentLevel = +localStorage.getItem('treasureGameLevel');
        currentLevel++;
        this.setLevel(currentLevel);
        GlobalCounter.level = currentLevel;
        this.setMaxLevel();
    },
    mainMenu() {
        this.setLevel(0);
        GlobalCounter.level = 0;
    },
    restart() {
        GlobalCounter.level = 1;
        this.setLevel(GlobalCounter.level);
    },
    pause() {
        Document.mainMenu.style.display = 'block';
    },

    startSession() {
        if (+sessionStorage.getItem('sessionStarted') != 1) {
            this.mainMenu();
            sessionStorage.setItem('sessionStarted', 1);
            Document.reload();
        }
    },
};

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

if (Game.getCurrentLevel() == null) {
    Game.setLevel(0);
    Document.reload();
};


// WORLD MAP BUTTONS
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


Document.restartGameButton.addEventListener('click', () => {
    Game.restart();
    localStorage.clear();
    Game.setImplicitMaxLevel(1);
    Document.reload();
});

Document.playButton.addEventListener('click', () => {
    Game.nextLevel();
    Document.reload();
});

Document.worldMapButton.addEventListener('click', () => {
    Game.setLevel(-1);
    Document.reload();
});

Document.continueButton.addEventListener('click', () => {
    HUD.show();
    Document.hideIngameMenu();
});

Document.soundButton.addEventListener('click', () => {
    Sound.muteSwitch();
});


