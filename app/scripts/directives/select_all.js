'use strict';

/**
 * @ngdoc selectAll
 * @name designkitApp.directive:selectAll
 * @restrict E
 * @param {Array} collection A collection of rows that this manages.
 * @param {String} attribute The name of the attribute in the row that holds selection state.
 * @description Manages a selectAll checkbox.
 */
angular.module('designkitApp').directive('selectAll', function() {
  return {
    restrict: 'E',
    template: '<div class="checkbox_wrap">' +
      '<input type="checkbox" id="checkbox-all-{{id}}" />' +
      '<label for="checkbox-all-{{id}}" class="checkbox_label"><span class="sr-only">{{label}}</span></label>' +
     '</div>',
    scope: {
      collection: '=',
      attribute: '@'
    },
    link: function(scope, element) {
      scope.id = Math.floor(10000 * Math.random());
      var checkbox = element.find('input');
      checkbox.on('change', function() {
        scope.$apply(function() {
          if (checkbox.prop('checked')) {
            scope.collection.forEach(function(el) {
              el[scope.attribute] = true;
            });
          } else {
            scope.collection.forEach(function(el) {
              el[scope.attribute] = false;
            });
          }
        });
      });
      scope.$watch('collection', function(collection) {
        var all = true,
            some = false;
        collection.forEach(function(element) {
          if (element[scope.attribute]) {
            some = true;
          } else {
            all = false;
          }
        });
        if (all) {
          element.find('div').removeClass('checkbox_indeterminate');
          scope.label = 'Select none';
          checkbox.prop('checked', true).prop('indeterminate', false);
        } else if (some) {
          element.find('div').addClass('checkbox_indeterminate');
          scope.label = 'Select all';
          checkbox.prop('checked', false).prop('indeterminate', true);
        } else {
          element.find('div').removeClass('checkbox_indeterminate');
          scope.label = 'Select all';
          checkbox.prop('checked', false).prop('indeterminate', false);
        }
      }, true);
    }
  };
});
