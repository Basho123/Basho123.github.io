// GUI.js for Treasure Game

class Document {
    static mainMenu = document.getElementById('mainMenu');
    static canvas = document.getElementsByTagName('canvas');
    static playButton = document.getElementById('playButton');
    static continueButton = document.getElementById('continueButton');

    static restartGameButton = document.getElementById('restartGame');
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

class HUD {
    static movesRemainingCount = document.getElementById('movesRemainingCount');
    static objectiveRemainingCount = document.getElementById('objectiveRemainingCount');
    static objectiveName = document.getElementById('objectiveName');
    static totalPoints = document.getElementById('totalPoints');
    static star1 = document.getElementById('star1');
    static star2 = document.getElementById('star2');
    static star3 = document.getElementById('star3');


    static setMovesRemaining(moves) {
        this.movesRemainingCount.innerHTML = moves;
    };

    static setObjectiveRemainingCount(objectiveCount) {
        this.objectiveRemainingCount.innerHTML = objectiveCount;
    }

    static setObjectiveName(objectiveName) {
        this.objectiveName.innerHTML = objectiveName;
    }

    static setTotalPoints(points) {
        let previousPoints = +this.totalPoints.innerHTML;
        let pointsToPrint = +this.totalPoints.innerHTML;

        if (previousPoints < points) {
            pointsToPrint += 123;
        }

        this.totalPoints.innerHTML = pointsToPrint;
    };

    static setStars() {
        let totalPoints = +this.totalPoints.innerHTML;
        if (totalPoints > 50000) {
            GlobalCounter.stars++;
            this.star1.innerHTML = `<img src="./Images/star.png" alt="">`;
        }
        if (totalPoints > 100000) {
            GlobalCounter.stars++;
            this.star2.innerHTML = `<img src="./Images/star.png" alt="">`;
        }
        if (totalPoints > 150000) {
            GlobalCounter.stars++;
            this.star3.innerHTML = `<img src="./Images/star.png" alt="">`;
        }
    }
}

class Game {
    static getCurrentLevel() {
        return +localStorage.getItem('treasureGameLevel');
    };
    static setLevel(number) {
        localStorage.setItem('treasureGameLevel', number);
        GlobalCounter.level = number;
    };
    static nextLevel() {
        let currentLevel = +localStorage.getItem('treasureGameLevel');
        currentLevel++;
        GlobalCounter.level = currentLevel;
        this.setLevel(GlobalCounter.level);
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
}

if (Game.getCurrentLevel() == null) {
    Game.setLevel(0);
    Document.reload();
};



Document.restartGameButton.addEventListener('click', () => {
    Game.restart();
    Document.reload();
});

Document.playButton.addEventListener('click', () => {
    Game.nextLevel();
    Document.reload();
});

Document.continueButton.addEventListener('click', () => {
    Document.hideIngameMenu();
});


