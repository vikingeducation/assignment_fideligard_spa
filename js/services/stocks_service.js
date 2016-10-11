StockPortfolioSimulator.factory('StocksService', 
	['NamesAndSymbolsService', 'SearchAndResultsService',
	function(NamesAndSymbolsService, SearchAndResultsService){

		// --------------
		// Private
		// --------------

		// --------------
		// Public
		// --------------

		var StocksService = {};

		StocksService.chooseAllSymbols = function(){
			NamesAndSymbolsService.chooseAllSymbols();
		};

		StocksService.clearChosenSymbols = function(){
			NamesAndSymbolsService.clearChosenSymbols();
		};


		StocksService.getAllNamesAndSymbols = function(){
			return NamesAndSymbolsService.getAllNamesAndSymbols();
		};

		StocksService.request = function( startDate, endDate ){

			var symbolsString = NamesAndSymbolsService.returnSymbolsString();

			return SearchAndResultsService.request( startDate, endDate, symbolsString );

		};

		StocksService.returnStockById = function( id ){
			return SearchAndResultsService.returnStockById( id );
		};

		StocksService.stockDetailsByDate = function( startDate, endDate ){
			return SearchAndResultsService.stockDetailsByDate( startDate, endDate );
		};

		return StocksService;

}])