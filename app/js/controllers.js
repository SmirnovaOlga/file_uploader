'use strict';

/* Controllers */

angular.module('fileUploaderApp.controllers', []).
    controller('IndexCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {

        $scope.path = '/';

        if ($routeParams.path) {

            $scope.path = $routeParams.path;
        }

        prepareBreadcrumbs();

        function prepareBreadcrumbs() {

            $scope.breadcrumbs = [];

            var splitPath = $scope.path.split('/');
            var link = '';

            for (var i = 0; i < splitPath.length; i++) {

                link += '/' + splitPath[i];

                var obj = {
                    title: splitPath[i],
                    link: link
                };

                $scope.breadcrumbs.push(obj);
            }
        }

        $scope.response = {
            "name": ["folder1", "folder2", "folder3"]
        }

        prepareTree($scope.response);

        function prepareTree(response) {
            $scope.trees = [];
            var names = response.name;
            var link = '';


            for (var i = 0; i < names.length; i++) {
                link += '/' + names[i];

                var obj = {
                    title: names[i],
                    link: link
                };
                $scope.trees.push(obj);
            }

        }


    }]);