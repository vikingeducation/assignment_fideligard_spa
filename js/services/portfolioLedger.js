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

  var buildForDate = function(date){
    var bDate = new Date(date);
    var fTransactions = _upToDate(bDate, _transactions);
    var portfolio = {};

    fTransactions.forEach(function(trs){
      // create obj for symbol if it doesn't exist
      if (!portfolio[trs.symbol]) {
        portfolio[trs.symbol] = {
          totalSpent: 0,
          totalEarned: 0,
          quantity: 0
        };
      }

      if (trs.type == 'Buy') {
        portfolio[trs.symbol].totalSpent += trs.price * trs.quantity;
        portfolio[trs.symbol].quantity += trs.quantity;
      } else { // 'Sell order'
        portfolio[trs.symbol].totalEarned += trs.price * trs.quantity;
        portfolio[trs.symbol].quantity -= trs.quantity;        
      }
    });

    Object.keys(portfolio).forEach(function(symbol){
      var sym = portfolio[symbol];
      var history = stockPrices.symbolHistory(symbol, bDate);

      sym.price = history.price;
      sym.costBasis = sym.totalSpent - sym.totalEarned;
      sym.currentValue = sym.price * sym.quantity;
      sym.day1 = sym.currentValue + (sym.price - history.day1.diff * sym.quantity);
      sym.day7 = sym.currentValue + (sym.price - history.day7.diff * sym.quantity);
      sym.day30 = sym.currentValue + (sym.price - history.day30.diff * sym.quantity);
    });

    return portfolio;
  };

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

  var _upToDate = function(date, arr){
    return arr.filter(function(elem){
      return elem.date <= date;
    });
  };


  return {
    addTransaction: addTransaction,
    getTransactions: getTransactions,
    buildForDate: buildForDate,
    cashOnHand: cashOnHand,
    quantityOnHand: quantityOnHand,
  };

}]);