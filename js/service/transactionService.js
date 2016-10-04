StockSimulator.factory('transactionService', function () {
	// private
	var _transactions = [];
	var _userStocks = {};
	var _userCash = 1000000;

	var _updateUserStocks = function (params) {
		if (params.type === "buy") {
			_userCash -= params.quantity * params.price;
			if (_userStocks[params.symbol] === undefined) {
				_userStocks[params.symbol] = {
					quantity: 0,
					stockId: params.stockId,
					costBasis: 0
				};
			}
			_userStocks[params.symbol].quantity += params.quantity;
			_userStocks[params.symbol].costBasis += params.quantity * params.price
		} else {
			_userCash += params.quantity * params.price;
			_userStocks[params.symbol].quantity -= params.quantity;
			_userStocks[params.symbol].costBasis -= params.quantity * params.price
		}
	};

	// public
	var transactionService = {};

	transactionService.create = function (params) {
		_transactions.push(params);
		_updateUserStocks(params);
		console.log(_transactions);
	};

	transactionService.getTransactions = function () {
		return _transactions;
	};

	transactionService.getUserStocks = function () {
		return _userStocks;
	};

	transactionService.getCash = function () {
		return _userCash;
	};

	return transactionService;
});
