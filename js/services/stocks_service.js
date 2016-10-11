StockPortfolioSimulator.factory('StocksService', 
	['NamesAndSymbolsService', 'SearchAndResultsService',
	function(NamesAndSymbolsService, SearchAndResultsService){

		// --------------
		// Private
		// --------------

		var _chosenStock = {};

		// --------------
		// Public
		// --------------

		var StocksService = {};

		StocksService.chosenStock = function(){

		};

		StocksService.chooseAllSymbols = function(){
			NamesAndSymbolsService.chooseAllSymbols();
		};

		StocksService.clearChosenSymbols = function(){
			NamesAndSymbolsService.clearChosenSymbols();
		};


		StocksService.getAllNamesAndSymbols = function(){
			return NamesAndSymbolsService.getAllNamesAndSymbols();
		};

		StocksService.getChosenStock = function(){
			return _chosenStock;
		};

		StocksService.request = function( startDate, endDate ){

			var symbolsString = NamesAndSymbolsService.returnSymbolsString();

			return SearchAndResultsService.request( startDate, endDate, symbolsString );

		};

		StocksService.setChosenStock = function(date, stock){
			stock.date = date;
			angular.copy(stock, _chosenStock)
		};

		StocksService.stockDetailsByDate = function( startDate, endDate ){
			return SearchAndResultsService.stockDetailsByDate( startDate, endDate );
		};

		return StocksService;

}])