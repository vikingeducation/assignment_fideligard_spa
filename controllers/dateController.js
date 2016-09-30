app.controller("dateCtrl", ["$scope", 'dateService', "stockService", function($scope, dateService, stockService) {

  $scope.newDate;
  $scope.datePicked = 126;

  $scope.$watch("datePicked", function() {
    stockService.setDay($scope.datePicked);
    $scope.newDate = stockService.getDate($scope.datePicked);
  });

}])
