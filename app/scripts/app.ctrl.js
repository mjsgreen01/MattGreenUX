'use strict';
angular.module('mattGreenUX')

.controller('AppCtrl', function($scope, $rootScope, $timeout){
  var vm = this;

  $scope.$on('$stateChangeSuccess', function(){
    $rootScope.appCtrlLoaded = true;debugger;
  });


});
