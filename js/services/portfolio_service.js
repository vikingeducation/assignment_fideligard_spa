app.factory('PortfolioService',
['StockService', function(StockService) {

  var PortfolioService = {};
  var _computizedInfo = {};

  function _currentValue (stock) {
    return stock.quantity * parseFloat(stock.price);
  }

  // Total Cost Basis.
  function _totalCost (type, operator) {
    return function (symbol, portfolio, endDate) {
      return _.reduce(
        portfolio,
        function(m,v) {
          // Check date validator to see how dates are compared.
          if (v.type === type && v.date <= endDate) {
            return operator(m,v.cost);
          } else {
            return m;
          }
        },0
      );
    };
  }

  var _totalSaleGain = _totalCost('sell',_.add);
  var _totalBuyLoss = _totalCost('buy',_.add);

  // var _totalSaleGain = _totalCost('sell',_.subtract);
  // var _totalBuyLoss = _totalCost('buy',_.add);

  function _totalCostBasis (symbol, portfolio, endDate) {
    var a = _totalSaleGain(symbol, portfolio, endDate);
    var b = _totalBuyLoss(symbol, portfolio, endDate);
    return _.subtract(
      _totalSaleGain(symbol, portfolio, endDate),
      _totalBuyLoss(symbol, portfolio, endDate)
    );
  }

  function _profitLoss (stock, symbol, portfolio, endDate) {
    return _.subtract(
      _currentValue(stock),
      _totalCostBasis(symbol, portfolio, endDate)
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
    };

    _computizedInfo.computized = computized;

    computized.oneDayAgo = computized.getAgo(1);
    computized.sevenDaysAgo = computized.getAgo(7);
    computized.thirtyDaysAgo = computized.getAgo(30);

    return _computizedInfo;
  };

  return PortfolioService;

}]);
