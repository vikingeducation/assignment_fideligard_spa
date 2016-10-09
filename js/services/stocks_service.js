StockPortfolioSimulator.factory('StocksService', 
	['$http',
	function($http){

		// --------------
		// Private
		// --------------

		var _stocksQuery;

		var _stockDetailsByDate = {};

		var _namesAndSymbols;

		// StocksService._returnDateDaysAgo
		var _returnDateDaysAgo = function(currentDate, daysAgo){
			return moment(currentDate).subtract(daysAgo, "days").format("YYYY-MM-DD")
		};

		// StocksService._returnCurrentStockIndexByDate
		var _returnCurrentStockIndexByDate = function( date, symbol ){
			var i;
			_.each(_stockDetailsByDate[date], function(stock, index){
				if(stock.symbol === symbol){
					i = index;
				};
			})
			return i;
		};

		// StocksService._returnSymbolsString
		var _returnSymbolsString = function(){
			var string = "";

			_.each(_namesAndSymbols, function(stock){
				if(stock.Checked){
					if(string.length){
						string += ",";
					};

					string += ("%22" + stock.Symbol + "%22");
				};
			});

			return string;
		};

		// StocksService._setDifferenceInStockPrices
		var _setDifferenceInStockPrices = function( previousDate, symbol, currentDate, currentStockIndex, nameOfProperty ){
			console.log("current date = " + currentDate);
			console.log("previousDate = " + previousDate);
			console.log("previous date exists" + _stockDetailsByDate[previousDate])
			if ( _stockDetailsByDate[previousDate] ){
				_.each(_stockDetailsByDate[previousDate], function(oldStock){
					if(oldStock.symbol === symbol){
						_stockDetailsByDate[currentDate][currentStockIndex][nameOfProperty] = _stockDetailsByDate[currentDate][currentStockIndex].priceOnDate - oldStock.priceOnDate;
						console.log(_stockDetailsByDate[currentDate][currentStockIndex][nameOfProperty]);
						return false;
					};
				});
			};
		};

		// --------------
		// Public
		// --------------

		var StocksService = {};

		StocksService.chooseAllSymbols = function(){
			_.each(_namesAndSymbols, function(stock){
				stock.Checked = true;
			});
		};

		StocksService.clearChosenSymbols = function(){
			_.each(_namesAndSymbols, function(stock){
				stock.Checked = false;
			});
		};

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

		StocksService.request = function( startDate, endDate ){
			// Get JSON response object
			var symbolsString = _returnSymbolsString();

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

		StocksService.stockDetailsByDate = function( startDate, endDate ){
			_stockDetailsByDate = {};

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

			// Okay, so at this point we have an object with the key as the dates and the value as an array with holds objects which are stocks...
			// So in all actuality this is where the magic needs to happen...
			// But for the magic to happen, we need the dates
			// Cos I'm thinking as we go throuch each date from day 1 onwards, any dates that are missing, we just copy the information from the day before...
			// Brilliant...
			// So the first thing I need to implement is the ability to search by dates
			var numberOfDaysBetween = moment( endDate ).diff(moment( startDate ), 'days' );
			for(var i = 1; i <= numberOfDaysBetween; i++){
				var dayToCheck = moment( startDate ).add(i, 'days').format("YYYY-MM-DD");
				var previousDay = _returnDateDaysAgo( dayToCheck, 1 );
				var sevenDaysAgo = _returnDateDaysAgo( dayToCheck, 7 );
				var thirtyDaysAgo = _returnDateDaysAgo( dayToCheck, 30 );

				if(!_stockDetailsByDate[dayToCheck] && _stockDetailsByDate[previousDay]){
					_stockDetailsByDate[dayToCheck] = _stockDetailsByDate[previousDay];
				};
				// So at this point all the dates work

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

			return _stockDetailsByDate;
		};

		return StocksService;

}])