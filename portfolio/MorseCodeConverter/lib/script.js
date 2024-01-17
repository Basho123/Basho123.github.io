//script.js
//morse Code
    import morseCode from "./constMorse.js";

    let normalTextInput = document.getElementById('normalText');
    let morseCodeInput = document.getElementById('morseCode');

    let button = document.getElementById('button');
    let divToChange = document.getElementById('toChange');

    //THIS IS THE CHARACTER CLASS
    let objectCreator = (morse) => {
        let charArray = [];
        let arrayToReturn = [];

        //CHARACTERS ARE GENERATED HERE
        //letters
        for (let i = 0; i < 26; i++) {
            charArray.push(String.fromCharCode(65 + i))
        }
        //signs
        for (let i = 0; i < 33; i++) {
            charArray.push(String.fromCharCode(32 + i))
        }
        //create the class
        charArray.forEach((element, index) => {
            arrayToReturn.push({
                capitalLetter: element,
                lowercaseLetter: element.toLowerCase(),
                morse: morse[index],
            });
        });

        //return the value
        return arrayToReturn;
    };
    //SAVING THE VALUE IN A VARIABLE FOR EASIER MANIPULATION
    let characterArray = objectCreator(morseCode);
    console.log(characterArray);
    //THESE ARE IMBUED WITH WORDS OR SIGNS
    let wordsAnvil = [];
    let morseAnvil = [];


    button.addEventListener('click', function () {
        //LETTERS TO MORSE
        divToChange.innerHTML = ``
        if (normalTextInput.value.length > 0 && morseCodeInput.value.length === 0) {
            for (let i = 0; i < normalTextInput.value.length; i++) {
                for (let g = 0; g < morseCode.length; g++) {
                    if (normalTextInput.value[i] == characterArray[g].capitalLetter || normalTextInput.value[i] == characterArray[g].lowercaseLetter) {
                        morseAnvil += characterArray[g].morse + ` `;
                        if (normalTextInput.value[i] == ` `) {
                            morseAnvil += `&nbsp;&nbsp;&nbsp`;
                        }
                        break;
                    }
                }
            }
            divToChange.innerHTML = `
            <h3>The text to be converted:</h3>
             <p> ${normalTextInput.value} </p>
            <h3>The text converted in morse code:</h3>
             <p> ${morseAnvil} </p>
            `
        }
        //MORSE TO LETTERS
        else if (normalTextInput.value.length === 0 && morseCodeInput.value.length > 0) {
            morseCodeInput.value += ` `;

            //WE WELD TOGETHER ALL THE CHARACTERS WITH THIS STATEMENT AFTER EACH SPACE
            morseAnvil = morseCodeInput.value.split(" ");

            //THIS CHANGES THE GIVEN SIGNAL TO ITS CORELATING LETTER
            for (let i = 0; i < morseAnvil.length; i++) {
                for (let g = 0; g < characterArray.length; g++) {
                    if (morseAnvil[i] == morseCode[g]) {
                        wordsAnvil += characterArray[g].capitalLetter;
                        break;
                    }
                    //IF EMPTY SPACE IS FOUND, INSERT A SPACE
                    if (morseAnvil[i] == ``) {
                        wordsAnvil += ` `;
                        break;
                    }
                }
            }
            divToChange.innerHTML = `
            <h3>The morse code to be converted:</h3>
             <p> ${morseCodeInput.value} </p>
            <h3>The morse code converted in text:</h3>
             <p> ${wordsAnvil} </p>
            `
        }

        else if (normalTextInput.value.length > 0 && morseCodeInput.value.length > 0) {
            alert(`Please enter either text or morse code, not both.`);
        }
        else if (normalTextInput.value.length === 0 && morseCodeInput.value.length === 0) {
            alert(`Input fields are empty.`);
        }

        //RESET THE INPUTS
        normalTextInput.value = ``;
        morseCodeInput.value = ``;
        wordsAnvil = [];
        morseAnvil = [];
    })

