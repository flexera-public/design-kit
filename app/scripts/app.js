'use strict';

/**
 * @ngdoc overview
 * @name designkitApp
 * @description
 * # designkitApp
 *
 * Main module of the application.
 */
angular
  .module('designkitApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular.filter'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/landing.html',
        controller: 'LandingCtrl'
      })
      .when('/logos', {
        templateUrl: 'views/logos.html',
        controller: 'LogosCtrl'
      })
      .when('/colors', {
        templateUrl: 'views/colors.html',
        controller: 'ColorsCtrl'
      })
      .when('/colors/:colorId', {
        templateUrl: 'views/show_color.html',
        controller: 'ColorsCtrl'
      })
      .when('/typography', {
        templateUrl: 'views/typography.html',
        controller: 'TypographyCtrl'
      })
       .when('/buttons', {
        templateUrl: 'views/buttons.html',
        controller: 'ButtonsCtrl'
      })
      .when('/tables', {
        templateUrl: 'views/tables.html',
        controller: 'TablesCtrl'
      })
      .when('/forms', {
        templateUrl: 'views/forms.html',
        controller: 'FormsCtrl'
      })
      .when('/ui-elements', {
        templateUrl: 'views/ui-elements.html',
        controller: 'UIelementsCtrl'
      })
      .when('/icons', {
        templateUrl: 'views/icons.html',
        controller: 'IconsCtrl'
      })
      .when('/icons/elemental', {
        templateUrl: 'views/icons/elemental.html',
        controller: 'ElementalIconsCtrl'
      })
      .when('/icons/representative', {
        templateUrl: 'views/icons/representative.html',
        controller: 'RepresentativeIconsCtrl'
      })
      .when('/icons/actionable', {
        templateUrl: 'views/icons/actionable.html',
        controller: 'ActionablelIconsCtrl'
      })
      .when('/widgets', {
        templateUrl: 'views/widgets.html',
        controller: 'WidgetsCtrl'
      })
      .when('/sprites', {
        templateUrl: 'views/sprites.html',
        controller: 'SpritesCtrl',
        controllerAs: 'sprites'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
