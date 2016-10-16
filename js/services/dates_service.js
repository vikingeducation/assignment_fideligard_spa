StockPortfolioSimulator.factory('DatesService', 
	['moment', function( moment ){

	// -----------------
	// Private
	// -----------------

	// -----------------
	// Public
	// -----------------

	var DatesService = {};

	DatesService.returnDateDaysAfter = function( currentDate, daysAfter ){
		return moment(currentDate).add(daysAfter, "days").format("YYYY-MM-DD");
	};

	DatesService.returnDateDaysAgo = function( currentDate, daysAgo ){
		return moment(currentDate).subtract(daysAgo, "days").format("YYYY-MM-DD")
	};

	// Going to covert this to a positive number here too.
	DatesService.returnNumberOfDaysBetween = function( endDate, startDate ){
		var days = moment( endDate ).diff(moment( startDate ), 'days' );
		if ( days < 0 ){
			days *= -1;
		};
		return days;
	};

	return DatesService;

}]);