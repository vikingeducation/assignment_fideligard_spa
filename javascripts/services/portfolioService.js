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

  exports.newTrade = function(symbol, quantity, dateString, buyOrSell) {
    console.log(symbol, quantity, dateString, buyOrSell);
    var id = nextId();
    var price = stockService.dates[dateString][symbol].closing;
    var cost = price * quantity;
    var trade = {
      id: id,
      date: dateString,
      symbol: symbol,
      buyOrSell: buyOrSell,
      quantity: quantity,
      price: Number(price),
      cost: cost,
    };

    // TODO: validate that trade is possible

    exports.trades.byId[id] = trade;
    exports.trades.byDate[dateString] = exports.trades.byDate[dateString] || [];
    exports.trades.byDate[dateString].push(id);

    if (buyOrSell === "buy") {
      exports.resources[dateString].cash -= cost;
      if (!exports.resources[dateString][symbol]) {
        exports.resources[dateString][symbol] = quantity;
      } else {
        exports.resources[dateString][symbol] += quantity;
      }
    } else if (buyOrSell === "sell") {
      exports.resources[dateString].cash += cost;
      exports.resources[dateString][symbol] -= quantity;
    } else {
      console.warn("buyOrSell invalid");
    }

    console.log(exports.trades);
    console.log(exports.resources);

    return trade;
  };

  // var jan2String = new Date('1-2-2016').toDateString();
  // exports.newTrade('AAPL', 50, jan2String, 'buy');

  return exports;
}]);
