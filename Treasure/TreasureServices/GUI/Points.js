import GlobalCounter from '../GlobalCounter.js';

const Points = {
    setForLevel(number) {
        localStorage.setItem(`starsForLevel${number}`, GlobalCounter.stars),
            localStorage.setItem(`pointsForLevel${number}`, GlobalCounter.totalPoints)
    },

    getPointsForLevel(number) {
        return localStorage.getItem(`pointsForLevel${number}`);
    },

    getStarsForLevel(number) {
        return localStorage.getItem(`starsForLevel${number}`);
    },
};

export default Points;