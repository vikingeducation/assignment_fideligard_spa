app.controller('TradeCtrl',
['stocks', '$scope', 'StockService', 'DateService', 'dates', '$stateParams', 'PortfolioService', "$state", 
function(stocks, $scope, StockService, DateService, dates, $stateParams, PortfolioService, $state) {

  $scope.dateInfo = DateService.getDateInfo();
  $scope.symbol = $stateParams.symbol;
  $scope.price = $stateParams.price;
  $scope.date = $stateParams.date;
  $scope.quantity = 1;
  $scope.buySell = 1;
  $scope.portfolio = PortfolioService.getPortfolio();
  $scope.currentPortfolio = $scope.portfolio[$scope.date]
  $scope.cash = $scope.currentPortfolio.cash.quantity

  $scope.submitOrder = function(){

    var success = PortfolioService.placeOrder({
      date: $scope.date,
      quantity: $scope.quantity,
      price: $scope.price,
      symbol: $scope.symbol,
      buySell: $scope.buySell
    })
    if (success) {
      $scope.tradePreventer = '';
      $state.go('stocks.transactions')
    } else if ($scope.buySell == -1 && $scope.quantity > $scope.currentPortfolio[$scope.symbol].quantity) {
      $scope.tradePreventer = "You're trying to sell more shares than you currently own."
    } else {
      $scope.tradePreventer = "This order can't be placed as it does not leave you enough cash or enough shares for a future trade you've already placed. Either reduce the amount of remove some future trades."
    }

  };

  $scope.invalidTrade = function() {
    if ($scope.buySell == 1 ) {
      if ($scope.price * $scope.quantity > $scope.cash) {
        return true;
      }
    } else {
      if ($scope.quantity > $scope.currentPortfolio[$scope.symbol].quantity) {
        $scope.tradePreventer = "You're trying to sell more shares than you currently own."
        return true;
      }
    }
  };

  $scope.tradeChosen = function(){
    if ($scope.symbol.length > 0) {
      return true;
    } else {
      return false;
    }
  }


}]);

  // $scope.dateInfo = DateService.getDateInfo();

  // $scope.setDate = function() {
  //   DateService.setDate($scope.newDate);
  //   $scope.stocksInfo = StockService.getStocks($scope.dateInfo.currentDate);
  // };

  // $scope.$watch('currentDate', function(){
  //   console.log("watch firing");
  //   $scope.currentStocks = stocks[$scope.dateInfo.currentDate];
  // })