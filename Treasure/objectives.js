// objectives.js for treasureChest

const Objective = {
    Difficulty: [


        Easy = [
            one = {
                info: "Kill 6 red fish",
                counter: () => {
                    return GlobalCounter.redFishKills;
                },
                condition: () => {
                    GlobalCounter.objectiveIsCompleted = GlobalCounter.redFishKills >= 6;
                }
            },
            two = {
                info: "Kill 6 green fish",
                counter: () => {
                    return GlobalCounter.greenFishKills;
                },
                condition: () => {
                    GlobalCounter.objectiveIsCompleted = GlobalCounter.greenFishKills >= 6;
                }
            },

            three = {
                info: "Kill 6 blue fish",
                counter: () => {
                    return GlobalCounter.blueFishKills;
                },
                condition: () => {
                    GlobalCounter.objectiveIsCompleted = GlobalCounter.blueFishKills >= 6;
                }
            },

            four = {
                info: "Make four or more combinations with more than 3 kills",
                counter: () => {
                    return GlobalCounter.moreThan3killsCount;
                },
                condition: () => {
                    GlobalCounter.objectiveIsCompleted = GlobalCounter.moreThan3killsCount >= 3;
                }
            }
        ],
        Medium = {

        },
        Hard = {
            one: {
                info: "Don't kill green fish",
                condition: () => {
                    GlobalCounter.objectiveIsCompleted = GlobalCounter.greenFishKills == 0;
                }
            },
            two: {
                info: "Don't kill red fish",
                condition: () => {
                    GlobalCounter.objectiveIsCompleted = GlobalCounter.redFishKills == 0;
                }
            },
        },
    ],

    isCompletedCheck: () => {
        if (GlobalCounter.objectiveIsCompleted) {
            setTimeout(() => {
                GlobalCounter.totalPoints += 10000;
                LevelFinishTooltip.objectiveCompletedContainer.style.display = 'flex';
            }, 2000);
            console.log("before");
            console.log(GlobalCounter.totalPoints);
            console.log("after");

            console.log(GlobalCounter.totalPoints);


        };
    },


}

