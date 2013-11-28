'use strict';

/* Controllers */

angular.module('fileUploaderApp.controllers', []).
    controller('IndexCtrl', ['$scope', '$routeParams', '$location', '$window', '$http', function ($scope, $routeParams, $location, $window, $http) {

        $scope.path = '/';
        $scope.toggle = false;

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

        $scope.response = [
            {
                type: "folder",
                name: "animals",
                path: "/animals",
                children: [
                    {
                        type: "folder",
                        name: "cat",
                        path: "/animals/cat",
                        children: [
                            {
                                type: "folder",
                                name: "images",
                                path: "/animals/cat/images",
                                children: [
                                    {
                                        type: "file",
                                        name: "cat001.jpg",
                                        path: "/animals/cat/images/cat001.jpg",
                                        image: "../img/glyphicons-halflings.png"
                                    },
                                    {
                                        type: "file",
                                        name: "cat002.jpg",
                                        path: "/animals/cat/images/cat002.jpg"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                type: "folder",
                name: "animals2",
                path: "/animals2",
                children: [
                    {
                        type: "folder",
                        name: "cat2",
                        path: "/animals2/cat2"
                    }
                ]
            }
        ];

        $scope.response_files = [
            {
                type: "file",
                name: "text",
                path: "C:/Users/Public/Pictures/Sample%20Pictures/text.txt"
            },
            {
                type: "file",
                name: "penguins",
                path: "C:/Users/Public/Pictures/Sample%20Pictures/Penguins.jpg"
            },
            {
                type: "file",
                name: "tulips",
                path: "C:/Users/Public/Pictures/Sample%20Pictures/Tulips.jpg",
                image: "../img/glyphicons-halflings.png"
            },
            {
                type: "file",
                name: "excel",
                path: "C:/Users/Public/Pictures/Sample%20Pictures/excel.xlsx"
            }
        ];

        $scope.tree = prepareTree($scope.response);
        $scope.files = getFile($scope.response_files);

       function getFile(data){
           //$http.get('server').success(function(data){
           //         $scope.data = $scope.response_files;
           //     }
           // );
            var response_files = data;
            var files = [];

            for (var i=0; i < response_files.length; i++)
            {
                files.push({name: $scope.response_files[i].name, path: $scope.response_files[i].path, image: $scope.response_files[i].image});
            }
            return files;
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

                    if(el.length) {

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

        $scope.selectFile = function(index){
            $scope.selectindex = index;
            console.log($scope.selectindex);
        }

        $scope.openFile = function(index) {
            $window.location.href = $scope.files[index].path;
        }

        $scope.remove = function(){
            console.log($scope.selectindex);
            console.log( $scope.files[$scope.selectindex]);
            delete $scope.files[$scope.selectindex];

        }


}])





