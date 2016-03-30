financialApp.controller('StocksCtrl', ['$scope', '$location', 'dateService', 'stockService', function($scope, $location, dateService, stockService){

  $scope.dateInfo = dateService.getDateInfo();
  $scope.stockData = stockService.getStockData();
  $scope.stockDataRoute = "portfolio";

  $scope.go = function(page) {
    $location.path('/' + page);
  };

}]);
