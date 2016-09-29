"use strict";
app.factory('StocksService', ['$http', 'dateService', '_', function($http, dateService, _){

	var _stocks = {};
	var stub = {};
  var _dates = {};

	var _populateStock = function(){
		return $http({
			url: 'AAPL.json',
			method: "GET"
		})
		.then(function(response){
			response.data.query.results.quote.forEach(function(stock) {
        _buildStockObject(stock);
        _buildDatesArr(stock);
      });
      return _stocks;
		});
	};

  var _buildStockObject = function(stock) {
    if (_stocks[stock.Symbol]) {
      _stocks[stock.Symbol][stock.Date] = stock;
    } else {
      _stocks[stock.Symbol] = {};
      _stocks[stock.Symbol][stock.Date] = stock;
    }
  };

  var _buildDatesArr = function(stock) {
    if (_dates[stock.Symbol]) {
      _dates[stock.Symbol].push(stock.Date);
    } else {
      _dates[stock.Symbol] = [stock.Date];
    }
  };

  stub.getDateArr = function(symbol){
    console.log(_dates);
    console.log(Object.keys(_dates));
    console.log(symbol);
    return _dates[symbol];
  };

  // var _sevenDayAverage = function() {

  // };

  // stub.thirtyDayAverage = function(symbol) {
  //   var dates = Object.keys(_stocks[symbol]);
  //   return dates;
  // };

  stub.currentPrice = function(symbol) {
    return _stocks[symbol][dateService.getDate().date].close;
  };

	stub.all = function(){
		if(!_.isEmpty(_stocks)){
			return _stocks;
		}
		else{
			return _populateStock();
		}
	};

	return stub;
}]);
