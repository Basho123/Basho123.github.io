class Sound {
    static bubble1 = '';
    static bubble2 = '';
    static bubble3 = '';
    static bubble4 = '';
    static bubble5 = '';
    static bubble6 = '';
    static bubble7 = '';
    static bubble8 = '';
    static bubbleBackground = '';
    static music1 = '';
    static music2 = '';

    static fireRandom() {
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
            arrayOfSounds[randomNumber].play();
        }
    }


    static playMusic() {
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
    }

    static stopMusic() {
        this.music1.stop();
        this.music2.stop();
    }

    static playBackground() {
        this.bubbleBackground.setLoop(true);
        this.bubbleBackground.setVolume(0.3);
        this.bubbleBackground.play();
    }

    static stopBackground() {
        this.bubbleBackground.stop();
    }

    static muteSwitch() {
        let mute = +sessionStorage.getItem('mute');

        if (mute == 1) {
            sessionStorage.setItem('mute', 0);
            masterVolume(1);
        }

        if (mute == 0) {
            sessionStorage.setItem('mute', 1);
            masterVolume(0);
        }
    }

    static checkForOnOffState() {
        let mute = +sessionStorage.getItem('mute');
        if (mute == 1) masterVolume(0);
        else masterVolume(1);

    }
}

