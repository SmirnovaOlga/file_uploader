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
		console.log($scope.tree);

        function prepareTree(tree) {

            var array = [];
            var element = {};
			var level = 0;

            for (var i = 0; i < tree.length; i++) {

                element = tree[i];
                traversalTree(element);
            }

            function traversalTree(el) {

                if (el.children) {

                    array.push({name: el.name, path: el.path, type: el.type, level: level});
					level++;

					for (i = 0; i < el.children.length; i++) {

						traversalTree(el.children[i]);
					}
                }
                else {

					if(el.length) {

						for (i = 0; i < el.length; i++) {

							array.push({name: el[i].name, path: el[i].path, type: el.type, level: level});
						}
					}
					else {

						array.push({name: el.name, path: el.path, type: el.type, level: level});
					}
                }
            }

			return array;

           //console.log(array);
        }

    }]);


