'use strict';

/**
 * @ngdoc function
 * @name designkitApp.controller:TypographyCtrl
 * @description
 * # TypographyCtrl
 * Controller of the designkitApp
 */
angular.module('designkitApp')
  .controller('TypographyCtrl', function ($scope, $rootScope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.sectionClass = 'section-typeography';
    $rootScope.bodyClass = 'layout-typeography';

  });
