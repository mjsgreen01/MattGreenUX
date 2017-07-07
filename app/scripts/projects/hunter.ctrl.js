'use strict';
angular.module('mattGreenUX')

.controller('hunterCtrl', function(ProjectsFactory){
  var vm = this;

  ProjectsFactory.getData().then(function(){
    vm.projectsData = ProjectsFactory.projectsData;
    vm.hunterData = _.findWhere(vm.projectsData, {alias: 'hunter'});
  });


});
