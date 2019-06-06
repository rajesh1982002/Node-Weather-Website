const request = require('request')












const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/748431284b56647743a5050e4952547f/' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.'+ ' The nearest storm distance is ' + body.currently.nearestStormDistance  + ' miles and the windgust is about ' + body.currently.windGust + ' mph' )
        }
    })
}

module.exports = forecast