'use strict';

/**
 * @ngdoc function
 * @name designkitApp.controller:FormsCtrl
 * @description
 * # FormsCtrl
 * Controller of the designkitApp
 */
angular.module('designkitApp')
  .controller('FormsCtrl', function ($scope, $rootScope, $routeParams) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.sectionClass = 'section-forms';
    $rootScope.bodyClass = 'layout-forms';
    $rootScope.colorId = $routeParams.colorId;

  });
