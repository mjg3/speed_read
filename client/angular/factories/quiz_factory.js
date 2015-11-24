
reading_app.factory('quizFactory', function($http, $rootScope, $location){

  var factory = {}

  factory.getQuiz = function (passage_choice, callback) {
    var passage_choice = {passage_id: passage_choice.passage_id}
    $http.post('/get_quiz', passage_choice).success(function(info) {
      callback(info);
    })
  }

  factory.storeQuizGrade = function(percentage_correct) {
    console.log("RootScope user_id: " + $rootScope.user.user_id);
    var grade = {score: percentage_correct, user_id: $rootScope.user.user_id};
    $http.post('/store_grade', grade).success(function(person){
      console.log('stored the grade');
      console.log(person);
      $location.path('/dashboard');
      factory.getPerfomance();
    })
  }

  factory.storeDiagnostic = function(words_per_minute, callback){
    var diagnostic = {words_per_minute: words_per_minute, user_id: $rootScope.user.user_id};
    $http.post('/store_diagnostic', diagnostic).success(function(){
      callback();
    })
  }

  factory.getPerfomance = function(){
    console.log("IN THE PERFORMANCE FUNCTION");
  }
  return factory;
});
