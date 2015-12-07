reading_app.controller('analyticsController', function($scope, $rootScope, $interval, $location, quizFactory, userFactory){
  if($rootScope.user == null) {
    $rootScope.attempted_access = true
    $location.path('/');
  }
  $scope.user_data;
  $scope.user = $rootScope.user
  console.log($scope.user)
  $scope.labels = [];
  $scope.data = [];

  $scope.badges = [];

  $scope.diagnostic_labels = []
  $scope.diagnostic_data_holder = []

  everything = {};
  $scope.getPerformance = function(){
    var user_id = $rootScope.user.user_id;
    userFactory.getUser(user_id, function(person_data) {
      $scope.user_data = person_data[0];
      $scope.populatePerformance();
    })

  }

  $scope.populatePerformance = function() {
    var label_holder = [];
    var data_holder  = [];
    var diagnostic_label_holder = [];
    var diagnostic_data_holder = [];
    var national_average_comprehension = [];

    for (var i = 0; i < $scope.user_data.quiz_performances.length; i++) {
      label_holder[i] = $scope.user_data.quiz_performances[i].date;
      data_holder[i]  = $scope.user_data.quiz_performances[i].score * 100;
      national_average_comprehension[i] = 77;
    }
    var test = []
    var national_average_speed = []
    for (var k = 0; k <$scope.user_data.diagnostic_performances.length; k++) {
      diagnostic_label_holder[k] = $scope.user_data.diagnostic_performances[k].date;
      diagnostic_data_holder[k] =  Math.floor($scope.user_data.diagnostic_performances[k].speed);
      national_average_speed[k] = 250;
      test[k] = 500

    }
    $scope.labels = label_holder;
    $scope.data[0]  = data_holder;
    $scope.data[1]  = national_average_comprehension;

    $scope.series = ['Your Comprehension Levels', 'National Average Comprehension Levels', 'Color test comprehension'];
    everything.comprehension = $scope.data[0];


    $scope.diagnostic_labels = diagnostic_label_holder;
    $scope.diagnostic_data_holder[0] = diagnostic_data_holder;
    console.log($scope.diagnostic_data_holder);
    $scope.diagnostic_data_holder[1] = national_average_speed;
    $scope.diagnostic_data_holder[2]  = test;
    everything.speed = $scope.diagnostic_data_holder[0];
    $scope.diagnostic_series = ['Your Words Per Minute', 'National Average']



    $rootScope.badges = everything;
    console.log($rootScope.badges);
  }

  $scope.showBadges = function (){
    var user_id = $rootScope.user.user_id;
    userFactory.getUser(user_id, function(person_data) {
      $scope.user_data = person_data[0];
      $scope.badges = $scope.user_data.badges;
    })
    console.log("About to log the diagnostic data!");
    console.log($rootScope.badges);
    var speed = $rootScope.badges.speed;
    var comprehension = $rootScope.badges.comprehension;
    // $scope.badges
    console.log(speed[speed.length-1]);
    if (speed[speed.length - 1] >= 300) {
      $scope.badge0 = true;
    }

    var sum = 0;
    for (var i = 0; i < comprehension.length; i++) {
      sum += comprehension[i];
    }
    var average_comprehenison = sum/comprehension.length;
    if (average_comprehenison >= .1) {
      $scope.badge1 = true;
    }

    var comprehension_length = comprehension.length;
    var improvement = false;
    if (comprehension[comprehension_length - 3] <= comprehension[comprehension_length - 2] &&  comprehension[comprehension_length - 2] <= comprehension_length[comprehension_length - 1]) {
      $scope.badge2 = true;
    }

    if($scope.badges0 && $scope.badge1) {
      $scope.badge3 = true;
    }
    // console.log($scope.badges);

  }

  $scope.goToBadges = function() {
    $rootScope.badgesFlag = true;
    $location.path('/badges');
  }



  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };

  $scope.getPerformance();
  if($rootScope.badgesFlag) {
  $scope.showBadges();
}

});
