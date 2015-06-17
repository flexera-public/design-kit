'use strict';

/**
 * @ngdoc function
 * @name designkitApp.controller:IconsCtrl
 * @description
 * # IconsCtrl
 * Controller of the designkitApp
 */
angular.module('designkitApp')
  .controller('IconsCtrl', function ($scope) {
    $scope.icons = [
      {
        id: 1,
        item: {
          name: 'Trash',
          src: '',
        }
      },
      {
        id: 2,
        item: {
          name: 'Trigger',
          src: '',
        }
      },
      {
        id: 3,
        item: {
          name: 'External',
          src: '',
        }
      }
    ];
  });
