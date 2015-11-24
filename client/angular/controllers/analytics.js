reading_app.controller('analyticsController', function($scope, $rootScope, $interval, $location, quizFactory, userFactory){

$scope.getPerformance = function(){
  var user_id = $rootScope.id;
  userFactory.getUser(user_id, function(person_data) {
    $scope.user_data = person_data
  })
  console.log($scope.user);
}

});
