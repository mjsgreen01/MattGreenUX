'use strict';
angular.module('mattGreenUX')

.controller('ProjectsCtrl', function(ProjectsFactory){
  var vm = this;

  ProjectsFactory.getData().then(function(){
    vm.projectsData = ProjectsFactory.projectsData;
  });


});