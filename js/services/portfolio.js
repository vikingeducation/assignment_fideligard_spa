fideligard.factory('portfolio',
  ['transactions',
  function(transactions) {

  var portfolio = {};

  portfolio.all = {'AAPL': 8};
  portfolio.cash = 5000;
  portfolio.stocks = {};

  portfolio.currentShares = function(symbol) {
    return portfolio.all[symbol] || 0;
  };


  portfolio.add = function(transaction) {
    var symbol = transaction.symbol;
    var quantityChange = transaction.quantity;
    if (transaction.type === 'SELL') {
      quantityChange *= -1;
    };

    var currentQuantity = portfolio.all[symbol] || 0;

    var newQuantity = currentQuantity += quantityChange;
    portfolio.all[symbol] = newQuantity;
  };

  // given 2 dates, pull all transactions that happened in between
  // include cash
  // add all buys
  // subtract all sells
  portfolio.buildUp = function(futureDate, pastDate) {
    //  if no startDate, get first date from dateService?
    var oneDay = 1000*60*60*24;
    var transactionsInRange = transactions.between(pastDate + oneDay, futureDate);

    transactionsInRange.forEach( function(transaction) {
      var cashFlow = transaction.price * transaction.quantity;
      if (transaction.type === 'BUY') {
        portfolio.cash -= cashFlow;
        // portfolio.stocks add to
      }
    })
  };


  portfolio.buildDown = function(futureDate, pastDate) {
    var oneDay = 1000*60*60*24;
    var transactionsInRange = transactions.between(pastDate, futureDate - oneDay);
  }


  return portfolio;

}]);