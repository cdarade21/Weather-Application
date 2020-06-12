const request = require('request')

const geocode = (address, callback) => {
    const geocodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+ encodeURIComponent(address) +".json?access_token=pk.eyJ1IjoiY2RhcmFkZTIxIiwiYSI6ImNrYjl2eXZhNzBpOHMyenAwbDg1N3Y3dGIifQ.Arch-5Nqu-YxBRVVm63sVQ&limit=1"

    request({url:geocodeUrl, json:true}, (error, {body}) => {
        if(error){
            callback("Check the network connection", undefined)
        }
        else if (body.features.length===0) {
            callback("Unable to find the location.", undefined)
        }
        else{
            callback(undefined, {
                "latitude": body.features[0].geometry.coordinates[1],
                "longitude": body.features[0].geometry.coordinates[0],
                "location" : body.features[0].place_name
            })
        }
    })  
}


module.exports = geocode