StockPortfolioSimulator.controller('StocksController', 
	['$scope', 'DatesService', 'DomManipulatorService', 'PortfolioService', 'StocksService', 'TransactionsService', '_',
	function($scope, DatesService, DomManipulatorService, PortfolioService, StocksService, TransactionsService, _){

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

	$scope.datesObject = DatesService.returnDatesObject();
	$scope.datePickerEndDate = "2014-12-31";
	$scope.datePickerStartDate = "2014-01-01";
	$scope.filterText;
	$scope.searchText;
	$scope.reverse = false;
	$scope.notAvailableString = "N/A";

	$scope.chooseAllSymbols = function(){
		StocksService.chooseAllSymbols();
	};

	$scope.clearChosenSymbols = function(){
		StocksService.clearChosenSymbols();
	};

	$scope.request = function( getStocksGlyphiconId, getStocksBodyId, stocksGlyphiconId, stocksBodyId ){
		StocksService.request( $scope.datePickerStartDate, $scope.datePickerEndDate )
			.then(function(request){

				DomManipulatorService.slideContainersOnceRequestIsSuccessful( getStocksGlyphiconId, getStocksBodyId, stocksGlyphiconId, stocksBodyId );

				$scope.stockDetailsByDate = StocksService.stockDetailsByDate( $scope.datePickerStartDate, $scope.datePickerEndDate );

				DatesService.setDates( Object.keys($scope.stockDetailsByDate).sort() );

				$scope.rangeMax = $scope.datesObject.dates.length - 1;

				$scope.rangeValue = 0;

				$scope.setChosenDate();
				$scope.createDatesUpToDate();

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

	$scope.setChosenDate = function(){
		DatesService.setChosenDate( $scope.datesObject.dates[$scope.rangeValue] );
	};

	$scope.createDatesUpToDate = function( stock ){
		if (stock){
			PortfolioService.createDatesUpToDate( $scope.datesObject.chosenDate, stock.symbol );
		} else {
			PortfolioService.createDatesUpToDate( $scope.datesObject.chosenDate );
		};
	};

	$scope.setChosenStock = function( stock ){
		StocksService.setChosenStock( $scope.datesObject.chosenDate, stock );
		TransactionsService.resetTransactionProperties( $scope.datesObject.chosenDate, stock.symbol );
	};

	$scope.setEndDate = function(){
		DatesService.setEndDate( $scope.datesObject.endDate );
	};

	$scope.setStartDate = function(){
		DatesService.setStartDate( $scope.datesObject.startDate );
	};

	$scope.slideBodyContainer = function( glyphiconId, containerId ){
		DomManipulatorService.slideBodyContainer( glyphiconId, containerId );
	};

}]);