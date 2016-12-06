StockPortfolioSimulator.factory('TransactionsService', ['PortfolioService', function( PortfolioService ){

	// -------------------------------
	// Private
	// -------------------------------

	var _transactionProperties = {
		buyOrSell: 'buy',
		transactionQuantity: 0
	};

	var _transactions = [];

	// -------------------------------
	// Public
	// -------------------------------

	var TransactionsService = {};

	TransactionsService.addTransaction = function(date, price, quantity, symbol, transactionType){
		_transactions.push( { "date": date,
											"price": price,
											"quantity": quantity,
											"symbol": symbol,
											"transactionType": transactionType
										} );
	};

	TransactionsService.getTransactions = function(){
		return _transactions;
	};

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