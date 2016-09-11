'use strict';
angular.module('mattGreenUX')


.directive('footerNavDirective', function(resize){
  var controller = function(){
    var vm = this;
    
    vm.setIsMobile = function($event){
      vm.isMobile = $event.width < 800;
    };
  };

  return {
    restrict: 'EA',
    templateUrl: '/views/footerNavDirective.html',
    scope: {
    },
    controller: controller,
    controllerAs: 'vm',
    bindToController: true,
    link: function (scope, el, attrs, ctrl) {
      scope.$on('resize', function(data, $event){
        ctrl.setIsMobile($event);
      });
    }
  };

});