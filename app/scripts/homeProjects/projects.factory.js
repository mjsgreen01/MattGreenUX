'use strict';
angular.module('mattGreenUX')
.factory('ProjectsFactory', function($http){

  var ProjectsFactory = {};
  ProjectsFactory.projectsData = {};

  ProjectsFactory.getData = function(){
    return $http.get('/data/data.js').then(function(res){
      ProjectsFactory.projectsData = res.data.projects;
    });
  };

  ProjectsFactory.getPsalData = function(){
    return $http.get('/data/psal.js').then(function(res){
      ProjectsFactory.psalData = res.data;
    });
  };

  return ProjectsFactory;

});


