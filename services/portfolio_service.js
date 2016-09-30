Fideligard.factory('portfolioService', [function() {

  var _portfolio = {};
  var _cash = {amount: 100000};

  var updateCash = function(cost) {
    _cash.amount += cost;
  };

  portfolio = {};

  portfolio.makeTrade = function(sym, amt, cost) {
    if (_portfolio[sym]) {
      _portfolio[sym] += amt;
      updateCash(cost);
    } else {
      _portfolio[sym] = amt
      updateCash(cost);
    }
  };

  portfolio.validTrade = function(sym, amt, cost, type) {
    if (type === 'buy') {
      if (cost < _cash.amount) {
        return true;
      }
    } else if (type === 'sell') {
      if (_portfolio[sym] && _portfolio[sym] >= amt)
        return true;
    }
    return false;
  }

  portfolio.getPortfolio = function() {
    return _portfolio
  };

  portfolio.getCash = function() {
    return _cash;
  };

  return portfolio;

}])