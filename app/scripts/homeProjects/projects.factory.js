'use strict';
angular.module('mattGreenUX')
.factory('ProjectsFactory', function($http){

  var ProjectsFactory = {};
  ProjectsFactory.projectsData = {};

  ProjectsFactory.getData = function(){
    console.log('inside proj factory');
    return $http.get('/data/data.js').then(function(res){
      ProjectsFactory.projectsData = res.data.projects;
      console.log(res);
    });
  };

  return ProjectsFactory;

});


