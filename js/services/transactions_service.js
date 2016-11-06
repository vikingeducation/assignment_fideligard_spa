StockPortfolioSimulator.factory('TransactionsService', [function(){

	// -------------------------------
	// Private
	// -------------------------------

	var _transactionProperties = {
		buyOrSell: 'buy',
		transactionQuantity: 0
	};

	// -------------------------------
	// Public
	// -------------------------------

	var TransactionsService = {};

	TransactionsService.getTransactionProperties = function(){
		return _transactionProperties;
	};

	// This is used in the stocks_controller
	// to reset transaction inputs everytime user clicks
	// on the trade button
	TransactionsService.resetTransactionProperties = function( date, symbol ){
		_transactionProperties.buyOrSell = 'buy';
		_transactionProperties.transactionQuantity = 0;
	};

	return TransactionsService;

}]);