'use strict';

/* Directives */


angular.module('fileUploaderApp.directives', []).
    directive('appVersion', ['version', function (version) {
        return function (scope, elm, attrs) {
            elm.text(version);
        };
    }]).

    directive('breadcrumbs', function () {
        return {
            template: ' <ul class="breadcrumb">' +
                '<li ng-repeat="breadcrumb in breadcrumbs">' +
                '<a ng-href="#{{ breadcrumb.link }}">{{ breadcrumb.title }}</a>' +
                '</li>' +
                '</ul>',

            replace: true,

            link: function prepareBreadcrumbs(scope, element, attrs) {

            scope.breadcrumbs = [];

            var splitPath = scope.path.split('/');
            var link = '';

            for (var i = 0; i < splitPath.length; i++) {

                link += '/' + splitPath[i];

                var obj = {
                    title: splitPath[i],
                    link: link
                };

                scope.breadcrumbs.push(obj);
            }
        }
        }
    });