StockPortfolioSimulator.factory('UserService', 
	[function(){

		// ----------------------
		// Private
		// ----------------------

		var _cashAvailable = 1000000000;

		// ----------------------
		// Public
		// ----------------------

		var UserService = {};

		UserService.returnCashAvailable = function(){
			return _cashAvailable;;
		};

		return UserService;

}]);