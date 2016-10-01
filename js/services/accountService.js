"use strict";
app.factory('accountService', [ function(){
	var stub = {};

	var _account = { cash: 100000 };

	var _transactions = [];

	var _portfolio = {};

	stub.makeTransaction = function(amount){
		 _account.cash -= amount;
	};

	stub.getBalance = function(){
		return _account;
	};

	stub.getTransactions = function(){
		return _transactions;
	};

	stub.checkValidBuy = function(formData){
		return  formData.price * formData.quantity <= _account.cash;
	};

	stub.checkValidSell = function(formData){
		//check if stock is owned and enough shares
		return _portfolio[formData.symbol] && formData.quantity <= _portfolio[formData.symbol].quantity;
	};

	stub.makeSell = function(formData){
		//add to balance
		stub.makeTransaction(-formData.quantity*formData.price);
		//add to transactions
		var newTransaction = {
			date: formData.date,
			symbol: formData.symbol,
			quantity: formData.quantity,
			type: "SELL",
			price: formData.price
		};
		_transactions.push(newTransaction);
		//console.log("Transactions: ", _transactions);
		//adjust porfolio
		// _portfolio[formData.symbol].quantity -= formData.quantity;
		// _portfolio[formData.symbol].moneyEarned += formData.quantity * formData.price;
		//console.log("Portfolio: ", _portfolio);
	};

	stub.makeBuy = function(formData){
		//substract from balance
		stub.makeTransaction(formData.quantity*formData.price);
		//add to transactions
		var newTransaction = {
			date: formData.date,
			symbol: formData.symbol,
			quantity: formData.quantity,
			type: "BUY",
			price: formData.price
		};
		_transactions.push(newTransaction);
		//console.log("Transactions: ", _transactions);
		//add to portfolio
		// if(_portfolio[formData.symbol]){
		// 	_portfolio[formData.symbol].quantity += formData.quantity;
		// 	_portfolio[formData.symbol].moneySpent += (formData.quantity*formData.price);
		// }
		// else{
		// 	_portfolio[formData.symbol] = {
		// 		quantity: formData.quantity,
		// 		moneySpent: formData.quantity*formData.price,
		// 		moneyEarned: 0
		// 	};
		// }
		//console.log("Portfolio: ", _portfolio);
	};

	stub.buildPortfolio = function(date, dateCollection){
		//filter transactions for those before the date
		var currentDate = dateCollection[date.index];
		var filteredTransactions = _transactions.filter(function(t){
			return t.date <= currentDate;
		});
		//build a portfolio from scratch using these transacations
		filteredTransactions.forEach(function(t){
			if(t.type == "BUY"){
				if(_portfolio[t.symbol]){
					_portfolio[t.symbol].quantity += t.quantity;
					_portfolio[t.symbol].moneySpent += t.quantity * t.price;
				}
				else{
					_portfolio[t.symbol] = {
						quantity: t.quantity,
						moneySpent: t.quantity * t.price,
						moneyEarned: 0
					};
				}
			}
			else{
				_portfolio[t.symbol].quantity -= t.quantity;
				_portfolio[t.symbol].moneyEarned += t.quantity * t.price;
			}
		});
	};

	stub.getPortfolio = function(){
		return _portfolio;
	};

	return stub;
}]);