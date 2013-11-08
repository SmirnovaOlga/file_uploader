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

        $scope.tree = prepareTree($scope.response);

        function prepareTree(tree) {

            var array = [];
            $scope.files = [];
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
                        else {
                            $scope.files.push({name: el.children[j].name, path: el.children[j].path, type: el.children[j].type, parent_path: el.path});
                        }
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

    }]);


