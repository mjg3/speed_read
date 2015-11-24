reading_app.controller('flashCardsController', function($scope, $rootScope, $interval, $location, quizFactory){

  if($rootScope.user == null) {
    $location.path('/');
  }

  quizFactory.getQuiz(function(info) {
    console.log(info);
    $scope.passage = info[0].passage;
    $scope.words = $scope.passage.split(" ");
    $scope.percentage_complete = 0;
    $scope.len = $scope.words.length;

    $scope.counter = 0;
  });


  $scope.start = function() {
  var show_words = $interval(function(){
    $scope.word = $scope.words.shift();
    $scope.counter++;
    $scope.percentage_complete = ($scope.counter/$scope.len) * 100;
    if ($scope.words[0] == null) {
      $interval.cancel(show_words);
      $scope.finished_flashing = true;
      $location.path('/quiz');
    }
  }, 10);
}

});
