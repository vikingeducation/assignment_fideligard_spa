financialApp.factory('stockService', [ 'dateService', function( dateService ){

  var _stockData = {};



  var allStocks = rawData;

  for ( var i = 0; i < allStocks.length; i++ ) {
    var dataArray = allStocks[i].query.results.quote;
    dataArray.reverse();

    var dateInfo = dateService.getDateInfo();
    var dateRange = dateInfo.dateRange() + 31;
    var startDate = new Date(dateInfo.oneMonthAgo());

    var stockIdx = 0;
    for ( var dateOffset = 0; dateOffset <= dateRange; dateOffset++ ) {
      var stockItem = dataArray[stockIdx];

      var date = dateService.offsetDate( startDate, dateOffset )
      var dateString = dateService.dateToString( date );

      var nextDay = dateService.offsetDate( date, 1 )
      var nextDayString = dateService.dateToString( nextDay );
      if ( dataArray[stockIdx + 1].Date === nextDayString ) {
        stockIdx++;
      }

      _stockData[dateString] = _stockData[dateString] || {};

      _stockData[dateString][stockItem.Symbol] = { price: stockItem.Close };
    }
  }

  //new object-scoped data from stock data

  var getStockData = function() {
    return _stockData;
  };

  return{
    getStockData: getStockData,
  };

}]);
