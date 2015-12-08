
reading_app.controller('flashCardsController', function($scope, $rootScope, $interval, $location, $timeout, quizFactory){

  if($rootScope.user == null) {
    $rootScope.attempted_access = true
    $location.path('/');
  }
  if (!$rootScope.choice.speed) {
    $rootScope.no_chosen_speed = true;
    $location.path('/settings')
  }
  console.log($rootScope.choice);
  quizFactory.getQuiz($rootScope.choice, function(info) {
    $scope.passage = info[0].passage;
    $scope.words = $scope.passage.split(" ");
    $scope.percentage_complete = 0;
    $scope.len = $scope.words.length;

    $scope.counter = 0;
  });


  $scope.start = function() {


  var words_per_minute = 1000/($rootScope.choice.speed/60)
  var show_words = $interval(function(){
    $scope.word = $scope.words.shift();
    $scope.counter++;
    $scope.percentage_complete = ($scope.counter/$scope.len) * 100;
    if ($scope.words[0] == null) {
      $interval.cancel(show_words);
      $scope.finished_flashing = true;
      $rootScope.flag = true;
      $timeout(function(){
        $location.path('/quiz');
    }, 500);
    }
  }, words_per_minute);
}

});
