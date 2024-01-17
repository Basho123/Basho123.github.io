import GlobalCounter from '../GlobalCounter.js';
import Document from '../GUI/Document.js';

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

if (Game.getCurrentLevel() == null) {
    Game.setLevel(0);
    Document.reload();
};

export default Game;