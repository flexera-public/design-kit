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
          src: 'images/icon/icon-trash.svg',
        }
      },
      {
        id: 2,
        item: {
          name: 'Trigger',
          src: 'images/icon/icon-switch-trigger.svg',
        }
      },
      {
        id: 3,
        item: {
          name: 'External Blue',
          src: 'images/icon/icon-external-blue.svg',
        }
      },
      {
        id: 4,
        item: {
          name: 'Pen',
          src: 'images/icon/icon-pen.svg',
        }
      },
      {
        id: 5,
        item: {
          name: 'Logout',
          src: 'images/icon/icon-user-logout.svg',
        }
      },
      {
        id: 6,
        item: {
          name: 'Share',
          src: 'images/icon/icon-share.svg',
        }
      },
      {
        id: 7,
        item: {
          name: 'Search',
          src: 'images/icon/icon-search.svg',
        }
      },
      {
        id: 8,
        item: {
          name: 'Refresh',
          src: 'images/icon/icon-refresh.svg',
        }
      },
      {
        id: 9,
        item: {
          name: 'Markdown',
          src: 'images/icon/icon-markdown.svg',
        }
      },
      {
        id: 10,
        item: {
          name: 'Link',
          src: 'images/icon/icon-link.svg',
        }
      },
      {
        id: 11,
        item: {
          name: 'Info',
          src: 'images/icon/icon-info.svg',
        }
      }
    ];
  });
