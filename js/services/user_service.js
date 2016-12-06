StockPortfolioSimulator.factory('UserService', 
  [function(){

  	// ----------------------
		// Private
		// ----------------------

		var _startingAmount = 1000;

		// ----------------------
		// Public
		// ----------------------

		var UserService = {};

		UserService.returnStartingAmount = function(){
			return _startingAmount;
		};

		return UserService;

  }]
);