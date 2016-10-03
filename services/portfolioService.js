fideligardApp.factory("portfolioService", function() {

  var portfolioService = {}

  var STARTING_CASH = 100000
  var _transactions = []

  // var adjustFunds = function(trade) {
  //   var value = trade.quantity * trade.price
  //   if (trade.type === "Buy") {
  //     var newObj = {cash: _availableCash.cash -= value}
  //     angular.copy(newObj, _availableCash)
  //   } else {
  //     var newObj = {cash: _availableCash.cash += value}
  //     angular.copy(newObj, _availableCash)
  //   }
  // };

  portfolioService.availableCash = function(today) {
    var out = {cash: STARTING_CASH};
    for (var i = 0; i < _transactions.length; i++) {
      var thisTransaction = _transactions[i]
      console.log(thisTransaction)
      var transDate = thisTransaction.date.toISOString().slice(0, 10)
      console.log("today: ")
      console.log(today)
      var convertedDate = today.toISOString().slice(0, 10);
      console.log(transDate);
      console.log(convertedDate);
      if (transDate <= convertedDate) {
        var newObj = {cash: out.cash + transactionValue(thisTransaction)};
        console.log(newObj)
        angular.copy(newObj, out)
      }
    }
    console.log("cash: " + out.cash)
    return out
  }

  var transactionValue = function(thisTransaction) {
    if (thisTransaction.type === "Sell") {
      return thisTransaction.quantity * thisTransaction.price
    } else {
      return -1 * (thisTransaction.quantity * thisTransaction.price)
    }
  }

  portfolioService.handleTrade = function(trade) {
    _transactions.push(trade)
  }

  portfolioService.getCurrentPortfolio = function(today) {
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