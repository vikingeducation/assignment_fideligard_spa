app.factory('historicalStock', ['$http', '$filter', function($http, $filter){
  var _symbols = ["AAPL", "GOOG", "MSFT", "FB", "YHOO", "NFLX"];
  var stockData = [];

  _symbols.forEach(function(sym) {
    _getSymData(sym, function(result){
      stockData.push.apply(stockData, result.data.query.results.quote)
    });
  })

  function getStockData() {
    return stockData;
  }

  function getPrice(date, symbol){
    var target = $filter("dateFilter")(stockData, date).filter(function(el){ return el.Symbol == symbol })[0];
    return target ? target.Close : null;
  }

  function _getSymData(sym, callback) {
    var url = 'http://query.yahooapis.com/v1/public/yql?q=%20select%20*%20from%20yahoo.finance.historicaldata%20where%20symbol%20=%20%22' + sym + '%22%20and%20startDate%20=%20%222014-01-01%22%20and%20endDate%20=%20%222014-12-31%22%20&format=json%20&diagnostics=true%20&env=store://datatables.org/alltableswithkeys%20&callback='
    return $http.get(url)
    .then(callback)
  }

  return {
    getPrice: getPrice,
    getStockData: getStockData,
  }
}]);
