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

    $scope.productNames = [
      {
        name: 'Cloud Analytics'
      },
      {
        name: 'Cloud Management'        
      },
      {
        name: 'Self Service'
      }
    ];

    $scope.productNames.selected = null;

    $scope.spriteGroups = [
      {
        group: {
          name: 'Actions',
          description: '',
          file_type:'SVG'
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
          name: 'Bookmarks',
          description: 'The following icons help categorize your bookmarks.  Bookmarks are displayed in the left pane (unless the pane is collapsed).',
          file_type:'SVG'
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
      {
        group: {
          name: 'Clouds',
          description: 'The following icons are for the cloud providers supported by RightScale',
          file_type:'PNG'
        },
        sprites: [
          {
            name: 'Amazon',
            src: 'images/sprites/clouds/amazon.png'
          },
          {
            name: 'Azure',
            src: 'images/sprites/clouds/azure.png'
          },
          {
            name: 'Cloudstack',
            src: 'images/sprites/clouds/cloudstack.png'
          },
          {
            name: 'Datapipe',
            src: 'images/sprites/clouds/datapipe.png'
          },
          {
            name: 'Eucalyptus',
            src: 'images/sprites/clouds/eucalyptus.png'
          },
          {
            name: 'Google',
            src: 'images/sprites/clouds/google.png'
          },
          {
            name: 'HP',
            src: 'images/sprites/clouds/hp.png'
          },
          {
            name: 'Openstack',
            src: 'images/sprites/clouds/openstack.png'
          },
          {
            name: 'Rackspace',
            src: 'images/sprites/clouds/rackspace.png'
          },
          {
            name: 'Softlayer',
            src: 'images/sprites/clouds/softlayer.png'
          }
        ]
      },
      {
        group: {
          name: 'Product Logos',
          description: '',
          file_type:'SVG'
        },
        sprites: [
         {
            name: 'Cloud Analytics',
            src: 'images/sprites/product_logos/cloud_analytics.svg'
          },
          {
            name: 'Cloud Management',
            src: 'images/sprites/product_logos/cloud_management.svg'
          },
          {
            name: 'Self Service',
            src: 'images/sprites/product_logos/self_service.svg'
          }
        ]
      },
      {
        group: {
          name: 'Status',
          description: 'Standard status icons are defined below.  Most icons are static, but a few do change the display in the Dashboard, yet do not take action with respect to any cloud asssets.',
          file_type:'SVG'
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
          }
        ]
      },
    ];
  });
