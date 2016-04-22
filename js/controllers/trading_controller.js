financialApp.controller('TradingCtrl', ['$scope', '$location', '$stateParams', 'dateService', 'stockService', 'portfolioService', function($scope, $location, $stateParams, dateService, stockService, portfolioService){

  $scope.stockData = stockService.getStockData();
  $scope.dateInfo = dateService.getDateInfo();
  $scope.portfolio = portfolioService.getPortfolio();
  $scope.transactions = portfolioService.getTransactions();

  $scope.formData = {
    symbol: $stateParams.symbol || "AAPL",
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

  $scope.tradeMax = function() {
    if ( $scope.formData.buysell === "buy" ) {
      var stock = $scope.stockData[ $scope.dateInfo.getDateString() ][ $scope.formData.symbol ]
      if ( stock ) {
        var price = stock.price;
        return ($scope.portfolio.cash / price);
      } else {
        return 0;
      }
    } else {
      return ($scope.portfolio.stocks[ $scope.formData.symbol ].quantity);
    }
  };

  $scope.price = function() {
    var stock = $scope.stockData[ $scope.dateInfo.getDateString() ][$scope.formData.symbol];
    if (stock) {
      return stock.price
    } else {
      return 0;
    }
  };

  $scope.cost = function() {
    var stock = $scope.stockData[ $scope.dateInfo.getDateString() ][$scope.formData.symbol]
    if (stock) {
      return stock.price * $scope.formData.quantity
    } else {
      return 0;
    }
  };

}]);
