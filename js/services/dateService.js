"use strict";
app.factory('dateService', function(){
	var stub = {};

	var _date = {};

	stub.setDay = function(day) {
    var date = new Date(2014, 0);
    var updatedDate = new Date(date.setDate(day));
    angular.copy({date: updatedDate}, _date)
	};

	stub.setDate = function(date){
		_date.date = date;
	};

	stub.getDate = function(){
		return _date;
	};

	return stub;
});
