// So what's going on here?

// Pretty much the user's portfolio and functions to make it work.

StockPortfolioSimulator.factory('UserService', 
	['DatesService', function(DatesService){

		// ----------------------
		// Private
		// ----------------------

		var _initialCash = 1000;
		var _transactionProperties = { transactionQuantity: 0,
		buyOrSell: 'buy',
		quantityAvailableToSell: 0 };

		// There's a bit of a logic based on
		// earliestDate and latestDate being truthy
		var _portfolioByDate = { earliestDate: undefined,
														 latestDate: undefined };

		var _buildDatesWhenChosenDateIsAfterTheLatestDate = function( date, daysToLatestDate ){
			// looping backwards from the chosen date
			// up to, but not including the latestDate.
			// First we get the newDate,
			// then we set the value of newDate in portfolio
			// as the value for the latestDate in our portfolio.
			for (var i = 0; i < daysToLatestDate; i++){
				var newDate = DatesService.returnDateDaysAgo( date, i );
				_portfolioByDate[newDate] = _.cloneDeep( _portfolioByDate[_portfolioByDate.latestDate] );
			};
		};

		var _buildDatesWhenChosenDateIsBeforeTheEarliestDate = function( daysToEarliestDate ){
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

		var _adjustQuantitiesAfterPurchases = function( date, quantity, symbol ){
			var numberOfDaysToLatestDate = DatesService.returnNumberOfDaysBetween( date, _portfolioByDate.latestDate );
			if (numberOfDaysToLatestDate < 0){
				numberOfDaysToLatestDate *= -1;
			};

			for(var i = 0; i <= numberOfDaysToLatestDate; i++ ){
				var dateToAdjust = DatesService.returnDateDaysAfter( date, i );
				if( _portfolioByDate[dateToAdjust][symbol] ){
					_portfolioByDate[dateToAdjust][symbol].quantity += quantity;
				} else {
					_portfolioByDate[dateToAdjust][symbol] = { quantity: quantity };
				};
			};
		};

		// You'd have to reduce the quanties on the date and for all subsequent dates.
		// In the past 
		var _adjustQuantitiesAfterSale = function( date, quantity, symbol ){

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
		UserService.sellStock = function( quantityAvailableToSell, transactionQuantity ){
			// If we do
			// First we need to reduce the amount of stock we have on that day and all subsequent days... 
			// I'm also thinking we should have a amount of stock on day, and amount of stock available to sell...
			// But you know, it's not a crucial requirement right now so let's just work with what we have and move on from there...

			if ( UserService.enoughStockToSell( quantityAvailableToSell,
																					transactionQuantity ) ){
				// These methods haven't been written up yet.
				_adjustCashAvailableAfterSale();
				_adjustQuantitiesAfterSale();
			};
		};

		return UserService;

}]);