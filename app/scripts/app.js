'use strict';

angular.module('fileUploaderApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      }
    ).when('/add.html', {
            templateUrl: 'views/add.html',
            controller: 'AddCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  });
