fideligardApp.controller("tradePanelCtrl", ["$scope", "$stateParams", "dateService", "stocksService", "portfolioService", function($scope, $stateParams, dateService, stocksService, portfolioService) {

  var _insufficientFundsMesssage = "You seem to have insufficient funds. Please speak with one of our consultants if this is an issue."
  var _transactionCompleteMessage = "Transaction recorded."

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
  $scope.cash = portfolioService.availableCash();

  $scope.trade = function() {
    var trade = {} 
    trade.type = $scope.buyOrSell;
    trade.quantity = String($scope.quantity);
    trade.price = $scope.price;
    trade.symbol = $scope.symbol;
    trade.date = $scope.formattedDate;
    return trade
  }

  $scope.handleTrade = function() {
    console.log("trading...")
    var trade = $scope.trade()
    console.log(trade)
    console.log(validTrade(trade))
    if (validTrade(trade)) {
      console.log("Trade is valid")
      portfolioService.handleTrade($scope.trade())
      $scope.message = _transactionCompleteMessage
    } else {
      $scope.message = _insufficientFundsMesssage
    }
  }

  var validTrade = function(trade) {
    return trade.quantity * trade.price < $scope.cash.cash
  }


}])