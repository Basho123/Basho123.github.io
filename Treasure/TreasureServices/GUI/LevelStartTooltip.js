import GlobalCounter from '../GlobalCounter.js';

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

export default LevelStartTooltip;