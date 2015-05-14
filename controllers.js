//controllers
weatherApp.controller('homeController', ['$scope', '$location', 'cityService',
    function($scope, $location, cityService) {

        $scope.city = cityService.city;

        //you're telling it to watch the input value.  

        $scope.$watch('city', function() {
            cityService.city = $scope.city;
        });

        $scope.submit = function() {
            //all you need to do here is move us to the forecast page- use location service/inject it
            $location.path('/forecast');
        }
    }
]);

//ngResource does stuff with $http
//routeParams lets you do the last .when with the days as a variable 

weatherApp.controller('forecastController', ['$scope', '$routeParams', 'cityService', 'weatherService',
    function($scope, $routeParams, cityService, weatherService) {

        $scope.city = cityService.city;

        $scope.days = $routeParams.days || 2;

        $scope.weatherResult = weatherService.GetWeather($scope.city, $scope.days);
        

        $scope.convertToFahrenheit = function(degK) {

            return Math.round((1.8 * (degK - 273)) + 32);

        }

        $scope.convertToDate = function(dt) {

            return new Date(dt * 1000);

        };

    }
]);