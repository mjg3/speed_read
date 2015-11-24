reading_app.factory('loginFactory', function($http){

  var factory = {}
  factory.addUser = function(user, callback) {
    $http.post('/add_user', user).success(function() {
      callback(user);
    })

  }
  return factory;
})


reading_app.controller('loginController', function ($scope, $http, auth, store, $location, $rootScope, loginFactory) {

  $scope.login = function () {
    console.log("GETTING HERE");
    auth.signin({}, function (profile, token) {
      // Success callback
      store.set('profile', profile);
      store.set('token', token);
      $rootScope.profile = auth;
      console.log(auth.profile);

      var user = {name: auth.profile.nickname, email: auth.profile.email, user_id: auth.profile.user_id}

      loginFactory.addUser(user, function() {
        $rootScope.user = user;
      });
      $location.path('/');
    }, function () {
      // Error callback
    });
  }

  $scope.logout = function() {
    auth.signout();
    store.remove('profile');
    store.remove('token');
    $rootScope.user = null;
    console.log('signed_out');
    $location.path('/');
  }


});
