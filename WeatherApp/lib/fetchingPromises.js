let fetchingPromises = {
    // HOURLY AND WEEKLY WEATHER DATA FROM DEVICE LOCATION
    getHourlyDataFromGPS: () => {
        return new Promise((resolve) => {
            (async function resolvingGps() {
                let gpsData = await getLocation();
                let lat = gpsData.coords.latitude;
                let long = gpsData.coords.longitude;

                let locationNameByGPS = await fetch(`${apiParameters.apiSecondUrl}?lat=${lat}&lon=${long}&units=metric&appid=${apiParameters.apiKey}`)
                let locationName = await locationNameByGPS.json();
                apiParameters.globalCity = locationName.city.name;

                let firstLinkData = await fetch(`${apiParameters.apiFirstUrl}?lat=${lat}&lon=${long}&units=metric&appid=${apiParameters.apiKey}&exclude=minutely`)
                let parsedData = await firstLinkData.json()
                return resolve(parsedData)
            })();

        })
    },

    //HOURLY AND WEEKLY WEATHER DATA FROM SEARCHED LOCATION
    getHourlyDataFromSearch: () => {
        return new Promise((resolve) => {
            (async function resolvingCity() {
                let cityData = await fetch(`${apiParameters.apiSecondUrl}?q=${apiParameters.globalCity}&units=metric&appid=${apiParameters.apiKey}`);
                let response = await cityData.json();

                let lat = response.city.coord.lat;
                let long = response.city.coord.lon;

                let firstLinkData = await fetch(`${apiParameters.apiFirstUrl}?lat=${lat}&lon=${long}&units=metric&appid=${apiParameters.apiKey}&exclude=minutely`)
                let parsedData = await firstLinkData.json()
                return resolve(parsedData);
            })();

        })
    },

    //5 DAY EXTENDED DATA FROM DEVICE LOCATION
    getExtendedDataFromGPS: () => {
        return new Promise((resolve) => {
            (async function resolvingGps() {
                let gpsData = await getLocation();
                let lat = gpsData.coords.latitude;
                let long = gpsData.coords.longitude;

                let firstLinkData = await fetch(`${apiParameters.apiSecondUrl}?lat=${lat}&lon=${long}&units=metric&appid=${apiParameters.apiKey}&exclude=minutely`)
                let parsedData = await firstLinkData.json()
                return resolve(parsedData)
            })();
        })
    },

    //5 DAY EXTENDED DATA FROM SEARCHED LOCATION
    getExtendedDataFromSearch: () => {
        return new Promise((resolve) => {
            (async function resolvingCity() {
                let firstLinkData = await fetch(`${apiParameters.apiSecondUrl}?q=${apiParameters.globalCity}&units=metric&appid=${apiParameters.apiKey}&exclude=minutely`)
                let parsedData = await firstLinkData.json()
                return resolve(parsedData)
            })();
        })
    }
}
