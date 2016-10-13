StockPortfolioSimulator.factory('UserService', 
	['DatesService', function(DatesService){

		// ----------------------
		// Private
		// ----------------------

		var _initialCash = 1000;

		var _portfolioByDateEarliestDate;
		var _portfolioByDateLatestDate;

		var _portfolioByDate = {};

		var _createDatesUpToDate = function( date ){
			// need to figure out whether our given date is closer to the earliest date or the latest date. 
			// Once we've figured that out you can start creating all the dates from that closest date to the given date
			var daysToEarliestDate = DatesService.returnNumberOfDaysBetween( date, _portfolioByDateEarliestDate );
			var daysToLatestDate = DatesService.returnNumberOfDaysBetween( date, _portfolioByDateLatestDate );

			var dateToCreateUpTo = _returnDateToCreateUpTo( date, daysToEarliestDate, daysToLatestDate );

			if (dateToCreateUpTo === date){
				for (var i = 0; i < daysToLatestDate; i++){
					var newDate = DatesService.returnDateDaysAgo( date, i );
					_portfolioByDate[newDate] = _portfolioByDate[_portfolioByDateLatestDate];
				};
			} else {
				daysToEarliestDate *= -1;
				for (var i = 1; i <= daysToEarliestDate; i++){
					var newDate = DatesService.returnDateDaysAgo( _portfolioByDateEarliestDate, i );
					_portfolioByDate[newDate] = _portfolioByDate[_portfolioByDateEarliestDate];
				};
			};
		};

		var _returnDateToCreateUpTo = function( date, daysToEarliestDate ){
			// if this is a negative number
			// it means that our given date is earlier than the earliest date and
			// that we should build up to _portfolioByDateEarliestDate
			if (daysToEarliestDate < 0){
				return _portfolioByDateEarliestDate;
			} else {
				return date;
			};
		};

		// ----------------------
		// Public
		// ----------------------

		var UserService = {};

		UserService.returnCashAvailable = function( date ){
			if( Object.keys(_portfolioByDate).length ){
				if ( !_portfolioByDate[date] ){
					_createDatesUpToDate(date);
				};
				return _portfolioByDate[date].cashAvailable;
			} else {
				return _initialCash;
			};
		};

		UserService.returnQuantityUserOwns = function( date, symbol ){
			if (_portfolioByDate[date] && _portfolioByDate[date][symbol]){
				return _portfolioByDate[date][symbol].quantity;
			} else {
				return 0;
			};
		};

		return UserService;

}]);