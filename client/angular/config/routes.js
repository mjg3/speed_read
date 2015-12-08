reading_app.config(function($routeProvider){
  $routeProvider

  .when('/', {
    templateUrl: '/angular/partials/home.html'
  })

  .when('/flash', {
    templateUrl: '/angular/partials/flash_cards.html'
  })

  .when('/line', {
    templateUrl: '/angular/partials/line_by_line.html'
  })

  .when('/about',{
    templateUrl: '/angular/partials/about.html'
  })

  .when('/diagnostic_settings', {
    templateUrl: '/angular/partials/diagnostic_settings.html'
  })

  .when('/diagnostic', {
    templateUrl: '/angular/partials/diagnostic.html'
  })


  .when('/quiz', {
    templateUrl: '/angular/partials/quiz.html'
  })

  .when('/dashboard', {
    templateUrl: '/angular/partials/dashboard.html'
  })

  .when('/badges', {
    templateUrl: '/angular/partials/badges.html'
  })

  .when('/settings', {
    templateUrl: '/angular/partials/settings.html'
  })


})
