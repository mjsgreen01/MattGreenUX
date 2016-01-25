'use strict';
angular.module('mattGreenUX')

.controller('psalCtrl', function(ProjectsFactory){
  var vm = this;

  ProjectsFactory.getPsalData().then(function(){
    vm.projectData = ProjectsFactory.psalData;
    vm.projectText = ProjectsFactory.psalData.projectText;
  });


});