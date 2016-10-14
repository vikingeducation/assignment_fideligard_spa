// So what's going on here?

// Pretty much the user's portfolio and functions to make it work.

StockPortfolioSimulator.factory('UserService', 
	['DatesService', function(DatesService){

		// ----------------------
		// Private
		// ----------------------

		var _initialCash = 1000;

		// There's a bit of a logic based on
		// earliestDate and latestDate being truthy
		var _portfolioByDate = { earliestDate: undefined,
														 latestDate: undefined };

		// This will get some use when a user picks a stock, on a 
		// date, to do a transaction on. 
		var _createDatesUpToDate = function( date ){
			// What's closer to our chosen date?
			var daysToEarliestDate = DatesService.returnNumberOfDaysBetween( date, _portfolioByDate.earliestDate );
			var daysToLatestDate = DatesService.returnNumberOfDaysBetween( date, _portfolioByDate.latestDate );

			// Is it the earliest or latest day in our portfolio?
			var dateToCreateUpTo = _returnDateToCreateUpTo( date, daysToEarliestDate, daysToLatestDate );

			// If it's the earliest, we'll be building dates in our portfolio
			// from the chosen date, up to the earliest date.
			// If it's the latest, we'll build from the latest date, to the chosen date. 
			if (dateToCreateUpTo === date){
				// looping backwards from the chosen date
				// up to, but not including the latestDate.
				// First we get the newDate,
				// then we set the value of newDate in portfolio
				// as the value for the latestDate in our portfolio.
				for (var i = 0; i < daysToLatestDate; i++){
					var newDate = DatesService.returnDateDaysAgo( date, i );
					_portfolioByDate[newDate] = _portfolioByDate[_portfolioByDate.latestDate];
				};
			// So the daysToCreateUpTo will be the earliestDate.
			} else {
				// daysToEarliestDate has to be changed into a positive number
				daysToEarliestDate *= -1;
				// looping back from the day before earliestDate
				// up to and including the chosen date.
				for (var i = 1; i <= daysToEarliestDate; i++){
					// getting the new date to set as a key in the porfolio folder
					var newDate = DatesService.returnDateDaysAgo( _portfolioByDate.earliestDate, i );
					// Can't just cop from the earliestDate because you can't transfer stock back in time.
					_portfolioByDate[newDate] = {};
					// However the cashAvailable is transferrable backwards
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

		// This gets called once all the initial setup has been done
		// It will check out whether the chosen stock's symbol is already present on a day
		// If it is, it'll add the purchase quantity onto what's already there. 
		// If not it'll set up a new object for that stock which holds the quantity.
		// It'll reduce the cashAvailable for that day either way.
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

		// This the mother method for buying stock.
		UserService.buyStock = function( date, price, quantity, symbol ){
			// First it figures out whether the chosen date is already in our portfolio.
			// If it is, it figures out whether we have enough money to buy the stock,
			// and if so, it processes the purchase.
			if(_portfolioByDate[date]){
				if( _enoughMoneyToBuy( price, quantity, _portfolioByDate[date].cashAvailable ) ){
					_processPurchase( date, price, quantity, symbol);
				};
			// The chose date isn't in the portfolio... yet
			} else {
				// earliestDate exists?
				// There's stuff inside the portfolio.
				// Let's build out days up to our chosenDate and connect it all up.
				if( _portfolioByDate.earliestDate ){
					_createDatesUpToDate( date );
					// !!!!!!!!!!!!!!!!!!!!!!!!!!//
				// earliestDate doesn't exist
				// First entry!
				} else {
					// If we can afford it,
					// we'll do an initial setup (set earliestDate)
					// and then we'll process the purchase. 
					if( _enoughMoneyToBuy( price, quantity ) ){
						_initialSetup( date );
						_processPurchase( date, price, quantity, symbol);
					};
				};
			};
		};

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