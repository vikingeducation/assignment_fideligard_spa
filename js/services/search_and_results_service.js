StockPortfolioSimulator.factory('SearchAndResultsService', 
  ['$http', '_', 'DatesService', 'moment',
  function( $http, _, DatesService, moment ){

    // ----------------------
    // Private
    // ----------------------

    var _stocksQuery;

    var _stockDetailsByDate = {};

    var _stockDetailsById = { "1": { symbol: "Bananas & Blow" } };

    var _addToStockDetailsByDateFromQuery = function(){
      // Go through all the returned data from Yahoo
      _.each(_stocksQuery, function(stock){
        // If the date key doesn't work
        // make that key value equal an empty array.
        if ( !_stockDetailsByDate[stock.Date] ){
          _stockDetailsByDate[stock.Date] = [];
        };

        // push the current stock into the empty array associated with the address.
        _stockDetailsByDate[stock.Date].push({
          symbol: stock.Symbol,
          priceOnDate: stock.Close
        });
      });
    };

    var _addDifferencesInStockPricesToStockOnACertainDay = function( dayToCheck, previousDay, sevenDaysAgo, thirtyDaysAgo ){
      // I think at this point we're going through date by date
      // So we gotta check if on today's date there are stock in there.
      if(_stockDetailsByDate[dayToCheck]){
        _.each(_stockDetailsByDate[dayToCheck], function(stock){
          var currentStockIndex = _returnCurrentStockIndexByDate(dayToCheck, stock.symbol);
          _setDifferenceInStockPrices( previousDay, stock.symbol, dayToCheck, currentStockIndex, 'priceADayAgo' );
          _setDifferenceInStockPrices( sevenDaysAgo, stock.symbol, dayToCheck, currentStockIndex, 'priceSevenDaysAgo' );
          _setDifferenceInStockPrices( thirtyDaysAgo, stock.symbol, dayToCheck, currentStockIndex, 'priceThirtyDaysAgo' );
        });
      };
    };

    var _fillInMissingDaysForStockDetailsByDate = function( dayToCheck, previousDay ){
      if(!_stockDetailsByDate[dayToCheck] && _stockDetailsByDate[previousDay]){
        _stockDetailsByDate[dayToCheck] = _stockDetailsByDate[previousDay];
      };
    };

    var _returnCurrentStockIndexByDate = function( date, symbol ){
      var i;
      _.each(_stockDetailsByDate[date], function(stock, index){
        if(stock.symbol === symbol){
          i = index;
        };
      })
      return i;
    };

    var _setDifferenceInStockPrices = function( previousDate, symbol, currentDate, currentStockIndex, nameOfProperty ){
      if ( _stockDetailsByDate[previousDate] ){
        _.each(_stockDetailsByDate[previousDate], function(oldStock){
          if(oldStock.symbol === symbol){
            _stockDetailsByDate[currentDate][currentStockIndex][nameOfProperty] = _stockDetailsByDate[currentDate][currentStockIndex].priceOnDate - oldStock.priceOnDate;
            return false;
          };
        });
      };
    };

    // ----------------------
    // Public
    // ----------------------

    SearchAndResultsService = {};

    SearchAndResultsService.request = function( startDate, endDate, symbolsString ){
      // Get JSON response object

      if(symbolsString.length){
        return $http({
          url: 'http://query.yahooapis.com/v1/public/yql?q=%20select%20*%20from%20yahoo.finance.historicaldata%20where%20symbol%20in%20(' + symbolsString + ')%20and%20startDate%20=%20%22' + startDate + '%22%20and%20endDate%20=%20%22' + endDate + '%22%20&format=json%20&diagnostics=true%20&env=store://datatables.org/alltableswithkeys%20&callback=',
          method: "GET"
        })
          .then(function(response) {
            _stocksQuery = _.reverse(response.data.query.results.quote);

            return _stocksQuery;
          });
      };
    };

    SearchAndResultsService.returnStockById = function( id ){
      return _stockDetailsById[id];
    };

    SearchAndResultsService.stockDetailsByDate = function( startDate, endDate ){
      _stockDetailsByDate = {};

      _addToStockDetailsByDateFromQuery();

      var numberOfDaysBetween = DatesService.returnNumberOfDaysBetween( endDate, startDate );

      for(var i = 1; i <= numberOfDaysBetween; i++){
        var dayToCheck = moment( startDate ).add(i, 'days').format("YYYY-MM-DD");
        var previousDay = DatesService.returnDateDaysAgo( dayToCheck, 1 );
        var sevenDaysAgo = DatesService.returnDateDaysAgo( dayToCheck, 7 );
        var thirtyDaysAgo = DatesService.returnDateDaysAgo( dayToCheck, 30 );

        _fillInMissingDaysForStockDetailsByDate( dayToCheck, previousDay );

        _addDifferencesInStockPricesToStockOnACertainDay( dayToCheck, previousDay, sevenDaysAgo, thirtyDaysAgo );

      };

      return _stockDetailsByDate;
    };

    return SearchAndResultsService;

}]);