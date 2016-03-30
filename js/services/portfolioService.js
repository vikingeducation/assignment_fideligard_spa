financialApp.factory( 'portfolioService', [ 'stockService', 'dateService', function( stockService, dateService ) {

  var _transactions = {
    "2014-04-23": {
      "AAPL": {
        buysell: "buy",
        quantity: 1
      }
    },
    "2014-04-24": {
      "AAPL": {
        buysell: "buy",
        quantity: 1
      }
    },
    "2014-04-25": {
      "AAPL": {
        buysell: "sell",
        quantity: 1
      }
    }
  };

  // Portfolio with aggregated stats and per-stock stats
  var _portfolio = {
    cash: 100000,
    currentValue: 0,
    profitLoss: 0,
    costBasis: 0,
    oneDayAgo: 0,
    oneWeekAgo: 0,
    oneMonthAgo: 0,
    stocks: {},
  };

  var getTransactions = function() {
    return _transactions;
  };

  var addTransaction = function( date, symbol, quantity, buysell ) {
    _transactions[date] = _transactions[date] || {};
    _transactions[date][symbol] = { quantity: quantity, buysell: buysell }
  };

  var removeTransaction = function() {

  };

  // Finds the portfolio at the current date
  var setPortfolio = function() {

    resetAggregateStats();

    var stockData = stockService.getStockData();
    var dateInfo = dateService.getDateInfo();
    var startDate = dateInfo.startDate;
    var dateRange = dateService.findDateRange( dateInfo.startDate, dateInfo.currentDate );

    for ( var dateOffset = 0; dateOffset <= dateRange; dateOffset++ ) {
      var date = dateService.offsetDate( startDate, dateOffset );
      var dateString = dateService.dateToString( date );
      if ( _transactions[dateString] ) {
        var transactions = _transactions[dateString];
        for ( symbol in transactions ) {

          resetIndividualStats(symbol);

          var price = stockData[dateString][symbol].price;
          var quantity = transactions[symbol].quantity
          var sign = transactions[symbol].buysell === "buy" ? 1 : -1;

          adjustIndividualStats(symbol, price, quantity, sign);

          adjustAggregateStats(price,quantity,sign);

        }
      }
    }
  }

  var resetIndividualStats = function(symbol) {
    _portfolio.stocks[symbol] = _portfolio.stocks[symbol] || {
      quantity: 0,
      costBasis: 0,
      profitLoss: 0,
      oneDayAgo: 0,
      oneWeekAgo: 0,
      oneMonthAgo: 0,
    }
  };

  var resetAggregateStats = function() {
    _portfolio.cash = 100000;
    _portfolio.currentValue = 0;
    _portfolio.profitLoss = 0;
    _portfolio.costBasis = 0;
    _portfolio.oneDayAgo = 0;
    _portfolio.oneWeekAgo = 0;
    _portfolio.oneMonthAgo = 0;
    _portfolio.stocks = {};
  };

  var adjustIndividualStats = function(symbol, price, quantity, sign) {
    // Individual Stats
    _portfolio.stocks[symbol].quantity += quantity * sign;
    _portfolio.stocks[symbol].profitLoss -= price * quantity * sign;
    _portfolio.stocks[symbol].costBasis += price * quantity * sign;
  }

  var adjustAggregateStats = function(price, quantity, sign) {
    // Aggregate Stats
    _portfolio.cash -= price * quantity * sign;
    _portfolio.profitLoss -= price * quantity * sign;
    _portfolio.costBasis += price * quantity * sign;
  }

  // Gets the portfolio at the current date
  var getPortfolio = function() {
    return _portfolio;
  }

  return {
    addTransaction: addTransaction,
    getTransactions: getTransactions,
    setPortfolio: setPortfolio,
    getPortfolio: getPortfolio,
  };

}]);
