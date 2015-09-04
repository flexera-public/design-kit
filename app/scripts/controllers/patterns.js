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
        name: 'Title area',
        description: 'A common pattern used to group the section title and any secondary navigation - the title area contains the page/section title, secondary navigation and breadcrumbs. It also can contain primary buttons such as "Create" or "New."',
        example: 'images/ignore/pattern-titlearea.png',
        reference: 'Self-Service, Cloud Analytics, Cloud Management',
        border: 'border-light'
      },
      {
        name: 'Activity stream',
        description: 'Activity streams are used to summerize time-ordered activity in a context and link to objects they reference.',
        example: 'images/ignore/pattern-activity.png',
        reference: 'Self-Service'
      }
    ];

    $scope.sectionClass = 'section-patterns';
    $rootScope.bodyClass = 'layout-patterns';

  });
