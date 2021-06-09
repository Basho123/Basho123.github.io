const GlobalCounter = {
    gameWidth: innerWidth - 50,
    gameHeight: innerHeight - 50,

    score: 0,
    scoreText: '',
    gameOverText: '',
    frameCount: 0,
    enemiesKilled: 0,


    level: Game.getLevel(),

    difficultyMultiplier: 1 + (Game.getLevel() / 5),

    difficulty: {
        easy: false,
        medium: false,
        hard: false,
    },
}

console.log('Difficulty Multiplier', GlobalCounter.difficultyMultiplier);









