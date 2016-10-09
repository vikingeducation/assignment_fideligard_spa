app.factory('portfolioService', 
  ['stockService',
  function(stockService) {
  /* transactions = {
   [{stock objects with symbol,price, quantity, and action}]   
  }
  */

  /* portfolio = {
    date: {
    stockSymbol: {
        stuff
      }
    }
  }
  */
  var _stocks = stockService.getCurrentStocks();

  var _transactions = [];
  var _portfolio = {};

  var stub = {};

  // stub.evalCurrentValue = function(date) {
  //   var value = startingBalance;
  //   _transactions.forEach( function(el) {
  //     // filtering date
  //     if (el.date < date) {
  //       // if buy, if sell
  //       if (el.action === 'Buy') {
  //         value -= el.quanitity * el.price;
  //       } else {
  //         value += el.quanitity * el.price;
  //       }
  //     } else {
  //       console.log("you have done nothing yet.");
  //     }
  //   });
  // };

  // same as current val without the subtract.
  stub.evalTotCostBasis = function(date) {
    var value = 0;
    _transactions.forEach( function(el) {
      // filtering date
      if (el.date < date) {
        // if buy, if sell
        if (el.action === 'Buy') {
          value += el.quanitity * el.price;
        }
      } else {
        console.log("you have not bought anything yet.");
      }
    });
    return value;

  };

  stub.evalTotNetGain = function(date) {
    var value = 0;

    for (var stock in _portfolio[date]) {
      var dayPrice = _stocks[stock.symbol][2014].days[stockService.getDay()].Open;

      value += stock.total + dayPrice * (stock.buy - stock.sell);
    }
    return value;
  };

  stub.createPortfolio = function(date) {
    _portfolio[date] = {};

    _transactions.forEach( function(el) {
      if (el.date <= date) {
        // creates a portfolio object with an date object to respresent portfolio at [_] date. then include all stock symbol objects in that date object to respresent the entire portfolio of stocks
        if (!_portfolio[date][el.symbol]) {
          _portfolio[date][el.symbol] = {
            buy: 0,
            sell: 0,
            total: 0,
            basis: 0
          };
        }

        _portfolio[date][el.symbol].symbol = el.symbol;
        // if buy, subtract total.
        // if sell, add total.
        // if you have bought more than sold, your total will be in the negative zone.
        // later, we will add the current value of the remaining(buy-sell) stocks and see if the output is +/- to observe net gain
        if (el.action === "Buy") {
         _portfolio[date][el.symbol].buy += el.quantity;
         _portfolio[date][el.symbol].total -= el.quantity * el.price;

          //to calculate cost basis
          _portfolio[date][el.symbol].basis += el.quantity * el.price;
        } else {
          _portfolio[date][el.symbol].sell += el.quantity;
          _portfolio[date][el.symbol].total += el.quantity * el.price;
        }
      }
    });
  };

  stub.getPortfolio = function() {
    return _portfolio;
  };

  stub.addTransaction = function(stockObject) {
    var newStock = {
      date: stockObject.date,
      symbol: stockObject.symbol,
      price: stockObject.price,
      quantity: stockObject.quantity,
      action: stockObject.action
    };
    _transactions.push(newStock);
    // if (_transactions[stockObject.date]) {
    //   _transactions[stockObject.date].push(newStock);
    // } else {
    // _transactions[stockObject.date] = [newStock];
    // }
  };

  stub.getTransactions = function () {
    return _transactions;
  }; 

  return stub;
}]);