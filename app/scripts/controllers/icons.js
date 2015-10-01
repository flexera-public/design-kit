'use strict';

/**
 * @ngdoc function
 * @name designkitApp.controller:IconsCtrl
 * @description
 * # IconsCtrl
 * Controller of the designkitApp
 */
angular.module('designkitApp')
  .controller('IconsCtrl', function ($scope, $rootScope) {

    $scope.sectionClass = 'section-icons';
    $rootScope.bodyClass = 'layout-icons';
  });
