const { milesFromCoord, sortByDistance } = require('../utils/helpers');

test('The algorithm sorts by distance in ascending order', async () => {
    const data = [
        {
            stagename:"BoStoners",
            lat: 42.361145,
            lon: -71.057083
        },
        {
            stagename:"76ers",
            lat: 39.952583,
            lon: -75.165222
        },
        {
            stagename:"Los Angels",
            lat: 34.052235,
            lon: -118.243683
        },
    ]

    const expected = [
        {
            stagename:"76ers",
            lat: 39.952583,
            lon: -75.165222
        },
        {
            stagename:"BoStoners",
            lat: 42.361145,
            lon: -71.057083
        },
        {
            stagename:"Los Angels",
            lat: 34.052235,
            lon: -118.243683
        },
    ]

    const { lat, lon } = {
        lat: 39.952583,
        lon: -75.165222
    }

    const actual = data.sort(sortByDistance({lat,lon}));

    expect(actual).toEqual(expected);


})