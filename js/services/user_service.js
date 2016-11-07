// So what's going on here?
// Most of it is as it reads. 
// One thing I should explain is the UNACCOUNTED STOCK VALUE idea.
// Unaccounted stock values are just values net purchases made on a day.
// It's what's being used here to figure out available stock going backwards.
// e.g. 1/1/16, unaccounted stock value = 10. 
// If there was a sale made on the 2/1/16 of 20 stock,
// it would reduce the stock available on the 2/1/16 by 20
// then it would get to the 1/1/16, reduce the quantity available by 20 also
// then it would see that there's an unaccounted stock value of 10, 
// minus that by 20, which would leave -10.
// A minus value means that the stock sold was from a previous date so keep going.
// but this time reduce the quantity available of all previous stock by 10 and so on.

// cashAvailable needs to 
// All I know is that it's not working properly right now.
// I don't think it's even connected to the _portfolioAndCashByDate

// Pretty much the user's portfolio and functions to make it work.

StockPortfolioSimulator.factory('UserService', 
	['DatesService', 'TransactionsService', function(DatesService, TransactionsService){

		// ----------------------
		// Private
		// ----------------------

		var _initialCash = 1000;

		// There's a bit of a logic based on
		// earliestDate and latestDate being truthy
		var _portfolioAndCashByDate = { 
			earliestDate: undefined,
			latestDate: undefined 
		};

		var _adjustQuantitiesAfterPurchases = function( date, quantity, symbol ){

			var numberOfDaysToLatestDate = DatesService.returnNumberOfDaysBetween( date, _portfolioAndCashByDate.latestDate );

			for(var i = 0; i <= numberOfDaysToLatestDate; i++ ){
				var dateToAdjust = DatesService.returnDateDaysAfter( date, i );
				if( _portfolioAndCashByDate[dateToAdjust][symbol] ){
					_portfolioAndCashByDate[dateToAdjust][symbol].quantityAtDate += quantity;
					_portfolioAndCashByDate[dateToAdjust][symbol].quantityAvailableToSell += quantity;
				} else {
					_portfolioAndCashByDate[dateToAdjust][symbol] = { quantityAtDate: quantity, 
																														quantityAvailableToSell: quantity };
				};
			};

			_setUnaccountedStockValue( date, quantity, symbol );
		};

		var _adjustQuantitiesAfterSale = function( date, quantity, symbol ){
			var daysToLatestDate = DatesService.returnNumberOfDaysBetween( _portfolioAndCashByDate.latestDate, date );

			var daysToEarliestDate = DatesService.returnNumberOfDaysBetween( date, _portfolioAndCashByDate.earliestDate );
			// reduce the quantity available for sale from the date given onwards
			_reduceQuantitiesForDatesAfterSale( date, daysToLatestDate, quantity, symbol );
			_reduceQuantitiesForDatesOnOrBeforeSale( date, daysToEarliestDate, quantity, symbol );

		};

		var _buildDatesWhenChosenDateIsAfterTheLatestDate = function( date, daysToLatestDate ){
			// looping backwards from the chosen date
			// up to, but not including the latestDate.
			// First we get the newDate,
			// then we set the value of newDate in portfolio
			// as the value for the latestDate in our portfolio.
			for (var i = 0; i < daysToLatestDate; i++){
				var newDate = DatesService.returnDateDaysAgo( date, i );
				_portfolioAndCashByDate[newDate] = _.cloneDeep( _portfolioAndCashByDate[_portfolioAndCashByDate.latestDate] );
				_resetUnaccountedStockValueForAllSymbolsOnADate( newDate );
			};
		};

		var _buildDatesWhenChosenDateIsBeforeTheEarliestDate = function( daysToEarliestDate ){
			// looping back from the day before earliestDate
			// up to and including the chosen date.
			for (var i = 1; i <= daysToEarliestDate; i++){
				// getting the new date to set as a key in the porfolio folder
				var newDate = DatesService.returnDateDaysAgo( _portfolioAndCashByDate.earliestDate, i );
				// Can't just cop from the earliestDate because you can't transfer stock back in time.
				_portfolioAndCashByDate[newDate] = {};
				// However the cashAvailable is transferrable backwards
				_portfolioAndCashByDate[newDate][cashAvailable] =  _portfolioAndCashByDate[_portfolioAndCashByDate.earliestDate].cashAvailable;
			};
		};

		var _initialSetup = function( date ){
			_portfolioAndCashByDate.earliestDate = date;
			_portfolioAndCashByDate.latestDate = date;
			_portfolioAndCashByDate[date] = { cashAvailable: _initialCash };
		};

		var _portfolioDateExists = function( date ){
			return !!_portfolioAndCashByDate[date];
		};

		var _portfolioDateHasStockSymbol = function( date, symbol ){
			return _portfolioHasContent() && !!_portfolioAndCashByDate[date][symbol];
		};

		var _portfolioHasContent = function(){
			return !!_portfolioAndCashByDate.earliestDate;
		};

		// This gets called once all the initial setup has been done
		// It will check out whether the chosen stock's symbol is already present on a day
		// If it is, it'll add the purchase quantity onto what's already there. 
		// If not it'll set up a new object for that stock which holds the quantity.
		// It'll reduce the cashAvailable for that day either way.
		var _processPurchase = function(date, price, quantity, symbol){
			quantity = Number(quantity);
			_adjustQuantitiesAfterPurchases( date, quantity, symbol );

			_portfolioAndCashByDate[date].cashAvailable -= (price * quantity);
		};

		var _processSale = function(date, price, quantity, symbol){
			quantiy = Number(quantity);

			// These methods haven't been written up yet.
			// _adjustCashAvailableAfterSale();
			_adjustQuantitiesAfterSale( date, quantity, symbol );

			_portfolioAndCashByDate[date].cashAvailable += ( price * quantity );
		};

		var _reduceQuantitiesForDatesAfterSale = function( date, daysToLatestDate, quantity, symbol ){
			for (var i = 1; i <= daysToLatestDate; i++){
				var d = DatesService.returnDateDaysAfter( date, i );
				_portfolioAndCashByDate[d][symbol].quantityAvailableToSell -= quantity;
				_portfolioAndCashByDate[d][symbol].quantityAtDate -= quantity;
			};
		};

		// then reduce the unnaccountedStock value by the quantity
		// and if it goes to a negative number
		// set the unaccountedStock value to zero
		// and then start going backwards and reducing the cash available for that date
		// and if they have an unaccounted stock value for that day, reduce from that and repeat on until quantity is zero. 
		var _reduceQuantitiesForDatesOnOrBeforeSale = function( date, daysToEarliestDate, quantity, symbol ){
			var q = quantity;
			for (var i = 0; i <= daysToEarliestDate; i++){
				var d = DatesService.returnDateDaysAgo( date, i );
				if ( _portfolioAndCashByDate[d][symbol] ){
					_portfolioAndCashByDate[d][symbol].quantityAvailableToSell -= q;
					if ( i === 0 ){
						_portfolioAndCashByDate[d][symbol].quantityAtDate -= q;
					};
					// If there's an unaccounted stock value for this date and symbol
					if ( _portfolioAndCashByDate[d][symbol].unaccountedStock ){
						// Reduce the unaccountedStock value for thie date.
						_portfolioAndCashByDate[d][symbol].unaccountedStock -= q;

						// If the unaccountedStock value becomes a negative we keep going.
						if ( _portfolioAndCashByDate[d][symbol].unaccountedStock < 0 ){
							q = _portfolioAndCashByDate[d][symbol].unaccountedStock * -1;
							_portfolioAndCashByDate[d][symbol].unaccountedStock = 0;
						} else {
							return false;
						};
					};
				};
			};
		};

		var _resetUnaccountedStockValueForAllSymbolsOnADate = function( date ){
			var symbols = Object.keys( _portfolioAndCashByDate[date] );
			_.each( symbols, function( symbol ){
				_portfolioAndCashByDate[date][symbol].unaccountedStock = 0;
			} );
		};

		var _returnDateToCreateUpTo = function( date, daysToEarliestDate ){
			if (daysToEarliestDate < 0){
				return _portfolioAndCashByDate.earliestDate;
			} else {
				return date;
			};
		};

		// unaccountedStockValue is needed to calculate available stock to sell numbers after making a sale
		var _setUnaccountedStockValue = function( date, quantity, symbol ){
			if ( _portfolioAndCashByDate[date][symbol].unaccountedStock ){
				_portfolioAndCashByDate[date][symbol].unaccountedStock += quantity;
			} else {
				_portfolioAndCashByDate[date][symbol].unaccountedStock = quantity;
			};
		};

		// ----------------------
		// Public
		// ----------------------

		var UserService = {};

		// This the mother method for buying stock.
    UserService.buyStock = function( date, price, quantity, symbol ){
      var cashAvailable = _portfolioAndCashByDate[date].cashAvailable;

      if( UserService.enoughMoneyToBuy( price, quantity, cashAvailable ) ){
        _processPurchase( date, price, quantity, symbol);
        console.log(_portfolioAndCashByDate[date][symbol].quantityAtDate);
      };
    };

    // This will get some use when a user picks a stock, on a 
		// date, to do a transaction on. 
		UserService.createDatesUpToDate = function( date, symbol ){
			// We're only going to run this
			// if there's previous transaction history
			// and the date doesn't exist
			if( _portfolioHasContent() ){
				if ( !_portfolioDateExists( date ) ){
					// What's closer to our chosen date?
					var daysToEarliestDate = DatesService.returnNumberOfDaysBetween( date, _portfolioAndCashByDate.earliestDate );
					var daysToLatestDate = DatesService.returnNumberOfDaysBetween( date, _portfolioAndCashByDate.latestDate );

					// Is it the earliest or latest day in our portfolio?
					var dateToCreateUpTo = _returnDateToCreateUpTo( date, daysToEarliestDate, daysToLatestDate );

					// If it's the earliest, we'll be building dates in our portfolio
					// from the chosen date, up to the earliest date.
					// If it's the latest, we'll build from the latest date, to the chosen date. 
					if (dateToCreateUpTo === date){
						_buildDatesWhenChosenDateIsAfterTheLatestDate( date, daysToLatestDate );
						_portfolioAndCashByDate.latestDate = date;
					// So the daysToCreateUpTo will be the earliestDate.
					} else {
						_buildDatesWhenChosenDateIsBeforeTheEarliestDate( daysToEarliestDate );
						_portfolioAndCashByDate.earliestDate = date;
					};
				};
			} else {
				_initialSetup( date );
			};

			if( !_portfolioAndCashByDate[date][symbol] ){
				_portfolioAndCashByDate[date][symbol] = { quantityAtDate: 0,
																									quantityAvailableToSell: 0 };
			};
		};

		UserService.enoughMoneyToBuy = function( price, quantity, cashAvailable ){
			return cashAvailable >= ( price * quantity );
		};

		UserService.enoughStockToSell = function( quantityAvailableToSell, transactionQuantity ){
			return quantityAvailableToSell >= transactionQuantity;
		};

		// It'll return the cashAvailable on the date chosen
		// Or if it doesn't exist, because the portfolio is empty
		// it'll return the initial amount.
		UserService.returnCashAvailable = function( date ){
			if( _portfolioDateExists( date ) ){
				return _portfolioAndCashByDate[date].cashAvailable;
			} else {
				return _initialCash;
			};
		};

		UserService.returnPortfolio = function(){
			return _portfolioAndCashByDate;
		};

		// # Reduce the number of stock on the date of sale and all future dates.
		// # Think about reducing the number of stock on previous days.
		// When this function is called we know the quantity will be greater than zero
		UserService.sellStock = function( date, price, quantityAvailableToSell, symbol, transactionQuantity ){
			// If we do
			// First we need to reduce the amount of stock we have on that day and all subsequent days... 
			// I'm also thinking we should have a amount of stock on day, and amount of stock available to sell...
			// But you know, it's not a crucial requirement right now so let's just work with what we have and move on from there...

			if ( UserService.enoughStockToSell( quantityAvailableToSell,
																					transactionQuantity ) ){
				_processSale( date, price, transactionQuantity, symbol );
			};
		};

		return UserService;

}]);