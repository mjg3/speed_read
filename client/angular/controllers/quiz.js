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
    if (typeof $scope.choice == "undefined") {
      swal('Whoops', 'Please make sure you choose a speed and a book to continue', 'error')
    }
    else if (typeof $scope.choice.speed === "undefined" || typeof $scope.choice.passage_id == "undefined") {
      swal('Whoops', 'Please make sure you choose a speed and a book to continue', 'error')
    }
    else {

    $rootScope.choice = $scope.choice;
    $location.path('/flash')
    }
  }

  $scope.pickQuizLine = function() {
    if (typeof $scope.choice == "undefined") {
      swal('Whoops', 'Please make sure you choose a speed and a book to continue', 'error')
    }
    else if (typeof $scope.choice.speed === "undefined" || typeof $scope.choice.passage_id == "undefined") {
      swal('Whoops', 'Please make sure you choose a speed and a book to continue', 'error')
    }
    else {
      $rootScope.choice = $scope.choice;
      $location.path('/line')
      }
    }

  $scope.pickQuizDiagnostic = function() {
      if (!$scope.choice) {
        swal('Whoops', 'Please choose a reading before you begin your diagnostic', 'error')
      }
      else {
      $rootScope.choice = $scope.choice;
      $location.path('/diagnostic');
    }
  }

  $scope.startTime = function() {
    quizFactory.getQuiz($rootScope.choice, function(info){
      $scope.info = info;
    })
    time.begin = new Date().getTime();
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
