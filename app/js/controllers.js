'use strict';

/* Controllers */

angular.module('fileUploaderApp.controllers', []).
  controller('IndexCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {

		$scope.path = '/';

		if($routeParams.path) {

			$scope.path = $routeParams.path;
		}

		prepareBreadcrumbs();

		function prepareBreadcrumbs() {

			$scope.breadcrumbs = [];

			var splitPath = $scope.path.split('/');
			var link = '';

			for(var i = 0; i < splitPath.length; i++) {

				link += '/' + splitPath[i];

				var obj = {
					title: splitPath[i],
					link: link
				};

				$scope.breadcrumbs.push(obj);
			}
		}
  }]);