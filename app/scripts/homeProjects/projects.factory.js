'use strict';
angular.module('mattGreenUX')
.factory('ProjectsFactory', function($http){

  var ProjectsFactory = {
    projectsData: {},
    projectsOrder: ['psal', 'erb', 'macys', 'moodsnap', 'comp']
  };


  ProjectsFactory.getData = function(){
    return $http.get('/data/data.js').then(function(res){
      ProjectsFactory.projectsData = res.data.projects;
    });
  };


  // consider removing this since we're using ng-include
  ProjectsFactory.getPsalData = function(){
    return $http.get('/data/psal.js').then(function(res){
      ProjectsFactory.psalData = res.data;
    });
  };

  return ProjectsFactory;

});


