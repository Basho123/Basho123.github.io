//mainMenu.js for sketch.js TANKS
    let level = localStorage.getItem('level');
    let detailsStorage = localStorage.getItem('details');
    let difficultyStorage = localStorage.getItem('difficulty');
    let playerMoneyStorage = localStorage.getItem('playerMoney');

    playerMoneyStorage == null || isNaN(playerMoneyStorage) ? localStorage.setItem('playerMoney', 0) : null;
    detailsStorage == null || isNaN(detailsStorage) ? localStorage.setItem('details', 1) : null;
    difficultyStorage == null || isNaN(difficultyStorage) ? localStorage.setItem('difficulty', 1) : null;

    //MAIN MENU DOM
    let menu = {
        mainMenu: document.getElementById('mainMenu'),
        firstMenu: document.getElementById('mainMenuButtonsContainer'),
        optionsMenu: document.getElementById('optionsContainer'),
        controlsMenu: document.getElementById('controlsContainer'),
        loadingScreen: document.getElementById('p5_loading'),
        canvas: document.getElementsByTagName('canvas'),

        continueGameButton: document.getElementById('continueGame'),
        newGameButton: document.getElementById('newGame'),
        loadGameButton: document.getElementById('loadGame'),
        controlsButton: document.getElementById('controlsButton'),
        optionsButton: document.getElementById('options'),

        detailLevelButton: document.getElementById('detailLevel'),
        detailLevelSpan: document.getElementById('detailSpan'),
        detailLevelAmmount: detailsStorage,
        setDetail: (number) => localStorage.setItem('details', number),
        getDetail: () => +localStorage.getItem('details'),

        difficultyButton: document.getElementById('difficulty'),
        difficultySpan: document.getElementById('difficultySpan'),
        difficultyAmmount: difficultyStorage,
        setDifficulty: (number) => localStorage.setItem('difficulty', number),
        getDifficulty: () => +localStorage.getItem('difficulty'),

        backButton: document.getElementById('back'),
        backButtonControls: document.getElementById('backControls'),

    }

    //HUD
    let hud = {
        container: document.getElementById('HUDContainer'),
        shellLoaderGif: document.getElementById('loaderGif'),
        enemyTanks: document.getElementById(`enemyTanksValue`),
        moneyValue: document.getElementById(`moneyValue`),
    }

    //MONEY METHODS FOR PLAYER
    let playerEconomy = {
        getMoneyCount: () => +localStorage.getItem('playerMoney'),
        addMoney: number => localStorage.setItem('playerMoney', playerEconomy.getMoneyCount() + number),
        deductMoney: number => localStorage.setItem('playerMoney', playerEconomy.getMoneyCount() - number),
    }
    let playerScore = {
        currentScoreSpan: document.getElementById('currentScoreSpan'),
        highScoreSpan: document.getElementById('highScoreSpan'),

        currentScore: +localStorage.getItem('currentScore'),
        highScore: localStorage.getItem('highScore'),

        add: (number) => {
            let getCurrentScore = +localStorage.getItem('currentScore');
            getCurrentScore += number;
            localStorage.setItem('currentScore', getCurrentScore);
            playerScore.currentScore = +localStorage.getItem('currentScore');
            playerScore.currentScoreSpan.innerText = localStorage.getItem('currentScore');
        },
        reset: () => {
            localStorage.setItem('currentScore', 0);
        },
        setHigh: () => {
            if (playerScore.currentScore > playerScore.highScore) {
                localStorage.setItem('highScore', playerScore.currentScore)
                playerScore.highScoreSpan.innerText = localStorage.getItem('highScore')
            }
            else null
        },

        getHigh: () => localStorage.getItem('highScore'),
    }
    playerScore.add(0);
    playerScore.setHigh();
    playerScore.highScoreSpan.innerText = playerScore.getHigh();


    //HANGAR DOM AND ALL UPGRADES AND UPGRADE METHODS
    let hangar = {
        mainDiv: document.getElementById('hangarMainDiv'),
        leaveButton: document.getElementById('leaveHangar'),

        engineUpgradeButton: document.getElementById('engineUpgradeButton'),
        servoMotorsUpgradeButton: document.getElementById('servoMotorsUpgradeButton'),
        cannonUpgradeButton: document.getElementById('cannonUpgradeButton'),

        engineUpgradePriceSpan: document.getElementById('engineUpgradePriceSpan'),
        servoMotorsUpgradePriceSpan: document.getElementById('servoMotorsUpgradePriceSpan'),
        cannonUpgradePriceSpan: document.getElementById('cannonUpgradePriceSpan'),

        hangarMoneyValueSpan: document.getElementById('hangarMoneyValueSpan'),
        engineSpeedValueSpan: document.getElementById('engineSpeedValueSpan'),
        servoMotorsValueSpan: document.getElementById('servoMotorsValueSpan'),
        cannonPowerValueSpan: document.getElementById('cannonPowerValueSpan'),

        refreshUpgradeValues: () => {
            hangar.hangarMoneyValueSpan.innerText = playerEconomy.getMoneyCount();
            hangar.engineSpeedValueSpan.innerText = hangar.tankUpgrades.getEngineValue();
            hangar.servoMotorsValueSpan.innerText = hangar.tankUpgrades.getServoMotorsValue();
            hangar.cannonPowerValueSpan.innerText = hangar.tankUpgrades.getCannonValue();

            hangar.engineUpgradePriceSpan.innerText = hangar.tankUpgrades.getEngineUpgradeCost();
            hangar.servoMotorsUpgradePriceSpan.innerText = hangar.tankUpgrades.getServoMotorsUpgradeCost();
            hangar.cannonUpgradePriceSpan.innerText = hangar.tankUpgrades.getCannonUpgradeCost();

        },

        tankUpgrades: {
            servoMotors: localStorage.getItem('servoMotorsUpgrade') == null ? localStorage.setItem('servoMotorsUpgrade', 1) : localStorage.getItem('servoMotorsUpgrade'),
            engine: localStorage.getItem('engineUpgrade') == null ? localStorage.setItem('engineUpgrade', 1) : localStorage.getItem('engineUpgrade'),
            cannon: localStorage.getItem('cannonUpgrade') == null ? localStorage.setItem('cannonUpgrade', 1) : localStorage.getItem('cannonUpgrade'),

            upgradeCannon: () => hangar.tankUpgrades.setCannonValue(hangar.tankUpgrades.getCannonValue() + 1),
            upgradeEngine: () => hangar.tankUpgrades.setEngineValue(hangar.tankUpgrades.getEngineValue() + 1),
            upgradeServoMotors: () => hangar.tankUpgrades.setServoMotorsValue(hangar.tankUpgrades.getServoMotorsValue() + 1),

            getEngineValue: () => +localStorage.getItem('engineUpgrade'),
            getServoMotorsValue: () => +localStorage.getItem('servoMotorsUpgrade'),
            getCannonValue: () => +localStorage.getItem('cannonUpgrade'),

            setEngineValue: (number) => +localStorage.setItem('engineUpgrade', number),
            setServoMotorsValue: (number) => +localStorage.setItem('servoMotorsUpgrade', number),
            setCannonValue: (number) => +localStorage.setItem('cannonUpgrade', number),

            getEngineUpgradeCost: () => hangar.tankUpgrades.getEngineValue() * 1000,
            getServoMotorsUpgradeCost: () => hangar.tankUpgrades.getServoMotorsValue() * 1000,
            getCannonUpgradeCost: () => hangar.tankUpgrades.getCannonValue() * 1000,


            resetAll: () => {
                localStorage.setItem('servoMotorsUpgrade', 1);
                localStorage.setItem('engineUpgrade', 1);
                localStorage.setItem('cannonUpgrade', 1);
            },
        },

        //SEND TANK TO HANGAR
        go: () => {
            let saveValue = +localStorage.getItem('save');
            if (saveValue > 0) {
                localStorage.setItem('level', saveValue * -1);
                localStorage.setItem('save', saveValue * -1);
            }
            else console.log('Tank is already at hangar');

        },
        //COMMAND TANK TO LEAVE HANGAR
        leave: () => {
            let saveValue = +localStorage.getItem('save');
            if (saveValue < 0) {
                localStorage.setItem('level', saveValue * -1);
                localStorage.setItem('save', saveValue * -1);
            }
            else console.log('Tank is already at hangar');
        },

    }
    //REFRESHES VALUES SO TO SHOW CORRECT
    hangar.refreshUpgradeValues();

    //HIDE MOST OF THE MENU ELEMENTS AND SHOW THEM WHEN CALLED
    menu.continueGameButton.style.display = 'none';
    hud.container.style.display = 'none';

    hud.shellLoaderGif.style.display = 'none';
    menu.loadingScreen.style.display = 'none';
    menu.optionsMenu.style.display = 'none';
    menu.controlsMenu.style.display = 'none';

    level == 0 ? menu.mainMenu.style.display = 'flex' : menu.mainMenu.style.display = 'none';
    level < 0 ? hangar.mainDiv.style.display = 'flex' : hangar.mainDiv.style.display = 'none';

    //#region  HANGAR MENU
    //UPGRADES

    hangar.engineUpgradeButton.addEventListener('click', () => {
        if (playerEconomy.getMoneyCount() > 1000 * hangar.tankUpgrades.getEngineValue()) {
            playerEconomy.deductMoney(hangar.tankUpgrades.getEngineUpgradeCost());
            hangar.tankUpgrades.upgradeEngine();
            hangar.refreshUpgradeValues();
            console.log(hangar.tankUpgrades.getEngineValue());

        }
        else console.log('Not enough money');
    });

    hangar.servoMotorsUpgradeButton.addEventListener('click', () => {
        if (playerEconomy.getMoneyCount() > 1000 * hangar.tankUpgrades.getServoMotorsValue()) {
            playerEconomy.deductMoney(hangar.tankUpgrades.getServoMotorsUpgradeCost());
            hangar.tankUpgrades.upgradeServoMotors();
            hangar.refreshUpgradeValues();

        }
        else console.log('Not enough money');
    });

    hangar.cannonUpgradeButton.addEventListener('click', () => {
        if (playerEconomy.getMoneyCount() > 1000 * hangar.tankUpgrades.getCannonValue()) {
            playerEconomy.deductMoney(hangar.tankUpgrades.getCannonUpgradeCost());
            hangar.tankUpgrades.upgradeCannon();
            hangar.refreshUpgradeValues();
        }
        else console.log('Not enough money');
    });



    //LEAVE HANGAR TO ENTER BATTLEFIELD
    hangar.leaveButton.addEventListener('click', () => {
        hangar.leave();
        window.location.reload();
    });


    //#endregion

    //#region MAIN MENU
    //NEW GAME
    menu.newGameButton.addEventListener('click', () => {
        playerScore.reset();
        localStorage.setItem('level', 1);
        localStorage.setItem('save', 1);
        hangar.go();
        window.location.reload();
    })

    //CONTINUE GAME
    menu.loadGameButton.addEventListener('click', () => {
        playerScore.reset();
        let saveValue = +localStorage.getItem('save');
        localStorage.setItem('level', saveValue);
        hangar.go();
        window.location.reload();
    })

    //CONTROLS
    menu.controlsButton.addEventListener('click', () => {
        menu.firstMenu.style.display = 'none';
        menu.controlsMenu.style.display = 'block';
    })

    //OPTIONS
    menu.optionsButton.addEventListener('click', () => {
        menu.firstMenu.style.display = 'none';
        menu.optionsMenu.style.display = 'block';
    })


    //DETAIL BUTTON
    switch (+detailsStorage) {
        case 0:
            menu.detailLevelSpan.innerHTML = `LOW`
            break;
        case 1:
            menu.detailLevelSpan.innerHTML = `MEDIUM`
            break;
        case 2:
            menu.detailLevelSpan.innerHTML = `HIGH`
            break;
        default:
            break;
    }
    menu.detailLevelButton.addEventListener('click', () => {
        // CYCLE THROUGH DETAIL LEVEL
        let intermediateNumber = menu.getDetail();
        intermediateNumber++;
        intermediateNumber > 2 ? intermediateNumber = 0 : null;
        menu.setDetail(intermediateNumber);

        //TEXT WRAPPER ON THE BUTTON
        switch (intermediateNumber) {
            case 0:
                menu.detailLevelSpan.innerHTML = `LOW`
                break;
            case 1:
                menu.detailLevelSpan.innerHTML = `MEDIUM`
                break;
            case 2:
                menu.detailLevelSpan.innerHTML = `HIGH`
                break;
            default:
                break;
        }
    })

    //DIFFICULTY BUTTON
    switch (+difficultyStorage) {
        case 0:
            menu.difficultySpan.innerHTML = `EASY`
            break;
        case null:
        case 1:
            menu.difficultySpan.innerHTML = `MEDIUM`
            break;
        case 2:
            menu.difficultySpan.innerHTML = `HARD`
            break;
        default:
            break;
    }
    menu.difficultyButton.addEventListener('click', () => {
        // CYCLE THROUGH DETAIL LEVEL
        let intermediateNumber = menu.getDifficulty();
        intermediateNumber++;
        intermediateNumber > 2 ? intermediateNumber = 0 : null;
        menu.setDifficulty(intermediateNumber);

        //TEXT WRAPPER ON THE BUTTON
        switch (intermediateNumber) {
            case 0:
                menu.difficultySpan.innerHTML = `EASY`
                break;

            case null:
            case 1:
                menu.difficultySpan.innerHTML = `MEDIUM`
                break;
            case 2:
                menu.difficultySpan.innerHTML = `HARD`
                break;
            default:
                break;
        }
    })

    //BACK BUTTON IN OPTIONS
    menu.backButton.addEventListener('click', () => {
        menu.firstMenu.style.display = 'block';
        menu.optionsMenu.style.display = 'none';
    })
    //BACK BUTTON IN CONTROLS
    menu.backButtonControls.addEventListener('click', () => {
        menu.firstMenu.style.display = 'block';
        menu.controlsMenu.style.display = 'none';
    })
    //#endregion
    
