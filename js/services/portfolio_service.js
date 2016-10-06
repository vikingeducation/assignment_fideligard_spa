app.factory('PortfolioService',
['StockService', 'DateService', function(StockService, DateService) {

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

  function _totalCostBasis (symbol, portfolio, endDate) {
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

  function _getAgo (currDate, field, symbol) {
    return StockService.getPrevious(currDate, field, symbol, true);
  }

  // Finding transactions from previous days.
  function _compareDates(vDate, pDate) {
    var vStr = DateService.stringifyDate(vDate);
    var pStr = DateService.stringifyDate(pDate);
    return vStr === pStr;
  }

  function _findPrev(daysAgo,transactions,date,symbol) {
    var strDate = DateService.stringifyDate(date);
    var prevDate = _getAgo(strDate,'Close',symbol);
    return _.find(
      transactions,
      function(v,k) {
        var previous = prevDate(daysAgo)();
        return _compareDates(v.date,previous);
      }
    );
  }

  function _gatherPrevious(transactions) {
    return _.map(
      transactions,
      function(transaction) {
        return {
          transactionId: transaction.id,
          oneDayAgo: _findPrev(
            1,
            transactions,
            transaction.date,
            transaction.symbol
          ),
          sevenDaysAgo: _findPrev(
            7,
            transactions,
            transaction.date,
            transaction.symbol
          ),
          thirtyDaysAgo: _findPrev(
            30,
            transactions,
            transaction.date,
            transaction.symbol
          )
        };
      }
    );
  }

  PortfolioService.getCVDelta = function (curr, prev) {
    return _.subtract(
      _currentValue(curr),
      _currentValuep(prev)
    );
  };

  PortfolioService.computize = function(data) {
    var computized = {
      transactionId: data.id,
      currentValue: _currentValue(data.stock),
      totalCostBasis: _totalCostBasis(data.symbol, data.portfolio, data.endDate),
      profitLoss: _profitLoss(data.stock, data.symbol, data.portfolio, data.endDate),
      previousTransactions: _gatherPrevious(data.portfolio)
    };

    _computizedInfo.computized = computized;

    console.log(_computizedInfo);

    return _computizedInfo;
  };

  PortfolioService.getComputized = function () {
    return _computizedInfo;
  };

  PortfolioService.setComputized = function (computizedInfo) {
    computizedInfo.computized = _computizedInfo.computized;
  };

  return PortfolioService;

}]);
