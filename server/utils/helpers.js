/**
 * Provides an estimated distance between two points based on the Haversine Formula.
 * Distance is provided "As the crow flies."
 * 
 * Source: https://www.movable-type.co.uk/scripts/latlong.html
 */

function milesFromCoord(lat1, lon1, lat2, lon2) {
    const R = 3959 // Radius of the Earth in miles
    const lat1Radians = lat1 * Math.PI/180;
    const lat2Radians = lat2 * Math.PI/180;

    const latRadianDiff = (lat2 - lat1) * Math.PI/180;
    const lonRadianDiff = (lon2 - lon1) * Math.PI/180;

    const a = Math.sin(latRadianDiff/2) * Math.sin(latRadianDiff/2) +
            Math.cos(lat1Radians) * Math.cos(lat2Radians) * 
            Math.sin(lonRadianDiff/2) * Math.sin(lonRadianDiff/2);

    const c = 2 * Math.atan2(Math.sqrt(a),Math.sqrt(1-a));

    const distance = R * c;

    // Return distance rounded to one decimal place
    return Math.round(distance*10)/10;

}

/**
 * Makes an API call to OpenWeather API to convert city, state to lat and long for storage.
 * @param {String} city 
 * @param {String} state
 * @param {String} country default value 'US'
 * @returns an object with latidude and longitude keys with Float values.
 */
async function geoCode(city, state, country="US") {
    
    let response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&limit=1&appid=${process.env.GEOCODE_API_KEY}`);
    let data = await response.json();
    
    // if API key is rejected, attempt request with second key
    if(data.cod === 401) {
        response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&limit=1&appid=${process.env.GEOCODE_API_KEY2}`);

        let data = await response.json();
    }


    // Error Handling
    if(!data || data.length === 0) {
        return {
            lat: null,
            lon: null
        }
    };

    return {
        lat: data[0].lat,
        lon: data[0].lon
    }
}

const sortByDistance = (latLon) => {
    return (a,b) => {
        const distanceA = milesFromCoord(a.lat, a.lon, latLon.lat, latLon.lon);
        const distanceB = milesFromCoord(b.lat, b.lon, latLon.lat, latLon.lon);
    
        if (distanceA > distanceB) return 1;
        if (distanceA < distanceB) return -1;
        return 0;
    }

}

module.exports = { milesFromCoord, geoCode, sortByDistance }