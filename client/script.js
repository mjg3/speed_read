var reading_app = angular.module('reading_app', ['ngRoute', 'auth0', 'angular-storage', 'angular-jwt']);
reading_app.config(function (authProvider) {
  authProvider.init({
    domain: 'speed-read.auth0.com',
    clientID: '5pDDXcSP929rZA96OJvpb7Rw7JgNzNlG'
  });
})
reading_app.run(function(auth) {
  // This hooks al auth events to check everything as soon as the app starts
  auth.hookEvents();
});
