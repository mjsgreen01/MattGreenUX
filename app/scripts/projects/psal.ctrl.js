'use strict';
angular.module('mattGreenUX')

.controller('psalCtrl', function(ProjectsFactory){
  var vm = this;

  ProjectsFactory.getData().then(function(){
    vm.projectsData = ProjectsFactory.projectsData;
    vm.psalData = _.findWhere(vm.projectsData, {alias: 'psal'});
  });

  ProjectsFactory.getPsalData().then(function(){
    vm.projectData = ProjectsFactory.psalData;
    vm.projectText = ProjectsFactory.psalData.projectText;
  });


});
