reading_app.controller('analyticsController', function($scope, $rootScope, $interval, $location, quizFactory, userFactory){
  if($rootScope.user == null) {
    $location.path('/');
  }
  $scope.user_data;
  $scope.labels = [];
  $scope.data = [];

  $scope.diagnostic_labels = []
  $scope.diagnostic_data_holder = []
  $scope.getPerformance = function(){
    var user_id = $rootScope.user.user_id;
    userFactory.getUser(user_id, function(person_data) {
      $scope.user_data = person_data[0];
      $scope.populatePerformance();
    })
  }

  $scope.populatePerformance = function() {
    console.log("about to LOG SCOPE.USERDATA");
    console.log($scope.user_data.diagnostic_performances[0]);
    var label_holder = [];
    var data_holder  = [];
    var diagnostic_label_holder = [];
    var diagnostic_data_holder = [];

    for (var i = 0; i < $scope.user_data.quiz_performances.length; i++) {
      label_holder[i] = $scope.user_data.quiz_performances[i].date;
      data_holder[i]  = $scope.user_data.quiz_performances[i].score;
    }
    for (var k = 0; k <$scope.user_data.diagnostic_performances.length; k++) {
      diagnostic_label_holder[k] = $scope.user_data.diagnostic_performances[k].date;
      diagnostic_data_holder[k] =  $scope.user_data.diagnostic_performances[k].speed;
    }
    $scope.labels = label_holder;
    $scope.data[0]  = data_holder;
    $scope.series = ['Your comprehension levels'];
    console.log($scope.labels)
    console.log($scope.data);
    console.log($scope.series);
    $scope.diagnostic_labels = diagnostic_label_holder;
    $scope.diagnostic_data_holder[0] = diagnostic_data_holder;
    $scope.diagnostic_series = ['Your words per minute']



    console.log($scope.data);
 }



      console.log($scope.data);


  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };

    $scope.getPerformance();

  });
