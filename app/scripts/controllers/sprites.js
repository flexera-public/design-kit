'use strict';

/**
 * @ngdoc function
 * @name designkitApp.controller:SpritesCtrl
 * @description
 * # SpritesCtrl
 * Controller of the designkitApp
 */
angular.module('designkitApp')
  .controller('SpritesCtrl', function ($scope, $rootScope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $rootScope.bodyClass = 'layout-sprites';
    $scope.spriteGroups = [
      {
        group: {
          name: 'Actions',
          description: ''
        },
        sprites: [
          {
            name: 'Delete',
            src: 'images/sprites/action/delete.svg',
            description: 'Delete an item or component.'
          },
          {
            name: 'Lock',
            src: 'images/sprites/action/padlock-closed.svg',
            description: 'Indicates the RightScale component (e.g. Deployment) is locked. Clicking it will set status to unlocked, allowing the component and its children to be terminated and deleted.'
          },
          {
            name: 'Unlock',
            src: 'images/sprites/action/padlock-open.svg',
            description: 'Indicates the RightScale component (e.g. Deployment) is unlocked. Clicking it will set status to locked, preventing the component and its children from being terminated or deleted.'
          },
        ]
      },
      {
        group: {
          name: 'Status',
          description: 'Standard status icons are defined below.  Most icons are static, but a few do change the display in the Dashboard, yet do not take action with respect to any cloud asssets.'
        },
        sprites: [
          {
            name: 'Alerts Untriggered / Active Instances',
            src: 'images/sprites/info/circle-green.svg',
            description: 'Indicates that no alerts are currently triggered. Also indicates the number of active instances in an array.'
          },
          {
            name: 'Alerts Triggered',
            src: 'images/sprites/info/circle-red.svg',
            description: 'Indicates that one or more alerts are currently triggered.'
          },
          {
            name: 'Alert Circle Orange',
            src: 'images/sprites/info/circle-orange.svg',
            description: 'Currently unused. May be needed for additional alert status.'
          },
          {
            name: 'Alert Circle Blue',
            src: 'images/sprites/info/circle-blue.svg',
            description: 'Currently unused. May be needed for additional alert status.'
          },
          {
            name: 'Alert Square Green',
            src: 'images/sprites/info/square-green.svg',
            description: 'Currently unused. May be needed for additional alert status.'
          },
          {
            name: 'Alert Square Orange',
            src: 'images/sprites/info/square-orange.svg',
            description: 'Indicates that a server or instance is in the stopped or provisioned state.'
          },
          {
            name: 'Offline',
            src: 'images/sprites/info/square-red.svg',
            description: 'A Server whose state is offline, or a server array which has no active instances.'
          },
          {
            name: 'Booting',
            src: 'images/sprites/info/arrow-up-green.svg',
            description: 'An instance has been launched, and its current state is booting.'
          },
          {
            name: 'Pending',
            src: 'images/sprites/info/arrow-up-orange.svg',
            description: 'An instance has been launched, and its current state is pending.'
          },
          {
            name: 'Decommissioning',
            src: 'images/sprites/info/arrow-down-green.svg',
            description: 'A Server is in the decommissioning state.'
          },
          {
            name: 'Instance Arrow Down Orange',
            src: 'images/sprites/info/arrow-down-orange.svg',
            description: 'Currently unused. May be needed for additional instance status.'
          },
          {
            name: 'Warning',
            src: 'images/sprites/info/warning.svg',
            description: 'Indicates that a component is in an error or warning state. Hover over the icon to bring up a tooltip with additional details.'
          },
        ]
      },
      {
        group: {
          name: 'Bookmarks',
          description: 'The following icons help categorize your bookmarks.  Bookmarks are displayed in the left pane (unless the pane is collapsed).'
        },
        sprites: [
          {
            name: 'Server',
            src: 'images/sprites/bookmarks/server_bm.svg'
          },
          {
            name: 'Deployment',
            src: 'images/sprites/bookmarks/deployments_bm.svg'
          },
          {
            name: 'Instance',
            src: 'images/sprites/bookmarks/instances_bm.svg'
          },
          {
            name: 'Server Template',
            src: 'images/sprites/bookmarks/server_templates_bm.svg'
          },
          {
            name: 'Server Array',
            src: 'images/sprites/bookmarks/server_array_bm.svg'
          }
        ]
      },
    ];
  });
