
	//script.js // word
	/*
	Number to Words
	Create a web page that can convert a number entered in an input in digits
	to the same number in words. The result should be printed on the page.
	 The converter should convert to at least a trillion. 
	Ex:	Input: 0		Result: zero
	Input: 13		Result: thirteen 	
	Input: 345		Result: three hundred forty-five
		Input: 20056	Result: twenty thousand fifty-six
	*/

	// By Ivan Jamandilovski

	let value = document.getElementById('value');
	let post = document.getElementById('post');
	let numberDigitPrint = document.getElementById('numberDigitPrint');
	let numberWordPrint = document.getElementById('numberWordPrint');
	let textContainer = document.getElementById('textContainer');

	let inputNumber = 0;

	//WE TAKE THE TEXT FROM THESE ARRAYS, AND USE EMPTY SPACES TO ACCOMODATE THE FOR LOOP
	let arrayWithNumbers = [``, `one `, `two `, `three `, `four `, `five `, `six `, `seven `, `eight `, `nine `]
	let arrWithTeens = [`ten `, `eleven `, `twelve `, `thirteen `, `fourteen `, `fifteen `, `sixteen `, `seventeen `, `eighteen `, `nineteen `,]
	let arrWithDecades = [``, ``, `twenty `, `thirty `, `fourty `, `fifty `, `sixty `, `seventy `, `eighty `, `ninety `,]


	//THE WORDS ARE IMBUED HERE
	let stringAnvil = ``;
	/////////////////////////////////////////////////
	/////////////////////////////////////////////////
	/////////////// FUNCTIONS OF NUMBERS ////////////
	/////////////////////////////////////////////////
	/////////////////////////////////////////////////
	let ones = (i, g) => {
		inputNumber[i] == g && inputNumber[i - 1] != 1 ? stringAnvil += arrayWithNumbers[g] : i
	}
	let tens = (i, q) => {
		//TEENS		
		inputNumber[i] == 1 && inputNumber[i + 1] == q ? stringAnvil += arrWithTeens[q]
			//ADULTS
			: inputNumber[i] == q ? stringAnvil += arrWithDecades[q] : i
	}

	let hundreds = (i, t) => {
		// ones(i, t);
		inputNumber[i] == g ? stringAnvil += arrayWithNumbers[g] : i
		t == inputNumber[i] && inputNumber[i] > 0 ? stringAnvil += `hundred ` : i
	}

	//FIRST PARAMETER IS TO FIND THE LENGTH OF DIGITS, SECOND IS TO COUNT THROUGH THE NUMBERS, 
	//THIRD PARAMETER ARGUMENT IS THE MAXIMUM LENGTH OF THE NUMBER, AND FOURTH IS FOR THE STRING
	let coolFunction = (i, g, digit, string) => {
		let toContinue = true;
		let someCounter = 0;

		inputNumber[i - 1] != 1 ? ones(i, g) : i;

		for (let k = 0; k < inputNumber.length; k++) {
			inputNumber.length === digit + k ? someCounter += k
				: false
		}
		//VALIDATION WHEN THERE ARE ZEROS IN THE MIDDLE
		if (inputNumber.length === digit + someCounter &&
			g == inputNumber[i] && inputNumber[1 + someCounter] == 0 &&
			g == inputNumber[i] && inputNumber[2 + someCounter] == 0 &&
			g == inputNumber[i] && inputNumber[3 + someCounter] == 0) {
			stringAnvil += ``;
			toContinue = false;
		}
		g == inputNumber[i] && toContinue === true ? stringAnvil += string : i;
	}


	let thousands = (i, g) => {
		coolFunction(i, g, 7, `thousand `)
	}
	let millions = (i, g) => {
		coolFunction(i, g, 10, `million `)
	}
	let trillions = (i, g) => {
		coolFunction(i, g, 13, `trillion `)
	}
	let billions = (i, g) => {
		coolFunction(i, g, 16, `billion `)
	}

	//FUNCTIONS ARE STORED IN ARRAYS TO BE USED IN FOR LOOPS
	let arrWithFunctions = [trillions, millions, thousands, hundreds, tens, ones]
	let arrWithFunctionsHigher = [trillions, hundreds, tens, millions]

	/////////////////////////////////////////////////
	/////////////////////////////////////////////////
	///////////////// BUTTON CLICK //////////////////
	/////////////////////////////////////////////////
	/////////////////////////////////////////////////


	post.addEventListener('click', () => {
		inputNumber = value.value;
		textContainer.innerHTML = ``
		stringAnvil = ``;

		//ITERATE THE LENGTH OF THE NUMBER
		for (let i = 0; i < inputNumber.length; i++) {
			//1 DIGIT
			//ONES
			switch (inputNumber.length) {
				//CASE NUMBER IS DIGIT LENGTH
				case 1:
					for (g = 0; g <= 9; g++) {
						ones(i, g);
					}
					break;

				case 2:
					for (let k = 0; k < 2; k++) {
						if (i == k) {
							for (g = 0; g <= 9; g++) {
								arrWithFunctions[k + 4](i, g);
							}
						}
					}
					break;

				case 3:
					for (let k = 0; k < 3; k++) {
						if (i == k) {
							for (g = 0; g <= 9; g++) {
								arrWithFunctions[k + 3](i, g);
							}
						}
					}
					break;

				case 4:
					for (let k = 0; k < 4; k++) {
						if (i == k) {
							for (g = 0; g <= 9; g++) {
								arrWithFunctions[k + 2](i, g);
							}
						}
					}
					break;

				case 5:
					if (i == 0) {
						for (g = 0; g <= 9; g++) {
							//TEN THOUSANDS
							tens(i, g);
						}
					}
					for (let k = 1; k < 5; k++) {
						if (i == k) {
							for (g = 0; g <= 9; g++) {
								arrWithFunctions[k + 1](i, g);
							}
						}
					}
					break;

				case 6:
					// THERE ARE 2 LOOPS WITH LOOPING FUNCTIONS		// arrWithFunctions = [trillions, millions, thousands, hundreds, tens, ones]
					for (let k = 0; k < 2; k++) {
						if (i == k) {
							for (g = 0; g <= 9; g++) {
								arrWithFunctions[k + 3](i, g);
							}
						}
					}
					for (let k = 2; k < 6; k++) {
						if (i == k) {
							for (g = 0; g <= 9; g++) {
								arrWithFunctions[k](i, g);
							}
						}
					}

					break;

				//MILLIONS
				case 7:
					if (i == 0) {
						for (g = 0; g <= 9; g++) {
							millions(i, g);
						}
					}
					for (let k = 0; k < 2; k++) {
						if (i == k + 1) {
							for (g = 0; g <= 9; g++) {
								arrWithFunctions[k + 3](i, g);
							}
						}
					}
					for (let k = 2; k < 6; k++) {
						if (i == k + 1) {
							for (g = 0; g <= 9; g++) {
								arrWithFunctions[k](i, g);
							}
						}
					}

					break;

				case 8:
					//THREE LOOPS WITH LOOPING FUNCTIONS			
					for (let k = 2; k < 4; k++) {
						if (i == k - 2) {
							for (g = 0; g <= 9; g++) {
								arrWithFunctionsHigher[k](i, g);
							}
						}
					}
					for (let k = 0; k < 2; k++) {
						if (i == k + 2) {
							for (g = 0; g <= 9; g++) {
								arrWithFunctions[k + 3](i, g);
							}
						}
					}
					for (let k = 2; k < 6; k++) {
						if (i == k + 2) {
							for (g = 0; g <= 9; g++) {
								arrWithFunctions[k](i, g);
							}
						}
					}
					break;

				case 9:
					for (let k = 1; k < 4; k++) {
						if (i == k - 1) {
							for (g = 0; g <= 9; g++) {
								arrWithFunctionsHigher[k](i, g);
							}
						}
					}
					for (let k = 0; k < 2; k++) {
						if (i == k + 3) {
							for (g = 0; g <= 9; g++) {
								arrWithFunctions[k + 3](i, g);
							}
						}
					}
					for (let k = 2; k < 6; k++) {
						if (i == k + 3) {
							for (g = 0; g <= 9; g++) {
								arrWithFunctions[k](i, g);
							}
						}
					}
					break;

				//TRILLIONS
				case 10:
					for (let k = 0; k < 4; k++) {
						if (i == k) {
							for (g = 0; g <= 9; g++) {
								arrWithFunctionsHigher[k](i, g);
							}
						}
					}
					for (let k = 0; k < 2; k++) {
						if (i == k + 4) {
							for (g = 0; g <= 9; g++) {
								arrWithFunctions[k + 3](i, g);  // arrWithFunctions = [trillions, millions, thousands, hundreds, tens, ones]
							}
						}
					}
					for (let k = 2; k < 6; k++) {
						if (i == k + 4) {
							for (g = 0; g <= 9; g++) {
								arrWithFunctions[k](i, g);
							}
						}
					}
					break;

				case 11:
					if (i == 0) {
						for (g = 0; g <= 9; g++) {
							tens(i, g);
						}
					}
					for (let k = 0; k < 4; k++) {
						if (i == k + 1) {
							for (g = 0; g <= 9; g++) {
								arrWithFunctionsHigher[k](i, g);  // arrWithFunctionsHigher = [trillions, hundreds, tens, millions]
							}
						}
					}

					for (let k = 0; k < 2; k++) {
						if (i == k + 5) {
							for (g = 0; g <= 9; g++) {
								arrWithFunctions[k + 3](i, g);
							}
						}
					}
					for (let k = 2; k < 6; k++) {
						if (i == k + 5) {
							for (g = 0; g <= 9; g++) {
								arrWithFunctions[k](i, g);
							}
						}
					}
					break;

				case 12:
					if (i == 0) {
						for (g = 0; g <= 9; g++) {
							hundreds(i, g);
						}
					}
					if (i == 1) {
						for (g = 0; g <= 9; g++) {
							tens(i, g);
						}
					}
					for (let k = 0; k < 4; k++) {
						if (i == k + 2) {
							for (g = 0; g <= 9; g++) {
								arrWithFunctionsHigher[k](i, g);   // arrWithFunctionsHigher = [trillions, hundreds, tens, millions]
							}
						}
					}

					for (let k = 0; k < 2; k++) {
						if (i == k + 6) {
							for (g = 0; g <= 9; g++) {
								arrWithFunctions[k + 3](i, g);  //arrWithFunctions = [trillions, millions, thousands, hundreds, tens, ones]
							}
						}
					}
					for (let k = 2; k < 6; k++) {
						if (i == k + 6) {
							for (g = 0; g <= 9; g++) {
								arrWithFunctions[k](i, g);
							}
						}
					}
					break;

				case 13:
					//BILLIONS
					if (i == 0) {
						for (g = 0; g <= 9; g++) {
							billions(i, g);
						}
					}
					if (i == 1) {
						for (g = 0; g <= 9; g++) {
							hundreds(i, g);
						}
					}
					if (i == 2) {
						for (g = 0; g <= 9; g++) {
							tens(i, g);
						}
					}
					for (let k = 0; k < 4; k++) {
						if (i == k + 3) {
							for (g = 0; g <= 9; g++) {
								arrWithFunctionsHigher[k](i, g);  // arrWithFunctionsHigher = [trillions, hundreds, tens, millions]
							}
						}
					}
					for (let k = 0; k < 2; k++) {
						if (i == k + 7) {
							for (g = 0; g <= 9; g++) {
								arrWithFunctions[k + 3](i, g);
							}
						}
					}
					for (let k = 2; k < 6; k++) {
						if (i == k + 7) {
							for (g = 0; g <= 9; g++) {
								arrWithFunctions[k](i, g);
							}
						}
					}
					break;

				case 14:
					if (i == 0) {
						for (g = 0; g <= 9; g++) {
							tens(i, g);
						}
					}
					if (i == 1) {
						for (g = 0; g <= 9; g++) {
							billions(i, g);
						}
					}
					if (i == 2) {
						for (g = 0; g <= 9; g++) {
							hundreds(i, g);
						}
					}
					if (i == 3) {
						for (g = 0; g <= 9; g++) {
							tens(i, g);
						}
					}
					for (let k = 0; k < 4; k++) {
						if (i == k + 4) {
							for (g = 0; g <= 9; g++) {
								arrWithFunctionsHigher[k](i, g);
							}
						}
					}
					for (let k = 0; k < 2; k++) {
						if (i == k + 8) {
							for (g = 0; g <= 9; g++) {
								arrWithFunctions[k + 3](i, g);
							}
						}
					}
					for (let k = 2; k < 6; k++) {
						if (i == k + 8) {
							for (g = 0; g <= 9; g++) {
								arrWithFunctions[k](i, g);
							}
						}
					}
					break;

				case 15:
					if (i == 0) {
						for (g = 0; g <= 9; g++) {
							hundreds(i, g);
						}
					}
					if (i == 1) {
						for (g = 0; g <= 9; g++) {
							tens(i, g);
						}
					}
					if (i == 2) {
						for (g = 0; g <= 9; g++) {
							billions(i, g);
						}
					}
					if (i == 3) {
						for (g = 0; g <= 9; g++) {
							hundreds(i, g);
						}
					}
					if (i == 4) {
						for (g = 0; g <= 9; g++) {
							tens(i, g);
						}
					}
					for (let k = 0; k < 4; k++) {
						if (i == k + 5) {
							for (g = 0; g <= 9; g++) {
								arrWithFunctionsHigher[k](i, g);
							}
						}
					}
					for (let k = 0; k < 2; k++) {
						if (i == k + 9) {
							for (g = 0; g <= 9; g++) {
								arrWithFunctions[k + 3](i, g);  // arrWithFunctions = [trillions, millions, thousands, hundreds, tens, ones]
							}
						}
					}
					for (let k = 2; k < 6; k++) {
						if (i == k + 9) {
							for (g = 0; g <= 9; g++) {
								arrWithFunctions[k](i, g);
							}
						}
					}
					break;
				default:
					break;
			}
		}

		//TEXT PRINT
		inputNumber.length > 15 ? textContainer.innerHTML = `<h2 id="numberWordPrint">Please enter smaller number, max 1000 quadrillion-1</h2>`
			: textContainer.innerHTML = `<h2 id="numberWordPrint">${stringAnvil}</h2>`
	})