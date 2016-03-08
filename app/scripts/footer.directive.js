'use strict';
angular.module('mattGreenUX')


.directive('footerDirective', function($timeout){
  var controller = function(){
    
  };

  return {
    restrict: 'EA',
    templateUrl: '/views/footerDirective.html',
    scope: {
    },
    controller: controller,
    controllerAs: 'homeProject',
    link: function (scope, el, attrs, ngModel) {
      $timeout(function() {debugger;
        
      }, 0);
    }
    // bindToController: true
  };

});