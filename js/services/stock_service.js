Fideligard.factory('stockService', ['$http', '$q', function ($http, $q) {

  // private
  Date.prototype.toISO = function () {
    return this.toISOString().substring(0,10);
  };

  var stockService = {};

  var _stocks = {};  //_stocks = { 'NOK': {date1: {stock}, date2: {stock}}, 'GOOG'.. }}
  var _symbols = ['NOK', 'GOOG', 'AAPL', 'C', 'DIS', 'DTEGY', 'NVS', 'UL', 'TMUS', 'CVS']

  stockService.getAllStocks = function() {
    console.log("getting all stocks");
    if (!_.isEmpty(_stocks)) {
        return _stocks
    } else {
      var requests = []
      _symbols.forEach(function(sym) {
        requests.push(stockService.getStock(sym));
      });
      return $q.all(requests).then(function(response) {
        response.forEach(function(data) {
          _buildStock(data.data.query.results.quote);
        })
        console.log(_stocks);
        return _stocks;
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
    var url = 'http://query.yahooapis.com/v1/public/yql?q=%20select%20*%20from%20yahoo.finance.historicaldata%20where%20symbol%20=%20%22' + stockSym + '%20%22and%20startDate%20=%20' + '"2014-01-01"' + '%20and%20endDate%20=%20' + '"2014-12-31"' + '%20&format=json&diagnostics=true%20&env=store://datatables.org/alltableswithkeys%20&callback=';
    console.log('getting url')
    return url
  }

  stockService.getStock = function(sym) {
    return $http({url: _stockQueryUrl(sym), method: 'GET'})
  }

  stockService.stockChange = function(rawSym, formattedTime, daysBefore) {
    var cur_stock = _stocks[rawSym][formattedTime];

    var new_date = new Date(formattedTime).add(-daysBefore).days().toISO();
    while (_stocks[rawSym][new_date] === undefined) {
      new_date = new Date(formattedTime).add(1).days().toISO();
    }
    var past_stock = _stocks[rawSym][new_date];
    return  ((cur_stock.Close - past_stock.Close)/past_stock.Close) * 100;
  }

  return stockService;
}]);