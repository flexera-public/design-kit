'use strict';

/**
 * @ngdoc function
 * @name designkitApp.controller:ComponentsCtrl
 * @description
 * # ComponentsCtrl
 * Controller of the designkitApp
 */
angular.module('designkitApp')
  .controller('ComponentsCtrl', function ($scope, $rootScope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.sectionClass = 'section-components';
    $rootScope.bodyClass = 'layout-components';

  });
