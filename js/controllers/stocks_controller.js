StockPortfolioSimulator.controller('StocksController', 
	['$scope', 'StocksService', '_',
	function($scope, StocksService, _){

	StocksService.getAllNamesAndSymbols()
		.then(function(request){
			$scope.namesAndSymbols = request;
		})

	// ---------------------------
	// Functions
	// ---------------------------

	$scope.chooseAllSymbols = function(){
		StocksService.chooseAllSymbols();
	};

	$scope.clearChosenSymbols = function(){
		StocksService.clearChosenSymbols();
	};

	$scope.request = function(){
		StocksService.request()
			.then(function(request){
				$scope.results = request;

				$scope.stockDetailsByDate = StocksService.stockDetailsByDate();

				$scope.dates = Object.keys($scope.stockDetailsByDate);

				$scope.rangeMax = $scope.dates.length -1;
			});
	};

	// ---------------------------
	// Variables
	// ---------------------------

	$scope.rangeValue = 0;

	$scope.searchText = "";

	$scope.notAvailableString = "N/A";

}]);