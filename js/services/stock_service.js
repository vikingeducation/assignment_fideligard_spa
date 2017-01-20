Fideligard.factory('stockService', ['$http', '$q', 'transactionService', function ($http, $q, transactionService) {

  // private
  Date.prototype.toISO = function () {
    return this.toISOString().substring(0,10);
  };

  var stockService = {};

  var _stocks = [];  //_stocks = { key: 'NOK' date1: {stock}, date2: {stock}}
  var _symbols = ['NOK', 'GOOG', 'AAPL', 'C', 'DIS', 'DTEGY', 'NVS', 'UL', 'TMUS', 'CVS']

  var response =
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
        console.log("response===")
        console.log(response);
        response.forEach(function(data, index) {
          _buildStock(data.data.query.results.quote, index);
        })
        return _stocks;
      })
    }
  }

  var findStock = function(stock, q) {
    return Object.keys(stock)[0] === q;
  }
  var _buildStock = function(stocks, index) {
    var cur_stock_symbol = "";
    stocks.forEach(function(stock) {
      if (cur_stock_symbol === stock.Symbol)  {
        obj = _.last(_stocks);
        obj[stock.Date] = stock;
      } else {
        obj = { key: stock.Symbol }
        obj[stock.Date] = stock;
        _stocks.push(obj);
        cur_stock_symbol = stock.Symbol;
      }
    })
    fillHolidayStocks(index);
  }

  var _stockQueryUrl = function(stockSym) {
    var url = 'http://query.yahooapis.com/v1/public/yql?q=%20select%20*%20from%20yahoo.finance.historicaldata%20where%20symbol%20=%20%22' + stockSym + '%20%22and%20startDate%20=%20' + '"2014-01-01"' + '%20and%20endDate%20=%20' + '"2014-12-31"' + '%20&format=json&diagnostics=true%20&env=store://datatables.org/alltableswithkeys%20&callback=';
    return url
  }

  stockService.getStock = function(sym) {
    return $http({url: _stockQueryUrl(sym), method: 'GET'})
  }

  stockService.stockChange = function(sym, formattedTime, daysBefore) {
    var stock = _.find(_stocks, function(stock){ return stock.key === sym+'%20' });
    var cur_stock = stock[formattedTime];
    var new_date = new Date(formattedTime).add(-daysBefore).days().toISO();
    var past_stock = stock[new_date] || stock['2014-01-02'];
    return  (cur_stock.Close - past_stock.Close);
  }

  var fillHolidayStocks = function(index) {
    date = Date.parse('1/2/2014')
    var prev = {};
    while (date < Date.parse('12/31/2014')) {
      if (_stocks[index][date.toISO()] === undefined) {
        _stocks[index][date.toISO()] = prev;
      }
      prev = _stocks[index][date.toISO()];
      date.add(1).day();
    }
  }

  stockService.getCurrentPrice = function(symbol, dateIso) {
    var stock = _.find(_stocks, function(stock){ return stock.key === symbol+"%20" })
    return (stock != undefined) ? stock[dateIso].Close : 0;
  }

  stockService.seedTx = function() {
    var len = _stocks.length;
    for (i=0;i<len;i++) {
      var obj = {};
      obj.date = Date.parse('1/1/2014').add(_.random(1, 360)).days().toISO();
      if (_stocks[i][obj.date] === undefined) {
        console.log(_stocks[i]);
        console.log(' date ' + obj.date);
      }
      obj.symbol = _stocks[i][obj.date].Symbol.substring(0, _stocks[i][obj.date].Symbol.length-3);
      obj.type = 'buy';
      obj.quantity = 5;
      obj.price = _stocks[i][obj.date].Close;
      transactionService.trade(obj);
      obj.quantity = 2;
      obj.type = 'sell';
      transactionService.trade(obj);
    }
  }

  return stockService;
}]);