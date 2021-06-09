class Game {
    static setLevel(number) {
        localStorage.setItem('phaserGalaxyLevel', number);
    };
    static getLevel() {
        return +localStorage.getItem('phaserGalaxyLevel');
    }
    static nextLevel() {
        Game.setLevel(Game.getLevel() + 1);
        console.log('You have advanced to level', Game.getLevel());
    }
    static reload() {
        location.reload();
    }
}

if (Game.getLevel() == null) {
    Game.setLevel(0);
    console.log('Level was set to 0');
}
else {
    console.log('Level', Game.getLevel());
}