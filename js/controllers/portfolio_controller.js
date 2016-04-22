financialApp.controller('PortfolioCtrl', ['$scope', '$location', 'dateService', 'stockService', 'portfolioService', function($scope, $location, dateService, stockService, portfolioService){

  $scope.stockData = stockService.getStockData();
  $scope.dateInfo = dateService.getDateInfo();
  $scope.portfolio = portfolioService.getPortfolio();

  $scope.price = function(symbol) {
    return $scope.stockData[ $scope.dateInfo.getDateString() ][symbol].price
  }

}]);
