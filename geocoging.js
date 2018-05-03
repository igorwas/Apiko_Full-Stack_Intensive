const https = require('https');

const GEOCODING_BASE_URL = "https://maps.googleapis.com/maps/api/geocode/json?address=";
const GEOCODING_API_KEY = "AIzaSyDZQfHtmrMkcx5PFwggJvKapoImI-MkYIU"

const makeGeocodingUrl = (address) => {
    return `${GEOCODING_BASE_URL}${address}&components=locality|&key=${GEOCODING_API_KEY}`;
}

const receiveLocation = (address,onResult) => {
    let location;
    https.get(makeGeocodingUrl(address), (resp) => {
        let data = '';
        resp.on('data', (chunk) => {
            data += chunk;
        });

        resp.on('end', () => {
            let locationDate = JSON.parse(data);
            if(locationDate.results.length <= 0){
                console.log(`Address: ${address} not found`)
            }else {
                onResult(locationDate.results[0].geometry.location);
            }
        });
    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
}

module.exports = {
    receiveLocation
}