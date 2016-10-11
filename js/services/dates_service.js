StockPortfolioSimulator.factory('DatesService', 
	['moment', function( moment ){

	// -----------------
	// Private
	// -----------------

	// -----------------
	// Public
	// -----------------

	var DatesService = {};

	DatesService.returnDateDaysAgo = function( currentDate, daysAgo ){
		return moment(currentDate).subtract(daysAgo, "days").format("YYYY-MM-DD")
	};

	DatesService.returnNumberOfDaysBetween = function( endDate, startDate ){
		return moment( endDate ).diff(moment( startDate ), 'days' );
	};

	return DatesService;

}]);