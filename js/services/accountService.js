"use strict";
app.factory('accountService', ['StocksService', function(StocksService){
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
		//clear portolio
		angular.copy({}, _portfolio);
		//filter transactions for those before the date
		var currentDate = dateCollection[date.index];
		var filteredTransactions = _transactions.filter(function(t){
			return t.date <= currentDate;
		});
		filteredTransactions.sort(function(a,b){
			if(a.date < b.date){
				return -1;
			}
			else if(a.date > b.date){
				return 1;
			}
			else{
				return 0;
			}
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

	stub.getPortfolioStats = function(){
		var _stats = {
			costBasis: 0,
			currentValue: 0,
			profitLoss: 0,
			oneDay: 0,
			sevenDay: 0,
			thirtyDay: 0
		};
		//for each portfolio entry, calculate costBasis, currentValue, profitLoss, 1d,7d,30d and add the stats
		for (var p in _portfolio){
			var cp = StocksService.currentPrice(p);
			var cv = _portfolio[p].quantity * cp;
			_stats.currentValue += cv;
			var cb = _portfolio[p].moneySpent - _portfolio[p].moneyEarned;
			_stats.costBasis += cb;
			var pl = cv - cb;
			_stats.profitLoss += pl;
			var td = StocksService.priceChange(p, 30);
			_stats.thirtyDay += td;
			var sd = StocksService.priceChange(p, 7);
			_stats.sevenDay += sd;
			var od = StocksService.priceChange(p, 1);
			_stats.oneDay += od;
		}

		return _stats;
	};

	stub.getPortfolio = function(){
		return _portfolio;
	};

	return stub;
}]);