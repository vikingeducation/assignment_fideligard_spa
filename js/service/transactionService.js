StockSimulator.factory('transactionService', function () {
	// private
	var _transactions = [];
	var _userStocks = {};
	var _userCash = 1000000;

	var _updateUserStocks = function (params) {
		if (params.type === "buy") {
			_userCash -= params.quantity * params.price;
			if (_userStocks[params.symbol] === undefined) {
				_userStocks[params.symbol] = 0;
			}
			_userStocks[params.symbol] += params.quantity;
		} else {
			_userCash += params.quantity * params.price;
			_userStocks[params.symbol] -= params.quantity;
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
