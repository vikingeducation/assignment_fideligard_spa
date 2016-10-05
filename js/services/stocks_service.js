StockPortfolioSimulator.factory('StocksService', 
	['$http',
	function($http){

		// --------------
		// Private
		// --------------

		var _stocksQuery;

		var _stockDetailsByDate = {};

		var _namesAndSymbols;

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

		// --------------
		// Public
		// --------------

		var StocksService = {};

		// To get the JSON list for all stock names and their symbols
		// 1. Get the CSV file from: 
		// http://www.nasdaq.com/screening/companies-by-name.aspx?letter=0&exchange=nasdaq&render=download
		// 2. Convery the CSV file at: 
		// http://www.convertcsv.com/csv-to-json.htm
		StocksService.getAllNamesAndSymbols = function(){
			// Get JSON response object
			return $http({
				url: '../../data/company_list.json',
				method: "GET"
			})
				.then(function(response) {
					_namesAndSymbols = _namesAndSymbols ||response.data;

					return _namesAndSymbols;
				});
		};

		// Currently this just gets stocks from the json file
		// I want to make this dynamic
		// This request worked in getting a json file back...
		// http://query.yahooapis.com/v1/public/yql?q=%20select%20*%20from%20yahoo.finance.historicaldata%20where%20symbol%20in%20(%22AAPL%22,%20%22GOOGL%22,%22YHOO%22)%20and%20startDate%20=%20%222013-09-11%22%20and%20endDate%20=%20%222014-02-11%22%20&format=json%20&diagnostics=true%20&env=store://datatables.org/alltableswithkeys%20&callback=
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

				_setDifferenceInStockPrices( oneDayAgo, stock.Symbol, stock.Date, currentStockIndex, "priceADayAgo" );

				_setDifferenceInStockPrices( sevenDaysAgo, stock.Symbol, stock.Date, currentStockIndex, "priceSevenDaysAgo" );

				_setDifferenceInStockPrices( thirtyDaysAgo, stock.Symbol, stock.Date, currentStockIndex, "priceThirtyDaysAgo" );

			});

			return _stockDetailsByDate;
		};

		return StocksService;

}])