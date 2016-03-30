financialApp.controller('TradingCtrl', ['$scope', '$location', '$stateParams', 'dateService', 'stockService', 'portfolioService', function($scope, $location, $stateParams, dateService, stockService, portfolioService){

  $scope.stockData = stockService.getStockData();
  $scope.dateInfo = dateService.getDateInfo();
  $scope.portfolio = portfolioService.getPortfolio();
  $scope.transactions = portfolioService.getTransactions();

  $scope.formData = {
    symbol: $stateParams.symbol,
    buysell: "buy",
    quantity: 1,
  };

  $scope.trade = function(valid) {
    if ( valid ) {
      portfolioService.addTransaction(
        $scope.dateInfo.getDateString(),
        $scope.formData.symbol,
        $scope.formData.quantity,
        $scope.formData.buysell
      );
      portfolioService.setPortfolio();
    }
  };

}]);
