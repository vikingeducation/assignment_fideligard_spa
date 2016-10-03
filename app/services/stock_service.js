fideligard.factory('StockService', [
  '$http',
  '$q',
  '_',
  function($http, $q, _) {

    var obj = {}
    var _stocks = {};
    var _dates = {}
    var _stockSyms = ['GOOG', 'VTI', 'COF', 'COF', 'IBM']

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

    var _buildStock = function(stocks) {
      stocks.forEach(function(stock){
        if (_stocks[stock.Symbol]) {
          _stocks[stock.Symbol][stock.Date] = stock
        } else {
          _stocks[stock.Symbol] = {}
          _stocks[stock.Symbol][stock.Date] = stock
        }
      })
    }

    var _stockQueryUrl = function(stockSym) {
      var url = 'http://query.yahooapis.com/v1/public/yql?q=%20select%20*%20from%20yahoo.finance.historicaldata%20where%20symbol%20=%20%22' + stockSym + '%20%22and%20startDate%20=%20' + '"2015-07-01"' + '%20and%20endDate%20=%20' + '"2015-12-31"' + '%20&format=json&diagnostics=true%20&env=store://datatables.org/alltableswithkeys%20&callback=';
      console.log('getting url')
      return url
    }

    obj.getStock = function(stockSym) {
      return $http({url: _stockQueryUrl(stockSym), method: 'GET'})
    };

    obj.getDates = function() {
      return Object.keys(_stocks).sort();
    }

    var setPastDate = function(current, range) {
      var past = new Date(new Date(current) - 86400000 * range)
      return past.toISOString().substring(0,10)
    }


    obj.stockChange = function(sym, current, range) {
      var currentStock = _stocks[sym][current]
      var pastStock;
      var counter = 0;
      while (!pastStock){
        if (counter > 4) { break }
        pastDate = setPastDate(current, range)
        pastStock = _stocks[sym][pastDate]
        range++
        counter++
      }
      return ((currentStock.Close - pastStock.Close) / (pastStock.Close))*100
    };

    return obj;
  }
])
