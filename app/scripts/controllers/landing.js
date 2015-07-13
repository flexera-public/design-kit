'use strict';

/**
 * @ngdoc function
 * @name designkitApp.controller:LandingCtrl
 * @description
 * # LandingCtrl
 * Controller of the designkitApp
 */
angular.module('designkitApp')
  .controller('LandingCtrl', function ($scope, $rootScope) {
    $scope.cards = [{
      id: '1',
      title: 'Logos',
      details: 'Main logo, product logos and product marks',
      bg: 'landing-logo.svg'
    }, {
      id: '2',
      title: 'Colors',
      details: 'Branding, primary and accent colors',
      bg: 'landing-colors.svg'
    }, {
      id: '3',
      title: 'Typography',
      details: 'Base typeography and hierarchy',
      bg: 'landing-type.svg'
    }, {
      id: '4',
      title: 'Icons',
      details: 'Principal system icons',
      bg: 'landing-icon.svg'
    }, {
      id: '5',
      title: 'Tables',
      details: 'Basic table UI',
      bg: 'landing-tables.svg'
    }, {
      id: '6',
      title: 'Buttons',
      details: 'Default UI for buttons and button groups',
      bg: 'landing-button.svg'
    }, {
      id: '7',
      title: 'Forms',
      details: 'Basic form UI',
      bg: 'landing-form.svg'
    }];

    $scope.sectionClass = 'section-landing';
    $rootScope.bodyClass = 'layout-landing';

  });
