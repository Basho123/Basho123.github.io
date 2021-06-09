class Overlap{
    static whatWillHappen(first, second) {
        first.scale.setTo(3, 3);
        second.kill()
        GlobalCounter.score += 10;
        GlobalCounter.scoreText.text = `Score: ${ GlobalCounter.score}`;
    }
    
    static standardAnnihilation(first, second) {
        first.kill();
        second.kill()
        GlobalCounter.score += 10;
        GlobalCounter.scoreText.text = `Score: ${ GlobalCounter.score}`;
    }
    
    static playerAnnihilation(first, second) {
        first.kill();
        second.kill()
        GlobalCounter.gameOverText.text = `GAME OVER`;
    }

    static enemyAnnihilation(first, second) {
        first.kill();
        second.kill()
        GlobalCounter.enemiesKilled++;
        GlobalCounter.score += 30;
        GlobalCounter.scoreText.text = `Score: ${ GlobalCounter.score}`;
    }

    
    
    
}