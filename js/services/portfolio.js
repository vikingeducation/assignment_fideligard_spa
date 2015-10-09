fideligard.factory('portfolio', function() {

  var portfolio = {};

  portfolio.all = {'AAPL': 8};

  portfolio.currentShares = function(symbol) {
    return portfolio.all[symbol];
  };

  return portfolio;

});