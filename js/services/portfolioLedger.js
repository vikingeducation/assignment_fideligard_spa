var SEED_TRANSACTIONS = [
  {
    date: new Date('3-10-2014'),
    symbol: "AAPL",
    type: "Buy",
    quantity: 20,
    price: 530.92
  },
  {
    date: new Date('3-15-2014'),
    symbol: "AAPL",
    type: "Sell",
    quantity: 5,
    price: 524.69
  },
  {
    date: new Date('5-1-2014'),
    symbol: "GOOG",
    type: "Buy",
    quantity: 100,
    price: 531.35
  }
];

simulator.factory('portfolioLedger', ['dateHelper', 'stockPrices', '$filter', 
  function(dateHelper, stockPrices, $filter){

  var _startingBalance = 200000;
  var _transactions = SEED_TRANSACTIONS;

  var addTransaction = function(transaction){
    return new Promise(
      function(resolve){
        resolve(_transactions.push(transaction));
      }
    );
  };

  var getTransactions = function(){
    return _transactions;
  };

  // cashOnHand and quantityOnHand mostly used for trade validations
  var cashOnHand = function(date){
    var cash = _startingBalance;
    var transactions;

    if (date){
      workingSet = _upToDate(date, _transactions);
    } else {
      workingSet = _transactions;
    }

    workingSet.forEach(function(trs){
      if (trs.type == "Buy"){
        cash -= trs.price * trs.quantity;
      } else {
        cash += trs.price * trs.quantity;
      }
    });

    return cash;
  };

  var quantityOnHand = function(symbol, date){
    var quantity = 0;
    var transactions;

    if (date){
      workingSet = _upToDate(date, _transactions);
    } else {
      workingSet = _transactions;
    }

    workingSet.forEach(function(trs){
      if (trs.symbol == symbol) {      
        if (trs.type == "Buy"){
          quantity += trs.quantity;
        } else {
          quantity -= trs.quantity;
        }
      }
    });

    return quantity;
  };

  // main method building the data returned to the portfolio controller
  // get our current portfolio value, stock information, and "history"
  // used for the 1, 7, and 30 day comparison of the portfolio's value
  var portfolioForDate = function(date){
    var stocks = _stocksForDate(date);
    var ledger = _aggregate(stocks);
    ledger.cashOnHand = cashOnHand(date);
    ledger.stocks = stocks;

    ledger.history = {
      'day1': _stocksForDate( dateHelper.addDays(date, -1) ), 
      'day7': _stocksForDate( dateHelper.addDays(date, -7) ), 
      'day30': _stocksForDate( dateHelper.addDays(date, -30) ),
    };

    Object.keys(ledger.history).forEach(function(day){
      var aggregateForDay = _aggregate(ledger.history[day]);
      ledger.history[day].diff = ledger.currentValue -  aggregateForDay.currentValue;
    });
    return ledger;
  };

  var _stocksForDate = function(date){
    // building the stocks table for the portfolio page, sanitize the date
    // filter transactions up to the selected date, use a object (stocksDict)
    // initially for easy search but return an array so angular can sort
    var bDate = new Date(date);
    var fTransactions = _upToDate(bDate, _transactions);
    var stocksDict = {}; 
    var stocks = [];

    fTransactions.forEach(function(trs){
      // check the Dict for that symbol, create if it doesn't exist
      if (!stocksDict[trs.symbol]) {
        stocksDict[trs.symbol] = {
          totalSpent: 0,
          totalEarned: 0,
          quantity: 0
        };
      }

      if (trs.type == 'Buy') {
        stocksDict[trs.symbol].totalSpent += trs.price * trs.quantity;
        stocksDict[trs.symbol].quantity += trs.quantity;
      } else { // 'Sell order'
        stocksDict[trs.symbol].totalEarned += trs.price * trs.quantity;
        stocksDict[trs.symbol].quantity -= trs.quantity;        
      }
    });

    // iterate through each key of the Dict, building up the needed data
    // push onto the stocks array when complete
    Object.keys(stocksDict).forEach(function(symbol){
      var sym = stocksDict[symbol];
      var history = stockPrices.symbolHistory(symbol, bDate);

      sym.symbol = symbol;
      sym.price = history.price;
      sym.costBasis = sym.totalSpent - sym.totalEarned;
      sym.currentValue = sym.price * sym.quantity;
      sym.pnl = sym.currentValue - sym.costBasis;
      sym.day1 = sym.currentValue - ((sym.price - history.day1.diff) * sym.quantity);
      sym.day7 = sym.currentValue - ((sym.price - history.day7.diff) * sym.quantity);
      sym.day30 = sym.currentValue - ((sym.price - history.day30.diff) * sym.quantity);
    
      stocks.push(sym);
    });

    return stocks;
  };

  // building data used in the top part of the portfolio page, 
  // the portfolio's value based on iterating through the "stocks"
  // array produced above
  var _aggregate = function(stocks){
    var aggregate = {
      costBasis: 0,
      currentValue: 0,
      pnl: 0,
    };

    stocks.forEach(function(stock){
      aggregate.costBasis += stock.costBasis;
      aggregate.currentValue += stock.currentValue;
      aggregate.pnl += stock.pnl;
    });

    return aggregate;
  };

  var _upToDate = function(date, arr){
    return arr.filter(function(elem){
      return elem.date <= date;
    });
  };


  return {
    addTransaction: addTransaction,
    getTransactions: getTransactions,
    portfolioForDate: portfolioForDate,
    cashOnHand: cashOnHand,
    quantityOnHand: quantityOnHand,
  };

}]);