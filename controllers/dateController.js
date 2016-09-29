app.controller("dateCtrl", ["$scope", 'dateService', function($scope, dateService) {

  $scope.submitDate = function() {
    dateService.storeMinMax($scope.min, $scope.max);
    $scope.min = "";
    $scope.max = "";
  };

  $scope.datePicked = "2015-06-30";
  $scope.$watch("datePicked", function() {

    var d = new Date(2015,0, 0)
    var newDate = new Date(d.setTime(d.getTime() + parseInt($scope.datePicked) * 86400000))
    $scope.newDate = newDate
  });
  
}])
