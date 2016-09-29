"use strict";
app.factory('StocksService', ['$http', 'dateService', function($http, dateService){

	var _stocks = {};
	var stub = {};
  var _dates = {};

	var _populateStock = function(){
		return $http({
			url: 'AAPL.json',
			method: "GET"
		})
		.then(function(response){
			response.results.quote.forEach(function(stock) {
        _buildStockObject(stock);
        _buildDatesArr(stock);
      });
      return _stocks;
		});
	};

  _buildStockObject = function(stock) {
    if (_stock[stock.Symbol]) {
      _stocks[stock.Symbol][stock.date] = stock;
    } else {
      _stocks[stock.Symbol] = {};
      _stock[stock.Symbol][stock.date] = stock;
    }
  }

  _buildDatesArr = function(stock) {
    if (_dates[stock.Symbol]) {
      _dates[stock.Symbol].push(stock.date);
    } else {
      _dates[stock.Symbol] = [stock.date];
    }
  }

  var _sevenDayAverage = function() {

  }

  var stub.thirtyDayAverage = function(symbol) {
    var dates = Object.keys(_stocks[symbol]);
    return dates;
  }

  var stub.currentPrice = function(symbol) {
    return _stocks[symbol][dateService.getDate().date].close
  }

	stub.all = function(){
		if(_stocks.length){
			return _stocks;
		}
		else{
			return _populateStocks();
		}
	};

	return stub;
}]);
