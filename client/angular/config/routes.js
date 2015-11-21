console.log("Getting to the routes page");

reading_app.config(function($routeProvider){
  $routeProvider

  .when('/', {
    templateUrl: '/angular/partials/flash_cards.html'
  })

})
