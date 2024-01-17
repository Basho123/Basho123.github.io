import GlobalCounter from '../../TreasureServices/GlobalCounter.js';
import HUD from '../../TreasureServices/GUI/HUD.js';

const Sound = {
    bubble1: '',
    bubble2: '',
    bubble3: '',
    bubble4: '',
    bubble5: '',
    bubble6: '',
    bubble7: '',
    bubble8: '',
    bubbleBackground: '',
    music1: '',
    music2: '',

    fireRandom() {
        if (GlobalCounter.level > 0 && HUD.container.style.display != 'none') {
            let arrayOfSounds = [
                this.bubble1,
                this.bubble2,
                this.bubble3,
                this.bubble4,
                this.bubble5,
                this.bubble6,
                this.bubble7,
                this.bubble8,
            ];

            let randomNumber = Math.floor(random(arrayOfSounds.length));
            arrayOfSounds[randomNumber].setVolume(0.3);
            arrayOfSounds[randomNumber].play();
        }
    },


    playMusic() {
        let songArray = [
            this.music1,
            this.music2
        ];
        let randomNumber = Math.floor(random(songArray.length));

        let randomSong = songArray[randomNumber];
        this.music1.setLoop(true);
        this.music2.setLoop(true);

        randomSong.setVolume(0.2);
        randomSong.play();
    },

    stopMusic() {
        this.music1.stop();
        this.music2.stop();
    },

    playBackground() {
        this.bubbleBackground.setLoop(true);
        this.bubbleBackground.setVolume(0.3);
        this.bubbleBackground.play();
    },

    stopBackground() {
        this.bubbleBackground.stop();
    },

    muteSwitch() {
        let mute = +sessionStorage.getItem('mute');

        if (mute == 1) {
            sessionStorage.setItem('mute', 0);
            masterVolume(1);
        }

        if (mute == 0) {
            sessionStorage.setItem('mute', 1);
            masterVolume(0);
        }
    },

    checkForOnOffState() {
        let mute = +sessionStorage.getItem('mute');
        if (mute == 1) masterVolume(0);
        else masterVolume(1);

    },
}

export default Sound;

