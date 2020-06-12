const request = require('request')

const forecast = (lat, lon, callback) => {
    const forecasturl = "http://api.weatherstack.com/current?access_key=7900a91e5ee9c4f9d1fbd9903f95e3f6&query="+lat+","+lon+"&units=f"

    request({url:forecasturl, json:true}, (error, {body}) => {
        if(error){
            callback("Check the network connection", undefined)
        }
        else if (body.error) {
            callback("Unable to find the location.", undefined)
        }
        else{
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " fahrenheits out. It feels like " + body.current.feelslike + " fahrenheits out.")
        }
    })  
}

module.exports = forecast