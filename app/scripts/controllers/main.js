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
    $scope.$on('$routeChangeSuccess', function () {
    var path = $location.path();
      if (path.contains('/icons')){
        $scope.showSubmenu = true;
        setTimeout(function() {
          $('.sub-nav-list').addClass("expand");
          $('.sub-nav-list > li').addClass("expand");
        }, 100);
        
      } else {
        setTimeout(function() {$('.sub-nav-list').removeClass("expand");}, 200);
        $('.sub-nav-list > li ').removeClass("expand");
        $scope.showSubmenu = false;
        
      }
    });
  });
