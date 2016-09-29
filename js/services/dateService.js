"use strict";
app.factory('dateService', function(){
	var stub = {};

	var _date = {};

	stub.setDay = function(day) {
		_date.index = day;
    };

	stub.getDate = function(){
		return _date;
	};

	return stub;
});
