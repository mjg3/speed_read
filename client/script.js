var reading_app = angular.module('reading_app', ['ngRoute', 'auth0', 'angular-storage', 'angular-jwt', 'chart.js']);
reading_app.config(function (authProvider) {
  authProvider.init({
    domain: 'speed-read.auth0.com',
    clientID: '5pDDXcSP929rZA96OJvpb7Rw7JgNzNlG'
  });
})
.run(function($rootScope, auth, store, jwtHelper, $location) {
  // This events gets triggered on refresh or URL change
  $rootScope.$on('$locationChangeStart', function() {
    var token = store.get('token');
    if (token) {
      if (!jwtHelper.isTokenExpired(token)) {
        if (!auth.isAuthenticated) {
          auth.authenticate(store.get('profile'), token);
          var profile = store.get('profile');
          var user = {name: auth.profile.nickname, email: auth.profile.email, user_id: auth.profile.user_id}
          $rootScope.user = user;
        }
      } else {
        // Either show the login page or use the refresh token to get a new idToken
        $location.path('/');
      }
    }
  });
});

reading_app.directive('wrapOwlcarousel', function () {  
    return {
        restrict: 'E',
        link: function (scope, element, attrs) {
            var options = scope.$eval($(element).attr('data-options'));
            $(element).owlCarousel(options);
        }
    };
});

reading_app.run(function(auth) {
  // This hooks al auth events to check everything as soon as the app starts
  auth.hookEvents();
});
