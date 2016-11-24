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
    'ngTouch',
    'ngResize'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('app',{
        url: '',
        abstract: true,
        resolve: {
            projectData: function(ProjectsFactory) {
                return ProjectsFactory.getData();
            }
        },
        views: {
          '': {
            templateUrl: 'views/main.html'
          },
          'footer@app':{
            templateUrl: 'views/footer.html'
          }
        }
      })
      .state('temp', {
        url: '/',
        templateUrl: 'views/temp.html'
      })
      .state('app.projects', {
        url: '/home',
        templateUrl: 'views/homeProjects.html',
        controller: 'ProjectsCtrl as vm'
      })
      .state('app.psal', {
        url: '/psal',
        templateUrl: 'views/projects/psal.html',
        controller: 'psalCtrl as vm'
      })
      .state('app.erb', {
        url: '/erb',
        templateUrl: 'views/projects/erb.html',
        controller: 'erbCtrl as vm'
      })
      .state('app.immig', {
        url: '/immig',
        templateUrl: 'views/projects/immig.html',
        controller: 'immigCtrl as vm'
      })
      .state('app.about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl as about'
      });

      $locationProvider.html5Mode(true);
  });
