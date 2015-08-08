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
      name: 'App structure',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum consequuntur, quis cupiditate, corrupti deleniti labore eos commodi et quae. Reprehenderit obcaecati possimus vero quam illum! Quae maiores earum expedita unde.',
      example: '',
      reference: ''
    }, {
      name: 'Header',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum consequuntur, quis cupiditate, corrupti deleniti labore eos commodi et quae. Reprehenderit obcaecati possimus vero quam illum! Quae maiores earum expedita unde.',
      example: '',
      reference: ''
    }];

    $scope.sectionClass = 'section-patterns';
    $rootScope.bodyClass = 'layout-patterns';

  });
