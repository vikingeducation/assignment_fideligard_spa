financialApp.controller('StocksCtrl', ['$scope', '$location', 'dateService', 'stockService', 'portfolioService', function($scope, $location, dateService, stockService, portfolioService){

  $scope.dateInfo = dateService.getDateInfo();
  $scope.stockData = stockService.getStockData();
  $scope.stockDataRoute;

  $scope.go = function(page) {
    $location.path('/' + page);
  };

  $scope.update = function() {
    $scope.dateInfo.setCurrentDate();
    portfolioService.setPortfolio();
    console.log( stockService.getStockData() );
    console.log( portfolioService.getPortfolio() );
    console.log( portfolioService.getTransactions() );
  }

  $scope.priceOneDayAgo = function(symbol) {
    return $scope.stockData[ $scope.dateInfo.oneDayAgo() ][ symbol ].price;
  }

  $scope.priceOneWeekAgo = function(symbol) {
    return $scope.stockData[ $scope.dateInfo.oneWeekAgo() ][ symbol ].price;
  }

  $scope.priceOneMonthAgo = function(symbol) {
    return $scope.stockData[ $scope.dateInfo.oneMonthAgo() ][ symbol ].price;
  }

}]);
