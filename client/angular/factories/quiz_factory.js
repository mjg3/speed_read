
reading_app.factory('quizFactory', function($http, $rootScope, $location){

  var factory = {}

  factory.getQuestions = function (callback) {
    var test = {passage_id: 14} ;
    $http.post('/get_quiz', test).success(function(info) {
      callback(info);
    })
  }

  factory.storeQuizGrade = function(percentage_correct) {
    console.log('storing quiz grade');
    var grade = {score: percentage_correct, user_id: $rootScope.user_id};
    $http.post('/store_grade', grade).success(function(person){
      console.log('stored the grade');
      console.log(person);
            $location.path('/dashboard');
    })

  }
  return factory;
});
