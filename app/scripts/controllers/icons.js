'use strict';

/**
 * @ngdoc function
 * @name designkitApp.controller:IconsCtrl
 * @description
 * # IconsCtrl
 * Controller of the designkitApp
 */
angular.module('designkitApp')
  .controller('IconsCtrl', function ($scope, $rootScope) {
    $scope.colors = [{
      name: 'Grey',
      hex: '57626C'
    }, {
      name: 'Blue',
      hex: '2390F7'
    }, {
      name: 'Text',
      hex: '76899A'
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
        id: 1.1,
        item: {
          name: 'Arrow - Right',
          src: 'images/ignore/icon-arrow-right.svg',
        }
      },
      {
        id: 1.2,
        item: {
          name: 'Arrow - Left',
          src: 'images/ignore/icon-arrow-left.svg',
        }
      },
      {
        id: 1.3,
        item: {
          name: 'Arrow - Up',
          src: 'images/ignore/icon-arrow-up.svg',
        }
      },
      {
        id: 1.4,
        item: {
          name: 'Arrow - Down',
          src: 'images/ignore/icon-arrow-down.svg',
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
          name: 'Check',
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
      },
      {
        id: 23,
        item: {
          name: 'API',
          src: 'images/ignore/icon-api.svg',
        }
      },
      {
        id: 24,
        item: {
          name: 'Attachment',
          src: 'images/ignore/icon-attachment.svg',
        }
      },
      {
        id: 25,
        item: {
          name: 'Back',
          src: 'images/ignore/icon-back-button.svg'
        }
      },
      {
        id: 26,
        item: {
          name: 'Check',
          src: 'images/ignore/icon-checkmark-circled.svg'
        }
      },
      {
        id: 27,
        item: {
          name: 'Cloud',
          src: 'images/ignore/icon-cloud.svg'
        }
      },
      {
        id: 28,
        item: {
          name: 'Email',
          src: 'images/ignore/icon-email.svg'
        }
      },
      {
        id: 29,
        item: {
          name: 'Phone',
          src: 'images/ignore/icon-phone.svg'
        }
      },
      {
        id: 30,
        item: {
          name: 'Copy',
          src: 'images/ignore/icon-copy.svg'
        }
      },
      {
        id: 31,
        item: {
          name: 'Error',
          src: 'images/ignore/icon-error.svg'
        }
      },
      {
        id: 32,
        item: {
          name: 'Filter',
          src: 'images/ignore/icon-filter.svg'
        }
      },
      {
        id: 33,
        item: {
          name: 'Hide',
          src: 'images/ignore/icon-hide.svg'
        }
      },
      {
        id: 34,
        item: {
          name: 'Home',
          src: 'images/ignore/icon-home.svg'
        }
      },
      {
        id: 35,
        item: {
          name: 'Help Info',
          src: 'images/ignore/icon-info-help.svg'
        }
      },
      {
        id: 36,
        item: {
          name: 'Beta',
          src: 'images/ignore/icon-beta.svg'
        }
      },
      {
        id: 37,
        item: {
          name: 'Save',
          src: 'images/ignore/icon-saved.svg'
        }
      },
      {
        id: 38,
        item: {
          name: 'Read Only',
          src: 'images/ignore/icon-read-only.svg'
        }
      },
      {
        id: 39,
        item: {
          name: 'Secure',
          src: 'images/ignore/icon-secure.svg'
        }
      },
      {
        id: 40,
        item: {
          name: 'Caret 2',
          src: 'images/ignore/icon-caret-2.svg'
        }
      },
      {
        id: 41,
        item: {
          name: 'Log Out',
          src: 'images/ignore/icon-logout.svg'
        }
      },
      {
        id: 42,
        item: {
          name: 'Gear',
          src: 'images/ignore/icon-gear.svg'
        }
      },
      {
        id: 43,
        item: {
          name: 'Folder',
          src: 'images/ignore/icon-folder.svg'
        }
      },
      {
        id: 44,
        item: {
          name: 'Key',
          src: 'images/ignore/icon-key.svg'
        }
      },
      {
        id: 45,
        item: {
          name: 'Book',
          src: 'images/ignore/icon-book.svg'
        }
      },
      {
        id: 46,
        item: {
          name: 'Brush',
          src: 'images/ignore/icon-brush.svg'
        }
      },
      {
        id: 47,
        item: {
          name: 'Cloud 2',
          src: 'images/ignore/icon-cloud-2.svg'
        }
      },
      {
        id: 48,
        item: {
          name: 'User',
          src: 'images/ignore/icon-user.svg'
        }
      },
      {
        id: 49,
        item: {
          name: 'List View',
          src: 'images/ignore/icon-list-view.svg'
        }
      },
      {
        id: 50,
        item: {
          name: 'Card View',
          src: 'images/ignore/icon-card-view.svg'
        }
      },
      {
        id: 51,
        item: {
          name: 'Ticket',
          src: 'images/ignore/icon-ticket.svg'
        }
      },
      {
        id: 52,
        item: {
          name: 'Feedback',
          src: 'images/ignore/icon-feedback.svg'
        }
      },
      {
        id: 53,
        item: {
          name: 'Folded Map',
          src: 'images/ignore/icon-folded-map.svg'
        }
      },
      {
        id: 54,
        item: {
          name: 'Circle Caret',
          src: 'images/ignore/icon-caret-circle.svg'
        }
      },
      {
        id: 55,
        item: {
          name: 'Shield',
          src: 'images/ignore/icon-shield.svg'
        }
      }
    ];

    $scope.sectionClass = 'section-icons';
    $rootScope.bodyClass = 'layout-icons';
  });
