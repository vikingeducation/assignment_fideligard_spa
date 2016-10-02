fideligardApp.factory("portfolioService", function() {

  var portfolioService = {}

  var _availableCash = {cash: 100000}
  var _transactions = []

  var adjustFunds = function(trade) {
    var value = trade.quantity * trade.price
    if (trade.type === "Buy") {
      var newObj = {cash: _availableCash.cash -= value}
      angular.copy(newObj, _availableCash)
    } else {
      var newObj = {cash: _availableCash.cash += value}
      angular.copy(newObj, _availableCash)
    }
  };

  portfolioService.availableCash = function() {
    return _availableCash
  }

  portfolioService.handleTrade = function(trade) {
    _transactions.push(trade)
    adjustFunds(trade);
  }


  return portfolioService
})