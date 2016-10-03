app.factory('PortfolioService',
['StockService', function(StockService) {

  var PortfolioService = {};

  function _currentValue (stock) {
    return stock.quantity * stock.price;
  }

  // Total Cost Basis.
  function _totalCost (type, operator) {
    return function (symbol, portfolio, endDate) {
      return _.reduce(
        portfolio,
        function(m,v) {
          if (v.type === type && v.date <= endDate) {
            return operator(m,v.cost);
          } else {
            return m;
          }
        }
      );
    };
  }

  var _totalSaleGain = _totalCost('sell',_.subtract);
  var _totalBuyLoss = _totalCost('buy',_.add);

  function _totalCostBasis (symbol, portfolio, endDate) {
    return _.subtract(
      _totalSaleGain(symbol, portfolio, endDate),
      _totalBuyLoss(symbol, portfolio, endDate)
    );
  }

  function _profitLoss (stock, symbol, portfolio, endDate) {
    return _.subtract(
      _currentValue(stock),
      _totalCostBasis(stock, symbol, portfolio, endDate)
    );
  }

  function _getAgo (currDate, field, symbol, portfolioData) {
    return StockService.getPrevious(currDate, field, symbol, portfolioData);
  }

  PortfolioService.computize = function(data) {
    var computized = {
      currentValue: _currentValue(data.stock),
      totalCostBasis: _totalCostBasis(data.symbol, data.portfolio, data.endDate),
      profitLoss: _profitLoss(data.stock, data.symbol, data.portfolio, data.endDate),
      getAgo: _getAgo(data.endDate, data.field, data.symbol, data),
      oneDayAgo: computized.getAgo(1),
      sevenDaysAgo: computized.getAgo(7),
      thirtyDaysAgo: computized.getAgo(30)
    };

    return computized;
  };

  return PortfolioService;

}]);
