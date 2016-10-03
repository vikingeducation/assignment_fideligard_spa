fideligardApp.controller("tradePanelCtrl", ["$scope", "$stateParams", "dateService", "stocksService", "portfolioService", function($scope, $stateParams, dateService, stocksService, portfolioService) {

  var _insufficientFunds = "You seem to have insufficient funds. Please speak with one of our consultants if this is an issue."
  var _transactionComplete = "Transaction recorded."
  var _insufficientStock = "You do not own enought shares of that stock."
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
    trade.quantity = parseInt($scope.quantity);
    trade.price = $scope.price;
    trade.symbol = $scope.symbol;
    trade.date = $scope.formattedDate;
    return trade
  }

  $scope.handleTrade = function() {
    var trade = $scope.trade()
    if (validTrade(trade)) {
      portfolioService.handleTrade($scope.trade())
      $scope.message = _transactionComplete
    }
  }

  var validTrade = function(trade) {
    if (trade.type === "Buy") {
      if (trade.quantity * trade.price < $scope.cash.cash) {
        return true
      } else {
        $scope.message = _insufficientFunds
        return false
      }
    } else if (trade.type === "Sell") {
      var transactions = portfolioService.getPastTransactions($scope.formattedDate);
      console.log(transactions)
      if (transactions[trade.symbol]) {
        if (transactions[trade.symbol] >= trade.quantity) {
          return true
        } else {
          $scope.message = _insufficientStock
          return false
        }
      } else {
        $scope.message = _insufficientStock
        return false
      }
    }
  }


}])