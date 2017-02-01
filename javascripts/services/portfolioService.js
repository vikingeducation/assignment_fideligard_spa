fideligard.factory('portfolioService', ['stockService', function(stockService) {
  var exports = {};
  var _id = -1;
  var nextId = function() {
    _id += 1;
    return _id;
  };

  var jan1String = new Date('1-1-2016').toDateString();
  exports.resources = {};
  exports.resources[jan1String] = {
    cash: 10000
  };
  exports.trades = {
    byId: {},
    byDate: {},
  };

  var walkDates = function(startDateString, endDateString, callback) {
    var startDate = new Date(startDateString);
    var endDate = new Date(endDateString);
    var current = new Date(startDate);
    var dateString;
    while (current < endDate) {
      dateString = current.toDateString();
      callback(dateString);
      current = new Date(current.setDate(current.getDate() + 1));
    }
  };

  // initialize dates
  walkDates("Jan 01 2016", "Dec 31 2016", function(dateString) {
    exports.resources[dateString] = {
      cash: 10000
    };
    exports.trades.byDate[dateString] = [];
  });

  exports.newTrade = function(symbol, quantity, dateString, buyOrSell) {
    var id = nextId();
    var price = stockService.dates[dateString][symbol].closing;
    var cost = price * quantity;
    var trade = {
      id: id,
      date: dateString,
      symbol: symbol,
      buyOrSell: buyOrSell,
      quantity: buyOrSell === "buy" ? quantity : -quantity,
      price: Number(price),
      cash: buyOrSell === "buy" ? -cost : cost,
    };

    // TODO: validate that trade is possible

    // initialize storage
    exports.trades.byId[id] = trade;
    exports.trades.byDate[dateString] = exports.trades.byDate[dateString] || [];
    exports.trades.byDate[dateString].push(id);

    // apply cash and stock deltas to the future
    walkDates(dateString, "Dec 31 2016", function(dateString) {
      exports.resources[dateString].cash += trade.cash;
      exports.resources[dateString][symbol] = exports.resources[dateString][symbol] || 0;
      exports.resources[dateString][symbol] += trade.quantity;
    });

    return trade;
  };

  return exports;
}]);
