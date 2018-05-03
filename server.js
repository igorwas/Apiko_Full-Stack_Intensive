const https = require('https');
const geocoding = require('./geocoging');
const darksky = require('./darksky')


geocoding.receiveLocation(
    process.argv[2],
    (location) =>{
        darksky.receiveWeather(location.lat, location.lng);
    });

https.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`<a href='https://darksky.net/poweredby/'>Powered by Dark Sky</a>`);
})