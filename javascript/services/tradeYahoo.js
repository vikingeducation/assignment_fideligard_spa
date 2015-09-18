tradeApp.factory('tradeYahooService', ['$http', '$filter',function($http,$filter){

  var obj={};

  // var _symbolStock = [];  // AAPL : [Prices/Dates]

  //=[{name: price: oneday : sevenday: month:}]
  var _stockData = [];

  var _symbolsOfStocksToGet = ['AAPL', 'FB', 'GOOG', 'F', 'SBUX', 'BX'];

  //"2014-12-31" data format
  var today = new Date();
  var flag = 0;
  var _dateToday      = new Date(new Date().setDate(today.getDate()-60)).toISOString().slice(0,10);
  var _dateHistorical = new Date(new Date().setDate(today.getDate()-120)).toISOString().slice(0,10);

  obj.getStock = function(){
    console.log(_dateToday);
    for(var i = 0; i < _symbolsOfStocksToGet.length ; i++){
      var symbol = _symbolsOfStocksToGet[i];

      $http.get('http://query.yahooapis.com/v1/public/yql?q=%20select%20*%20from%20yahoo.finance.historicaldata%20where%20symbol%20=%20%22'+
        symbol+
        '%22%20and%20startDate%20=%20%22'+
        _dateHistorical+
        '%22%20and%20endDate%20=%20%22'+
        _dateToday+
        '%22%20&format=json%20&diagnostics=true%20&env=store://datatables.org/alltableswithkeys%20&callback=')
      .then(_responseCallback);
    }
  };

  var _responseCallback = function(response){
 console.log(response);

    var stockForSymbol = response.data["query"]["results"]["quote"];
    pushData(stockForSymbol);

  };

  // obj.showStock = function(){
  //   return _stockData;
  // };

  obj.getStockData = function(){
     return _stockData;
  };


  var pushData = function(symbolStock){
    _stockData.push({
      name: symbolStock[0].Symbol,
      price: symbolStock[0].Open,
      oneday: symbolStock[0].Open -symbolStock[1].Open,
      sevenday: symbolStock[0].Open -symbolStock[5].Open,
      month: symbolStock[0].Open - symbolStock[21].Open});
  };

  obj.tradeSymbol = function(name){
    console.log(name+"was traded");
  };


  return obj;

}]);


//function(start, end, stockName){
    // var currentStock = $http.get("http://query.yahooapis.com/v1/public/yql?q=%20select%20*%20from%20yahoo.finance.historicaldata%20where%20symbol%20=%20%22AAPL%22%20and%20startDate%20=%20%222014-01-01%22%20and%20endDate%20=%20%222014-12-31%22%20&format=json%20&diagnostics=true%20&env=store://datatables.org/alltableswithkeys%20&callback=");

// 'http://query.yahooapis.com/v1/public/yql?q=%20select%20*%20from%20yahoo.finance.historicaldata%20where%20symbol%20=%20%22'+stockName+'%22%20and%20startDate%20=%20%22'+start+'%22%20and%20endDate%20=%20%22'+end+'%22%20&format=json%20&diagnostics=true%20&env=store://datatables.org/alltableswithkeys%20&callback='