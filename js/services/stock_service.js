app.factory('StockService', ['$http', function($http) {
  var StockService = {};
  var _stockData = {};
  var _symbols = [];
  var _dates = [];
  var STOCK_SYMBOLS = ['AAPL', 'GOOGL', 'TWTR', 'AMZN'];

  var _selectedStock = {
    stock: {}
  };

  // Callbacks for querying stocks.
  function _yqlQuery (symbol) {
    return 'http://query.yahooapis.com/v1/public/yql?q= '
      + 'select * from   yahoo.finance.historicaldata '
      + 'where  symbol    = ' + '"' + symbol + '"' + ' '
      + 'and    startDate = "2015-01-01" '
      + 'and    endDate   = "2015-12-31" '
      + '&format=json '
      + '&diagnostics=true '
      + '&env=store://datatables.org/alltableswithkeys '
      + '&callback=';
  }

  function _populateDates (date) {
    // Only create a new object for date if not yet cached.
    if (!_stockData[date]) {
      _stockData[date] = {};
    }
    _dates.push(date);
  }

  function _grabDates (response) {
    _.forEach(
      _.uniq(
        _.map(
          response.data.query.results.quote,
          function(item) {
            return item.Date;
          }
        )
      ),
      _populateDates
    );
    _dates = _.sortBy(_.uniq(_dates));
    return response;
  }

  function _objectifySymbol (response) {
    return function (symbol) {
      response.data.query.results.quote.forEach(function(item) {
        // If the item's symbol matches the current symbol in collection,
        // and if that symbol doesn't already have an object in
        // the stock data.
        if (item.Symbol === symbol) {
          if (_stockData[item.Date]) {
            if (_.isEmpty(_stockData[item.Date[symbol]])) {
              _stockData[item.Date][symbol] = {};
            }
          }
        }
      });
      return symbol;
    };
  }

  function _grabSymbols (response) {
    // Grab symbols.
    _.forEach(
      _.uniq(
        _.map(
          response.data.query.results.quote,
          function(item) {
            return item.Symbol;
          }
        )
      ),
      _objectifySymbol(response)
    );
    return response;
  }

  function _populateSymbolObj(response) {
    _.forEach(
      response.data.query.results.quote,
      function(item) {
        // Don't use angular.copy here. Closure issue.
        // Populating the symbol in a given date.
        _stockData[item.Date][item.Symbol] = item;
      }
    );
  }

  // Response after Promise.all is an array of resolved promises.
  function _buildStockData (response) {
    _.forEach(
      response,
      _populateSymbolObj
    );
    return {stockData: _stockData, dates: _dates};
  }

  StockService.queryStocks = function() {
    return Promise.all(
      _.map(
        STOCK_SYMBOLS,
        (
          function(symbol) {
            return $http
              .get(_yqlQuery(symbol))
              .then(_grabDates)
              .then(_grabSymbols);
          }
        )
      )
    )
    .then(_buildStockData)
    .catch(function(reason) {
        console.log(reason);
    });
  };

  StockService.getStocks = function() {
    return _stockData;
  };

  StockService.getPrevious = function(current,field,symbol) {
    return function(daysAgo) {
      return function () {
        var currDayIndex = _.indexOf(_dates,current);
        var prevDayIndex = currDayIndex - daysAgo;
        if (_dates[prevDayIndex]) {
          var currStr = current;
          var prevStr = _dates[prevDayIndex];
          return (_stockData[currStr][symbol][field] - _stockData[prevStr][symbol][field]);
        }
      };
    };
  };

  StockService.getDates = function() {
    return _dates;
  };

  StockService.setSelectedStock = function (stock) {
    _selectedStock.stock = stock;
  };

  StockService.getSelectedStock = function (stock) {
    return _selectedStock;
  };

  return StockService;

}]);
