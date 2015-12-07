reading_app.controller('lineByLineController', function($scope, $rootScope, $interval, $location, $timeout, quizFactory){

  if($rootScope.user == null) {
    $rootScope.attempted_access = true
    $location.path('/');
  }

  var data = {};
  $scope.sentences = [{}];
  quizFactory.getQuiz($rootScope.choice, function(info) {
    $scope.passage = info[0].passage;
    var sentence_holder = $scope.passage.split(".");
    data.sentences = sentence_holder;
    for (var i = 0; i < sentence_holder.length; i++) {
      $scope.sentences[i] = {sentence: sentence_holder[i], flag: 'span_color'}
    }
  })

$scope.startLineByLine = function() {
  // So we need to read 5 words per second
  var words_per_second = 1000/($rootScope.choice.speed/60);
  var sentences_read   = 0;
  var counter = 0;
  var current_sentence = data.sentences[sentences_read].split(" ");
  var show_sentences = $interval(function(){

    if (counter >= current_sentence.length) {
      counter = 0;
      $scope.sentences[sentences_read].flag = 'hidden_class';
      console.log($scope.sentences);
      sentences_read++;
    }
    else {
      counter++;
    }
    if (sentences_read >= data.sentences.length) {
      $interval.cancel(show_sentences);
      $rootScope.flag = true;
      $location.path('/quiz');
    }
  }, words_per_second);
}

});
