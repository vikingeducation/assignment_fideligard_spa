fideligard.factory('portfolio',
  ['transactions',
  function(transactions) {

  var portfolio = {};

  portfolio.all = {'AAPL': 8};
  portfolio.cash = 5000;
  portfolio.assets = {'CASH': { shares: 5000} };


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


  portfolio.reset = function() {
    console.log('resetting');
    portfolio.assets = {'CASH': { shares: 5000} };
  };


  // for moving forward in time
  portfolio.buildUp = function(futureDate, pastDate) {
    portfolio.reset();
    var oneDay = 1000*60*60*24;
    var transactionsInRange = transactions.between(pastDate + oneDay, futureDate);

    transactionsInRange.forEach( function(transaction) {
      var cashFlow = transaction.price * transaction.quantity;

      portfolio.assets[transaction.symbol] = portfolio.assets[transaction.symbol] || {shares: 0, cashInvested: 0, cashProceeds: 0};

      if (transaction.type === 'BUY') {
        portfolio.assets['CASH'].shares -= cashFlow;
        portfolio.assets[transaction.symbol].shares += transaction.quantity;
        portfolio.assets[transaction.symbol].cashInvested += cashFlow;
        //portfolio.assets[transaction.symbol].costBasis += cashFlow;
      } else {
        portfolio.assets['CASH'].shares += cashFlow;
        portfolio.assets[transaction.symbol].shares -= transaction.quantity;
        portfolio.assets[transaction.symbol].cashProceeds += cashFlow;
        //portfolio.assets[transaction.symbol].costBasis -= cashFlow;
      };
    });
  };


  portfolio.present = function() {
    output = []
    for (var symbol in portfolio.assets) {
      output.push( portfolio.generate(symbol, portfolio.assets[symbol]) );
    };
    return output
  };


  portfolio.generate = function(symbol, data) {
    return {
      symbol: symbol,
      quantity: data.shares,
      costBasis: data.cashInvested - data.cashProceeds,
      currentValue: function() { return this.quantity * this.currentPrice },
      profit: function() { return this.currentValue() - this.costBasis },
      currentPrice: 1, // used for cash
      priceChange1day: null,
      priceChange7day: null,
      priceChange30day: null
    }
  };


  // for moving backward in time
  /*portfolio.buildDown = function(futureDate, pastDate) {
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
  }*/


  return portfolio;

}]);