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
    $scope.patterns = [
      {
        id: 1,
        group: {
          name: 'Header',
          description: 'The product header includes the main and product logos and our product dropdown trigger on the left. The right side content is based on the product, and may include global navigation, search, and support information.',
          example: 'images/ignore/pattern-header-1.png',
          reference: 'Self-Service, Cloud Analytics, Cloud Management',
          border: 'border-light'
        }
      },
      {
        id: 2,
        group: {
          name: 'Title area',
          description: 'A common pattern used to group the section title and any secondary navigation. The title area contains the page/section title, optional description, secondary navigation, and breadcrumbs. It also can contain primary buttons such as "Create" or "Publish".',
          example: 'images/ignore/pattern-titlearea.png',
          reference: 'Self-Service, Cloud Analytics, Cloud Management',
          border: 'border-light'
        }
      },
      {
        id: 3,
        group: {
          name: 'Activity stream',
          description: 'Activity streams are used to summerize time-ordered activity in a context. Each item in the stream may link to additional information about the item.',
          example: 'images/ignore/pattern-activity.png',
          reference: 'Self-Service'
        }
      },
      {
        id: 4,
        group: {
          name: 'Wizard',
          description: 'Wizard views are used when the user needs to move through a process with multiple steps.',
          example: 'images/ignore/pattern-wizard.png',
          reference: 'Cloud Management',
          border: 'border-light'
        }
      }
    ];

    $scope.sectionClass = 'section-patterns';
    $rootScope.bodyClass = 'layout-patterns';

  });
