app.factory('TradeService', [function() {
  var TradeService = {};
  var _tradeInfo = {
    trade: {},
    user: {
      id: 1,
      username: '',
      owned: {},
      cashAvailable: 10000,
    }
  };

  TradeService.placeOrder = function (trade) {
    _tradeInfo.trade = trade;

    var symbol = trade.formData.symbol;
    var owned = _tradeInfo.user.owned;

    // Increment/set quantity of owned stocks for that symbol.
    switch (trade.type) {
      case 'buy':
        if (trade.formData.cost > _tradeInfo.user.cashAvailable) {
          throw new Error("Invalid purchase! Can't buy more than you can afford!");
        }
        if (owned[symbol]) {
          owned[symbol].quantity += trade.formData.quantity;
        } else {
          _tradeInfo.user.owned[symbol] = {
            quantity: trade.formData.quantity
          };
        }
        break;
      case 'sell':
        if (owned[symbol]) {
          owned[symbol].quantity -= trade.formData.quantity;
          if (owned[symbol].quantity - trade.formData.quantity <= 0) {
            delete owned[symbol];
          }
        } else {
          throw new Error("Invalid sale! Cannot sell what you don't own.");
        }
    }


    _tradeInfo.user.cashAvailable -= trade.formData.cost;
  };

  TradeService.setUserData = function (trade) {
    trade.user = _tradeInfo.user;
  };

  return TradeService;
}]);
