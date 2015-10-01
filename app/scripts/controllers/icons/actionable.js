'use strict';

/**
 * @ngdoc function
 * @name designkitApp.controller:ActionablelIconsCtrl
 * @description
 * # ActionablelIconsCtrl
 * Controller of the designkitApp
 */
angular.module('designkitApp')
  .controller('ActionablelIconsCtrl', function($scope, $rootScope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $rootScope.bodyClass = 'layout-sprites';

    $scope.productNames = [{
      name: 'Cloud Analytics'
    }, {
      name: 'Cloud Management'
    }, {
      name: 'Self Service'
    }];

    $scope.productNames.selected = null;

    $scope.spriteGroups = [{
        group: {
          name: 'Actions',
          description: 'Basic action buttons',
          file_type: 'SVG'
        },
        sprites: [{
          name: 'Delete',
          src: 'images/sprites/action/delete.svg',
          description: 'Delete an item or component.'
        }, {
          name: 'Lock',
          src: 'images/sprites/action/padlock-closed.svg',
          description: 'Indicates the RightScale component (e.g. Deployment) is locked. Clicking it will set status to unlocked, allowing the component and its children to be terminated and deleted.'
        }, {
          name: 'Unlock',
          src: 'images/sprites/action/padlock-open.svg',
          description: 'Indicates the RightScale component (e.g. Deployment) is unlocked. Clicking it will set status to locked, preventing the component and its children from being terminated or deleted.'
        }, ]
      },

    ];
  });
