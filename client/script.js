var store_app = angular.module('store_app', ['ngRoute']);

store_app.config(function($routeProvider){
  $routeProvider

  .when('/', {
    templateUrl: '/partials/dashboard.html'
  })

})


store_app.factory('Factory', function($http){
});


store_app.controller('Controller', function($scope, customerFactory){
})
