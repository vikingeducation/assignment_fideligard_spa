fideligard.factory('StockService', [
  '$http',
  '$q',
  '_',
  function($http, $q, _) {

    var obj = {}
    var _stocks = {};
    var _dates = {}
    var _stockSyms = ['VTI', 'COF', 'GOOG', 'VNQ', 'IBM']

    obj.getAllStocks = function() {
      console.log('getting stocks')
      if (!_.isEmpty(_stocks)) {
        return _stocks
      } else {
        var requests = []
        _stockSyms.forEach(function(sym) {
          requests.push(obj.getStock(sym));
        });
        return $q.all(requests).then(function(response) {
          response.forEach(function(data) {
            _buildStock(data.data.query.results.quote)
          })
          return _stocks
        })
      }
    }

    var _buildStock = function(stock) {
      if (_stocks[stock.Symbol]) {
        _stocks[stock.Symbol][stock.Date] = stock
      } else {
        _stocks[stock.Symbol] = {}
        _stocks[stock.Symbol][stock.Date] = stock
      }
    }

    var _stockQueryUrl = function(stockSym) {
      var url = 'http://query.yahooapis.com/v1/public/yql?q=%20select%20*%20from%20yahoo.finance.historicaldata%20' +
      'where symbol = ' +
      '"' + stockSym + '"' + ' ' + 'and startDate = "2015-08-01" ' + 'and endDate = "2015-12-31"' + '%20&format=json&diagnostics=true%20&env=store://datatables.org/alltableswithkeys%20&callback=';
      console.log('getting url')
      return url
    }

    obj.getStock = function(stockSym) {
      return $http({url: _stockQueryUrl(stockSym), method: 'GET'})
    };

  }
])
