'use strict';

angular.module('fileUploaderApp')
    .controller('MainCtrl', function ($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.greeting = {text: "Hello!"};
    });

angular.module('fileUploaderApp')
    .controller('AddCtrl', function ($scope) {
        $scope.uploadFinished = function(e, data){
            console.log('We finished uploading');
        }
    });
