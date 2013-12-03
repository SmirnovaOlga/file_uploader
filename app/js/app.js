'use strict';


angular.module('fileUploaderApp', [
		'ngRoute',
		'fileUploaderApp.filters',
		'fileUploaderApp.services',
		'fileUploaderApp.directives',
		'fileUploaderApp.controllers',
        'blueimp.fileupload'
	]).
	config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/', {templateUrl: 'partials/index.html', controller: 'IndexCtrl', resolve: app.resolve});
		$routeProvider.when('/:path*', {templateUrl: 'partials/index.html', controller: 'IndexCtrl', resolve: app.resolve});
		$routeProvider.otherwise({redirectTo: '/'});
	}]);

var app = {};

app.resolve = {
    folders: function ($http) {
        return $http({method: 'GET', url: '/file_uploader/server/php/folderhandler.php'});
    }
}

