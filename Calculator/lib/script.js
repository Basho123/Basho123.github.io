
    //script.js 
    // MATHEMATICALLY CORRECT CALCULATOR, by Ivan Jamandilovski 01.02.20201

    $(document).ready(() => {

        console.log(`KEYCOMMANDS: \n\nDel, Escape, c: clear all \nPageUp: Sound on/off \nPageDown: Power on/off \nEnter: Equals \n\n ver. 1.0`);

        //VALUES THAT ARE USED TO CALCULATE AND PRINT ON DISPLAY
        //VAL 1 IS UPPER, VAL2 IS SMALLER DISPLAY
        let val1 = $("#val1")[0];
        let val2 = $("#val2")[0];

        //BEEP SOUND, SILENT IS USED FOR DUMMY FILE
        let beep = $("#beep")[0];

        //THESE ARE TWO BUTTONS RIGHT OF THE DISPLAY FOR SOUND TOGGLE AND POWER UP
        let powerButton = $("#powerButton");
        let audioButton = $("#audioButton");

        //THIS STYLES ALL THE BUTTONS
        let buttonForStyling = $(".smallButton")

        //THIS IS USED TO TOGGLE THE WORKING STATES
        let onOff = false;
        let audioOnOff = false;
        //THESE ARE MORE COMPLEX SO THEY NEED TO BE SEPARATE
        let equalsBut = $("#equals");
        let clearBut = $("#clear");
        let dotBut = $("#dot");

        // THIS IS ACCESED FROM INSIDE FOR LOOP SO NO NEED OF IT
        // let sinBut = $("#sinus");

        //THIS OPERATOR ARRAY IS USED FOR THE CALCULATION PROCESS
        //FIRST OPERATOR IS DELAYED WITH A PLACEHOLDER "SKIP"
        let operator = ['skip'];

        //THIS IS AUXILARY ARRAY TO PUSH RESULT TO CALCULATE, IS ALSO DELAYED BY 1 PLACE
        let additonalArray = [0];

        //THIS ARRAY IS USED TO PUSH NUMBERS ENTERED, AND THEN CALCULATE WITH AUXILARY ARRAY AND GIVEN OPERATOR
        let numbersGlobal = [];

        //THE OPERATORS ARE TAKEN FROM AN ARRAY TO BE USED IN FOR LOOP
        let listOfPossibleOperators = ['+', '-', '*', '/', '^', '√', 'sin']

        //EQUATION ENDED TOGGLE, SO TO CONTINUE AFTER EQUALS
        let equationEnded = false;

        //THIS IS THE GLOBAL RESULT
        let result = 0;

        //THE DOT COUNTER FORBIDS PLACING MULTIPLE DOTS IN CALCULATOR
        let dotCounter = 0;


        /*THIS FUNCTION IS USED TO RESET THE COUNTER TO SHOW ZERO AFTER EACH OPERATOR, BUT NOT 
        ADD TO THE NUMBER, AND LENGTH CHECK IS TO HANDLE THE DECIMAL NUMBER*/
        deleteZero = () => val1.value == 0 && val1.value.length === 1 ? val1.value = '' :

            ////////////////////////////////////////
            //THIS HANDLES THE YELLOW POWER BUTTON//
            ////////////////////////////////////////

            powerButton.click(() => {
                //THE POWER BUTTON ON STATE
                if (onOff === true) {
                    val1.style.animationName = "power-on";
                    val1.style.animationDuration = "0.5s";
                    val1.style.animationFillMode = "both";

                    val2.style.animationName = "power-on";
                    val2.style.animationDuration = "0.49s";
                    val2.style.animationFillMode = "both";

                    for (let each of buttonForStyling) {
                        each.style.color = "white"
                        each.style.textShadow = "0px 0px 25px white"
                    }

                    beep = $("#beep")[0];
                    clearBut.click();
                    beep.play();
                    console.log(`=POWER ON=`);
                }
                //POWER BUTTON OFF STATE
                else {
                    val1.style.animationName = "power-off";
                    val1.style.animationDuration = "2s";
                    val1.style.animationFillMode = "both";

                    val2.style.animationName = "power-off";
                    val2.style.animationDuration = "2s";
                    val2.style.animationFillMode = "both";


                    for (let each of buttonForStyling) {
                        each.style.color = "gray"
                        each.style.textShadow = "0px 0px 0px white"
                    }

                    beep = $("#dummy")[0];
                    console.log(`=POWER OFF=`);
                    clearBut.click();
                }
                onOff = !onOff;


            })

        /////////////////////////////////////
        //THIS HANDLES THE RED AUDIO BUTTON//
        /////////////////////////////////////
        audioButton.click(() => {
            if (onOff === false) {
                if (audioOnOff === false) {
                    beep = $("#dummy")[0];
                    console.log(`=SOUND OFF=`);
                }
                else {
                    beep = $("#beep")[0];
                    console.log(`=SOUND ON=`);
                }
                audioOnOff = !audioOnOff
            }
        })

        //? HELP BUTTON
        $("#help").click(() => alert(`KEYCOMMANDS: \nDel, Escape, 'C': clear all \nPageUp: Sound on/off \nPageDown: Power on/off \nEnter: Equals \n\n ver. 1.0 Ivan Jamandilovski`))

        /////////////////////////////////////////////
        //THIS HANDLES ALL THE INPUTS FROM KEYBOARD//
        /////////////////////////////////////////////

        window.addEventListener("keydown", event => {
            if (event.defaultPrevented) {
                return; // Do nothing if the event was already processed
            }

            //THIS IS FOR THE NUMBERS
            for (let i = 0; i < 10; i++) {
                if (event.key === `${i}`) {
                    beep.play();
                    deleteZero();
                    val1.value += +(i);
                }
            }

            //THIS HANDLES ALL THE OPERATORS FROM KEYBOARD
            for (let i = 0; i < listOfPossibleOperators.length; i++) {
                if (event.key === `${listOfPossibleOperators[i]}` && equationEnded === false) {
                    numbersGlobal.push(+val1.value);
                    console.log('at operator push', val1.value);
                    operator.push(listOfPossibleOperators[i]);
                    val2.value += `${val1.value}${listOfPossibleOperators[i]}`;
                    val1.value = 0;
                    dotCounter = 0;
                    beep.play();
                }

                if (event.key === `${listOfPossibleOperators[i]}` && equationEnded === true) {
                    operator = ['skip'];
                    operator.push(listOfPossibleOperators[i]);
                    equationEnded = false;
                    result = 0;
                    val2.value += `${listOfPossibleOperators[i]}`;
                    val1.value = 0;
                    dotCounter = 0;
                    beep.play();
                }

            }

            //EVENT KEYS FOR EQUALS, DOT, CLEAR, AND TOGGLE SOUND AND POWER
            event.key === `PageUp` ? audioButton.click()
                : event.key === `PageDown` ? powerButton.click()
                    : event.key === `Enter` ? equalsBut.click()
                        : event.key === '.' ? dotBut.click()
                            : event.key === `Delete` || event.key === `Escape` || event.key === `c` ? clearBut.click()
                                : result = result;

            //BACKSPACE DELETES LAST INPUTED NUMBER
            if (event.key === `Backspace`) {
                let toDelArray = [];
                for (let each of val1.value) {
                    toDelArray.push(each);
                }
                toDelArray.splice(toDelArray.length - 1);
                val1.value = '';
                for (let each of toDelArray) {
                    val1.value += each;
                }
                +val1.value;
            }
            // // Cancel the default action to avoid it being handled twice
            event.preventDefault();
        });

        /////////////////////////////////////
        //THIS HANDLES ALL THE MOUSE CLICKS//
        /////////////////////////////////////
        window.addEventListener("click", event => {
            if (event.defaultPrevented) {
                return; // Do nothing if the event was already processed
            }
            // LOOP FOR ALL THE NUMBERS ON MOUSE CLICK
            for (let i = 0; i < 10; i++) {
                if (event.target.innerText === `${i}`) {
                    beep.play();
                    deleteZero();
                    val1.value += i;
                }
            }

            //THIS HANDLES ALL THE OPERATORS
            for (let i = 0; i < listOfPossibleOperators.length; i++) {

                //ALL THE OPERATORS, IF EQUATION IS FIRST STARTED
                if (event.target.innerText === `${listOfPossibleOperators[i]}` && equationEnded === false) {
                    numbersGlobal.push(+val1.value);
                    operator.push(listOfPossibleOperators[i]);
                    val2.value += `${val1.value}${listOfPossibleOperators[i]}`;
                    val1.value = 0;
                    dotCounter = 0;
                    beep.play();
                }
                //ALL THE OPERATORS AFTER EQUALS IS PRESSED
                if (event.target.innerText === `${listOfPossibleOperators[i]}` && equationEnded === true) {
                    operator = ['skip'];
                    operator.push(listOfPossibleOperators[i]);
                    equationEnded = false;
                    result = 0;
                    val2.value += `${listOfPossibleOperators[i]}`;
                    val1.value = 0;
                    dotCounter = 0;
                    beep.play();
                }
                //SQUARE ROOT BUTTON
                if (event.target.innerText === `√`) {
                    numbersGlobal.push(+val1.value);
                    operator.push(`√`);
                    val2.value += `√${val1.value}`;
                    val1.value = ``;
                    equalsBut.click();
                    beep.play();
                    break;
                }

                //SINUS BUTTON
                else if (event.target.innerText === `sin`) {
                    numbersGlobal.push(+val1.value);
                    operator.push(`sin`);
                    val2.value += `sin ${val1.value}`;
                    val1.value = 0;
                    equalsBut.click();
                    beep.play();
                    break;
                }

            }
            // Cancel the default action to avoid it being handled twice
            event.preventDefault();
        });

        //CLEAR BUTTON, ALSO USED BY DELETE BUTTON, C AND ESCAPE
        clearBut.click(() => {
            numbersGlobal = [];
            operator = ['skip'];
            result = 0;
            val1.value = 0;
            val2.value = ``;
            equationEnded = false;
            beep.play();
            dotCounter = 0;
            additonalArray = [0];
        });

        dotBut.click(() => {
            if (dotCounter === 0) {
                val1.value += '.';
                beep.play();
                dotCounter++;
            }
            else beep.play();;

        })

        //////////////
        /// EQUALS ///
        //////////////

        equalsBut.click(() => {
            // FIRST, TO CHECK IF EQUATION IS ENDED
            if (equationEnded === false) {
                numbersGlobal.push(+val1.value);
                for (let i = 0; i < numbersGlobal.length; i++) {
                    //SKIP
                    if (operator[i] === `skip`) {
                        additonalArray.push(numbersGlobal[i])
                    }
                    //OPERATORS
                    else {

                        //PLUS
                        if (operator[i] === `+`) {
                            result = additonalArray[i] + numbersGlobal[i];
                            additonalArray.push(result);
                        }

                        //MINUS
                        if (operator[i] === `-`) {
                            result = additonalArray[i] - numbersGlobal[i];
                            additonalArray.push(result);
                        }

                        //MULTIPLICATION
                        if (operator[i] === `*`) {
                            if (operator[i - 1] === `+`) {
                                result = (additonalArray[i] - additonalArray[i - 1]) * numbersGlobal[i] + additonalArray[i - 1]
                                additonalArray.push(result);
                            }
                            else if (operator[i - 1] === `-`) {
                                result = additonalArray[i - 1] - (numbersGlobal[i - 1] * numbersGlobal[i]);
                                additonalArray.push(result);
                            }
                            else {
                                result = additonalArray[i] * numbersGlobal[i];
                                additonalArray.push(result);
                            }
                        }

                        //DIVISION
                        if (operator[i] === `/`) {
                            if (operator[i - 1] === `+`) {
                                result = (additonalArray[i] - additonalArray[i - 1]) / numbersGlobal[i] + additonalArray[i - 1]
                                additonalArray.push(result);
                            }
                            else if (operator[i - 1] === `-`) {
                                result = additonalArray[i - 1] - (numbersGlobal[i - 1] / numbersGlobal[i]);
                                additonalArray.push(result);
                            }
                            else {
                                result = additonalArray[i] / numbersGlobal[i];
                                additonalArray.push(result);
                            }
                        }
                        //POWER
                        if (operator[i] === `^`) {
                            if (operator[i - 1] === `+`) {
                                result = (additonalArray[i] - additonalArray[i - 1]) ** numbersGlobal[i] + additonalArray[i - 1]
                                additonalArray.push(result);
                            }
                            else if (operator[i - 1] === `-`) {
                                result = additonalArray[i - 1] - (numbersGlobal[i - 1] ** numbersGlobal[i]);
                                additonalArray.push(result);
                            }
                            else {
                                result = additonalArray[i] ** numbersGlobal[i];
                                additonalArray.push(result);
                            }
                        }

                        //SQUARE
                        if (operator[i] === `√`) {
                            result = Math.sqrt(additonalArray[i]);
                            additonalArray.push(result);
                        }

                        //SINUS
                        if (operator[i] === `sin`) {
                            result = Math.sin(additonalArray[i]);
                            additonalArray.push(result);
                        }
                    }
                }

                //LIMITING MORE DECIMAL PLACES ON SECOND DISPLAY TO ACCOMODATE MORE NUMBERS           

                numbersGlobal.length > 1 ? val2.value += `${val1.value}=${Math.round(result * 1000) / 1000}`  //TO PRINT IN THE SECOND DISPLAY IF EQUATION IS BIGGER             
                    : val2.value += `=${Math.round(result * 1000) / 1000}`   //TO PRINT IN SECOND DISPLAY IF EQUATION IS SINGLE STATEMENT

                //GLOBAL RESULT
                //LIMITING LESS DECIMAL PLACES ON FIRST DISPLAY BECAUSE IT IS SHOWING ONLY RESULT
                val1.value = Math.round(result * 10000000) / 10000000;

                //THESE PARAMETERS PREPARE THE CALCULATOR FOR STATEMENTS AFTER THE EQUALS IS PRESSED
                numbersGlobal = [];
                numbersGlobal.push(result);
                operator = ['skip'];
                result = 0;
                equationEnded = true;
                dotCounter = 0;
                additonalArray = [0];
                beep.play();
            }
            //IF EQUALS IS PRESSED AFTER EQUATION IS ENDED
            else { beep.play() };
        })

    });
