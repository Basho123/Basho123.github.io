import Game from '../GameLogic/Game.js';
import HUD from './HUD.js';
import Sound from '../../TreasureLibrary/PreloadSounds/Sound.js';


export default class Document {
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



