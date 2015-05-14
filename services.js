//services

weatherApp.service('cityService', function() {
    this.city = "New York, NY";
});

weatherApp.service('weatherService', ['$resource', function($resource) {
    this.GetWeather = function(city, days) {
       var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=9313cf5c99119ce353a34818bad9442d", {
            callback: "JSON_CALLBACK"
        }, {
            get: {
                method: "JSONP"
            }
        });

        return weatherResult = weatherAPI.get({
            q: city,
            cnt: days
        });
    };
}]);