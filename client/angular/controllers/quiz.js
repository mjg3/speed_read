reading_app.controller('quizController', function($scope, $rootScope, $interval, $location, quizFactory){
  if($rootScope.user == null) {
    $rootScope.attempted_access = true
    $location.path('/');
  }

  $scope.userAnswers;
  $scope.info;
  var time = {}
  $scope.show_quiz = function() {
    quizFactory.getQuiz($rootScope.choice, function(info) {
      $scope.quiz = info;
      return info;

    });
  }

  $scope.answer = function(question, answer) {
    $scope.client_answer
  }

  $scope.submit_quiz = function(quiz) {
    $rootScope.flag = false;
    console.log(quiz.answer_key[0]);
    var correct = 0;
    for (var i = 0; i < quiz.answer_key.length; i++){
      if ($scope.userAnswers[i] == quiz.answer_key[i]) {
        correct++;
      }
    }
    var percentage_correct = correct/quiz.answer_key.length;
    quizFactory.storeQuizGrade(percentage_correct);
  }

  $scope.pickQuizFlash = function() {
    $rootScope.choice = $scope.choice;
    $location.path('/flash')
    }

  $scope.pickQuizLine = function() {
      $rootScope.choice = $scope.choice;
      $location.path('/line')
      }

  $scope.pickQuizDiagnostic = function() {
      $rootScope.choice = $scope.choice;
      $location.path('/diagnostic');
  }

  $scope.startTime = function() {
    quizFactory.getQuiz($rootScope.choice, function(info){
      $scope.info = info;
      console.log($scope.info);
    })
    time.begin = new Date().getTime();
    console.log(time.begin);
  }

  $scope.endTime  = function() {
    time.end = new Date().getTime();
    time.total = time.end - time.begin;
    var number_of_words_in_passage = $scope.info[0].passage.split(" ");
    time_in_seconds = time.total/1000;

    var words_per_second = number_of_words_in_passage.length/time_in_seconds;
    var words_per_minute = words_per_second * 60;
    quizFactory.storeDiagnostic(words_per_minute, function(){
      $location.path('/dashboard');
    });
  }

  if ($rootScope.flag) {
  $scope.show_quiz();
}

});
