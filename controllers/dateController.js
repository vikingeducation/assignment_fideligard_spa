app.controller("dateCtrl", ["$scope", 'dateService', "stockService", function($scope, dateService, stockService) {

  $scope.submitDate = function() {
    dateService.storeMinMax($scope.min, $scope.max);
    $scope.min = "";
    $scope.max = "";
  };

  $scope.datePicked = 126;

  $scope.sendDate = 0;




  $scope.$watch("datePicked", function() {
    // var d = new Date(2015,0, 0)
    // var newDate = new Date(d.setTime(d.getTime() + parseInt($scope.datePicked) * 86400000))
    $scope.sendDate = $scope.datePicked;
    // console.log(stockService.getDate($scope.sendDate));

  });

}])
