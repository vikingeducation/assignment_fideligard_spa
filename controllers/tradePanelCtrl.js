fideligardApp.controller("tradePanelCtrl", ["$scope", "$stateParams", "dateService", "stocksService", function($scope, $stateParams, dateService, stocksService) {

  console.log("state params: ");
  console.log($stateParams);

  $scope.symbol = $stateParams.symbol;
  $scope.buyOrSell = "Buy"

  $scope.dateObj = dateService.getSelectedDate();


  $scope.$watch('dates', function(newValue) {
    if ($scope.dates && $scope.dateObj) {
      var d = new Date($scope.dates[$scope.dateObj.date]);
      d.setTime( d.getTime() + d.getTimezoneOffset() * 60 * 1000); // fix timezone bug
      $scope.formattedDate = d;
    }
  })
  $scope.price = stocksService.getPrice($scope.symbol, $scope.dateObj)  

  $scope.stocks = stocksService.getStocks();
  $scope.dates = stocksService.allDates();


}])