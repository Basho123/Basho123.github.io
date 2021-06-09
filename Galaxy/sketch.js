


const game = new Phaser.Game(GlobalCounter.gameWidth, GlobalCounter.gameHeight, Phaser.AUTO, '', {
    preload: preload,
    create: create,
    update: update,
});


function preload() {
    game.load.image('background', 'assets/stars.jpg');
    game.load.image('enemy', 'assets/diamond.png');
    game.load.image('bullet', 'assets/bullet.png');

    game.load.image('asteroid1', 'assets/Asteroids/asteroid1.png');
    game.load.image('asteroid2', 'assets/Asteroids/asteroid2.png');
    game.load.image('asteroid3', 'assets/Asteroids/asteroid3.png');



    game.load.spritesheet('airplane', 'assets/airplaneWithAnimationBig.png', 128, 128);
}

function create() {
    //START PHYSICS
    game.physics.startSystem(Phaser.Physics.ARCADE);



    //ADD SKY
    game.add.sprite(0, 0, 'background');

    //ADD PLATFORMS


    //MAKE THE GROUND WITH THE PLATFORM SPRITE
    // ground = platforms.create(0, game.world.height - 64, 'ground');
    // //SET SCALE FOR THE GROUND PLATFORM
    // // ground.scale.setTo(10, 2)
    // //IS IMMOVABLE
    // ground.body.immovable = true;

    // ledge = platforms.create(400, 450, 'ground');
    // ledge.body.immovable = true;

    // ledge = platforms.create(-75, 350, 'ground');
    // ledge.body.immovable = true;
    GlobalObjects.asteroids4 = game.add.group();
    GlobalObjects.asteroids3 = game.add.group();
    GlobalObjects.asteroids2 = game.add.group();
    GlobalObjects.asteroids1 = game.add.group();

    GlobalObjects.asteroids1.enableBody = true; //no collision, false by default


    GlobalObjects.enemies = game.add.group();
    GlobalObjects.enemies.enableBody = true;

    GlobalObjects.enemies = game.add.group();
    GlobalObjects.enemies.enableBody = true;

    GlobalObjects.enemyBullets = game.add.group();
    GlobalObjects.enemyBullets.enableBody = true;

    GlobalObjects.bullets = game.add.group();
    GlobalObjects.bullets.enableBody = true;




    // GlobalObjects.player.body.bounce.y = 0.2;
    // GlobalObjects.player.body.gravity.y = 800;

    GlobalObjects.player = Generator.addPlayer(255, 255);



    for (let i = 0; i < 10; i++) {
        Generator.addAsteroid(Math.random() * GlobalCounter.gameWidth, Math.random() * -GlobalCounter.gameHeight);
    }

    GlobalCounter.scoreText = game.add.text(16, 16, '', {
        fontSize: '32px',
        fill: '#fff'
    });

    GlobalCounter.gameOverText = game.add.text(GlobalCounter.gameWidth / 2, GlobalCounter.gameHeight / 2, '', {
        fontSize: '45px',
        fill: '#fff'
    });

    GlobalCounter.startLevelText = game.add.text(GlobalCounter.gameWidth / 2, GlobalCounter.gameHeight / 2, '', {
        fontSize: '45px',
        fill: '#fff'
    });

    cursors = game.input.keyboard.createCursorKeys();

}

function update() {


    //GENERATE RANDOM ASTEROIDS
    if (Math.random() * 1000 < 10) {
        Generator.addAsteroid(Math.random() * GlobalCounter.gameWidth, Math.random() * -GlobalCounter.gameHeight);
    }

    //GENERATE RANDOM INCOMING ENEMY
    if (Math.random() * 1000 < 10) {
        Generator.addEnemy(Math.random() * GlobalCounter.gameWidth, -50);
    }

    GlobalCounter.frameCount++;
    const mouseX = game.input.activePointer.worldX;
    const mouseY = game.input.activePointer.worldY;

    GlobalObjects.player.body.x = mouseX - 50;
    GlobalObjects.player.body.y = mouseY - 50;
    // GlobalObjects.player.anchor.x = -100;

    if (GlobalObjects.player.body.y > game.world.height - 150) {
        GlobalObjects.player.body.y = game.world.height - 150;
    }


    // game.physics.arcade.overlap(GlobalObjects.player, GlobalObjects.enemies, standardAnnihilation, null, this);


    GlobalObjects.player.body.velocity.x = 0;

    if (GlobalObjects.player.alive) {
        // if (game.input.mousePointer.isDown) {
        if (game.input.mousePointer.isDown && !bulletIsFired) {
            Generator.addBullet(GlobalObjects.player.body.x, GlobalObjects.player.body.y);
            bulletIsFired = true;
        }
        if (game.input.mousePointer.isUp) {
            bulletIsFired = false;
        }
    }


    if (GlobalCounter.frameCount < 180) {
        GlobalCounter.startLevelText.text = `Level ${Game.getLevel()}`;
    }
    else {
        GlobalCounter.startLevelText.text = ``;
    }



    //collision between bullets and GlobalObjects.enemies start here
    game.physics.arcade.overlap(GlobalObjects.bullets, GlobalObjects.enemies, Overlap.enemyAnnihilation, null, this);

    //collision between enemy bullets and GlobalObjects.player is here
    game.physics.arcade.overlap(GlobalObjects.enemyBullets, GlobalObjects.player, Overlap.playerAnnihilation, null, this);


    //ASTEROID KILLS PLAYER, PLAYER CAN KILL ASTEROID, ASTEROID COLLIDES WITH ENEMIES
    game.physics.arcade.collide(GlobalObjects.enemies, GlobalObjects.asteroids1);
    game.physics.arcade.overlap(GlobalObjects.asteroids1, GlobalObjects.player, Overlap.playerAnnihilation, null, this);
    game.physics.arcade.overlap(GlobalObjects.bullets, GlobalObjects.asteroids1, Overlap.standardAnnihilation, null, this);




    GlobalObjects.enemies.children.forEach(enemy => {
        let randomNumber = Math.random() * 10000;

        if (randomNumber < 1 * GlobalCounter.difficultyMultiplier) {
            Generator.addEnemyBullet(enemy.body.x, enemy.body.y);
        }
    });


    if (GlobalCounter.frameCount == 6000 && game.isRunning) {
        GlobalCounter.gameOverText.text = `You are victorious`;
        game.isRunning = false;

        Game.nextLevel();
        setTimeout(() => {
            Game.reload();
        }, 3000)
    }

    //REMOVE OBJECTS FROM EXISETENCE IF DEAD OR FILTERED
    GlobalObjects.bullets.children = GlobalObjects.bullets.children.filter(bullet => bullet.body.y > 0 && bullet.alive);
    GlobalObjects.enemies.children = GlobalObjects.enemies.children.filter(enemy => enemy.alive);
    GlobalObjects.enemyBullets.children = GlobalObjects.enemyBullets.children.filter(bullet => bullet.body.y < GlobalCounter.gameHeight && bullet.alive);

}



