'use strict';

/**
 * @ngdoc function
 * @name designkitApp.controller:LandingCtrl
 * @description
 * # LandingCtrl
 * Controller of the designkitApp
 */
angular.module('designkitApp')
  .controller('LandingCtrl', function ($scope, $rootScope, $timeout) {
    $scope.cards = [{
      id: '1',
      title: 'Logos',
      details: 'Main logo, product logos and product marks'
    }, {
      id: '2',
      title: 'Colors',
      details: 'Branding, primary and accent colors'
    }, {
      id: '3',
      title: 'Typography',
      details: 'Base typography and hierarchy'
    }, {
      id: '4',
      title: 'Icons',
      details: 'Principal system icons',
    }, {
      id: '5',
      title: 'Tables',
      details: 'Basic table UI'
    }, {
      id: '6',
      title: 'Buttons',
      details: 'Default UI for buttons and button groups'
    }, {
      id: '7',
      title: 'Forms',
      details: 'Basic form UI'
    }, {
      id: '8',
      title: 'Patterns',
      details: 'Application layouts and patterns'
    }];

    $scope.sectionClass = 'section-landing';
    $rootScope.bodyClass = 'layout-landing';

    // Landing page delay
    $timeout(function () {
        $scope.sectionClass = 'animate-loaded';
    }, 100);


  });
