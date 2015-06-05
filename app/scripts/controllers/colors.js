'use strict';

/**
 * @ngdoc function
 * @name designkitApp.controller:ColorsCtrl
 * @description
 * # ColorsCtrl
 * Controller of the designkitApp
 */
angular.module('designkitApp')
  .controller('ColorsCtrl', function ($scope,  $routeParams) {
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
          selector: 'swatch-royal-purple',
        },
      },
      {
        id: 5,
        section: 'Brand Colors',
        item: {
          name: 'Buckthorn Orange',
          hex: '#F7A626',
          selector: 'swatch-buckthorn',
        }
      },
      {
        id: 6,
        section: 'Graph Colors',
        item: {
          name: 'Viking',
          hex: '#54BBCC',
          selector: 'swatch-viking',
        }
      },
      {
        id: 7,
        section: 'Graph Colors',
        item: {
          name: 'Royal Purple',
          hex: '#7355A6',
          selector: 'swatch-royal-purple',
        },
      },
      {
        id: 8,
        section: 'Graph Colors',
        item: {
          name: 'Mulberry',
          hex: '#C25A87',
          selector: 'swatch-mulberry',
        },
      },
      {
        id: 9,
        section: 'Graph Colors',
        item: {
          name: 'Buckthorn Orange',
          hex: '#F7A626',
          selector: 'swatch-buckthorn',
        }
      },
      {
        id: 10,
        section: 'Graph Colors',
        item: {
          name: 'Celery',
          hex: '#B4CA5D',
          selector: 'swatch-celery',
        }
      },
      {
        id: 11,
        section: 'Graph Colors',
        item: {
          name: 'Indian',
          hex: '#CE5B5C',
          selector: 'swatch-indian',
        }
      },
      {
        id: 12,
        section: 'Graph Colors',
        item: {
          name: 'Silver Tree',
          hex: '#62CF8D',
          selector: 'swatch-silver-tree',
        }
      },
      {
        id: 13,
        section: 'Graph Colors',
        item: {
          name: 'Sean',
          hex: '#408DC5',
          selector: 'swatch-sean',
        }
      },
      {
        id: 14,
        section: 'Button Colors',
        item: {
          name: 'Green Button',
          hex: '#5FB000',
          selector: 'swatch-green-button',
        }
      },
      {
        id: 15,
        section: 'Button Colors',
        item: {
          name: 'Blue Button',
          hex: '#0871D4',
          selector: 'swatch-blue-button',
        }
      },
      {
        id: 16,
        section: 'Button Colors',
        item: {
          name: 'Red Button',
          hex: '#C32525',
          selector: 'swatch-red-button',
        }
      },
      {
        id: 17,
        section: 'Button Colors',
        item: {
          name: 'Grey Button',
          hex: '#E7E7E7',
          selector: 'swatch-grey-button',
        }
      },
      {
        id: 18,
        section: 'Text Colors',
        item: {
          name: 'Link',
          hex: '#0A83F6',
          selector: 'swatch-link',
        }
      },
      {
        id: 19,
        section: 'Text Colors',
        item: {
          name: 'Link Hover',
          hex: '#0769C6',
          selector: 'swatch-link-hover',
        }
      },
      {
        id: 20,
        section: 'Text Colors',
        item: {
          name: 'Text',
          hex: '#76899A',
          selector: 'swatch-text',
        }
      },
      {
        id: 21,
        section: 'Text Colors',
        item: {
          name: 'Heading',
          hex: '#57626C',
          selector: 'swatch-heading',
        }
      },
      {
        id: 22,
        section: 'Section Colors',
        item: {
          name: 'Left Background (Sith)',
          hex: '#353B41',
          selector: 'swatch-left-dark',
        }
      },
      {
        id: 23,
        section: 'Section Colors',
        item: {
          name: 'Left Background (Light)',
          hex: '#DADEE3',
          selector: 'swatch-left-light',
        }
      },
      {
        id: 24,
        section: 'Section Colors',
        item: {
          name: 'Body',
          hex: '#F4F5F7',
          selector: 'swatch-body',
        }
      },
      {
        id: 25,
        section: 'Border Colors',
        item: {
          name: 'Grey Border',
          hex: '#D1D6DC',
          selector: 'swatch-grey-border',
        }
      },
      {
        id: 26,
        section: 'Border Colors',
        item: {
          name: 'Grey Border (Light)',
          hex: '#E2E5E9',
          selector: 'swatch-grey-border-light',
        }
      },
      {
        id: 27,
        section: 'Icon Colors',
        item: {
          name: 'Grey Icon',
          hex: '#8596A5',
          selector: 'swatch-grey-icon',
        }
      },
      {
        id: 28,
        section: 'Icon Colors',
        item: {
          name: 'Grey Icon (Highlight)',
          hex: '#A2AFBA',
          selector: 'swatch-grey-icon-highlight',
        }
      },
      {
        id: 29,
        section: 'Icon Colors',
        item: {
          name: 'Blue Icon',
          hex: '#2390F7',
          selector: 'swatch-blue-icon',
        }
      },
      {
        id: 30,
        section: 'Icon Colors',
        item: {
          name: 'Blue Icon (Highlight)',
          hex: '#54A9F9',
          selector: 'swatch-blue-icon-highlight',
        }
      },
      {
        id: 30,
        section: 'Icon Colors',
        item: {
          name: 'Green Icon',
          hex: '#80C11A',
          selector: 'swatch-green-icon',
        }
      },
      {
        id: 31,
        section: 'Icon Colors',
        item: {
          name: 'Sith Icon',
          hex: '#30373C',
          selector: 'swatch-sith-icon',
        }
      },
      {
        id: 32,
        section: 'Highlight Colors',
        item: {
          name: 'Hover Highlight',
          hex: '#FAFAFA',
          selector: 'swatch-hover-highlight',
        }
      },
      {
        id: 33,
        section: 'Highlight Colors',
        item: {
          name: 'Select Highlight',
          hex: '#FAFAFA',
          selector: 'swatch-select-highlight',
        }
      },
      {
        id: 34,
        section: 'Highlight Colors',
        item: {
          name: 'Inline Highlight',
          hex: '#FAFAFA',
          selector: 'swatch-inline-highlight',
        }
      },
      {
        id: 35,
        section: 'Messaging Colors',
        item: {
          name: 'Messaging Background',
          hex: '#FFF7E5',
          selector: 'swatch-messaging-background',
        }
      },
      {
        id: 36,
        section: 'Messaging Colors',
        item: {
          name: 'Messaging Text',
          hex: '#939182',
          selector: 'swatch-messaging-text',
        }
      },
      {
        id: 37,
        section: 'Header Colors',
        item: {
          name: 'Header Flat',
          hex: '#0069CC',
          selector: 'swatch-header-flat',
        }
      },
      {
        id: 38,
        section: 'Header Colors',
        item: {
          name: 'Header Gradient Start',
          hex: '#076CCA',
          selector: 'swatch-header-gradient-start',
        }
      },
      {
        id: 39,
        section: 'Header Colors',
        item: {
          name: 'Header Gradient End',
          hex: '#065BAC',
          selector: 'swatch-header-gradient-end',
        }
      }
    ];
    $scope.color_id = $routeParams.colorId;

  });
