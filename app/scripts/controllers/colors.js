'use strict';

/**
 * @ngdoc function
 * @name designkitApp.controller:ColorsCtrl
 * @description
 * # ColorsCtrl
 * Controller of the designkitApp
 */
angular.module('designkitApp')
  .controller('ColorsCtrl', function ($scope) {
    $scope.colors = [
      {
        id: 1,
        section: 'Brand Colors',
        item: {
          name: 'Cool Blue',
          hex: '#0A83F6',
          selector: 'swatch-cool-blue',
        }
      },
      {
        id: 2,
        section: 'Brand Colors',
        item: {
          name: 'Lima Green',
          hex: '#80C11A',
          selector: 'swatch-lima',
        }
      },
      {
        id: 3,
        section: 'Brand Colors',
        item: {
          name: 'Fire Engine Red',
          hex: '#C32525',
          selector: 'swatch-fire-engine',
        }
      },
      {
        id: 4,
        section: 'Brand Colors',
        item: {
          name: 'Royal Purple',
          hex: '#7355A6',
          selector: 'swatch-fire-engine',
        }
      }
    ];
  });
