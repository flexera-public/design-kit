'use strict';

/**
 * @ngdoc function
 * @name designkitApp.controller:ButtonsCtrl
 * @description
 * # ButtonsCtrl
 * Controller of the designkitApp
 */
angular.module('designkitApp')
  .controller('ButtonsCtrl', function ($scope, $rootScope, $routeParams) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.sectionClass = 'section-buttons';
    $rootScope.bodyClass = 'layout-buttons';
    $rootScope.colorId = $routeParams.colorId;

  });
