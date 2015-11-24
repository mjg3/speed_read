reading_app.controller('analyticsController', function($scope, $rootScope, $interval, $location, quizFactory, userFactory){
  if($rootScope.user == null) {
    $location.path('/');
  }
  $scope.user_data;
  $scope.labels = [];
  $scope.data = [];
  $scope.getPerformance = function(){
    var user_id = $rootScope.user.user_id;
    userFactory.getUser(user_id, function(person_data) {
      $scope.user_data = person_data[0];
      $scope.populatePerformance();
    })
  }

  $scope.populatePerformance = function() {
    console.log($scope.user_data)
    var label_holder = [];
    var data_holder  = [];
    for (var i = 0; i < $scope.user_data.quiz_performances.length; i++) {
      label_holder[i] = $scope.user_data.quiz_performances[i].date;
      data_holder[i]  = $scope.user_data.quiz_performances[i].score;
    }
    $scope.labels = label_holder;
    $scope.data[0]  = data_holder;
    $scope.series = ['Your comprehension levels'];
    console.log($scope.data);
 }



      console.log($scope.data);


  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };

    $scope.getPerformance();

  });
