"use strict";
app.factory('StocksService', ['$http', function($http){

	var _stocks = [];
	var stub = {};

	var _populateStocks = function(){
		return $http({
			url: 'AAPL.json',
			method: "GET"
		})
		.then(function(response){
			return angular.copy(response.results.quote, _stocks);
		});
	};

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