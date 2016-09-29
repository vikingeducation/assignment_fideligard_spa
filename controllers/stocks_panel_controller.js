fideligardApp.controller('stocksPanelCtrl', ['$scope', 'stocksService', function($scope, stocksService){

  stocksService.all().then(function(stocks) {
    // console.log(stocks);
    $scope.stocks = stocksService.getStocks();
    $scope.dates = stocksService.getDates();
    console.log($scope.stocks);
    console.log($scope.dates);
  });

}]);
