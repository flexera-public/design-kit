'use strict';

/**
 * @ngdoc function
 * @name designkitApp.controller:ColorsCtrl
 * @description
 * # ColorsCtrl
 * Controller of the designkitApp
 */
angular.module('designkitApp')
  .controller('ColorsCtrl', function ($scope, $rootScope, $routeParams, $location) {
    $scope.colors = [
      {
        id: 1,
        section: 'Brand Colors',
        item: {
          name: 'Cool Blue',
          hex: '0A83F6',
          rgb: '10, 131, 246',
          selector: 'swatch-cool-blue',
        }
      },
      {
        id: 2,
        section: 'Brand Colors',
        item: {
          name: 'Lima Green',
          hex: '80C11A',
          rgb: '128, 193, 26',
          selector: 'swatch-lima',
        }
      },
      {
        id: 3,
        section: 'Brand Colors',
        item: {
          name: 'Fire Engine Red',
          hex: 'C32525',
          rgb: '195, 37, 37',
          selector: 'swatch-fire-engine',
        }
      },
      {
        id: 4,
        section: 'Brand Colors',
        item: {
          name: 'Royal Purple',
          hex: '7355A6',
          rgb: '115, 85, 166',
          selector: 'swatch-royal-purple',
        },
      },
      {
        id: 5,
        section: 'Brand Colors',
        item: {
          name: 'Buckthorn Orange',
          hex: 'F7A626',
          rgb: '247, 166, 38',
          selector: 'swatch-buckthorn',
        }
      },
      {
        id: 6,
        section: 'Graph Colors',
        item: {
          name: 'Viking',
          hex: '4FBBCD',
          rgb: '79, 187, 205',
          selector: 'swatch-viking',
        }
      },
      {
        id: 7,
        section: 'Graph Colors',
        item: {
          name: 'Royal Purple',
          hex: '7355A6',
          rgb: '114, 85, 165',
          selector: 'swatch-royal-purple',
        },
      },
      {
        id: 8,
        section: 'Graph Colors',
        item: {
          name: 'Mulberry',
          hex: 'C45887',
          rgb: '196, 88, 135',
          selector: 'swatch-mulberry',
        },
      },
      {
        id: 9,
        section: 'Graph Colors',
        item: {
          name: 'Buckthorn Orange',
          hex: 'F7A626',
          rgb: '247, 166, 38',
          selector: 'swatch-buckthorn',
        }
      },
      {
        id: 10,
        section: 'Graph Colors',
        item: {
          name: 'Celery',
          hex: 'B4CB55',
          rgb: '180, 203, 85',
          selector: 'swatch-celery',
        }
      },
      {
        id: 11,
        section: 'Graph Colors',
        item: {
          name: 'Indian',
          hex: 'D05A5A',
          rgb: '208, 90, 90',
          selector: 'swatch-indian',
        }
      },
      {
        id: 12,
        section: 'Graph Colors',
        item: {
          name: 'Silver Tree',
          hex: '5DD08B',
          rgb: '93, 208, 139',
          selector: 'swatch-silver-tree',
        }
      },
      {
        id: 13,
        section: 'Graph Colors',
        item: {
          name: 'Sean',
          hex: '3C8CC7',
          rgb: '60, 140, 199',
          selector: 'swatch-sean',
        }
      },
      {
        id: 14,
        section: 'Button Colors',
        item: {
          name: 'Green Button',
          hex: '5FB000',
          rgb: '95, 176, 0',
          selector: 'swatch-green-button',
        }
      },
      {
        id: 15,
        section: 'Button Colors',
        item: {
          name: 'Blue Button',
          hex: '0871D4',
          rgb: '8, 113, 212',
          selector: 'swatch-blue-button',
        }
      },
      {
        id: 16,
        section: 'Button Colors',
        item: {
          name: 'Red Button',
          hex: 'C32525',
          rgb: '195, 37, 37',
          selector: 'swatch-red-button',
        }
      },
      {
        id: 17,
        section: 'Button Colors',
        item: {
          name: 'Grey Button',
          hex: 'E7E7E7',
          rgb: '231, 231, 231',
          selector: 'swatch-grey-button',
        }
      },
      {
        id: 18,
        section: 'Text Colors',
        item: {
          name: 'Link',
          hex: '0A83F6',
          rgb: '10, 131, 246',
          selector: 'swatch-link',
        }
      },
      {
        id: 19,
        section: 'Text Colors',
        item: {
          name: 'Link Hover',
          hex: '0769C6',
          rgb: '7, 105, 198',
          selector: 'swatch-link-hover',
        }
      },
      {
        id: 20,
        section: 'Text Colors',
        item: {
          name: 'Text',
          hex: '76899A',
          rgb: '118, 137, 154',
          selector: 'swatch-text',
        }
      },
      {
        id: 21,
        section: 'Text Colors',
        item: {
          name: 'Heading',
          hex: '57626C',
          rgb: '87, 98, 108',
          selector: 'swatch-heading',
        }
      },
      {
        id: 22,
        section: 'Section Colors',
        item: {
          name: 'Left Background (Sith)',
          hex: '353B41',
          rgb: '53, 59, 65',
          selector: 'swatch-left-dark',
        }
      },
      {
        id: 23,
        section: 'Section Colors',
        item: {
          name: 'Left Background (Light)',
          hex: 'DADEE3',
          rgb: '218, 222, 227',
          selector: 'swatch-left-light',
        }
      },
      {
        id: 24,
        section: 'Section Colors',
        item: {
          name: 'Body',
          hex: 'F4F5F7',
          rgb: '244, 245, 247',
          selector: 'swatch-body',
        }
      },
      {
        id: 25,
        section: 'Border Colors',
        item: {
          name: 'Grey Border',
          hex: 'D1D6DC',
          rgb: '209, 214, 220',
          selector: 'swatch-grey-border',
        }
      },
      {
        id: 26,
        section: 'Border Colors',
        item: {
          name: 'Grey Border (Light)',
          hex: 'E2E5E9',
          rgb: '226, 229, 233',
          selector: 'swatch-grey-border-light',
        }
      },
      {
        id: 27,
        section: 'Icon Colors',
        item: {
          name: 'Grey Icon',
          hex: '8596A5',
          rgb: '133, 150, 165',
          selector: 'swatch-grey-icon',
        }
      },
      {
        id: 28,
        section: 'Icon Colors',
        item: {
          name: 'Grey Icon (Highlight)',
          hex: 'A2AFBA',
          rgb: '162, 175, 186',
          selector: 'swatch-grey-icon-highlight',
        }
      },
      {
        id: 29,
        section: 'Icon Colors',
        item: {
          name: 'Blue Icon',
          hex: '2390F7',
          rgb: '35, 144, 247',
          selector: 'swatch-blue-icon',
        }
      },
      {
        id: 30,
        section: 'Icon Colors',
        item: {
          name: 'Blue Icon (Highlight)',
          hex: '54A9F9',
          rgb: '84, 169, 249',
          selector: 'swatch-blue-icon-highlight',
        }
      },
      {
        id: 30,
        section: 'Icon Colors',
        item: {
          name: 'Green Icon',
          hex: '80C11A',
          rgb: '128, 193, 26',
          selector: 'swatch-green-icon',
        }
      },
      {
        id: 31,
        section: 'Icon Colors',
        item: {
          name: 'Sith Icon',
          hex: '30373C',
          rgb: '48, 55, 60',
          selector: 'swatch-sith-icon',
        }
      },
      {
        id: 32,
        section: 'Highlight Colors',
        item: {
          name: 'Hover Highlight',
          hex: 'FAFAFA',
          rgb: '250, 250, 250',
          selector: 'swatch-hover-highlight',
        }
      },
      {
        id: 33,
        section: 'Highlight Colors',
        item: {
          name: 'Select Highlight',
          hex: 'FAFAFA',
          rgb: '250, 250, 250',
          selector: 'swatch-select-highlight',
        }
      },
      {
        id: 34,
        section: 'Highlight Colors',
        item: {
          name: 'Inline Highlight',
          hex: 'E2E5E9',
          rgb: '226, 229, 233',
          selector: 'swatch-inline-highlight',
        }
      },
      {
        id: 35,
        section: 'Messaging Colors',
        item: {
          name: 'Messaging Background',
          hex: 'FFF7E5',
          rgb: '255, 247, 229',
          selector: 'swatch-messaging-background',
        }
      },
      {
        id: 36,
        section: 'Messaging Colors',
        item: {
          name: 'Messaging Text',
          hex: '939182',
          rgb: '147, 145, 130',
          selector: 'swatch-messaging-text',
        }
      },
      {
        id: 37,
        section: 'Header Colors',
        item: {
          name: 'Header Flat',
          hex: '0069CC',
          rgb: '0, 105, 204',
          selector: 'swatch-header-flat',
        }
      },
      {
        id: 38,
        section: 'Header Colors',
        item: {
          name: 'Header Gradient Start',
          hex: '076CCA',
          rgb: '7, 108, 202',
          selector: 'swatch-header-gradient-start',
        }
      },
      {
        id: 39,
        section: 'Header Colors',
        item: {
          name: 'Header Gradient End',
          hex: '065BAC',
          rgb: '6, 91, 172',
          selector: 'swatch-header-gradient-end',
        }
      }
    ];

    $scope.selectedColor = _.find($scope.colors, {item: {hex: $routeParams.colorId}});
    if ($routeParams.colorId && $scope.selectedColor === undefined) { $location.url('/colors/not_found'); }

    $scope.sectionClass = 'section-colors';
    $rootScope.bodyClass = 'layout-color';
    $rootScope.swatchClass = 'swatch-body-';

    if ($routeParams.colorId ==='not_found') {
      $rootScope.colorId = '000000';
    }
    else {
      $rootScope.colorId = $routeParams.colorId;
    }

  });