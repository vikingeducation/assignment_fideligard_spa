StockPortfolioSimulator.factory('TransactionsService', [function(){

	// -------------------------------
	// Private
	// -------------------------------

	var _transactionProperties = { 
		transactionQuantity: 0,
		buyOrSell: 'buy',
		quantityAvailableToSell: 0 
	};

	// -------------------------------
	// Public
	// -------------------------------

	var TransactionsService = {};

	TransactionsService.getTransactionProperties = function(){
		return _transactionProperties;
	};

	// This isn't getting used anywhere right now but I'm sure it'd
	// come in handy somehwere
	TransactionsService.resetTransactionProperties = function( date, symbol ){
		_transactionProperties.buyOrSell = 'buy';
		_transactionProperties.transactionQuantity = 0;
		_transactionProperties.quantityAvailableToSell = _returnQuantityAvailableToSell( date, symbol );
	};

	TransactionsService.setQuantityAvailableToSell = function( value ){
		_transactionProperties.quantityAvailableToSell = value;
	};

	return TransactionsService;

}]);