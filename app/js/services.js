'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('fileUploaderApp.services', []).
    value('version', '0.1').

    factory('folderTree', function () {

        var folderTree = {};

        folderTree.prepareTree = function (tree) {

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

        return folderTree;
    });

