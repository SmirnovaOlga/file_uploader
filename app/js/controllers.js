'use strict';

/* Controllers */

angular.module('fileUploaderApp.controllers', []).
    controller('IndexCtrl', ['$scope', '$routeParams', function ($scope, $routeParams) {

        $scope.path = '/';
        $scope.toggle = false;

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
                                        path: "/animals/cat/images/cat001.jpg"
                                    },
                                    {
                                        type: "file",
                                        name: "cat002.jpg",
                                        path: "/animals/cat/images/cat002.jpg"
                                    }
                                ]
                            },
                            {
                                type: "folder",
                                name: "images2",
                                path: "/animals/cat/images2",
                                children: [
                                    {
                                        type: "file",
                                        name: "cat003.jpg",
                                        path: "/animals/cat/images2/cat003.jpg"
                                    },
                                    {
                                        type: "file",
                                        name: "cat004.jpg",
                                        path: "/animals/cat/images2/cat004.jpg"
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
                name: "cat003.jpg",
                path: "/animals/cat/images2/cat003.jpg"
            },
            {
                type: "file",
                name: "cat004.jpg",
                path: "/animals/cat/images2/cat004.jpg"
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
                files.push({name: $scope.response_files[i].name, path: $scope.response_files[i].path});
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

        $scope.selectFile = function(){
          // $("#item-file").addClass("selected");
            alert('h');
        }
    }]);


