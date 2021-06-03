// printTemplates.js for script.js

let printTemplates = {
    //TEMPLATE TO BE USED IN BOTH GPS AND SEARCH INPUT DATA
    //THIS TEMPLATE IS FOR THE EXTENDED 5 DAY LIST

    printTemplateExtended: (list, timezone = 0) => {
        let { headline, grandparentDiv } = page;
        headline.innerHTML = `<span style = "text-transform: capitalize;">${apiParameters.globalCity}</span>`

        let dayName = ``;
        grandparentDiv.innerHTML = ``;

        let divStyleBackgroundColorSwitch = true;

        list.forEach(element => {
            //TIME AND DATE STRING ARE FETCHED HERE, 2 SEPARATE API LINKS ARE USED AND INTERTWINED, TIMEZONE SET ACCORDINGLY
            dayName = getDayName(element.dt_txt, `en-US`)
            let dateTimeArray = element.dt_txt.split(` `);
            let date = dateTimeArray[0].substr(5).split(`-`);
            date = `${date[1]}/${date[0]}`
            hourDate = new Date(+(`${element.dt}000`) + (timezone * 1000))
            let dateArray = hourDate.toString().split(` `);
            let hours = dateArray[4].substr(0, 5);

            //GET `d` OR `n` LETTER FROM THE IMAGE NAME, TO CHECK IF DAY OR NIGHT
            let dayOrNight = element.weather[0].icon[element.weather[0].icon.length - 1];
            //CALL THE WIND DIRECTION FUNCTION AND STORE IT IN A VARIABLE
            let windDirection = windDirectionFunction(element.wind.deg)
            //CREATE THE DIV ELEMENTS
            let parentDiv = document.createElement("DIV");
            grandparentDiv.appendChild(parentDiv);

            //ZIGZAG STYLE BACKGROUND COLOR
            if (divStyleBackgroundColorSwitch === true && dayOrNight == `d`) {
                parentDiv.classList.add(`parent-div-style-1-d`)
            }
            if (divStyleBackgroundColorSwitch === true && dayOrNight == `n`) {
                parentDiv.classList.add(`parent-div-style-1-n`)
            }
            else if (divStyleBackgroundColorSwitch === false && dayOrNight == `d`) {
                parentDiv.classList.add(`parent-div-style-2-d`)

            }
            else if (divStyleBackgroundColorSwitch === false && dayOrNight == `n`) {
                parentDiv.classList.add(`parent-div-style-2-n`)
            }
            divStyleBackgroundColorSwitch = !divStyleBackgroundColorSwitch;

            let div1 = document.createElement("DIV");
            let div2 = document.createElement("DIV");
            let div3 = document.createElement("DIV");
            let div4 = document.createElement("DIV");
            let div5 = document.createElement("DIV");
            let div6 = document.createElement("DIV");

            div1.classList.add(`div1`)
            div2.classList.add(`div2`)
            div3.classList.add(`div3`)
            div4.classList.add(`div4`)
            div5.classList.add(`div6`)
            div6.classList.add(`div5`)

            parentDiv.appendChild(div1);
            parentDiv.appendChild(div2);
            parentDiv.appendChild(div3);
            parentDiv.appendChild(div4);
            parentDiv.appendChild(div5);
            parentDiv.appendChild(div6);

            div1.innerHTML = `<span class="hourlyDays"> ${dayName} <br>${date}</span>`
            div2.innerHTML = `<span class="hourlyHours">${hours}</span>`
            div3.innerHTML = `<span class="hourlyTemperature">${parseInt(element.main.temp)}°C</span>`
            div4.innerHTML = `<span style = "text-transform: capitalize;">${element.weather[0].description}</span>`
            div5.innerHTML = `<img class="imageElement" src="${apiParameters.imgUrl}${element.weather[0].icon}@2x.png">`
            element.pop > 0 ? div5.innerHTML += `<span class = "hourlyWeatherDescription">Prec. ${parseInt(element.pop * 100)}%</span>` : div5.innerHTML = div5.innerHTML
            div6.innerHTML = `
                    <span class="mediumLetters">${windDirection}</span>
                    <span class="tinyLetters">Wind speed: ${element.wind.speed}m/s</span>
                `
        })


    },

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //TEMPLATE TO BE USED IN BOTH GPS AND SEARCH INPUT DATA
    //THIS TEMPLATE IS FOR THE HOURLY LIST
    printTemplateHourly: (response, /*aqi*/) => {
        let { headline, grandparentDiv } = page;
        headline.innerHTML = `<span style = "text-transform: capitalize;">${apiParameters.globalCity}</span>`
        grandparentDiv.innerHTML = ``;
        //DATE CONVERSIONS ARE DONE HERE
        let date = new Date(+(`${response.current.dt}000`))
        let dateArray = date.toString().split(` `);
        let hours = dateArray[4].substr(0, 5);
        let days = getDayName(response.current.dt * 1000);

        //SUNRISE TIME IS CONVERTED HERE
        let sunriseTime = new Date(+(`${response.current.sunrise}000`))
            .toString() //convert to string
            .split(` `) // split the string to array
            .slice(4, 5) //slice the time out of the full string array
            .toString() // convert the array to string
            .split(":") // split the time out of the
            .slice(0, 2) // seconds
            .join(':'); // then join hours and minutes with ':' in single string


        //SUNSET TIME IS CONVERTED HERE
        let sunsetTime = new Date(+(`${response.current.sunset}000`))
            .toString()
            .split(` `)
            .slice(4, 5)
            .toString()
            .split(":")
            .slice(0, 2)
            .join(':');


        //DIV ELEMENTS ARE CREATED HERE
        let parentDiv = document.createElement("DIV");
        grandparentDiv.appendChild(parentDiv);

        //GETS d OR n LETTER FROM A STRING TO CHECK IF DAY OR NIGHT
        let dayOrNight = response.current.weather[0].icon[response.current.weather[0].icon.length - 1];

        //CALL THE WIND DIRECTION FUNCTION AND STORE IT IN A VARIABLE

        let windDirection = windDirectionFunction(response.current.wind_deg)

        if (dayOrNight == `d`) {
            parentDiv.classList.add(`parent-div-style-1-d`)
        }

        else if (dayOrNight == `n`) {
            parentDiv.classList.add(`parent-div-style-1-n`)

        }

        let div1 = document.createElement("DIV");
        let div2 = document.createElement("DIV");
        let div3 = document.createElement("DIV");
        let div4 = document.createElement("DIV");
        let div5 = document.createElement("DIV");


        div1.classList.add(`div1`)
        div2.classList.add(`div2`)
        div3.classList.add(`div3`)
        div4.classList.add(`div4`)
        div5.classList.add(`div5`)


        parentDiv.appendChild(div1);
        parentDiv.appendChild(div2);
        parentDiv.appendChild(div3);
        parentDiv.appendChild(div4);
        parentDiv.appendChild(div5);

        div1.innerHTML = `<span class="currentHours">${hours}</span><br><span class="currentDays">${days}</span>`
        div2.innerHTML = `
            <img class="imageElement"src="${apiParameters.imgUrl}${response.current.weather[0].icon}@4x.png">
            <span class = "currentWeatherDescription" style = "text-transform: capitalize;">${response.current.weather[0].description}</span>
        `
        div3.innerHTML = `
            <span class = "currentTemperature">${parseInt(response.current.temp)}°C</span>
            <span class = "currentFeelsLike">RealFeel ${parseInt(response.current.feels_like)}°C</span>
            <span class="humidity">humidity ${response.current.humidity}%</span>
        `
        div4.innerHTML = `
            <span class="largeLetters">${windDirection}</span>
            <span class="smallLetters">Wind speed: ${response.current.wind_speed}m/s</span>
        `
        div5.innerHTML = `
            <span class = "currentUv">UV index: ${response.current.uvi}</span>
            <span class="sunrise">sun rises: ${sunriseTime}</span>
            <span class="sunset">sun sets: ${sunsetTime}</span>            
        `

        let parentDiv2 = document.createElement("DIV");
        parentDiv2.classList.add(`parentDiv2`)
        grandparentDiv.appendChild(parentDiv2);

        let div10 = document.createElement("DIV");
        div10.classList.add(`div10`);
        parentDiv2.appendChild(div10);

        let divStyleBackgroundColorSwitch = true;

        response.hourly.forEach((element, index) => {
            //TIME AND DATE ARE ADJUSTED HERE, AND TIMEZONE IS CORRECTED ACCORDINGLY
            let date = new Date(+(`${element.dt}000`) + (response.timezone_offset * 1000) - 3600 * 1000)
            let dateArray = date.toString().split(` `);
            let hours = dateArray[4].substr(0, 5);
            let days = dateArray[0];
            let elementWindDirection = windDirectionFunction(element.wind_deg)
            let dayOrNight = element.weather[0].icon[element.weather[0].icon.length - 1];
            let parentDiv = document.createElement("DIV");
            grandparentDiv.appendChild(parentDiv);

            if (divStyleBackgroundColorSwitch === true && dayOrNight == `d`) {
                parentDiv.classList.add(`parent-div-style-1-d`);
            }
            if (divStyleBackgroundColorSwitch === true && dayOrNight == `n`) {
                parentDiv.classList.add(`parent-div-style-1-n`);
            }
            else if (divStyleBackgroundColorSwitch === false && dayOrNight == `d`) {
                parentDiv.classList.add(`parent-div-style-2-d`);
            }
            else if (divStyleBackgroundColorSwitch === false && dayOrNight == `n`) {
                parentDiv.classList.add(`parent-div-style-2-n`);
            }

            divStyleBackgroundColorSwitch = !divStyleBackgroundColorSwitch;

            let div1 = document.createElement("DIV");
            let div2 = document.createElement("DIV");
            let div3 = document.createElement("DIV");
            let div4 = document.createElement("DIV");
            let div5 = document.createElement("DIV");
            let div6 = document.createElement("DIV");

            div1.classList.add(`div1`)
            div2.classList.add(`div2`)
            div3.classList.add(`div3`)
            div4.classList.add(`div4`)
            div5.classList.add(`div5`)
            div6.classList.add(`div6`)

            parentDiv.appendChild(div1);
            parentDiv.appendChild(div2);
            parentDiv.appendChild(div3);
            parentDiv.appendChild(div4);
            parentDiv.appendChild(div5);
            parentDiv.appendChild(div6);

            div1.innerHTML = `<span class="hourlyHours">${hours}</span><br><span class="hourlyDays">${days}</span>`
            div2.innerHTML = `
                <img class="imageElement" src="${apiParameters.imgUrl}${element.weather[0].icon}@2x.png">`
            element.pop > 0 ? div2.innerHTML += `<span class = "hourlyWeatherDescription">Prec. ${parseInt(element.pop * 100)}%</span>` : div2.innerHTML = div2.innerHTML

            div3.innerHTML = `<span class = "hourlyTemperature">${parseInt(element.temp)}°C</span>`
            div4.innerHTML = `
            <span class = "hourlyFeelsLike">RealFeel ${parseInt(element.feels_like)}°C</span>
            <span class = "hourlyWeatherDescription"style = "text-transform: capitalize;">${element.weather[0].description}</span>          
            `
            div5.innerHTML = `<span class = "hourlyUV">UV index: ${element.uvi}</span>`
            div6.innerHTML = `
                <span class="mediumLetters">${elementWindDirection}</span>
                <span class="tinyLetters">Wind speed: ${element.wind_speed}m/s</span>
                `

        })

    },

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //TEMPLATE TO BE USED IN BOTH GPS AND SEARCH INPUT DATA
    //THIS TEMPLATE IS FOR THE WEEKLY LIST
    printTemplateWeekly: (response) => {

        let { grandparentDiv, headline } = page;

        headline.innerHTML = `<span style = "text-transform: capitalize;">${apiParameters.globalCity}</span>`
        grandparentDiv.innerHTML = ``;

        let divStyleBackgroundColorSwitch = true;

        response.daily.forEach(element => {
            //TIME AND DATE ARE ADJUSTED HERE, AND TIMEZONE IS CORRECTED ACCORDINGLY            
            date = new Date(+(`${element.dt}000`) + (response.timezone_offset * 1000))

            let days = getDayName(element.dt * 1000);

            let dateText = new Date(element.dt * 1000)
                .toDateString()
                .split(' ')
                .slice(1, 3);
            dateText[1][0] == '0' ? dateText[1] = dateText[1][1] : null;


            let parentDiv = document.createElement("DIV");
            grandparentDiv.appendChild(parentDiv);

            if (divStyleBackgroundColorSwitch === true) {
                parentDiv.classList.add(`parent-div-style-1-n`)

            }

            else if (divStyleBackgroundColorSwitch === false) {
                parentDiv.classList.add(`parent-div-style-2-n`)
            }

            let elementWindDirection = windDirectionFunction(element.wind_deg)

            divStyleBackgroundColorSwitch = !divStyleBackgroundColorSwitch;

            let div1 = document.createElement("DIV");
            let div2 = document.createElement("DIV");
            let div3 = document.createElement("DIV");
            let div4 = document.createElement("DIV");
            let div5 = document.createElement("DIV");
            let div6 = document.createElement("DIV");

            div1.classList.add(`div1`);
            div2.classList.add(`div2`);
            div3.classList.add(`div3`);
            div4.classList.add(`div4`);
            div5.classList.add(`div5`);
            div6.classList.add(`div6`);

            parentDiv.appendChild(div1);
            parentDiv.appendChild(div2);
            parentDiv.appendChild(div3);
            parentDiv.appendChild(div4);
            parentDiv.appendChild(div5);
            parentDiv.appendChild(div6);

            div1.innerHTML = `<span class = "hourlyDays">${days} ${dateText[1]} ${dateText[0]}</span>`
            div2.innerHTML = `<span class = "hourlyHours">Min. ${parseInt(element.temp.min)}°C</span>`
            div3.innerHTML = `<span class = "hourlyHours">Max. ${parseInt(element.temp.max)}°C</span>`
            div4.innerHTML = `<span style = "text-transform: capitalize;">${element.weather[0].description}</span>`
            div5.innerHTML = `<img class="imageElement" src="${apiParameters.imgUrl}${element.weather[0].icon}@2x.png">`
            element.pop > 0 ? div5.innerHTML += `<span class = "hourlyWeatherDescription">Precipitation ${parseInt(element.pop * 100)}%</span>` : div2.innerHTML = div2.innerHTML
            div6.innerHTML = `
       <span class="mediumLetters">${elementWindDirection}</span>
       <span class="tinyLetters">Wind speed: ${element.wind_speed}m/s</span>            
       `
        })


    },

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //GET DATA FOR WEEK DAY LIST FROM SEARCH BAR
    weeklyWeather: () => {
        (async function getTheDataFromGPSOneCall() {
            let dataWeekly = await getHourlyDataFromSearch();
            let dataExtended = await getExtendedDataFromSearch();

            apiParameters.globalCity = dataExtended.city.name;

            if (home === false) {
                printTemplates.printTemplateWeekly(dataWeekly)
            }
        })()

    },

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //GET DATA FOR WEEK DAY LIST FROM DEVICE LOCATION
    weeklyWeatherGPS: () => {
        (async function getTheDataFromGPSOneCall() {
            let dataWeekly = await getHourlyDataFromGPS();
            let dataExtended = await getExtendedDataFromGPS();

            //SETTING THE GLOBAL CITY NAME DEFAULT VALUE
            apiParameters.globalCity = dataExtended.city.name;

            if (home === true) {
                printTemplates.printTemplateWeekly(dataWeekly)
            }
        })()
    },

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //GET DATA FROM SEARCH BAR INPUTED CITY FOR EXTENDED 3 HOUR 5 DAY LIST
    extendedWeather: () => {
        (async function getTheData() {
            let dataFromHourly = await getHourlyDataFromSearch();
            let data = await getExtendedDataFromSearch()
            let { city, list } = await data;

            //FETCH FOR TIMEZONE DATA FROM OTHER SOURCE, SINCE NOT AVAILABLE IN FIRST SOURCE          
            let responseForTimeZone = await dataFromHourly;

            //SETTING THE GLOBAL CITY NAME TO BE USED EVERYWHERE
            apiParameters.globalCity = city.name;

            if (home === false) {
                printTemplates.printTemplateExtended(list, responseForTimeZone.timezone_offset);
            }
        })()
    },

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //GET DATA FROM GEOLOCATION OF DEVICE FOR EXTENDED 3 HOUR 5 DAY LIST
    extendedWeatherGPS: () => {
        (async function getTheDataFromGPS() {
            let data = await getExtendedDataFromGPS()
            let { city, list } = await data;

            //FETCH FOR TIMEZONE DATA FROM OTHER SOURCE, SINCE NOT AVAILABLE IN FIRST SOURCE
            let dataForTimezone = await getHourlyDataFromSearch();
            let responseForTimeZone = await dataForTimezone;

            //SETTING THE GLOBAL CITY NAME TO BE USED EVERYWHERE
            apiParameters.globalCity = city.name;

            if (home === true) {
                printTemplates.printTemplateExtended(list, responseForTimeZone.timezone_offset);
            }
        })()
    },

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //GET DATA FROM SEARCH BAR FOR HOURLY LIST
    hourlyWeather: () => {
        (async function getTheDataFromGPSOneCall() {
            //FIRST FETCHING THE GLOBAL CITY VALUE BECAUSE OF PASSING GPS COORDINATES TO NEXT SOURCE
            let dataHourly = await getHourlyDataFromSearch();
            let dataExtended = await getExtendedDataFromSearch();
            /* let aqi = await getPollutionDataromSearch(); */

            apiParameters.globalCity = dataExtended.city.name;

            if (home === false) {
                printTemplates.printTemplateHourly(dataHourly, /*aqi*/)
            }
        })()

    },

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //GET DATA FROM  GEOLOCATION OF DEVICE FOR HOURLY LIST
    hourlyWeatherGPS: () => {
        (async function getTheDataFromGPSOneCall() {
            let dataHourly = await getHourlyDataFromGPS();
            let dataExtended = await getExtendedDataFromGPS();
            //let aqi = await getPollutionDataFromGPS();

            //SETTING THE GLOBAL CITY NAME DEFAULT VALUE
            apiParameters.globalCity = dataExtended.city.name;

            if (home === true) {
                printTemplates.printTemplateHourly(dataHourly, /*aqi*/)
            }
        })()
    }
}