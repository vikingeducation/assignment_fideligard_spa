app.controller("dateCtrl", ["$scope", 'dateService', function($scope, dateService) {
  
  $scope.submitDate = function() {
    dateService.storeMinMax($scope.min, $scope.max);
    $scope.min = "";
    $scope.max = "";
  }

  $scope.datePicked = "2015-06-30"
  $scope.$watch("datePicked", function() {
    var newDate = new Date(new Date(2015, 1, 0).getTime()+(parseInt($scope.datePicked)) * 24 * 60 * 60 * 1000);
    var year =  newDate.getFullYear();
    var month = newDate.getMonth();
    var day = newDate.getDate();
    $scope.newDate = year + "-" + month + "-" + day
  })
  // $scope.convertDate = function(day) {
  //   $scope.newDate = new Date(new Date(2015, 0, 0).getTime()+(parseInt(day)) * 24 * 60 * 60 * 1000);
  // }

}])