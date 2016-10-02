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

    // Increment/set quantity of owned stocks for that symbol.
    if (_tradeInfo.user.owned[trade.formData.symbol]) {
      _tradeInfo.user.owned[trade.formData.symbol].quantity += trade.formData.quantity;
    } else {
      _tradeInfo.user.owned[trade.formData.symbol] = {
        quantity: trade.formData.quantity
      };
    }

    _tradeInfo.user.cashAvailable -= trade.formData.cost;
    console.log(_tradeInfo);
  };

  TradeService.setUserData = function (trade) {
    trade.user = _tradeInfo.user;
  };

  return TradeService;
}]);
