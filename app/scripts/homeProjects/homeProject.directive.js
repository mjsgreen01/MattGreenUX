'use strict';
angular.module('mattGreenUX')


.directive('homeProject', function(){
  var controller = function(){
    // var vm = this;
    
    var winHeight = $(window).height();
    var flexed;

    // TODO: Put this shit into a link function
    function homeResize () {
      if ($(window).width()>1100) {
        flexed = true;
        $('.previewRow').css('height',winHeight);
      } else if (flexed) {
        flexed = false;
        $('.previewRow').css('height','');
      }
    }

    homeResize();

    // Question: Is this better than doing a $watch on window-height?
    $( window ).resize(function() {
      winHeight = $(window).height();
      homeResize();
    });
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