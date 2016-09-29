app.factory('stockService', ['$http',function($http) {

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

    return $http.get(finalUrl).then(function(response){
       var stock_data = response.data.query;
       var symbol = stock_data["results"]["quote"][0]["Symbol"];
       if (!_stocks[symbol]){
         _stocks[symbol] = {};
       }
       _stocks[symbol][year] = {
           dayListings: stock_data.results.quote,
           countWorkDays: stock_data.count
       };
     });
  };

  stub.getStocks = function(){
    _popularStocks.forEach(function(stockSym){
      stub.getStock(stockSym);
    });
    return Promise.resolve(_stocks);
  };

  // stub.getDate = function(index) {
  //   return _stocks.AAPL[2014].dayListings[251 - index]
  // }



  return stub;
}]);
