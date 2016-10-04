StockPortfolioSimulator.factory('StocksService', 
	['$http', '_',
	function($http, _){

		// --------------
		// Private
		// --------------

		var _stocksQuery;

		// --------------
		// Public
		// --------------

		var StocksService = {};

		StocksService.request = function(){

			// Get JSON response object
			return $http({
				url: '../../data/yql.json',
				method: "GET"
			})
				.then(function(response) {
					_stocksQuery = _stocksQuery || _.reverse(response.data.query.results.quote);

					return _stocksQuery;
				});

		};

		return StocksService;

}])