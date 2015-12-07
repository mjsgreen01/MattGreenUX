'use strict';

/**
 * @ngdoc overview
 * @name mattGreenUX
 * @description
 * # mattGreenUX
 *
 * Main module of the application.
 */
angular
  .module('mattGreenUX', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
    // 'mattGreenUX.project'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/homeProjects.html',
        controller: 'ProjectsCtrl',
        controllerAs: 'projects'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });

      $locationProvider.html5Mode(true);
  });
