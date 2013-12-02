'use strict';

/* Controllers */

angular.module('fileUploaderApp.controllers', []).
    controller('IndexCtrl', ['$scope', '$routeParams', '$location', '$window', '$http', function ($scope, $routeParams, $location, $window, $http) {

        $http.get('/file_uploader/server/php/folderhandler.php').success(function (data) {
                console.log(data);
                $scope.response = data;
            }
        );

        $scope.path = '/';
        $scope.toggle = false;
        $scope.selectindex = [];

        $scope.items = [
            "Small",
            "Medium",
            "Large"
        ];

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

        function prepareTree(tree) {

            var array = [];
            var element = {};
            var len = tree.length;
            var parent = {};

            for (var i = 0; i < len; i++) {
                var level = 0;
                element = tree[i];
                traversalTree(element);
            }

            function traversalTree(el) {
                if (el.children) {

                    array.push({name: el.name, path: el.path, type: el.type, level: level});

                    level++;

                    for (var j = 0; j < el.children.length; j++) {
                        if (el.children[j].type != "file")
                            traversalTree(el.children[j]);
                    }

                }
                else {

                    if (el.length) {

                        for (var k = 0; k < el.length; k++) {
                            array.push({name: el[k].name, path: el[k].path, type: el.type, level: level});
                        }
                    }
                    else {
                        array.push({name: el.name, path: el.path, type: el.type, level: level});
                    }
                }
            }

            return array;
        }

        $scope.tree = prepareTree($scope.response);

        function getFile() {
            $http.get('/file_uploader/server/php/filehandler.php').success(function (data) {
                    $scope.response_files = data;
                }
            );
            $scope.files = [];

            for (var i = 0; i < $scope.response_files.length; i++) {
                $scope.files.push({name: $scope.response_files[i].name, path: $scope.response_files[i].path, image: $scope.response_files[i].image});
            }
            return $scope.files;
        }

        $scope.selectFile = function (index) {
            if ($scope.selectindex != index)
                $scope.selectindex.push(index);
            console.log($scope.selectindex);
        };

        $scope.openFile = function (index) {
            $window.location.href = $scope.files[index].path;
        };

        $scope.remove = function () {
            console.log($scope.selectindex);
            for (var i = 0; i < $scope.selectindex.length; i++)
                delete $scope.files[$scope.selectindex[i] - 1];

        };
    }])





