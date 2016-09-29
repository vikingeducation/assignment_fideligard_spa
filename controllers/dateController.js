app.controller("dateCtrl", ["$scope", 'dateService', function($scope, dateService) {
  
  $scope.submitDate = function() {
    dateService.storeMinMax($scope.min, $scope.max);
    $scope.min = "";
    $scope.max = "";
  }

}])