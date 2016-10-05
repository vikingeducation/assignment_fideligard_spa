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
		$scope.clearChosenSymbols();

		_.each($scope.namesAndSymbols, function(stock){
			$scope.chosenSymbols.push(stock.Symbol);
		});
	};

	$scope.clearChosenSymbols = function(){
		$scope.chosenSymbols = [];
	};

	// ---------------------------
	// Variables
	// ---------------------------

	$scope.rangeValue = 0;

	$scope.notAvailableString = "N/A";

	$scope.chosenSymbols = [];


}]);