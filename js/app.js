'use strict';
var weatherApp = angular.module('weatherApp', ['ngRoute']);
  weatherApp.config(['$routeProvider',
    function($routeProvider) {
      $routeProvider
        .when('/home', {
          templateUrl: 'views/home.html',
          controller: 'HomeController'
        })
        .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'AboutController'
        })
        .otherwise({
          redirectTo: '/home'
        });
    }
  ])