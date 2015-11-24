reading_app.controller('flashCardsController', function($scope, $rootScope, $interval, $location){

  var practice_string = "He smiled understandingly-much more than understandingly. It was one of those rare smiles with a quality of eternal reassurance in it, that you may come across four or five times in life. It faced–or seemed to face–the whole eternal world for an instant, and then concentrated on you with an irresistible prejudice in your favor. It understood you just as far as you wanted to be understood, believed in you as you would like to believe in yourself, and assured you that it had precisely the impression of you that, at your best, you hoped to convey. ";
  $scope.words = practice_string.split(" ");
  $scope.percentage_complete = 0;
  var length = $scope.words.length;

  var counter = 0;

  $scope.start = function() {
  var show_words = $interval(function(){
    $scope.word = $scope.words.shift();
    counter++;
    $scope.percentage_complete = (counter/length) * 100;
    console.log(counter);
    console.log($scope.percentage_complete);
    console.log($scope.word);
    if ($scope.words[0] == null) {
      console.log('finished');
      $interval.cancel(show_words);
      $scope.finished_flashing = true;
      $location.path('/quiz');
      console.log(counter);
    }
  }, 25);
}

});
