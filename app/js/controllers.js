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
                                path: "/animals/cat/images"
                            },
                            {
                                type: "folder",
                                name: "images2",
                                path: "/animals/cat/images2"
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
            var element = {};
            var len = tree.length;

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
                        if(j > 0)
                        {
                            level--;
                        }
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
            console.log(array);

			return array;

        }

    }]);


