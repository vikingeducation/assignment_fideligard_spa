tradeApp.factory('tradeYahooService', ['$http', function($http){

  var obj={};

  var _symbolStock = [];  // AAPL : [Prices/Dates]



  //"2014-12-31" data format
  obj.getStock = function(){
    return $http.get("http://query.yahooapis.com/v1/public/yql?q=%20select%20*%20from%20yahoo.finance.historicaldata%20where%20symbol%20=%20%22AAPL%22%20and%20startDate%20=%20%222014-01-01%22%20and%20endDate%20=%20%222014-12-31%22%20&format=json%20&diagnostics=true%20&env=store://datatables.org/alltableswithkeys%20&callback=").then(function(response){
      _symbolStock = response.data["query"]["results"]["quote"];
      console.log(_symbolStock);
    });
  };

  obj.showStock = function(){
    return _symbolStock;
  };
  //=[{name: price: oneday : sevenday: month:}]
  _stockData = [];

  obj.stockData = function(){
    _stockData.push({
      name: _symbolStock[0]["symbol"],
      price: _symbolStock[0].open,
      oneday: _symbolStock[0].open -_symbolStock[1].open,
      sevenday: _symbolStock[0].open -_symbolStock[5].open,
      month: _symbolStock[0].open -_symbolStock[22].open});
  };

  obj.tradeSymbol = function(name){
    console.log(name+"was traded");
  };


  return obj;

}]);


//function(start, end, stockName){
    // var currentStock = $http.get("http://query.yahooapis.com/v1/public/yql?q=%20select%20*%20from%20yahoo.finance.historicaldata%20where%20symbol%20=%20%22AAPL%22%20and%20startDate%20=%20%222014-01-01%22%20and%20endDate%20=%20%222014-12-31%22%20&format=json%20&diagnostics=true%20&env=store://datatables.org/alltableswithkeys%20&callback=");

// 'http://query.yahooapis.com/v1/public/yql?q=%20select%20*%20from%20yahoo.finance.historicaldata%20where%20symbol%20=%20%22'+stockName+'%22%20and%20startDate%20=%20%22'+start+'%22%20and%20endDate%20=%20%22'+end+'%22%20&format=json%20&diagnostics=true%20&env=store://datatables.org/alltableswithkeys%20&callback='