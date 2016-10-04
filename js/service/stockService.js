StockSimulator.factory('stockService', ['$http', function ($http) {
	// private
	Date.prototype.toISO = function () {
		var year = this.getFullYear();
		var month = this.getMonth() < 9 ? ("0" + (this.getMonth() + 1)) : (this.getMonth() + 1);
		var day = this.getDate() < 10 ? ("0" + this.getDate()) : this.getDate();
		return year + '-' + month + '-' + day;
	};

	var _stocks = {};
	var _symbols = "'AAPL', 'GOOG', 'AMD', 'PG', 'BAC', 'CHK', 'DB', 'COTY', 'QCOM', 'GE', 'CSCO', 'F'";

	// public
	var stockService = {};

	var getStocks = function (date_value, stockSymbols) {
		var startDate = new Date('2014/01/01')
		var start = new Date(startDate.setDate(startDate.getDate() + date_value - 1));
		var end = new Date(startDate.setDate(startDate.getDate() + 1));

		return $http({
			url: "http://query.yahooapis.com/v1/public/yql?q= select * from yahoo.finance.historicaldata where symbol in (" + stockSymbols + ") and startDate = \"" + start.toISO() + "\" and endDate = \"" + end.toISO() + "\" &format=json &diagnostics=true &env=store://datatables.org/alltableswithkeys &callback=",
			method: 'get'
		}).then(
			function success(response) {
				if (response.data.query.results) {
					var data = response.data.query.results.quote;
					return _.filter(data, function (list) {
						var dateTime = new Date(list.Date);
						var startDate = new Date('2014/01/01');
						var difference = Math.floor((dateTime - startDate) / (1000 * 60 * 60 * 24));
						return difference === date_value;
					});
				};
			}
		);
	};

	stockService.retriveStocks = function () {
		return _stocks.results;
	};

	var _getRawData = function (date_value) {
		return getStocks(date_value, _symbols)
			.then(
				function (stocks) {
					if (stocks) {
						for (var i = 0; i < stocks.length; i++) {
							stocks[i].id = i;
						};
					}
					_stocks.results = stocks;
					return stocks;
				}
			);
	};

	var _extendDaysAgo = function (date_value, days_ago, label) {
		return getStocks(date_value - days_ago, _symbols).then(
			function (stocks) {
				for (var i = 0; i < _stocks.results.length; i++) {
					if (stocks) {
						_stocks.results[i][label] = _stocks.results[i].Close - stocks[i].Close;
					} else {
						_stocks.results[i][label] = "0";
					};
					// _stocks.results[i][label] = stocks ? _stocks.results[i].Close - stocks[i].Close : "0";
				};
			}
		)
	};

	stockService.updateStocks = function (date_value) {
		return _getRawData(date_value)
			.then(
				function (stocks) {
					if (stocks) {
						_extendDaysAgo(date_value, 1, 'oneDifference')
							.then(
								function () {
									_extendDaysAgo(date_value, 7, 'sevenDifference');
								}
							)
							.then(
								function () {
									_extendDaysAgo(date_value, 30, 'thirtyDifference');
								}
							);
					}
				}
			)
	};

	stockService.findStock = function (id) {
		if (_stocks.results) {
			for (var i = 0; i < _stocks.results.length; i++) {
				if (_stocks.results[i].id === Number(id)) {
					return _stocks.results[i];
					break
				};
			};
		}
	};

	return stockService;
}]);
