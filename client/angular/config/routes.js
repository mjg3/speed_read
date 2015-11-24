console.log("Getting to the routes page");

reading_app.config(function($routeProvider){
  $routeProvider

  .when('/', {
    templateUrl: '/angular/partials/home.html'
  })

  .when('/flash', {
    templateUrl: '/angular/partials/flash_cards.html'
  })

  .when('/quiz', {
    templateUrl: '/angular/partials/quiz.html'
  })

  .when('/dashboard', {
    templateUrl: '/angular/partials/dashboard.html'
  })

})
