// objectives.js for treasureChest

const Objective = {
    Difficulty: [
        Easy = [
            one = {
                info: "Kill 6 red fish",
                counter: () => GlobalCounter.redFishKills,
                questPoints: () => 10000,
                condition: () => {
                    GlobalCounter.objectiveIsCompleted = GlobalCounter.redFishKills >= 6;
                },
            },
            two = {
                info: "Kill 6 green fish",
                counter: () => GlobalCounter.greenFishKills,
                questPoints: () => 10000,
                condition: () => {
                    GlobalCounter.objectiveIsCompleted = GlobalCounter.greenFishKills >= 6;
                },
            },

            three = {
                info: "Kill 6 blue fish",
                counter: () => GlobalCounter.blueFishKills,
                questPoints: () => 10000,
                condition: () => {
                    GlobalCounter.objectiveIsCompleted = GlobalCounter.blueFishKills >= 6;
                },
            },

            four = {
                info: "Collect 4 red diamonds",
                counter: () => GlobalCounter.redDiamondsCollected,
                questPoints: () => 20000,
                condition: () => {
                    GlobalCounter.objectiveIsCompleted = GlobalCounter.redDiamondsCollected >= 4;
                },
            },

            five = {
                info: "Collect 4 green diamonds",
                counter: () => GlobalCounter.greenDiamondsCollected,
                questPoints: () => 20000,
                condition: () => {
                    GlobalCounter.objectiveIsCompleted = GlobalCounter.greenDiamondsCollected >= 4;
                },

            },

            six = {
                info: "Collect 4 blue diamonds",
                counter: () => GlobalCounter.blueDiamondsCollected,
                questPoints: () => 20000,
                condition: () => {
                    GlobalCounter.objectiveIsCompleted = GlobalCounter.blueDiamondsCollected >= 4;
                },

            },

            seven = {
                info: "Collect 10 diamonds of any type",
                counter: () => GlobalCounter.totalDiamondsCollected,
                questPoints: () => 30000,
                condition: () => {
                    GlobalCounter.objectiveIsCompleted = GlobalCounter.totalDiamondsCollected >= 10;
                },
            },

            eight = {
                info: "Make two or more combinations with more than 6 kills",
                counter: () => GlobalCounter.moreThan6killsCount,
                questPoints: () => 15000,
                condition: () => {
                    GlobalCounter.objectiveIsCompleted = GlobalCounter.moreThan6killsCount >= 2;
                },
            },

            nine = {
                info: "Make 9 kills at once",
                counter: () => GlobalCounter.moreThan9killsCount,
                questPoints: () => 15000,
                condition: () => {
                    GlobalCounter.objectiveIsCompleted = GlobalCounter.moreThan3killsCount > 0;
                },
            },
        ],
        Medium = [
            one = {
                info: "Kill 12 red fish",
                counter: () => GlobalCounter.redFishKills,
                questPoints: () => 25000,
                condition: () => {
                    GlobalCounter.objectiveIsCompleted = GlobalCounter.redFishKills >= 12;
                },
            },
            two = {
                info: "Kill 12 green fish",
                counter: () => GlobalCounter.greenFishKills,
                questPoints: () => 25000,
                condition: () => {
                    GlobalCounter.objectiveIsCompleted = GlobalCounter.greenFishKills >= 12;
                },
            },

            three = {
                info: "Kill 12 blue fish",
                counter: () => GlobalCounter.blueFishKills,
                questPoints: () => 25000,
                condition: () => {
                    GlobalCounter.objectiveIsCompleted = GlobalCounter.blueFishKills >= 12;
                },
            },

            four = {
                info: "Make four or more combinations with more than 6 kills",
                counter: () => GlobalCounter.moreThan6killsCount,
                questPoints: () => 35000,
                condition: () => {
                    GlobalCounter.objectiveIsCompleted = GlobalCounter.moreThan6killsCount >= 4;
                },
            },

            five = {
                info: "Make 9 kills at once",
                counter: () => GlobalCounter.moreThan9killsCount,
                questPoints: () => 35000,
                condition: () => {
                    GlobalCounter.objectiveIsCompleted = GlobalCounter.moreThan9killsCount != 0;
                },
            },
            six = {
                info: "Collect 5 red diamonds",
                counter: () => GlobalCounter.redDiamondsCollected,
                questPoints: () => 30000,
                condition: () => {
                    GlobalCounter.objectiveIsCompleted = GlobalCounter.redDiamondsCollected >= 5;
                },
            },

            seven = {
                info: "Collect 5 green diamonds",
                counter: () => GlobalCounter.greenDiamondsCollected,
                questPoints: () => 30000,
                condition: () => {
                    GlobalCounter.objectiveIsCompleted = GlobalCounter.greenDiamondsCollected >= 5;
                },

            },

            eight = {
                info: "Collect 5 blue diamonds",
                counter: () => GlobalCounter.blueDiamondsCollected,
                questPoints: () => 30000,
                condition: () => {
                    GlobalCounter.objectiveIsCompleted = GlobalCounter.blueDiamondsCollected >= 5;
                },

            },

        ],
        Hard = [
            one = {
                info: "Don't kill green fish",
                counter: () => GlobalCounter.greenFishKills > 0 ? "Failed" : "Good",
                questPoints: () => 45000,
                condition: () => {
                    GlobalCounter.objectiveIsCompleted = GlobalCounter.greenFishKills == 0;
                },
            },
            two = {
                info: "Don't kill red fish",
                counter: () => GlobalCounter.redFishKills > 0 ? "Failed" : "Good",
                questPoints: () => 45000,
                condition: () => {
                    GlobalCounter.objectiveIsCompleted = GlobalCounter.redFishKills == 0;
                },
            },
            three = {
                info: "Don't kill blue fish",
                counter: () => GlobalCounter.blueFishKills > 0 ? "Failed" : "Good",
                questPoints: () => 45000,
                condition: () => {
                    GlobalCounter.objectiveIsCompleted = GlobalCounter.blueFishKills == 0;
                },
            },

            four = {
                info: "Kill 15 red fish",
                counter: () => GlobalCounter.redFishKills,
                questPoints: () => 35000,
                condition: () => {
                    GlobalCounter.objectiveIsCompleted = GlobalCounter.redFishKills >= 15;
                },
            },
            five = {
                info: "Kill 15 green fish",
                counter: () => GlobalCounter.greenFishKills,
                questPoints: () => 35000,
                condition: () => {
                    GlobalCounter.objectiveIsCompleted = GlobalCounter.greenFishKills >= 15;
                },
            },

            six = {
                info: "Kill 15 blue fish",
                counter: () => GlobalCounter.blueFishKills,
                questPoints: () => 35000,
                condition: () => {
                    GlobalCounter.objectiveIsCompleted = GlobalCounter.blueFishKills >= 15;
                },
            },
            seven = {
                info: "Collect 6 red diamonds",
                counter: () => GlobalCounter.redDiamondsCollected,
                questPoints: () => 45000,
                condition: () => {
                    GlobalCounter.objectiveIsCompleted = GlobalCounter.redDiamondsCollected >= 6;
                },
            },

            eight = {
                info: "Collect 6 green diamonds",
                counter: () => GlobalCounter.greenDiamondsCollected,
                questPoints: () => 45000,
                condition: () => {
                    GlobalCounter.objectiveIsCompleted = GlobalCounter.greenDiamondsCollected >= 6;
                },

            },

            nine = {
                info: "Collect 6 blue diamonds",
                counter: () => GlobalCounter.blueDiamondsCollected,
                questPoints: () => 45000,
                condition: () => {
                    GlobalCounter.objectiveIsCompleted = GlobalCounter.blueDiamondsCollected >= 6;
                },

            },

        ],
    ],

    isCompletedCheck: (questPoints) => {
        if (GlobalCounter.objectiveIsCompleted) {
            setTimeout(() => {
                GlobalCounter.totalPoints += questPoints;

                LevelFinishTooltip.objectiveCompletedPoints.innerHTML = `+${questPoints} points`;
                LevelFinishTooltip.objectiveCompletedContainer.style.display = 'flex';
            }, 2000);

            console.log(GlobalCounter.totalPoints);
            console.log(GlobalCounter.totalPoints);


        };
    },


}

