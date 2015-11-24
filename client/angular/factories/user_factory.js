reading_app.factory('userFactory', function($http, $rootScope, $location){

var factory = {};

factory.getUser = function(user_id){
  $http.post('/get_user', user_id).success(function(person_data){
    callback(person_data);
  })
}

})
