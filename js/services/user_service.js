StockPortfolioSimulator.factory('UserService', 
	[function(){

		// ----------------------
		// Private
		// ----------------------

		var _cashAvailable = 1000000000;

		var _portfolioByDate = { "2014-01-02": {
																						"FLWS": {quantity: 45}
																					} 
													 };

		// ----------------------
		// Public
		// ----------------------

		var UserService = {};

		UserService.returnCashAvailable = function(){
			return _cashAvailable;;
		};

		UserService.returnQuantityUserOwns = function( date, symbol ){
			if (_portfolioByDate[date] && _portfolioByDate[date][symbol]){
				return _portfolioByDate[date][symbol].quantity;
			} else {
				return 0;
			};
		};

		return UserService;

}]);