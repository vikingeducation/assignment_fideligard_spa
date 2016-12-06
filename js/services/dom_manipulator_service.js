StockPortfolioSimulator.factory('DomManipulatorService', 
	[function(){

	// -------------------
	// Private
	// -------------------

	// -------------------
	// Public
	// -------------------

	var DomManipulatorService = {};

	DomManipulatorService.changeGlyphiconFromBottomToTop = function( id ){
		$( id ).addClass("glyphicon-triangle-top");
		$( id ).removeClass("glyphicon-triangle-bottom");
	};

	DomManipulatorService.changeGlyphiconFromTopToBottom = function( id ){
		$( id ).addClass("glyphicon-triangle-bottom");
		$( id ).removeClass("glyphicon-triangle-top");
	};

	DomManipulatorService.slideBodyContainer = function( glyphiconId, containerId ){
		if ( $( containerId ).is( ":hidden" ) ) {
			DomManipulatorService.changeGlyphiconFromBottomToTop( glyphiconId );

			$( containerId ).slideDown( 1500 );
		} else {
			DomManipulatorService.changeGlyphiconFromTopToBottom( glyphiconId );

			$( containerId ).slideUp( 1500 );
		};
	};

	DomManipulatorService.slideContainersOnceRequestIsSuccessful = function( getStocksGlyphiconId, getStocksBodyId, stocksGlyphiconId, stocksBodyId ){
		DomManipulatorService.slideBodyContainer( getStocksGlyphiconId, getStocksBodyId );

		if($( stocksBodyId ).is(":hidden")){
			DomManipulatorService.slideBodyContainer( stocksGlyphiconId, stocksBodyId);
		};
	};

	return DomManipulatorService;

}]);