'use strict';
angular.module('mattGreenUX')

.controller('ProjectsCtrl', function(ProjectsFactory){
  var vm = this;

  vm.projectsData = [];

  ProjectsFactory.getData().then(function(){
    // this should be done in the service
    angular.forEach(ProjectsFactory.projectsOrder, function (alias) {
      vm.projectsData.push( ProjectsFactory.projectsData[alias] );
    });

  });


});