app.factory('historicalStock', ['$http', '$filter', function($http, $filter){
  var _symbols = ["AAPL", "GOOG", "MSFT", "FB", "YHOO", "NFLX"];
  var stockData = {list: []};

  _symbols.forEach(function(sym) {
    _getSymData(sym, function(result){
      stockData.list = stockData.list.concat(result.data.query.results.quote)
    });
  })

  function getStockData() {
    return stockData;
  }

  function getPrice(date, symbol){
    var target = $filter("dateFilter")(stockData.list, date).filter(function(el){ return el.Symbol == symbol })[0];
    return target ? target.Close : null;
  }

  function _getSymData(sym, callback) {
    var url = 'http://query.yahooapis.com/v1/public/yql?q=%20select%20*%20from%20yahoo.finance.historicaldata%20where%20symbol%20=%20%22' + sym + '%22%20and%20startDate%20=%20%222014-01-01%22%20and%20endDate%20=%20%222014-12-31%22%20&format=json%20&diagnostics=true%20&env=store://datatables.org/alltableswithkeys%20&callback='
    return $http.get(url)
    .then(callback)
  }

  function getLast(offset, entry){
    var currentClosing = entry.Close;
    var startingDate = new Date(entry.Date);
    var targetDays = [];
    targetDays.push(startingDate.setDate(startingDate.getDate() - offset))
    targetDays.push(startingDate.setDate(startingDate.getDate() - 1))
    targetDays.push(startingDate.setDate(startingDate.getDate() - 1))
    targetDays.push(startingDate.setDate(startingDate.getDate() - 1))
    targetDays.push(startingDate.setDate(startingDate.getDate() - 1))

    var filteredData = stockData.list.filter(function(el){ return el.Symbol == entry.Symbol })
    var results = [];
    targetDays.forEach(function(day) {
      var result = $filter("dateFilter")(filteredData, day);
      if (result.length > 0 && results.length == 0) {
        results = result;
      }
    });

    return (results.length < 1) ? "N/A" : currentClosing - results[0].Close
  }

  return {
    getPrice: getPrice,
    getStockData: getStockData,
    getLast: getLast
  }
}]);
