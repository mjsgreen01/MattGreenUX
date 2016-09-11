'use strict';
angular.module('mattGreenUX')


.directive('footerNavDirective', function(resize){
  var controller = function(){
    var vm = this;
    vm.setIsMobile = setIsMobile;

    vm.setIsMobile({});

     function setIsMobile($event){
      if (!$event.width) {
        $event.width = $(window).width();
      }
      vm.isMobile = $event.width < 800;
    };
  };

  return {
    restrict: 'EA',
    templateUrl: '/views/footerNavDirective.html',
    scope: {
      otherProjects: '='
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