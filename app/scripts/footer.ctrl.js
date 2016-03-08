'use strict';
angular.module('mattGreenUX')

.controller('FooterCtrl', function($scope, $rootScope, $timeout){
  var vm = this;
  vm.loaded = false;

  $scope.$on('$stateChangeSuccess', 
  function(){ 
    $timeout(function() {debugger;
      vm.loaded = true;
    }, 0);
  });

  


});
