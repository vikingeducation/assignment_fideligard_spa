"use strict";
app.factory('accountService', function(){
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

	stub.checkValidBuy = function(amount){
		return amount <= _account.cash;
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
			symbol: formData.symbol,
			quantity: formData.quantity,
			type: "SELL",
			price: formData.price
		};
		_transactions.push(newTransaction);
		//console.log("Transactions: ", _transactions);
		//adjust porfolio
		_portfolio[formData.symbol].quantity -= formData.quantity;
		_portfolio[formData.symbol].moneyEarned += formData.quantity * formData.price;
		//console.log("Portfolio: ", _portfolio);
	};

	stub.makeBuy = function(symbol, quantity, price){
		//substract from balance
		stub.makeTransaction(quantity*price);
		//add to transactions
		var newTransaction = {
			symbol: symbol,
			quantity: quantity,
			type: "BUY",
			price: price
		};
		_transactions.push(newTransaction);
		//console.log("Transactions: ", _transactions);
		//add to portfolio
		if(_portfolio[symbol]){
			_portfolio[symbol].quantity += quantity;
			_portfolio[symbol].moneySpent += (quantity*price);
		}
		else{
			_portfolio[symbol] = {
				quantity: quantity,
				moneySpent: quantity*price,
				moneyEarned: 0
			};
		}
		//console.log("Portfolio: ", _portfolio);
	};

	return stub;
});