'use strict';

/**
 * @ngdoc function
 * @name designkitApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the designkitApp
 */
angular.module('designkitApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
