// So what's going on here?

// The 'UserService' stores the variables and functions in regards to the user.

StockPortfolioSimulator.factory('UserService', 
	['DatesService', function(DatesService){

		// ----------------------
		// Private
		// ----------------------

		var _initialCash = 1000;

		var _portfolioByDate = { earliestDate: undefined,
														 latestDate: undefined };

		var _createDatesUpToDate = function( date ){
			// need to figure out whether our given date is closer to the earliest date or the latest date. 
			// Once we've figured that out you can start creating all the dates from that closest date to the given date
			var daysToEarliestDate = DatesService.returnNumberOfDaysBetween( date, _portfolioByDate.earliestDate );
			var daysToLatestDate = DatesService.returnNumberOfDaysBetween( date, _portfolioByDate.latestDate );

			var dateToCreateUpTo = _returnDateToCreateUpTo( date, daysToEarliestDate, daysToLatestDate );

			if (dateToCreateUpTo === date){
				for (var i = 0; i < daysToLatestDate; i++){
					var newDate = DatesService.returnDateDaysAgo( date, i );
					_portfolioByDate[newDate] = _portfolioByDate[_portfolioByDate.latestDate];
				};
			} else {
				daysToEarliestDate *= -1;
				for (var i = 1; i <= daysToEarliestDate; i++){
					var newDate = DatesService.returnDateDaysAgo( _portfolioByDate.earliestDate, i );
					_portfolioByDate[newDate] = {};
					_portfolioByDate[newDate][cashAvailable] =  _portfolioByDate[_portfolioByDate.earliestDate].cashAvailable;
				};
			};
		};

		var _enoughMoneyToBuy = function( price, quantity, cashAvailable ){
			if( cashAvailable ){
				return cashAvailable >= ( price * quantity );
			} else {
				return _initialCash >= ( price * quantity );
			};
		};

		var _initialSetup = function( date ){
			_portfolioByDate.earliestDate = date;
			_portfolioByDateLatestDate = date;
			_portfolioByDate[date] = { cashAvailable: _initialCash };
		};

		var _processPurchase = function(date, price, quantity, symbol){
			quantity = Number(quantity);
			if( _portfolioByDate[date][symbol] ){
				_portfolioByDate[date][symbol].quantity += quantity;
			} else {
				_portfolioByDate[date][symbol] = { quantity: quantity };
			};
			_portfolioByDate[date].cashAvailable -= (price * quantity);
		};

		var _returnDateToCreateUpTo = function( date, daysToEarliestDate ){
			// if this is a negative number
			// it means that our given date is earlier than the earliest date and
			// that we should build up to _portfolioByDate.earliestDate
			if (daysToEarliestDate < 0){
				return _portfolioByDate.earliestDate;
			} else {
				return date;
			};
		};

		// ----------------------
		// Public
		// ----------------------

		var UserService = {};

		UserService.buyStock = function( date, price, quantity, symbol ){
			if(_portfolioByDate[date]){
				if( _enoughMoneyToBuy( price, quantity, _portfolioByDate[date].cashAvailable ) ){
					_processPurchase( date, price, quantity, symbol);
				};
			} else {
				if( _portfolioByDate.earliestDate ){
					_createDatesUpToDate( date );

				} else {
					// So at this point it's just an empty object we're dealing with here
					// So gotta set up the earliest date
					// Latest date
					_initialSetup( date );
					// Now it's an object with the date in there as an empty object
					if( _enoughMoneyToBuy( price, quantity ) ){
						_processPurchase( date, price, quantity, symbol);
					};
				};
			};
		};

		// oh shit just realised, you can't just copy things backwards beceauseeeeeeee ownership of stock can't go in to the pasttttttttt

		UserService.returnCashAvailable = function( date ){
			if( Object.keys(_portfolioByDate).length > 2 ){
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