'use strict';

/**
 * @ngdoc function
 * @name designkitApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the designkitApp
 */
angular.module('designkitApp')
  .controller('MainCtrl', function($scope, $location) {

    $scope.isActive = function(route) {
      return route === $location.path();
    };

    $scope.showSubmenu = false;
    $scope.toggleSubMenu = function(menu) {
      if (menu === "icons")
        $scope.showSubmenu = true;
      else
        $scope.showSubmenu = false;
    };
  });
