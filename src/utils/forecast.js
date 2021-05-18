const database = require('mime-db')
const request = require('request')

const forecast = (latitude, longtitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=1e876dc18b31895bc2305207f388ba30&query=' +latitude + ',' + longtitude

    request({url, json: true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to weather', undefined)
        }else if(body.error){
            callback('Unable to find location', undefined)
        }else{
            callback(undefined, 
            'It is ' + body.current.weather_descriptions[0] + 
            ' It is currently ' + body.current.temperature +
            ' degrees out. It feels like ' + body.current.feelslike + 
            ' degrees')
        }
    })
}

module.exports = forecast