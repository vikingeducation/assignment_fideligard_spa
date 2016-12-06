StockPortfolioSimulator.factory('DatesService', 
	['moment', function( moment ){

	// -----------------
	// Private
	// -----------------

	var _dates = { 
		chosenDate: "",
		dates: [],
	};

	// -----------------
	// Public
	// -----------------

	var DatesService = {};

	DatesService.dateIsBeforeOtherDate = function( date, otherDate ){
		return moment( otherDate ).diff(moment( date ), 'days' ) > 0 ;
	};

	DatesService.returnDateDaysAfter = function( currentDate, daysAfter ){
		return moment(currentDate).add(daysAfter, "days").format("YYYY-MM-DD");
	};

	DatesService.returnDateDaysAgo = function( currentDate, daysAgo ){
		return moment(currentDate).subtract(daysAgo, "days").format("YYYY-MM-DD")
	};

	DatesService.returnDatesObject = function(){
		return _dates;
	};

	// Going to covert this to a positive number here too.
	DatesService.returnNumberOfDaysBetween = function( endDate, startDate ){
		var days = moment( endDate ).diff(moment( startDate ), 'days' );
		if ( days < 0 ){
			days *= -1;
		};
		return days;
	};

	DatesService.setChosenDate = function( date ){
		_dates.chosenDate = date;
	};

	DatesService.setDates = function( dates ){
		_dates.dates = dates;
	};

	DatesService.setEndDate = function( date ){
		_dates.endDate = date;
	};

	DatesService.setStartDate = function( date ){
		_dates.startDate = date;
	};

	return DatesService;

}]);