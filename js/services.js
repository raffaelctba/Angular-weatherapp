    'use strict';
weatherApp.factory('dataFactory', ['$http', function($http) {
    var dataFactory = [{"code":"11","date":"12 Feb 2016","day":"Fri","high":"53","low":"45","text":"Showers","cityCode":"CAXX0518","cityName":"Vancouver"}, 
                 {"code":"29","date":"12 Feb 2016","day":"Fri","high":"76","low":"61","text":"Partly Cloudy","cityCode":"CUXX0003","cityName":"Havana Cuba"}, 
                 {"code":"31","date":"12 Feb 2016","day":"Fri","high":"77","low":"56","text":"Clear","cityCode":"USCA0982","cityName":"San Diego"}, 
                 {"code":"30","date":"12 Feb 2016","day":"Fri","high":"82","low":"70","text":"Partly Cloudy","cityCode":"USHI0026","cityName":"Honolulu"} ]

    dataFactory.getWeather = function () {
        return dataFactory;
    };

    return dataFactory;
}]);
