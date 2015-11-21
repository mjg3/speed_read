reading_app.controller('flashCardsController', function($scope){
  var practice_string = "I am working at the Coding Dojo right now!";
  $scope.words = practice_string.split(" ");
  $scope.word = $scope.words[0];
  console.log("HERE");

  show_word =  $scope.$apply(function() {
    $scope.word = $scope.words.shift();
    console.log($scope.word)

  });
  setInterval(show_word, 1000);

})
