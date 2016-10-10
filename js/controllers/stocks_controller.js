StockPortfolioSimulator.controller('StocksController', 
	['$scope', 'StocksService', '_',
	function($scope, StocksService, _){

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

	var _changeGlyphiconFromTopToBottom = function( clickedElement ){
		$(clickedElement).addClass("glyphicon-triangle-bottom");
		$(clickedElement).removeClass("glyphicon-triangle-top");
	};

	var _changeGlyphiconFromBottomToTop = function( clickedElement ){
		$(clickedElement).addClass("glyphicon-triangle-top");
		$(clickedElement).removeClass("glyphicon-triangle-bottom");
	};

	// currently this isn't running when there's no results!
	// So I can set it so that the retrieve stock box slides up accordingly
	var _slideContainersOnceRequestIsSuccessful = function(){
		$scope.slideBodyContainer('#hide-show-get-stocks-body-container', '#get-stocks-body-container');

		if($('#stocks-body-container').is(":hidden")){
			$scope.slideBodyContainer('#hide-show-stocks-body-container', '#stocks-body-container');
		};
	};

	// ---------------------------
	// Public
	// ---------------------------

	$scope.chooseAllSymbols = function(){
		StocksService.chooseAllSymbols();
	};

	$scope.clearChosenSymbols = function(){
		StocksService.clearChosenSymbols();
	};

	$scope.request = function(){
		StocksService.request( $scope.startDate, $scope.endDate )
			.then(function(request){

				_slideContainersOnceRequestIsSuccessful();

				$scope.stockDetailsByDate = StocksService.stockDetailsByDate( $scope.startDate, $scope.endDate );

				$scope.dates = Object.keys($scope.stockDetailsByDate).sort();

				$scope.rangeMax = $scope.dates.length - 1;

				$scope.rangeValue = 0;

			});
	};

	$scope.reverseSearchResults = function( element ){
		if ($scope.reverse){
			_changeGlyphiconFromTopToBottom( element );

			$scope.reverse = false;
		} else {
			_changeGlyphiconFromBottomToTop( element );

			$scope.reverse = true;
		};
	};

	$scope.slideBodyContainer = function(clickedElement, id){
		if ( $( id ).is( ":hidden" ) ) {
			_changeGlyphiconFromBottomToTop( clickedElement );
			$(id).slideDown( 1500 );
		} else {
			_changeGlyphiconFromTopToBottom( clickedElement );
			$(id).slideUp(1500);
		};
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