fideligardApp.factory("portfolioService", ["_", function(_) {

  var portfolioService = {}

  var STARTING_CASH = 100000
  var END_DATE = new Date(2014, 12, 31)
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
      var transDate = thisTransaction.date.toISOString().slice(0, 10)
      var convertedDate = today.toISOString().slice(0, 10);
      if (transDate <= convertedDate) {
        var newObj = {cash: out.cash + transactionValue(thisTransaction)};
        angular.copy(newObj, out)
      }
    }
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

  portfolioService.getPortfolioByDate = function(today, portfolio) {
    if (!portfolio) { var portfolio = _transactions } // passing in a portfolio is optional
    var out = {}
    today = today.toISOString().slice(0, 10)
    for (var i = 0; i < portfolio.length; i++) {
      var thisTransaction = portfolio[i];
      var transactionDate = thisTransaction.date.toISOString().slice(0, 10);
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

  portfolioService.validTrade = function(trade) {
    // run the simulation, making sure adding trade to _transactions doesn't cause any future transactions to be invalid (due to either funds or lack of stock)
    // since the trade panel controller's validations take care of past (using getCurrentPortfolio), we only have to concern ourselves here with the future
    console.log("validating in the context of future trades...")
    var transactionsCopy = _transactions.slice(0)
    transactionsCopy.push(trade)
    for (var i = 0; i < transactionsCopy.length; i++) {
      var thisTransaction = transactionsCopy[i]
      console.log(thisTransaction)
      var portfolio = portfolioService.getPortfolioByDate(END_DATE, transactionsCopy)
      var shares = _.values(portfolio);
      console.log(shares)
      var sharesWithNegativeStock = _.filter(shares, function(share) {return share < 0})
      if (sharesWithNegativeStock.length) { console.log("You have a future trade which conflicts with this one."); return false}
      if (portfolioService.availableCash(trade.date) < 0) { console.log("This trade would cause you to have negative funds at some future point."); return false } 
    }

    return true
  }


  return portfolioService
}])