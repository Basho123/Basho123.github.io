
class Generator {
    static addPlayer(xPosition, yPosition) {
        let entity = game.add.sprite(xPosition, yPosition, 'airplane');
        game.physics.arcade.enable(entity);
        // GlobalObjects.player.body.bounce.y = 0.2;
        // GlobalObjects.player.body.gravity.y = 800;
        entity.body.collideWorldBounds = true;
        entity.animations.add('left', [0, 1, 2, 3], 10, true);
        entity.animations.add('right', [0, 1, 2, 3], 10, true);
        entity.scale.setTo(0.5, 0.5)

        return entity;
    }

    static addEnemy(xPosition, yPosition) {
        let entity = GlobalObjects.enemies.create(xPosition, yPosition, 'enemy');
        game.physics.arcade.enable(entity);
        // entity.body.collideWorldBounds = true;
        entity.body.velocity.y = 150;
        entity.scale.setTo(2, 2);
        return entity;
    }

    static addBullet(xPosition, yPosition) {
        let entity = GlobalObjects.bullets.create(xPosition, yPosition, 'bullet');;
        game.physics.arcade.enable(entity);
        // GlobalObjects.player.body.bounce.y = 0.2;
        // GlobalObjects.player.body.gravity.y = 800;
        // entity.body.collideWorldBounds = true;      
        entity.scale.setTo(0.3, 0.3);

        entity.body.velocity.y = -1500;
        // entity.body.gravity.y = -1000;
        return entity;
    }

    static addEnemyBullet(xPosition, yPosition) {
        let entity = GlobalObjects.enemyBullets.create(xPosition, yPosition, 'bullet');;
        game.physics.arcade.enable(entity);
        // GlobalObjects.player.body.bounce.y = 0.2;
        // GlobalObjects.player.body.gravity.y = 800;
        // entity.body.collideWorldBounds = true;      
        entity.scale.setTo(0.3, 0.3);

        entity.body.velocity.y = 1500;
        // entity.body.gravity.y = -1000;
        return entity;
    }

    static addAsteroid(xPosition, yPosition) {
        let asteroidArray = ['asteroid1', 'asteroid2', 'asteroid3'];

        let randomNumber = Math.floor(Math.random() * 2);

        let entity = {};

        

        let randomDistanceNumber = Math.floor(Math.random() * 4);

        // console.log(randomNumber);
        // console.log(randomDistanceNumber);

        switch (randomDistanceNumber) {
            case 0:
                entity = GlobalObjects.asteroids1.create(xPosition, yPosition, asteroidArray[randomNumber]);
                game.physics.arcade.enable(entity);
                entity.scale.setTo(1, 1);
                entity.body.velocity.y = 400;
                entity.body.mass = 0.1;
                break;
            case 1:
                entity = GlobalObjects.asteroids2.create(xPosition, yPosition, asteroidArray[randomNumber]);
                game.physics.arcade.enable(entity);
                entity.scale.setTo(0.5, 0.5);
                entity.body.velocity.y = 200;
                break;
            case 2:
                entity = GlobalObjects.asteroids3.create(xPosition, yPosition, asteroidArray[randomNumber]);
                game.physics.arcade.enable(entity);
                entity.scale.setTo(0.25, 0.25);
                entity.body.velocity.y = 100;
                break;
            case 3:
                entity = GlobalObjects.asteroids4.create(xPosition, yPosition, asteroidArray[randomNumber]);
                game.physics.arcade.enable(entity);
                entity.scale.setTo(0.125, 0.125);
                entity.body.velocity.y = 50;
                break;
            default:
                break;
        }

        // GlobalObjects.player.body.bounce.y = 0.2;
        // GlobalObjects.player.body.gravity.y = 800;
        // entity.body.collideWorldBounds = true;      

        // entity.body.gravity.y = -1000;
        return entity;
    }
}