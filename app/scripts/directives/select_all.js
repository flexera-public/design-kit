'use strict';

/**
 * @ngdoc selectAll
 * @name designkitApp.directive:selectAll
 * @restrict A
 * @param {Array} selectAll A collection of rows that this manages.
 * @param {String} selectionAttribute The name of the attribute in the row that holds selection state.
 * @description Manages a selectAll checkbox.
 */
angular.module('designkitApp').directive('selectAll', function() {
  return {
    restrict: 'A',
    scope: {
      selectAll: '=',
      selectionAttribute: '@'
    },
    link: function(scope, element) {
      element.on('change', function() {
        scope.$apply(function() {
          if (element.prop('checked')) {
            scope.selectAll.forEach(function(el) {
              el[scope.selectionAttribute] = true;
            });
          } else {
            scope.selectAll.forEach(function(el) {
              el[scope.selectionAttribute] = false;
            });
          }
        });
      });
      scope.$watch('selectAll', function(collection) {
        var all = true,
            some = false;
        collection.forEach(function(element) {
          if (element[scope.selectionAttribute]) {
            some = true;
          } else {
            all = false;
          }
        });
        if (all) {
          element.prop('checked', true).prop('indeterminate', false);
        } else if (some) {
          element.prop('checked', false).prop('indeterminate', true);
        } else {
          element.prop('checked', false).prop('indeterminate', false);
        }
      }, true);
    }
  };
});
