const https = require('https');

const DARKSKY_BASE_URL = "https://api.darksky.net/forecast/652305c9f512758a71a61fd54915a20f/";

const makeDarkSkyUrl = (latitude, longitude) => {
    return `${DARKSKY_BASE_URL}${latitude},${longitude}`;
}

const receiveWeather = (latitude, longitude) => {
    https.get(makeDarkSkyUrl(latitude, longitude), (resp) => {
        let data = '';
        resp.on('data', (chunk) => {
            data += chunk;
        });

        resp.on('end', () => {
            let weather = JSON.parse(data);

            showWeather(weather.currently);
        });
    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
}

const showWeather = (currentWeather) => {
    console.log("Current weather");
    console.log(`Summary: ${currentWeather.summary}`);
    console.log(`Temperature: ${currentWeather.temperature}`);
    console.log(`Humidity: ${currentWeather.humidity}`);
    console.log(`Wind speed: ${currentWeather.windSpeed}`)
}

module.exports = {
    receiveWeather
}