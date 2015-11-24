
reading_app.factory('quizFactory', function($http, $rootScope, $location){

  var factory = {}

  factory.getQuiz = function (callback) {
    var test = {passage_id: 1} ;
    $http.post('/get_quiz', test).success(function(info) {
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

  factory.getPerfomance = function(){
    console.log("IN THE PERFORMANCE FUNCTION");
  }
  return factory;
});
