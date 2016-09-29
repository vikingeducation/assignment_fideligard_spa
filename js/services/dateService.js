"use strict";
app.factory('dateService', function(){
	var stub = {};

	var _date = {};

	stub.setDate = function(day) {
	    var date = new Date(2014, 0); // initialize a date in `year-01-01`
	    angular.copy({date: Date(date.setDate(day))}, _date);  // add the number of days
		};

	stub.getDate = function(){
		return _date.date;
	};

	return stub;
});