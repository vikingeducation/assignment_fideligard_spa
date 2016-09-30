app.controller("dateCtrl", ["$scope", 'dateService', "stockService", function($scope, dateService, stockService) {




  $scope.datePicked = 126;

  $scope.sendDate = 0;

  $scope.$watch("datePicked", function() {
    $scope.sendDate = $scope.datePicked;
    // console.log(stockService.getDate($scope.sendDate));
    $scope.newDate = stockService.getDate($scope.sendDate);
  });

}])
