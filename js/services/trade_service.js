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
        // If he owns stock for that day.
        if (_tradeInfo.user.owned[_tradeInfo.tradeData.date]) {
          // If he owns stock for that symbol.
          if (_tradeInfo.user.owned[_tradeInfo.tradeData.symbol]) {
            _tradeInfo.user.owned[_tradeInfo.tradeData.date][_tradeInfo.tradeData.symbol].quantity += _tradeInfo.tradeData.quantity;
          } else {
            _tradeInfo.user.owned[_tradeInfo.tradeData.date][_tradeInfo.tradeData.symbol] = {
              quantity: _tradeInfo.tradeData.quantity
            };
          }
        // Otherwise, initialize the objects.
        } else {
          _tradeInfo.user.owned[_tradeInfo.tradeData.date] = {};
          _tradeInfo.user.owned[_tradeInfo.tradeData.date][_tradeInfo.tradeData.symbol] = {
            quantity: _tradeInfo.tradeData.quantity
          };
        }

        // if (_tradeInfo.user.owned[_tradeInfo.tradeData.symbol]) {
        //   _tradeInfo.user.owned[_tradeInfo.tradeData.symbol].quantity += _tradeInfo.tradeData.quantity;
        //   _tradeInfo.user.owned[_tradeInfo.tradeData.symbol].latestStock = _tradeInfo.tradeData.date;
        // } else {
        //   _tradeInfo.user.owned[_tradeInfo.tradeData.symbol] = {
        //     quantity: _tradeInfo.tradeData.quantity,
        //     latestStock: _tradeInfo.tradeData.date
        //   };
        //   console.log(_tradeInfo.user.owned);
        // }
        break;
      case 'sell':
        // If he owns stock for that day
        if (_tradeInfo.user.owned[_tradeInfo.tradeData.date]) {
          // If he owns stock for that symbol
          if (_tradeInfo.user.owned[_tradeInfo.tradeData.date][_tradeInfo.tradeData.symbol]) {
            _tradeInfo.user.owned[_tradeInfo.tradeData.date][_tradeInfo.tradeData.symbol].quantity -= _tradeInfo.tradeData.quantity;
            if (_tradeInfo.user.owned[_tradeInfo.tradeData.date][_tradeInfo.tradeData.symbol].quantity <= 0) {
              delete _tradeInfo.user.owned[_tradeInfo.tradeData.date][_tradeInfo.tradeData.symbol];
            }
            if (_.isEmpty(_tradeInfo.user.owned[_tradeInfo.tradeData.date])) {
              delete _tradeInfo.user.owned[_tradeInfo.tradeData.date];
            }
          }
        }
        break;
    }


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
