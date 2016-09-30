app.controller("dateCtrl", ["$scope", 'dateService', "stockService", function($scope, dateService, stockService) {

  $scope.datePicked = 126;

  $scope.sendDate = 0;

  $scope.$watch("datePicked", function() {
    $scope.sendDate = $scope.datePicked;
    stockService.setDay($scope.datePicked);
    $scope.newDate = stockService.getDate($scope.sendDate);
  });

}])
