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

}]);
