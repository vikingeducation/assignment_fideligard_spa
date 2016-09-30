app.factory('stockService', ['$http', '$q',function($http, $q) {

  var _stocks = {

  };

  var _popularStocks = ["AAPL", "GOOGL", "MSFT", "TSLA", "^RUT"];

  var stub = {};



  stub.getStock = function(symb, year) {
    var symb = symb || "AAPL";
    var url = "http://query.yahooapis.com/v1/public/yql?q=";
    var year = year || 2014;
    var append = "%20select%20*%20from%20yahoo.finance.historicaldata%20" +
    "where%20symbol%20=%20"+
    "%22"+ symb + "%22%20" +
    "and%20startDate%20=%20%22"+ year + "-01-01%22%20" +
    "and%20endDate%20=%20%22" + year + "-12-31%22%20" +
    "&format=json%20" +
    "&diagnostics=true%20" +
    "&env=store://datatables.org/alltableswithkeys%20" +
    "&callback=";

    var finalUrl = url + append;

    return $http.get(finalUrl);
  };

  stub.getStocks = function(year){
    var requests = [];
    var year = year || 2014;
    for(var i = 0; i < _popularStocks.length; i++){
      requests.push(stub.getStock(_popularStocks[i], year));
    }
    return $q.all(requests).then(function(response){
      for (var i = 0; i < response.length; i++) {
         var stock_data = response[i].data.query;
         var symbol = stock_data.results.quote[0].Symbol;
         if (!_stocks[symbol]){
           _stocks[symbol] = {};
         }
         _stocks[symbol][year] = {
             dayListings: stock_data.results.quote,
             countWorkDays: stock_data.count
         };
       }
       return _stocks;
     });
  };

  stub.getCurrentStocks = function() {
    return _stocks;
  };

  stub.getDate = function(index, year) {
    var year = year || 2014;
    return _stocks.AAPL[year].dayListings[251 - index];
  };



  return stub;
}]);
