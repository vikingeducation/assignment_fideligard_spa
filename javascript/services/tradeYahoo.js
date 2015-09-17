app.factory('tradeYahooService', '$http' function($http){
  var obj={};
  _allStocks = {}
  //"2014-12-31" data format
  obj.getStock = function(start, end, stockName){
    $http.get('http://query.yahooapis.com/v1/public/yql?q=%20select%20*%20from%20yahoo.finance.historicaldata%20where%20symbol%20=%20%22'+stockName+'%22%20and%20startDate%20=%20%22'+start+'%22%20and%20endDate%20=%20%22'+end+'%22%20&format=json%20&diagnostics=true%20&env=store://datatables.org/alltableswithkeys%20&callback=')
  };

  obj.stock = JSON.parse($http.get("http://query.yahooapis.com/v1/public/yql?q=%20select%20*%20from%20yahoo.finance.historicaldata%20where%20symbol%20=%20%22AAPL%22%20and%20startDate%20=%20%222014-01-01%22%20and%20endDate%20=%20%222014-12-31%22%20&format=json%20&diagnostics=true%20&env=store://datatables.org/alltableswithkeys%20&callback="));

  return obj;
})