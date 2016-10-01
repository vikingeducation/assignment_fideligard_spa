app.factory('TradeService', [function() {
  var TradeService = {};
  var _tradeInfo = {};

  TradeService.placeOrder = function (trade) {
    _tradeInfo.trade = trade;
    console.log(_tradeInfo);
  };

  return TradeService;
}]);
