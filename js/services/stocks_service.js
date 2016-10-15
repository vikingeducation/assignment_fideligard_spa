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
			_chosenStock.date = date;
			_chosenStock.symbol = stock.symbol;
			_chosenStock.priceOnDate = stock.priceOnDate;
		};

		StocksService.stockDetailsByDate = function( startDate, endDate ){
			return SearchAndResultsService.stockDetailsByDate( startDate, endDate );
		};

		return StocksService;

}])