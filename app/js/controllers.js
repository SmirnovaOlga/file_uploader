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
                            }
                        ]
                    }
                ]
            }
        ];


        prepareTree($scope.response);

        function prepareTree(response) {
            var array = [];
            var element = {};

            for (var i = 0; i < response.length; i++) {
                element = response[i];
                traversalTree(element);
            }


            function traversalTree(el) {
                if (el.children) {
                    array.push(el.name);
                    for (var i = 0; i < el.children.length; i++) {
                        el = el.children;
                        traversalTree(el);
                    }
                }
                else {
                    array.push(el.name);
                }
            }

           // console.log(array);
        }

    }])


