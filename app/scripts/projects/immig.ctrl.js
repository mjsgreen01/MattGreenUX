'use strict';
angular.module('mattGreenUX')

.controller('immigCtrl', function(ProjectsFactory){
  var vm = this;

  ProjectsFactory.getData().then(function(){
    vm.projectsData = ProjectsFactory.projectsData;
    vm.immigData = _.findWhere(vm.projectsData, {alias: 'immig'});
  });


});
