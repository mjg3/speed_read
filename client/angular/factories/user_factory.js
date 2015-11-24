reading_app.factory('userFactory', function($http, $rootScope, $location){

var factory = {};

factory.getUser = function(user_id, callback){
  var id = {user_id: user_id}
  $http.post('/get_user', id).success(function(person_data){
    callback(person_data);
  })
}
return factory;
})
