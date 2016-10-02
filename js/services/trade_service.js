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

  TradeService.placeOrder = function (trade) {
    _tradeInfo.tradeData = trade.formData;
    _tradeInfo.user = trade.user;

    // Increment/set quantity of owned stocks for that symbol.
    switch (trade.formData.type) {
      case 'buy':
        if (_tradeInfo.tradeData.cost > _tradeInfo.user.cashAvailable) {
          throw new Error("Invalid purchase! Can't buy more than you can afford!");
        }
        if (_tradeInfo.user.owned[_tradeInfo.tradeData.symbol]) {
          _tradeInfo.user.owned[_tradeInfo.tradeData.symbol].quantity += _tradeInfo.tradeData.quantity;
          _tradeInfo.user.owned[_tradeInfo.tradeData.symbol].latestStock = _tradeInfo.tradeData.date;
        } else {
          _tradeInfo.user.owned[_tradeInfo.tradeData.symbol] = {
            quantity: _tradeInfo.tradeData.quantity,
            latestStock: _tradeInfo.tradeData.date
          };
          console.log(_tradeInfo.user.owned);
        }
        break;
      case 'sell':
        if (tradeInfo.user.owned[_tradeInfo.tradeData.symbol]) {
          tradeInfo.user.owned[_tradeInfo.tradeData.symbol].quantity -= _tradeInfo.tradeData.quantity;
          if (tradeInfo.user.owned[_tradeInfo.tradeData.symbol].quantity - _tradeInfo.tradeData.quantity <= 0) {
            delete tradeInfo.user.owned[_tradeInfo.tradeData.symbol];
          }
        } else {
          throw new Error("Invalid sale! Cannot sell what you don't own.");
        }
        break;
    }


    _tradeInfo.user.cashAvailable -= _tradeInfo.tradeData.cost;
  };

  TradeService.setUserData = function (trade) {
    trade.user = _tradeInfo.user;
  };

  TradeService.getLatestStock = function (symbol) {
    if (_tradeInfo.user.owned[symbol]) {
      return _tradeInfo.user.owned[symbol].latestStock;
    }
  };

  return TradeService;
}]);
