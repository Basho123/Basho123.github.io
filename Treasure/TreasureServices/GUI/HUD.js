import GlobalCounter from '../GlobalCounter.js';

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

export default HUD;