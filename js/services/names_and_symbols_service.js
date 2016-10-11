StockPortfolioSimulator.factory('NamesAndSymbolsService', 
	['$http', '_',
	function( $http, _ ){

		// ----------------------
		// Private
		// ----------------------

		var _namesAndSymbols;

		// ----------------------
		// Public
		// ----------------------

		NamesAndSymbolsService = {};

		NamesAndSymbolsService.chooseAllSymbols = function(){
			_.each(_namesAndSymbols, function(stock){
				stock.Checked = true;
			});
		};

		NamesAndSymbolsService.clearChosenSymbols = function(){
			_.each(_namesAndSymbols, function(stock){
				stock.Checked = false;
			});
		};

		// To get the JSON list for all stock names and their symbols
		// 1. Get the CSV file from:
		// http://www.nasdaq.com/screening/companies-by-name.aspx?letter=0&exchange=nasdaq&render=download
		// 2. Convery the CSV file at:
		// http://www.convertcsv.com/csv-to-json.htm
		NamesAndSymbolsService.getAllNamesAndSymbols = function(){
			// Get JSON response object
			return $http({
				url: '../../data/company_list.json',
				method: "GET"
			})
				.then(function(response) {
					_namesAndSymbols = _namesAndSymbols || response.data;

					return _namesAndSymbols;
				});
		};

		NamesAndSymbolsService.returnSymbolsString = function(){
			var string = "";

			_.each(_namesAndSymbols, function(stock){
				if(stock.Checked){
					if(string.length){
						string += ",";
					};

					string += ("%22" + stock.Symbol + "%22");
				};
			});

			return string;
		};

		return NamesAndSymbolsService;

}]);