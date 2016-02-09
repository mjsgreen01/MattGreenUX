'use strict';
angular.module('mattGreenUX')

.controller('erbCtrl', function(ProjectsFactory){
  var vm = this;

  ProjectsFactory.getData().then(function(){
    vm.projectsData = ProjectsFactory.projectsData;
    vm.erbData = _.findWhere(vm.projectsData, {alias: 'erb'});
  });


});
