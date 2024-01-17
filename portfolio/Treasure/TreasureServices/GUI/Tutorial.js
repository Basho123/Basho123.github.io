import GlobalCounter from '../GlobalCounter.js';

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

export default Tutorial;