fideligard.factory('portfolio',
  ['transactions',
  function(transactions) {

  var portfolio = {};

  portfolio.all = {'AAPL': 8};
  portfolio.cash = 5000;
  portfolio.assets = {'CASH': { quantity: 5000} };


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


  // for moving forward in time
  portfolio.buildUp = function(futureDate, pastDate) {
    //  if no startDate, get first date from dateService?
    var oneDay = 1000*60*60*24;
    var transactionsInRange = transactions.between(pastDate + oneDay, futureDate);

    transactionsInRange.forEach( function(transaction) {
      var cashFlow = transaction.price * transaction.quantity;

      portfolio.assets[transaction.symbol] = portfolio.assets[transaction.symbol] || {shares: 0, costBasis: 0};

      if (transaction.type === 'BUY') {
        portfolio.assets['CASH'].quantity -= cashFlow;
        portfolio.assets[transaction.symbol].shares += transaction.quantity
        portfolio.assets[transaction.symbol].costBasis += cashFlow;
      } else {
        portfolio.assets['CASH'].quantity += cashFlow;
        portfolio.assets[transaction.symbol].shares -= transaction.quantity
        portfolio.assets[transaction.symbol].costBasis -= cashFlow;
      };
    });
  };


  // for moving backward in time
  portfolio.buildDown = function(futureDate, pastDate) {
    var oneDay = 1000*60*60*24;
    var transactionsInRange = transactions.between(pastDate, futureDate - oneDay);

    transactionsInRange.forEach( function(transaction) {
      var cashFlow = transaction.price * transaction.quantity;

      portfolio.assets[transaction.symbol] = portfolio.assets[transaction.symbol] || {shares: 0, costBasis: 0};

      if (transaction.type === 'SELL') {
        portfolio.assets['CASH'].quantity -= cashFlow;
        portfolio.assets[transaction.symbol].shares += transaction.quantity
        portfolio.assets[transaction.symbol].costBasis += cashFlow;
      } else {
        portfolio.assets['CASH'].quantity += cashFlow;
        portfolio.assets[transaction.symbol].shares -= transaction.quantity
        portfolio.assets[transaction.symbol].costBasis -= cashFlow;
      };
    });
  }


  return portfolio;

}]);