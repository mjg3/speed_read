reading_app.controller('loginController', ['$scope', '$http', 'auth', 'store', '$location',
function ($scope, $http, auth, store, $location) {

  $scope.login = function () {
    console.log("GETTING HERE");
    auth.signin({}, function (profile, token) {
      // Success callback
      store.set('profile', profile);
      store.set('token', token);
      $scope.auth = auth;
      $location.path('/');
    }, function () {
      // Error callback
    });
  }

  $scope.logout = function() {
  auth.signout();
  store.remove('profile');
  store.remove('token');
}


}]);
