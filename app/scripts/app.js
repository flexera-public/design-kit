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
      .otherwise({
        redirectTo: '/'
      });
  });
