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

  if ($rootScope.user) {
    $scope.loggedIn = true
  }
  $scope.load = function() {
    if (!$rootScope.user && $rootScope.attempted_access) {
      swal('Tell us about yourself first', "Please log in to RushReads before you start reading", "warning")
      $rootScope.attempted_access = false
    }
  }
  $scope.login = function () {
    auth.signin({}, function (profile, token) {
      // Success callback
      store.set('profile', profile);
      store.set('token', token);
      $rootScope.profile = auth;
      $scope.loggedIn = true;

      var user = {name: auth.profile.nickname, email: auth.profile.email, user_id: auth.profile.user_id}

      loginFactory.addUser(user, function() {
        $rootScope.user = user;
      });

    }, function () {
    });
  }

  $scope.logout = function() {
    auth.signout();
    store.remove('profile');
    store.remove('token');
    $rootScope.user = null;
    $scope.loggedIn = false;
  }

});
