'use strict';


angular.module('fileUploaderApp', [
		'ngRoute',
		'fileUploaderApp.filters',
		'fileUploaderApp.services',
		'fileUploaderApp.directives',
		'fileUploaderApp.controllers'
	]).
	config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/', {templateUrl: 'partials/index.html', controller: 'IndexCtrl'});
		$routeProvider.when('/:path*', {templateUrl: 'partials/index.html', controller: 'IndexCtrl'});
		$routeProvider.otherwise({redirectTo: '/'});
	}]);
