'use strict';
angular.module('mattGreenUX')


.directive('homeProject', function(){
  var controller = function(){
    // var vm = this;
    
    var winHeight = $(window).height();

    function homeResize () {
      if ($(window).width()>800) {
        $('.previewRow').css('height',winHeight);
      }else{
        $('.previewRow').css('height','');
      }
    }

    homeResize();
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