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
		var _portfolioByDate = { 
			earliestDate: undefined,
			latestDate: undefined 
		};

		var _transactionProperties = { 
			transactionQuantity: 0,
			buyOrSell: 'buy',
			quantityAvailableToSell: 0 
		};

		var _adjustQuantitiesAfterPurchases = function( date, quantity, symbol ){

			var numberOfDaysToLatestDate = DatesService.returnNumberOfDaysBetween( date, _portfolioByDate.latestDate );

			for(var i = 0; i <= numberOfDaysToLatestDate; i++ ){
				var dateToAdjust = DatesService.returnDateDaysAfter( date, i );
				if( _portfolioByDate[dateToAdjust][symbol] ){
					_portfolioByDate[dateToAdjust][symbol].quantity += quantity;
				} else {
					_portfolioByDate[dateToAdjust][symbol] = { quantity: quantity };
				};
			};

			_setUnaccountedStockValue( date, quantity, symbol );
		};

		var _adjustQuantitiesAfterSale = function( date, quantity, symbol ){
			var daysToLatestDate = DatesService.returnNumberOfDaysBetween( _portfolioByDate.latestDate, date );

			var daysToEarliestDate = DatesService.returnNumberOfDaysBetween( date, _portfolioByDate.earliestDate );
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
				_portfolioByDate[newDate] = _.cloneDeep( _portfolioByDate[_portfolioByDate.latestDate] );
				_resetUnaccountedStockValueForAllSymbolsOnADate( newDate );
			};
		};

		var _buildDatesWhenChosenDateIsBeforeTheEarliestDate = function( daysToEarliestDate ){
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

		var _initialSetup = function( date ){
			_portfolioByDate.earliestDate = date;
			_portfolioByDate.latestDate = date;
			_portfolioByDate[date] = { cashAvailable: _initialCash };
		};

		var _portfolioDateExists = function( date ){
			return !!_portfolioByDate[date];
		};

		var _portfolioDateHasStockSymbol = function( date, symbol ){
			return _portfolioHasContent() && !!_portfolioByDate[date][symbol];
		};

		var _portfolioHasContent = function(){
			return !!_portfolioByDate.earliestDate;
		};

		// This gets called once all the initial setup has been done
		// It will check out whether the chosen stock's symbol is already present on a day
		// If it is, it'll add the purchase quantity onto what's already there. 
		// If not it'll set up a new object for that stock which holds the quantity.
		// It'll reduce the cashAvailable for that day either way.
		var _processPurchase = function(date, price, quantity, symbol){
			quantity = Number(quantity);
			_adjustQuantitiesAfterPurchases( date, quantity, symbol );

			_transactionProperties.quantityAvailableToSell = _portfolioByDate[date][symbol].quantity;

			_portfolioByDate[date].cashAvailable -= (price * quantity);
		};

		var _processSale = function(date, price, quantity, symbol){
			quantiy = Number(quantity);

			// These methods haven't been written up yet.
			// _adjustCashAvailableAfterSale();
			_adjustQuantitiesAfterSale( date, quantity, symbol );

			_transactionProperties.quantityAvailableToSell = _portfolioByDate[date][symbol].quantity;

			_portfolioByDate[date].cashAvailable += ( price * quantity );
		};

		var _reduceQuantitiesForDatesAfterSale = function( date, daysToLatestDate, quantity, symbol ){
			for (var i = 1; i <= daysToLatestDate; i++){
				var d = DatesService.returnDateDaysAfter( date, i );
				_portfolioByDate[d][symbol].quantity -= quantity;
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
				if ( _portfolioByDate[d][symbol] ){
					_portfolioByDate[d][symbol].quantity -= q;
					// If there's an unaccounted stock value for this date and symbol
					if ( _portfolioByDate[d][symbol].unaccountedStock ){
						// Reduce the unaccountedStock value for thie date.
						_portfolioByDate[d][symbol].unaccountedStock -= q;

						// If the unaccountedStock value becomes a negative we keep going.
						if ( _portfolioByDate[d][symbol].unaccountedStock < 0 ){
							q = _portfolioByDate[d][symbol].unaccountedStock * -1;
							_portfolioByDate[d][symbol].unaccountedStock = 0;
						} else {
							return false;
						};
					};
				};
			};
		};

		var _resetUnaccountedStockValueForAllSymbolsOnADate = function( date ){
			var symbols = Object.keys( _portfolioByDate[date] );
			_.each( symbols, function( symbol ){
				_portfolioByDate[date][symbol].unaccountedStock = 0;
			} );
		};

		var _returnDateToCreateUpTo = function( date, daysToEarliestDate ){
			if (daysToEarliestDate < 0){
				return _portfolioByDate.earliestDate;
			} else {
				return date;
			};
		};

		var _returnQuantityAvailableToSell = function( date, symbol ){
			if ( _portfolioDateHasStockSymbol( date, symbol ) ){
				return _portfolioByDate[date][symbol].quantity;
			} else {
				return 0;
			};
		};

		// unaccountedStockValue is needed to calculate available stock to sell numbers after making a sale
		var _setUnaccountedStockValue = function( date, quantity, symbol ){
			if ( _portfolioByDate[date][symbol].unaccountedStock ){
				_portfolioByDate[date][symbol].unaccountedStock += quantity;
			} else {
				_portfolioByDate[date][symbol].unaccountedStock = quantity;
			};
		};

		// ----------------------
		// Public
		// ----------------------

		var UserService = {};

		// This the mother method for buying stock.
    UserService.buyStock = function( date, price, quantity, symbol ){
      var cashAvailable;

      // If there's nothing in the portfolio
      // the cashAvailable will be the initialCash
      // otherwise the cashAvailable will be in the portfolio's date key value
      if ( !_portfolioHasContent() ){
        cashAvailable = _initialCash;
      } else {
        cashAvailable = _portfolioByDate[date].cashAvailable;
      };

      // Now that we know what the cashAvailable is,
      // we can see if we have enough money to buy the stock.
      // If we can afford it,
      // first we do an initial set up if this is our first transaction,
      // then we process the purchase either way.
      if( UserService.enoughMoneyToBuy( price, quantity, cashAvailable ) ){
        if( !_portfolioHasContent() ){
          _initialSetup( date );
        };
        _processPurchase( date, price, quantity, symbol);
      };
    };

    // This will get some use when a user picks a stock, on a 
		// date, to do a transaction on. 
		UserService.createDatesUpToDate = function( date ){
			// We're only going to run this
			// if there's previous transaction history
			// and the date doesn't exist
			if( _portfolioHasContent() && !_portfolioDateExists( date ) ){

				// What's closer to our chosen date?
				var daysToEarliestDate = DatesService.returnNumberOfDaysBetween( date, _portfolioByDate.earliestDate );
				var daysToLatestDate = DatesService.returnNumberOfDaysBetween( date, _portfolioByDate.latestDate );

				// Is it the earliest or latest day in our portfolio?
				var dateToCreateUpTo = _returnDateToCreateUpTo( date, daysToEarliestDate, daysToLatestDate );

				// If it's the earliest, we'll be building dates in our portfolio
				// from the chosen date, up to the earliest date.
				// If it's the latest, we'll build from the latest date, to the chosen date. 
				if (dateToCreateUpTo === date){
					_buildDatesWhenChosenDateIsAfterTheLatestDate( date, daysToLatestDate );
					_portfolioByDate.latestDate = date;
				// So the daysToCreateUpTo will be the earliestDate.
				} else {
					_buildDatesWhenChosenDateIsBeforeTheEarliestDate( daysToEarliestDate );
					_portfolioByDate.earliestDate = date;
				};
			};
		};

		UserService.enoughMoneyToBuy = function( price, quantity, cashAvailable ){
			return cashAvailable >= ( price * quantity );
		};

		UserService.enoughStockToSell = function( quantityAvailableToSell, transactionQuantity ){
			return quantityAvailableToSell >= transactionQuantity;
		};

		UserService.getTransactionProperties = function(){
			return _transactionProperties;
		};

		// This isn't getting used anywhere right now but I'm sure it'd
		// come in handy somehwere
		UserService.resetTransactionProperties = function( date, symbol ){
			_transactionProperties.buyOrSell = 'buy';
			_transactionProperties.transactionQuantity = 0;
			_transactionProperties.quantityAvailableToSell = _returnQuantityAvailableToSell( date, symbol );
		};

		// It'll return the cashAvailable on the date chosen
		// Or if it doesn't exist, because the portfolio is empty
		// it'll return the initial amount.
		UserService.returnCashAvailable = function( date ){
			if( _portfolioDateExists( date ) ){
				return _portfolioByDate[date].cashAvailable;
			} else {
				return _initialCash;
			};
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