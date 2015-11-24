  reading_app.controller('quizController', function($scope, $rootScope, $interval, $location, quizFactory){

    $rootScope.user_id = '565368f9c9c6627f16c4e27a';
    $scope.userAnswers;
    $scope.show_quiz = function() {
      console.log('GETTING INSIDE SHOW QUIZ CONTROLLER')
      quizFactory.getQuestions(function(info) {
        $scope.quiz = info;
        return info;

      });

      $scope.flag = false;
    }



    // console.log($scope.quiz);

    $scope.answer = function(question, answer) {
      $scope.client_answer
    }

    $scope.submit_quiz = function(quiz) {
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
    $scope.show_quiz();

});
