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
    'ui.router',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch'
    // 'mattGreenUX.project'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('projects', {
        url: '/',
        templateUrl: 'views/homeProjects.html',
        controller: 'ProjectsCtrl as vm'
      })
      .state('psal', {
        url: '/psal',
        templateUrl: 'views/projects/psal.html',
        controller: 'psalCtrl as vm'
      })
      .state('erb', {
        url: '/erb',
        templateUrl: 'views/projects/erb.html',
        controller: 'erbCtrl as vm'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl as about'
      });

      $locationProvider.html5Mode(true);
  });
