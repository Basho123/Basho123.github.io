import GlobalCounter from '../GlobalCounter.js';

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

export default LevelFinishTooltip;