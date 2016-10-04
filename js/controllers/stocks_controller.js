StockPortfolioSimulator.controller('StocksController', 
	['$scope', 'StocksService', '_',
	function($scope, StocksService, _){

	StocksService.request()
		.then(function(request){
			$scope.results = request;

			$scope.rangeMax = $scope.results.length - 1;

			$scope.stockDetailsByDate = StocksService.stockDetailsByDate();
		});

	$scope.rangeValue = 0;

	$scope.notAvailableString = "N/A";

}]);