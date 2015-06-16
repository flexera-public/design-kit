'use strict';

/**
 * @ngdoc function
 * @name designkitApp.controller:WidgetsCtrl
 * @description
 * # TWidgetsCtrl
 * Controller of the designkitApp
 */
angular.module('designkitApp')
  .controller('WidgetsCtrl', function ($scope, $rootScope, $routeParams) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.sectionClass = 'section-widgets';
    $rootScope.bodyClass = 'layout-widgets';
    $rootScope.colorId = $routeParams.colorId;

  });
