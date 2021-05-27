// GUI.js for Treasure Game

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
    }

    static hideIngameMenu() {
        Document.canvas[0].style.display = 'flex';
        Document.playButton.style.display = 'block';

        Document.continueButton.style.display = 'none';
        Document.mainMenu.style.display = 'none';
    }
}

class Tutorial {
    static container = document.getElementById('tutorialContainer');
    static show() {
        this.container.style.display = 'flex';
        GlobalCounter.splashScreenIsActive = true;
    };
    static hide() {
        this.container.style.display = 'none';
        GlobalCounter.splashScreenIsActive = false;
    };
};

class LevelStartTooltip {
    static container = document.getElementById('levelStart');

    static levelStartContainer = document.getElementById('levelStartContainer');
    static levelCount = document.getElementById('levelCountStart');

    static objectiveInfoContainer = document.getElementById('objectiveInfoContainer');
    static objectiveInfo = document.getElementById('objectiveInfoStart');


    static show() {
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
    }

    static hide() {
        GlobalCounter.splashScreenIsActive = false;
        this.container.style.display = 'none';
        this.levelStartContainer.style.display = 'none';
        this.objectiveInfoContainer.style.display = 'none';
    }
}

class LevelFinishTooltip {
    static container = document.getElementById('levelFinish');

    static diamondsCollectedCount = document.getElementById('diamondsCollectedCount');

    static fishKilledContainer = document.getElementById('fishKilledContainer');
    static fishKilledCount = document.getElementById('fishKilledCount');

    static objectiveCompletedContainer = document.getElementById('objectiveCompletedContainer');
    static objectiveCompletedText = document.getElementById('objectiveCompletedText');

    static objectiveCompletedPoints = document.getElementById('objectiveCompletedPoints');

    static show() {
        this.container.style.display = 'flex';

        this.fishKilledCount.innerHTML = GlobalCounter.totalKills;
        this.diamondsCollectedCount.innerHTML = GlobalCounter.totalDiamondsCollected;
        this.fishKilledContainer.style.display = 'none';
        this.objectiveCompletedContainer.style.display = 'none';

        setTimeout(() => {
            this.fishKilledContainer.style.display = 'flex';
        }, 1000);
    }

    static hide() {
        this.container.style.display = 'none';
        this.fishKilledContainer.style.display = 'none';
        this.objectiveCompletedContainer.style.display = 'none';
    }

    static showObjectiveCompletedLog(objectiveIsCompleted, questPoints) {
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

class HUD {
    static container = document.getElementById('HUD');
    static movesRemainingCount = document.getElementById('movesRemainingCount');
    static objectiveRemainingCount = document.getElementById('objectiveRemainingCount');
    static objectiveName = document.getElementById('objectiveName');
    static totalPoints = document.getElementById('totalPoints');
    static star1 = document.getElementById('star1');
    static star2 = document.getElementById('star2');
    static star3 = document.getElementById('star3');

    static show() {
        this.container.style.display = 'flex';
    };
    static hide() {
        this.container.style.display = 'none';
    };

    static setMovesRemaining(moves) {
        if (moves <= 10) this.movesRemainingCount.innerHTML = `<span class="green-text">${moves}</span>`;
        if (moves <= 6) this.movesRemainingCount.innerHTML = `<span class="yellow-text">${moves}</span>`;
        if (moves <= 3) this.movesRemainingCount.innerHTML = `<span class="red-text">${moves}</span>`;
    };

    static setObjectiveRemainingCount(objectiveCount) {
        this.objectiveRemainingCount.innerHTML = objectiveCount;

        if (GlobalCounter.objectiveIsCompleted) {
            this.objectiveRemainingCount.innerHTML = `<span class="green-text" style="font-size: 25px;">Done!</span>`
        }
    }

    static setObjectiveName(objectiveName) {
        this.objectiveName.innerHTML = objectiveName;
    }

    static setTotalPoints(points) {
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
    };

    static setStars() {
        let totalPoints = +this.totalPoints.innerHTML;
        if (totalPoints > 20000) {
            GlobalCounter.stars = 1;
            this.star1.innerHTML = `<img src="./Images/star.png" alt="">`;
        }
        if (totalPoints > 40000) {
            GlobalCounter.stars = 2;
            this.star2.innerHTML = `<img src="./Images/star.png" alt="">`;
        }
        if (totalPoints > 60000) {
            GlobalCounter.stars = 3;
            this.star3.innerHTML = `<img src="./Images/star.png" alt="">`;
        }
    }
}

class Points {
    static setForLevel(number) {
        localStorage.setItem(`starsForLevel${number}`, GlobalCounter.stars);
        localStorage.setItem(`pointsForLevel${number}`, GlobalCounter.totalPoints);
    };
    static getPointsForLevel(number) {
        return localStorage.getItem(`pointsForLevel${number}`);
    };
    static getStarsForLevel(number) {
        return localStorage.getItem(`starsForLevel${number}`);
    };
};

class Game {
    static getCurrentLevel() {
        return +localStorage.getItem('treasureGameLevel');
    };

    static getMaxLevel() {
        return +localStorage.getItem('treasureGameMaxLevel');
    };

    static setLevel(number) {
        localStorage.setItem('treasureGameLevel', number);
        GlobalCounter.level = number;
    };

    static setMaxLevel() {
        let level = +localStorage.getItem('treasureGameLevel');
        let maxLevel = +localStorage.getItem('treasureGameMaxLevel');

        if (level > maxLevel) {
            localStorage.setItem('treasureGameMaxLevel', level);
        };
    };

    static setImplicitMaxLevel(number) {
        localStorage.setItem('treasureGameMaxLevel', number);
    };
    static nextLevel() {
        let currentLevel = +localStorage.getItem('treasureGameLevel');
        currentLevel++;
        this.setLevel(currentLevel);
        GlobalCounter.level = currentLevel;
        this.setMaxLevel();
    };
    static mainMenu() {
        this.setLevel(0);
        GlobalCounter.level = 0;
    };
    static restart() {
        GlobalCounter.level = 1;
        this.setLevel(GlobalCounter.level);
    };
    static pause() {
        Document.mainMenu.style.display = 'block';
    };

    static startSession() {
        if (+sessionStorage.getItem('sessionStarted') != 1) {
            this.mainMenu();
            sessionStorage.setItem('sessionStarted', 1);
            Document.reload();
        }
    };
};

class WorldMap {
    static container = document.getElementById('worldMapContainer');
    static buttons = document.getElementsByClassName('levelButtons');

    static show() {
        this.container.style.display = 'block';
    }

    static hide() {
        this.container.style.display = 'none';
    }

    static populateButtons() {
        let totalLevels = +localStorage.getItem('treasureGameMaxLevel');

        // UNLOCKED LEVEL BUTTONS
        for (let i = 1; i < totalLevels + 1; i++) {
            let emptyStar = `<img src="Images/emptyStar.png" alt="">`;
            let shinyStar = `<img src="Images/star.png" alt="">`;
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

Document.soundButton.addEventListener('click',()=>{   
    Sound.muteSwitch();
});


