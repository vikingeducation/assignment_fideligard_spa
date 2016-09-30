app.factory('stockService', ['$http', '$q',function($http, $q) {

  var _stocks = {

  };

  var _day = 0;

  var _popularStocks = ["AAPL", "GOOGL", "MSFT", "TSLA", "^RUT"];

  var stub = {};



  stub.getStock = function(symb, startYear) {
    var symb = symb || "AAPL";
    var url = "http://query.yahooapis.com/v1/public/yql?q=";
    var startYear = startYear || 2014;
    var endYear = endYear || 2014;
    var append = "%20select%20*%20from%20yahoo.finance.historicaldata%20" +
    "where%20symbol%20=%20"+
    "%22"+ symb + "%22%20" +
    "and%20startDate%20=%20%22"+ startYear + "-01-01%22%20" +
    "and%20endDate%20=%20%22" + endYear + "-12-31%22%20" +
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
         _stocks[symbol].symbol= symbol;
         _stocks[symbol][year] = {
             days: stock_data.results.quote.reverse(),
             countWorkDays: stock_data.count
         };
       }
       return _stocks;
     });
  };

  stub.getCurrentStocks = function() {
    return _stocks;
  };

  stub.getDate = function(day) {
    return _stocks["GOOGL"][2014]["days"][day]["Date"];
  };

  stub.setDay = function(dayIndex){
    _day = dayIndex;
  };

  stub.getDay = function(){
    return _day
  }

  return stub;
}]);
