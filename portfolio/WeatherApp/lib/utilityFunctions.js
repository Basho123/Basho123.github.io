//utilityFunctions.js for script.js

let utilityFunctions = {
    //THIS FUNCTION GETS THE CURRENT GPS DEVICE LOCATION OF THE DEVICE USED
    getLocation: () => {
        return new Promise((resolve, reject) => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    return resolve(position);
                }, function (err) {
                    return reject(err);
                });
            } else {
                return reject("Geolocation is not supported by this browser.");
            }
        })
    },
    //THIS FUNCTION CONVERTS DATE NUMBERS TO WORDS
    getDayName: (dateStr, locale = `en-US`) => {
        let date = new Date(dateStr);
        return date.toLocaleDateString(locale, { weekday: 'long' });
    },
    // THIS FUNCTION CONVERTS WIND DIRECTION TO ARROW
    windDirectionFunction: (bearing) => {
        bearing > 335 || bearing <= 25 ? bearing = `⇑` : false
        bearing > 25 || bearing <= 65 ? bearing = `⇗` : false
        bearing > 65 || bearing <= 115 ? bearing = `⇒` : false
        bearing > 115 || bearing <= 155 ? bearing = `⇘` : false
        bearing > 155 || bearing <= 205 ? bearing = `⇓` : false
        bearing > 205 || bearing <= 245 ? bearing = `⇙` : false
        bearing > 245 || bearing <= 295 ? bearing = `⇐` : false
        bearing > 295 || bearing <= 335 ? bearing = `⇖` : false
        return bearing;
    }
}