'use strict';
angular.module('mattGreenUX')


.directive('footerDirective', function($timeout){
  var controller = function(){
    var vm = this;

    vm.test = true;
  };

  return {
    restrict: 'EA',
    templateUrl: '/views/footerDirective.html',
    scope: {
    },
    controller: controller,
    controllerAs: 'vm',
    bindToController: true,
    link: function (scope, el, attrs, ngModel) {
      $timeout(function() {
        scope.vm.show = true;
      }, 0);
    }
  };

});