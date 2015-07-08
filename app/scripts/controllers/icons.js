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
    $scope.colors = [{
      name: 'Grey',
      hex: '8596A5'
    }, {
      name: 'Blue',
      hex: '2390F7'
    }, {
      name: 'Blue Hover',
      hex: '54A9F9'
    } , {
      name: 'Green',
      hex: '80C11A'
    } , {
      name: 'Sith',
      hex: '30373C'
    }, {
      name: 'White',
      hex: 'FFFFFF',
      class: 'blue-background'
    }];

    $scope.colors.selected = $scope.colors[0];

    $scope.icons = [
      {
        id: 1,
        item: {
          name: 'Arrow',
          src: 'images/ignore/icon-arrow.svg',
        }
      },
      {
        id: 2,
        item: {
          name: 'Calendar',
          src: 'images/ignore/icon-calendar.svg',
        }
      },
      {
        id: 3,
        item: {
          name: 'Caret',
          src: 'images/ignore/icon-caret.svg',
        }
      },
      {
        id: 4,
        item: {
          name: 'Close',
          src: 'images/ignore/icon-close.svg',
        }
      },
      {
        id: 5,
        item: {
          name: 'Download',
          src: 'images/ignore/icon-download.svg',
        }
      },
      {
        id: 6,
        item: {
          name: 'Expand',
          src: 'images/ignore/icon-expand.svg',
        }
      },
      {
        id: 7,
        item: {
          name: 'Export',
          src: 'images/ignore/icon-export.svg',
        }
      },
      {
        id: 8,
        item: {
          name: 'External',
          src: 'images/ignore/icon-external.svg',
        }
      },
      {
        id: 9,
        item: {
          name: 'Info',
          src: 'images/ignore/icon-info.svg',
        }
      },
      {
        id: 10,
        item: {
          name: 'Link',
          src: 'images/ignore/icon-link.svg',
        }
      },
      {
        id: 11,
        item: {
          name: 'Markdown',
          src: 'images/ignore/icon-markdown.svg',
        }
      },
      {
        id: 12,
        item: {
          name: 'Pen',
          src: 'images/ignore/icon-pen.svg',
        }
      },
      {
        id: 13,
        item: {
          name: 'Plus Open',
          src: 'images/ignore/icon-plus-open.svg',
        }
      },
      {
        id: 14,
        item: {
          name: 'Refresh',
          src: 'images/ignore/icon-refresh.svg',
        }
      },
      {
        id: 15,
        item: {
          name: 'Search',
          src: 'images/ignore/icon-search.svg',
        }
      },
      {
        id: 16,
        item: {
          name: 'Share',
          src: 'images/ignore/icon-share.svg',
        }
      },
      {
        id: 17,
        item: {
          name: 'Trash',
          src: 'images/ignore/icon-trash.svg',
        }
      },
      {
        id: 18,
        item: {
          name: 'Docs',
          src: 'images/ignore/icon-docs.svg',
        }
      },
      {
        id: 19,
        item: {
          name: 'Checked',
          src: 'images/ignore/icon-check.svg',
        }
      },
      {
        id: 20,
        item: {
          name: 'Sort - Unsorted',
          src: 'images/ignore/icon-sort-unsorted.svg',
        }
      },
      {
        id: 21,
        item: {
          name: 'Sort - Up',
          src: 'images/ignore/icon-sort-up.svg',
        }
      },
      {
        id: 22,
        item: {
          name: 'Sort - Down',
          src: 'images/ignore/icon-sort-down.svg',
        }
      }
    ];
  });
