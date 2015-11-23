'use strict';
angular.module('mattGreenUX')


.directive('homeProject', function(){
  var controller = function(){
    // var vm = this;
    
  };

  return {
    restrict: 'EA',
    templateUrl: '/views/homeProject.html',
    scope: {
      "project": "="
    },
    controller: controller,
    controllerAs: 'homeProject',
    // bindToController: true
  };

});