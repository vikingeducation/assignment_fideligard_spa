StockPortfolioSimulator.factory('StocksService', 
	['$http',
	function($http){

		// --------------
		// Private
		// --------------

		var _stocksQuery;

		var _stockDetailsByDate = {};

		var _returnDateDaysAgo = function(currentDate, daysAgo){
			return moment(currentDate).subtract(daysAgo, "days").format("YYYY-MM-DD")
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

		var _setPriceForStockOnPreviousDay = function( previousDate, symbol, currentDate, currentStockIndex, nameOfProperty ){
			if ( _stockDetailsByDate[previousDate] ){
				_.each(_stockDetailsByDate[previousDate], function(oldStock){
					if(oldStock.symbol === symbol){
						_stockDetailsByDate[currentDate][currentStockIndex][nameOfProperty] = oldStock.priceOnDate;
						return false;
					};
				});
			};
		};

		// --------------
		// Public
		// --------------

		var StocksService = {};

		StocksService.request = function(){
			// Get JSON response object
			return $http({
				url: '../../data/yql.json',
				method: "GET"
			})
				.then(function(response) {
					_stocksQuery = _stocksQuery || _.reverse(response.data.query.results.quote);

					return _stocksQuery;
				});
		};

		StocksService.stockDetailsByDate = function(){
			_.each(_stocksQuery, function(stock){
				if ( !_stockDetailsByDate[stock.Date] ){
					_stockDetailsByDate[stock.Date] = [];
				};

				_stockDetailsByDate[stock.Date].push({
					symbol: stock.Symbol,
					priceOnDate: stock.Close
				});
			});

			// I guess you could do it again but this time comparing away...
			// So the brute force way
			// Gonna go through each stock and first off see if stock for a day ago exists
			_.each(_stocksQuery, function(stock){
				var oneDayAgo = _returnDateDaysAgo(stock.Date, 1);
				var sevenDaysAgo = _returnDateDaysAgo(stock.Date, 7);
				var thirtyDaysAgo = _returnDateDaysAgo(stock.Date, 30);
				var currentStockIndex = _returnCurrentStockIndexByDate(stock.Date, stock.Symbol);

				_setPriceForStockOnPreviousDay( oneDayAgo, stock.Symbol, stock.Date, currentStockIndex, "priceADayAgo" );

				_setPriceForStockOnPreviousDay( sevenDaysAgo, stock.Symbol, stock.Date, currentStockIndex, "priceSevenDaysAgo" );

				_setPriceForStockOnPreviousDay( thirtyDaysAgo, stock.Symbol, stock.Date, currentStockIndex, "priceThirtyDaysAgo" );

			});

			return _stockDetailsByDate;
		};

		return StocksService;

}])