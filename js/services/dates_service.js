StockPortfolioSimulator.factory('DatesService', [function(){

	// -----------------
	// Private
	// -----------------

	// -----------------
	// Public
	// -----------------

	var DatesServices = {};

	DatesService.returnDateDaysAgo = function( currentDate, daysAgo ){
		return moment(currentDate).subtract(daysAgo, "days").format("YYYY-MM-DD")
	};

	return DatesService;

}]);