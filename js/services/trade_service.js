app.factory('TradeService', [function() {
  var TradeService = {};
  var _tradeInfo = {
    tradeData: {},
    user: {
      id: 1,
      username: '',
      owned: {},
      cashAvailable: 10000,
    },
  };

  // Helpers for _adjustQuant.
  function _buy (tradeInfo, date, symbol, tradeQuant) {
    // If he owns stock for that day.
    if (tradeInfo.user.owned[date]) {
      // If he owns stock for that symbol.
      if (tradeInfo.user.owned[symbol]) {
        tradeInfo.user.owned[date][symbol].quantity += tradeQuant;
      } else {
        tradeInfo.user.owned[date][symbol] = {
          quantity: tradeQuant
        };
      }
    // Otherwise, initialize the objects.
    } else {
      tradeInfo.user.owned[date] = {};
      tradeInfo.user.owned[date][symbol] = {
        quantity: tradeQuant
      };
    }
  }

  function _sell (tradeInfo) {
    // If he owns stock for that day
    if (tradeInfo.user.owned[date]) {
      // If he owns stock for that symbol
      if (tradeInfo.user.owned[date][symbol]) {
        tradeInfo.user.owned[date][symbol].quantity -= tradeQuant;
        if (tradeInfo.user.owned[date][symbol].quantity <= 0) {
          delete tradeInfo.user.owned[date][symbol];
        }
        if (_.isEmpty(tradeInfo.user.owned[date])) {
          delete tradeInfo.user.owned[date];
        }
      }
    }
  }

  // Increment/set quantity of owned stocks for that symbol.
  function _adjustQuant (tradeInfo, trade) {
    switch (trade.formData.type) {
      case 'buy':
        if (tradeInfo.tradeData.cost > tradeInfo.user.cashAvailable) {
          throw new Error("Invalid purchase! Can't buy more than you can afford!");
        }

        var date = tradeInfo.tradeData.date;
        var symbol = tradeInfo.tradeData.symbol;
        var tradeQuant = tradeInfo.tradeData.quantity;

        _buy(tradeInfo, date, symbol, tradeQuant);
        break;
      case 'sell':
        _sell(tradeInfo);
        break;
    }
  }

  TradeService.placeOrder = function (trade) {
    _tradeInfo.tradeData = trade.formData;
    _tradeInfo.user = trade.user;
    _adjustQuant(_tradeInfo, trade);
    _tradeInfo.user.cashAvailable -= _tradeInfo.tradeData.cost;
  };

  TradeService.setUserData = function (trade) {
    trade.user = _tradeInfo.user;
  };

  TradeService.getLatestStock = function (symbol) {
    // owned obj organized by date, then symbol.
    var latestDate = _.max(Object.keys(_tradeInfo.user.owned));
    if (latestDate && _tradeInfo.user.owned[latestDate][symbol]) {
      return latestDate;
    }
  };

  return TradeService;
}]);
