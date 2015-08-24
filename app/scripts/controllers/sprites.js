'use strict';

/**
 * @ngdoc function
 * @name designkitApp.controller:SpritesCtrl
 * @description
 * # SpritesCtrl
 * Controller of the designkitApp
 */
angular.module('designkitApp')
  .controller('SpritesCtrl', function ($scope) {
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
            description: 'Delete an item or component'
          },
          {
            name: 'Lock',
            src: 'images/sprites/action/padlock-closed.svg',
            description: 'Indicates the RightScale component (e.g. Deployment) is locked.  The Lock icon is a toggle.  Clicking it will set status to "unlock", making it editable'
          },
          {
            name: 'Unlock',
            src: 'images/sprites/action/padlock-open.svg',
            description: 'Indicates the RightScale component (e.g. Deployment) is unlocked.  Clicking it will set status to "lock", making it uneditable'
          },
        ]
      },
      {
        group: {
          name: 'Informational',
          description: 'Standard informational icons are defined below.  Most icons are static, but a few do change the display in the Dashboard, yet take not action with respect to any cloud asssets.'
        },
        sprites: [
          {
            name: 'Circle Green',
            src: 'images/sprites/info/circle-green.svg'
          },
          {
            name: 'Circle Orange',
            src: 'images/sprites/info/circle-orange.svg'
          },
          {
            name: 'Invalid',
            src: 'images/sprites/info/circle-red.svg',
            description: 'Invalid'
          },
          {
            name: 'Circle Blue',
            src: 'images/sprites/info/circle-blue.svg'
          },
          {
            name: 'Square Green',
            src: 'images/sprites/info/square-green.svg'
          },
          {
            name: 'Square Orange',
            src: 'images/sprites/info/square-orange.svg'
          },
          {
            name: 'Stopped',
            src: 'images/sprites/info/square-red.svg',
            description: 'A Server whose state is "stopped".  A true "stopped Server" is currently an AWS EC2 centric term.  The same icon is used for "offline" Servers.'
          },
          {
            name: 'Booting',
            src: 'images/sprites/info/arrow-up-green.svg',
            description: 'An instance has been launched, and its current state is "booting"'
          },
          {
            name: 'Pending',
            src: 'images/sprites/info/arrow-up-orange.svg',
            description: 'An instance has been launched, and its current state is "pending"'
          },
          {
            name: 'Decommissioning ',
            src: 'images/sprites/info/arrow-down-green.svg',
            description: 'A Server is in the decommissioning process'
          },
          {
            name: 'Arrow Down',
            src: 'images/sprites/info/arrow-down-orange.svg'
          },
          {
            name: 'Warning',
            src: 'images/sprites/info/warning.svg',
            description: 'Hover over the icon for a specific message. For example, a HEAD revision RightScript warning message'
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
            name: 'Deployments',
            src: 'images/sprites/bookmarks/deployments_bm.svg'
          },
          {
            name: 'Instances',
            src: 'images/sprites/bookmarks/instances_bm.svg'
          },
          {
            name: 'Server Templates',
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
