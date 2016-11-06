StockPortfolioSimulator.controller('StocksController', 
	['$scope', 'DomManipulatorService', 'StocksService', 'TransactionsService', 'UserService', '_',
	function($scope, DomManipulatorService, StocksService, TransactionsService, UserService, _){

	// ---------------------------
	// On Load
	// ---------------------------

	StocksService.getAllNamesAndSymbols()
		.then(function(request){
			$scope.namesAndSymbols = request;
		})

	// ---------------------------
	// Functions
	// ---------------------------

	// ---------------------------
	// Private
	// ---------------------------

	// ---------------------------
	// Public
	// ---------------------------

	$scope.chooseAllSymbols = function(){
		StocksService.chooseAllSymbols();
	};

	$scope.clearChosenSymbols = function(){
		StocksService.clearChosenSymbols();
	};

	$scope.request = function( getStocksGlyphiconId, getStocksBodyId, stocksGlyphiconId, stocksBodyId ){
		StocksService.request( $scope.startDate, $scope.endDate )
			.then(function(request){

				DomManipulatorService.slideContainersOnceRequestIsSuccessful( getStocksGlyphiconId, getStocksBodyId, stocksGlyphiconId, stocksBodyId );

				$scope.stockDetailsByDate = StocksService.stockDetailsByDate( $scope.startDate, $scope.endDate );

				$scope.dates = Object.keys($scope.stockDetailsByDate).sort();

				$scope.rangeMax = $scope.dates.length - 1;

				$scope.rangeValue = 0;

			});
	};

	$scope.reverseSearchResults = function( id ){
		if ($scope.reverse){
			DomManipulatorService.changeGlyphiconFromTopToBottom( id );

			$scope.reverse = false;
		} else {
			DomManipulatorService.changeGlyphiconFromBottomToTop( id );

			$scope.reverse = true;
		};
	};

	$scope.setChosenStock = function( date, stock ){
		StocksService.setChosenStock( date, stock );
		UserService.createDatesUpToDate( date );
		TransactionsService.resetTransactionProperties( date, stock.symbol );
	};

	$scope.slideBodyContainer = function( glyphiconId, containerId ){
		DomManipulatorService.slideBodyContainer( glyphiconId, containerId );
	};

	// ---------------------------
	// Variables
	// ---------------------------

	$scope.filterText;

	$scope.searchText;

	$scope.reverse = false;

	$scope.notAvailableString = "N/A";

	// Unfortunately we have to set the date here and in the script to set date for datepicker for now.
  // Will look into when I have more time.
	$scope.startDate = "2014-01-01";
	$scope.endDate = "2014-12-31";

}]);