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

				// currently this isn't running when there's no results!
				// So I can set it so that the retrieve stock box slides up accordingly
				$scope.slideBodyContainer('#hide-show-get-stocks-body-container', '#get-stocks-body-container');

				if($('#stocks-body-container').is(":hidden")){
					$scope.slideBodyContainer('#hide-show-stocks-body-container', '#stocks-body-container');
				};

				$scope.stockDetailsByDate = StocksService.stockDetailsByDate();

				$scope.dates = Object.keys($scope.stockDetailsByDate);

				$scope.rangeMax = $scope.dates.length -1;
			});
	};

	$scope.slideBodyContainer = function(clickedElement, id){
		if ( $( id ).is( ":hidden" ) ) {
			$(clickedElement).addClass("glyphicon-triangle-top");
			$(clickedElement).removeClass("glyphicon-triangle-bottom");

			$(id).slideDown( 1500 );
		} else {
			$(clickedElement).addClass("glyphicon-triangle-bottom");
			$(clickedElement).removeClass("glyphicon-triangle-top");

			$(id).slideUp(1500);
		};
	};

	// ---------------------------
	// Variables
	// ---------------------------

	$scope.rangeValue = 0;

	$scope.searchText = "";

	$scope.notAvailableString = "N/A";

}]);