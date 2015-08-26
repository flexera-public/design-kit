'use strict';

/**
 * @ngdoc function
 * @name designkitApp.controller:PatternsCtrl
 * @description
 * # PatternsCtrl
 * Controller of the designkitApp
 */
angular.module('designkitApp')
  .controller('PatternsCtrl', function ($scope, $rootScope) {
    $scope.patterns = [{
      name: 'Title area',
      description: 'Contains the page/section title, breadcrumbs and secondary navigation. The titlebar can also contain some primary such as "Create".',
      example: 'images/ignore/pattern-titlearea.png',
      reference: 'Self-Service, Cloud Analytics, Cloud Management'
    }];

    $scope.sectionClass = 'section-patterns';
    $rootScope.bodyClass = 'layout-patterns';

  });
