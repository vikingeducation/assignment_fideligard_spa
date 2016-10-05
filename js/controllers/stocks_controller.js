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
		_.each($scope.namesAndSymbols, function(stock){
			stock.Checked = true;
		});
	};

	$scope.clearChosenSymbols = function(){
		_.each($scope.namesAndSymbols, function(stock){
			stock.Checked = false;
		});
	};

	// ---------------------------
	// Variables
	// ---------------------------

	$scope.rangeValue = 0;

	$scope.notAvailableString = "N/A";

}]);