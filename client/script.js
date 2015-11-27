var reading_app = angular.module('reading_app', ['ui.bootstrap', 'ngRoute', 'auth0', 'angular-storage', 'angular-jwt', 'chart.js']);
reading_app.controller('carouselController', function($scope){
  $scope.carousel = function(){
  $scope.myInterval = 3000;
  $scope.slides = [
    {
      image: '/images/authors/capote.jpg'
    },
    {
      image: '/images/authors/fitzgerald.jpg'
    },
    {
      image: '/images/authors/harper.jpg'
    },
    {
      image: '/images/authors/salinger.jpg'
    }
  ];
};
$scope.carousel();
});


reading_app.config(function (authProvider, $routeProvider, $httpProvider, jwtInterceptorProvider) {
  authProvider.init({
    domain: 'speed-read.auth0.com',
    clientID: '5pDDXcSP929rZA96OJvpb7Rw7JgNzNlG'
  });
  // We're annotating this function so that the `store` is injected correctly when this file is minified
  jwtInterceptorProvider.tokenGetter = ['store', function(store) {
    // Return the saved token
    return store.get('token');
  }];

  $httpProvider.interceptors.push('jwtInterceptor');
});

reading_app.run(function($rootScope, auth, store, jwtHelper, $location) {

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

reading_app.run(function(auth) {
  // This hooks al auth events to check everything as soon as the app starts
  auth.hookEvents();
});
