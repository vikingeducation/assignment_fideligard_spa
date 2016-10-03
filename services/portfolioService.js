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

  portfolioService.getPastTransactions = function(today) {
    var out = {}
    today = today.toISOString().slice(0, 10)
    for (var i = 0; i < _transactions.length; i++) {
      var thisTransaction = _transactions[i]
      var transactionDate = thisTransaction.date.toISOString().slice(0, 10)
      var symbol = thisTransaction.symbol;
      if ( transactionDate <= today) {
        if (out[symbol] && thisTransaction.type === "Buy") {
          out[symbol] += thisTransaction.quantity
        } else if (out[symbol] && thisTransaction.type === "Sell") {
          out[symbol] -= thisTransaction.quantity
        } else { // otherwise, transaction type is always buy due to validations
          out[symbol] = thisTransaction.quantity
        }
      }
    }
    return out
  }


  return portfolioService
})