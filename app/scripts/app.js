'use strict';

/**
 * @ngdoc overview
 * @name skrillexApp
 * @description
 * # skrillexApp
 *
 * Main module of the application.
 */
angular
  .module('skrillexApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
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
      .when('/typography', {
        templateUrl: 'views/typography.html',
        controller: 'TypographyCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
