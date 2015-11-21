var reading_app = angular.module('reading_app', ['ngRoute']);

reading_app.factory('Factory', function($http){
});


reading_app.controller('Controller', function($scope, customerFactory){
  $scope.practice_string = "I am working at the Coding Dojo right now!";

})
