'use strict';
angular.module('mattGreenUX')

.controller('ProjectsCtrl', function(ProjectsFactory){
  var vm = this;

  vm.projectsData = [];

  ProjectsFactory.getData().then(function(){
    angular.forEach(ProjectsFactory.projectsOrder, function (alias) {
      vm.projectsData.push( ProjectsFactory.projectsData[alias] );
    });

  });


});