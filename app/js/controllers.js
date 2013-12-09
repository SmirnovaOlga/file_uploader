'use strict';

/* Controllers */

angular.module('fileUploaderApp.controllers', []).
    controller('IndexCtrl', ['folders', 'folderTree', '$scope', '$routeParams', '$location', '$window', '$http', function (folders, folderTree, $scope, $routeParams, $location, $window, $http) {

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

        $scope.tree = folderTree.prepareTree(folders.data);

        $scope.getFile = function () {
            $scope.files = [];
            $http.get('/file_uploader/server/php/filehandler.php').success(function(data) {
                    $scope.response_files = data;

                    for (var i = 0; i < $scope.response_files.length; i++) {
                        $scope.files.push({name: $scope.response_files[i].name, path: $scope.response_files[i].path, image: $scope.response_files[i].image});
                    }
                }
            );
            return $scope.files;
        }

        $scope.selectFile = function (index) {
            if ($scope.selectindex != index)
                $scope.selectindex.push(index);
        };

        $scope.openFile = function (index) {
            $window.location.href = $scope.files[index].path;
        };

        $scope.editFile = function () {
            $window.location.href = $scope.files[$scope.selectindex[0]].path;
        };

        $scope.remove = function () {
            for (var i = 0; i < $scope.selectindex.length; i++)
                delete $scope.files[$scope.selectindex[i] - 1];

        };
    }]);







