financialApp.factory('stockService', [function(){

  var dataArray = rawData.query.results.quote;
  var _stockData = {};

  for ( var i = 0; i < dataArray.length; i++ ) {
    var date = dataArray[i].Date;
    var symbol = dataArray[i].Symbol;
    var price = dataArray[i].Close;
    _stockData[date] = { date: new Date(date), symbol: symbol, price: price };
    // for ( var j = 0; i < dataArray.length - 1 && dataArray[i+j].Date; j++ ) {
    //
    // }
  }

  //new object-scoped data from stock data

  var getStockData = function() {
    return _stockData;
  };

  return{
    getStockData: getStockData,
  };

}]);
