app.factory('TradeService', [function() {
  var TradeService = {};
  var _tradeInfo = {
    tradeData: {},
    user: {
      id: 1,
      username: '',
      owned: {},
      transactions: {},
      cashAvailable: 10000,
    },
  };
  var _transactionId;

  // Helpers for _adjustQuant.
  function _buy (tradeInfo, date, symbol, tradeQuant) {
    // If he owns stock for that day.
    if (tradeInfo.user.owned[date]) {
      // If he owns stock for that symbol.
      if (tradeInfo.user.owned[date][symbol]) {
        tradeInfo.user.owned[date][symbol].quantity += tradeQuant;
      } else {
        tradeInfo.user.owned[date][symbol] = {
          quantity: tradeQuant,
          type: tradeInfo.tradeData.type,
          price: tradeInfo.tradeData.price
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

  function _sell (tradeInfo, date, symbol, tradeQuant) {
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
      } else {
        throw new Error("You can't sell what you don't own!!");
      }
    }
  }

  // Increment/set quantity of owned stocks for that symbol.
  function _adjustQuant (tradeInfo, trade) {
    var date = tradeInfo.tradeData.date;
    var symbol = tradeInfo.tradeData.symbol;
    var tradeQuant = tradeInfo.tradeData.quantity;

    switch (trade.formData.type) {
      case 'buy':
        if (tradeInfo.tradeData.cost > tradeInfo.user.cashAvailable) {
          throw new Error("Invalid purchase! Can't buy more than you can afford!");
        }
        _buy(tradeInfo, date, symbol, tradeQuant);
        _tradeInfo.user.cashAvailable -= _tradeInfo.tradeData.cost;
        break;
      case 'sell':
        _sell(tradeInfo, date, symbol, tradeQuant);
        _tradeInfo.user.cashAvailable += _tradeInfo.tradeData.cost;
        break;
    }
  }

  function _nextTransactionId() {
    if (!_transactionId) {
      _transactionId = 0;
    }
    var nextId = _transactionId + 1;
    return nextId;
  }

  function _addTransaction (tradeInfo) {
    var nextId = _nextTransactionId();
    tradeInfo.user.transactions[nextId] = {};
    angular.copy(tradeInfo.tradeData,tradeInfo.user.transactions[nextId]);
    tradeInfo.user.transactions[nextId].id = nextId;
    _transactionId++;
  }

  TradeService.placeOrder = function (trade) {
    _tradeInfo.tradeData = trade.formData;
    _tradeInfo.user = trade.user;
    _adjustQuant(_tradeInfo, trade);
    _addTransaction(_tradeInfo);
  };

  TradeService.setUserData = function (trade) {
    trade.user = _tradeInfo.user;
  };

  TradeService.getLatestStock = function (symbol) {
    // owned obj organized by date, then symbol.
    var latestDate = _.max(Object.keys(_tradeInfo.user.owned));
    if (latestDate && _tradeInfo.user.owned[latestDate][symbol]) {
      return new Date(latestDate);
    }
  };

  TradeService.getTransactions = function () {
    return _tradeInfo.user.transactions;
  };

  TradeService.getOwnedStocks = function () {
    return _tradeInfo.user.owned;
  };

  return TradeService;
}]);
