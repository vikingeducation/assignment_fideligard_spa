financialApp.factory('stockService', [function(){

  var _stockData = {};

  var dataArray = rawData.query.results.quote;

  console.log(dataArray);

  for ( i = 0; i < dataArray.length; i++ ) {
    var date = dataArray[i].Date;
    var symbol = dataArray[i].Symbol;
    var price = dataArray[i].Close
    _stockData[date] = { date: new Date(date), symbol: symbol, price: price };
  }

  console.log(_stockData);

  var getStockData = function() {
    return _stockData;
  };

  return{
    getStockData: getStockData,
  };

}]);
