StockPortfolioSimulator.controller('StocksController', 
	['$scope', 'StocksService', '_',
	function($scope, StocksService, _){

	StocksService.getAllNamesAndSymbols()
		.then(function(request){
			$scope.namesAndSymbols = request;
		})

	StocksService.request()
		.then(function(request){
			$scope.results = request;

			$scope.rangeMax = $scope.results.length - 1;

			$scope.stockDetailsByDate = StocksService.stockDetailsByDate();
		});

	// ---------------------------
	// Functions
	// ---------------------------

	$scope.chooseAllSymbols = function(){
		StocksService.chooseAllSymbols();
	};

	$scope.clearChosenSymbols = function(){
		StocksService.clearChosenSymbols();
	};

	// ---------------------------
	// Variables
	// ---------------------------

	$scope.rangeValue = 0;

	$scope.notAvailableString = "N/A";

}]);