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

module.exports = { milesFromCoord }