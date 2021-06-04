

//#region script.js
//weather app script.js

//data fetched from https://api.openweathermap.org/data/2.5/

//THIS VARIABLE IS USED TO DETERMINE WHERETHER THE USER HAS NAVIGATED AWAY FROM THE INITAL isHomePAGE


let isHome = true;

// HTML DOCUMENT DOM TARGETING
const page = {
    city: document.getElementById('cityValue'),
    button: document.getElementById('button'),
    showHourlyButton: document.getElementById('showHourly'),
    showExtendedButton: document.getElementById('showExtended'),
    showWeeklyButton: document.getElementById('showWeeklyButton'),

    body: document.getElementsByTagName(`body`)[0],
    bodyCorrectWidthForMobilePhone: () => {
        if (innerWidth < 800) page.body.style.width = `${innerWidth}px`;
    },

    grandparentDiv: document.getElementById('toShow'),
    headline: document.getElementById('headerToChange'),
    tableHeadRow: document.getElementById('tHeadRow'),
    tableBody: document.getElementById('tBody'),

    setCity: this.button.addEventListener('click', () => {
        if (page.city.value.length > 0) {
            apiParameters.globalCity = page.city.value;
            hourlyWeather();
            isHome = false;
        }
    })
}
page.bodyCorrectWidthForMobilePhone();

//API DEFAULT PARAMETERS STORED IN OBJECT
const apiParameters = {
    globalCity: `Skopje`,
    apiKey: `74e59f6374abe0d9b758877616ae444c`,
    apiFirstUrl: `https://api.openweathermap.org/data/2.5/onecall`,
    apiSecondUrl: `https://api.openweathermap.org/data/2.5/forecast`,
    imgUrl: ` http://openweathermap.org/img/wn/`,
}


// all Fetching function promises
// IMPORTED FROM fetchingPromises.js

let { getHourlyDataFromGPS
    , getHourlyDataFromSearch
    , getExtendedDataFromGPS
    , getExtendedDataFromSearch } = fetchingPromises;


//UTILITY FUNCTIONS
// IMPORTED FROM utilityFunctions.js

let { getLocation, getDayName, windDirectionFunction } = utilityFunctions;


//THESE ARE THE PRINT TEMPLATES
// IMPORTED FROM printTemplates.js

let {
    printTemplateExtended,
    printTemplateHourly,
    printTemplateWeekly,
    weeklyWeather,
    weeklyWeatherGPS,
    extendedWeather,
    extendedWeatherGPS,
    hourlyWeather,
    hourlyWeatherGPS, } = printTemplates


//HOURLY FORECAST SHOW BUTTON
page.showHourlyButton.addEventListener('click', () => isHome ? hourlyWeatherGPS() : hourlyWeather())

//5-DAY EXTENDED FORECAST SHOW BUTTON
page.showExtendedButton.addEventListener('click', () => isHome ? extendedWeatherGPS() : extendedWeather())

//WEEKLY FORECAST SHOW BUTTON
page.showWeeklyButton.addEventListener('click', () => isHome ? weeklyWeatherGPS() : weeklyWeather())

//DEFAULT PAGE WHEN OPENED
hourlyWeatherGPS();
    //#endregion

