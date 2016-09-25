'use strict';
angular.module('mattGreenUX')


.directive('homeProject', function(){
  var controller = function($state){
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
      // if on the home page
      if ($state.includes('projects')) {
        winHeight = $(window).height();
        homeResize();
      }
    });
  };

  return {
    restrict: 'EA',
    templateUrl: '/views/homeProject.html',
    scope: {
      "project": "=",
      "index": "="
    },
    controller: controller,
    controllerAs: 'homeProject',
    // bindToController: true
  };

});